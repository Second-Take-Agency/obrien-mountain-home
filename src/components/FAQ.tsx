import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQItem } from '@/data/faqs';

interface FAQProps {
  items: FAQItem[];
  title?: string;
  className?: string;
}

const FAQ: React.FC<FAQProps> = ({ items, title = "Frequently Asked Questions", className = "" }) => {
  return (
    <section className={`py-20 bg-white ${className}`}>
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
          <p className="text-slate-500 mt-4 text-lg">Honest answers to the questions we hear most often.</p>
        </div>
        <Accordion type="single" collapsible className="w-full space-y-3">
          {items.map((item, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-slate-200 rounded-xl px-6 bg-white shadow-sm overflow-hidden"
            >
              <AccordionTrigger className="text-left font-bold text-slate-900 hover:text-primary transition-colors py-5 text-base">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed pb-6 text-sm">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
