import React from 'react';

/**
 * ChunkErrorBoundary
 *
 * Every deploy renames the hashed route chunks, and the host only serves the
 * current build's files. A tab opened before a deploy still holds the old chunk
 * map, so its next lazy import 404s, the dynamic import rejects, and — with no
 * boundary — React unmounts the entire tree and the visitor gets a white screen.
 *
 * This catches that specific failure and reloads once to pick up the new build.
 * The sessionStorage flag stops a reload loop if the failure is not deploy-related.
 * Anything that is not a chunk-loading error is re-thrown to the normal error path.
 */
const RELOAD_FLAG = 'chunk-reload-attempted';

const isChunkLoadError = (error: Error) => {
  const msg = `${error?.name ?? ''} ${error?.message ?? ''}`;
  return (
    /dynamically imported module/i.test(msg) ||
    /Importing a module script failed/i.test(msg) ||
    /error loading dynamically imported module/i.test(msg) ||
    /Loading chunk \d+ failed/i.test(msg) ||
    /ChunkLoadError/i.test(msg)
  );
};

interface Props {
  children: React.ReactNode;
}
interface State {
  failed: boolean;
}

class ChunkErrorBoundary extends React.Component<Props, State> {
  state: State = { failed: false };

  static getDerivedStateFromError(): State {
    return { failed: true };
  }

  componentDidCatch(error: Error) {
    if (!isChunkLoadError(error)) throw error;

    let alreadyTried = false;
    try {
      alreadyTried = sessionStorage.getItem(RELOAD_FLAG) === '1';
      sessionStorage.setItem(RELOAD_FLAG, '1');
    } catch {
      // private mode / storage disabled — fall through to the manual message
    }

    if (!alreadyTried) window.location.reload();
  }

  private clearTimer?: ReturnType<typeof setTimeout>;

  componentDidMount() {
    // Do NOT clear the guard here: this boundary mounts before any lazy import
    // resolves, so clearing on mount would defeat the loop guard and a
    // permanently missing chunk would reload forever. Instead, wait — if we are
    // still alive after a few seconds, the app genuinely recovered, so re-arm
    // the guard for a future deploy.
    this.clearTimer = setTimeout(() => {
      try {
        sessionStorage.removeItem(RELOAD_FLAG);
      } catch {
        /* ignore */
      }
    }, 5000);
  }

  componentWillUnmount() {
    if (this.clearTimer) clearTimeout(this.clearTimer);
  }

  render() {
    if (this.state.failed) {
      // Only reached when the reload already happened and it still failed.
      return (
        <div className="min-h-screen flex items-center justify-center bg-white px-6 text-center">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 mb-3">This page needs a refresh</h1>
            <p className="text-slate-600 mb-6">
              The site was updated while this tab was open. Reload to get the latest version.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="rounded-full bg-primary px-8 py-3 font-bold text-slate-900"
            >
              Reload
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ChunkErrorBoundary;
