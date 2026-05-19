import React, { useState, useRef, useEffect } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  title?: string;
  description?: string;
  isSplit?: boolean;
}

const BeforeAfterSlider = ({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
  title,
  description,
  isSplit
}: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isResizing, setIsResizing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleMouseDown = () => setIsResizing(true);
  const handleMouseUp = () => setIsResizing(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isResizing) handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isResizing) handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsResizing(false);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    window.addEventListener('touchend', handleGlobalMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      window.removeEventListener('touchend', handleGlobalMouseUp);
    };
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto mb-16">
      {(title || description) && (
        <div className="mb-8 text-center">
          {title && <h3 className="text-2xl md:text-3xl font-bold mb-3">{title}</h3>}
          {description && <p className="text-slate-600 max-w-2xl mx-auto">{description}</p>}
        </div>
      )}
      
      <div 
        ref={containerRef}
        className="relative aspect-[4/3] md:aspect-[16/10] w-full overflow-hidden rounded-2xl shadow-2xl cursor-col-resize select-none border-4 border-white group"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        {/* After Image (Background/Right Half) */}
        <img 
          src={afterImage} 
          alt="After transformation" 
          className="absolute inset-0 h-full max-w-none pointer-events-none"
          style={{ 
            width: isSplit ? '200%' : '100%', 
            transform: isSplit ? 'translateX(-50%)' : 'none', 
            objectFit: 'cover',
            filter: 'contrast(1.05) saturate(1.1) brightness(1.02)',
            imageRendering: 'auto'
          } as React.CSSProperties}
          draggable={false}
        />
        
        {/* Before Image (Clipped/Left Half) */}
        <img 
          src={beforeImage} 
          alt="Before transformation" 
          className="absolute inset-0 h-full max-w-none pointer-events-none"
          style={{ 
            width: isSplit ? '200%' : '100%', 
            objectFit: 'cover',
            clipPath: isSplit 
              ? `polygon(0 0, ${sliderPosition / 2}% 0, ${sliderPosition / 2}% 100%, 0 100%)`
              : `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
            filter: 'contrast(1.05) saturate(1.1) brightness(1.02)',
            imageRendering: 'auto'
          } as React.CSSProperties}
          draggable={false}
        />

        {/* Slider Handle */}
        <div 
          className="absolute inset-y-0 z-20 w-1.5 bg-white shadow-[0_0_15px_rgba(0,0,0,0.5)]"
          style={{ left: `calc(${sliderPosition}% - 3px)` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-primary transition-transform hover:scale-110">
            <div className="flex gap-1.5">
              <div className="w-1 h-4 bg-primary rounded-full" />
              <div className="w-1 h-4 bg-primary rounded-full" />
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-black/70 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
            {beforeLabel}
          </span>
        </div>
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-primary/95 backdrop-blur-md text-slate-900 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
            {afterLabel}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
