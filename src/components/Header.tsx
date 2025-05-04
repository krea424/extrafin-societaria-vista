import React from 'react';
import { cn } from '@/lib/utils';
interface HeaderProps {
  className?: string;
}
const Header: React.FC<HeaderProps> = ({
  className
}) => {
  return <header className={cn("py-6 md:py-10 mb-6", className)}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="bg-gradient-to-r from-extrafin-600 to-extrafin-400 rounded-md p-2 mr-3">
              <span className="text-white font-bold text-xl">E</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-extrafin-900">Analisi FinEu - Extrafin Group - </h1>
              <p className="text-sm text-gray-500">Overview e Struttura Societaria </p>
            </div>
          </div>
          <div className="flex space-x-4 text-sm">
            <span className="text-lg text-slate-900 px-[2px] py-0 text-center"></span>
            <span className="font-medium text-extrafin-800">5 Maggio 2025</span>
          </div>
        </div>
      </div>
    </header>;
};
export default Header;