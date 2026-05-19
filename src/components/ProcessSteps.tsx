import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, FileText, Settings, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const steps = [
  {
    title: "Assessment",
    description: "We look at the home, listen to the problem, and identify the best path forward.",
    icon: Search,
    color: "bg-blue-50 text-blue-600",
    activeConnector: "bg-blue-200",
  },
  {
    title: "Estimate",
    description: "You get an honest, clear quote based on the scope and material options.",
    icon: FileText,
    color: "bg-orange-50 text-orange-600",
    activeConnector: "bg-orange-200",
  },
  {
    title: "Installation",
    description: "We install with care, communication, and attention to the details that matter.",
    icon: Settings,
    color: "bg-primary/10 text-primary",
    activeConnector: "bg-primary/30",
  },
  {
    title: "Completion",
    description: "We walk through the work with you and make sure you are happy before the job is done.",
    icon: CheckCircle,
    color: "bg-green-50 text-green-600",
    activeConnector: "bg-green-200",
  },
];

const ProcessSteps = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">A Clear Process From First Look to Final Walkthrough</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We believe in transparency and communication. Here is how we handle every project from start to finish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 relative">
          {steps.map((step, index) => {
            const isHovered = hovered === index;
            // A connector is "active" if its left card OR right card is hovered
            const connectorActive = hovered === index || hovered === index + 1;

            return (
              <div
                key={index}
                className="relative flex items-stretch"
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Connector line between cards (not after last) */}
                {index < steps.length - 1 && (
                  <div
                    className={cn(
                      "hidden lg:block absolute top-1/2 left-full -translate-y-1/2 z-20 h-1 transition-all duration-300",
                      "w-0 group-hover:w-8",
                      connectorActive
                        ? cn("bg-primary w-8 shadow-sm shadow-primary/40")
                        : "bg-slate-200 w-8"
                    )}
                    style={{ width: "2rem" }}
                  />
                )}

                <div
                  className={cn(
                    "relative z-10 bg-white p-8 rounded-2xl border h-full flex flex-col items-center text-center w-full mx-1 transition-all duration-300 cursor-default",
                    isHovered
                      ? "shadow-2xl border-primary/40 -translate-y-2 scale-[1.02]"
                      : "shadow-lg border-slate-100 hover:shadow-xl"
                  )}
                >
                  {/* Step number */}
                  <div className={cn(
                    "w-7 h-7 rounded-full flex items-center justify-center text-xs font-black mb-4 transition-all duration-300",
                    isHovered ? "bg-primary text-slate-900" : "bg-slate-100 text-slate-500"
                  )}>
                    {index + 1}
                  </div>

                  <div className={cn(
                    `w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300`,
                    isHovered ? "scale-110" : "",
                    step.color
                  )}>
                    <step.icon className="w-8 h-8" />
                  </div>
                  <h3 className={cn(
                    "text-xl font-bold mb-4 transition-colors duration-200",
                    isHovered ? "text-primary" : "text-slate-900"
                  )}>{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className={cn(
                    "mt-6 h-1 rounded-full transition-all duration-300",
                    isHovered ? "w-12 bg-primary" : "w-0 bg-primary"
                  )} />
                </div>
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
};

export default ProcessSteps;
