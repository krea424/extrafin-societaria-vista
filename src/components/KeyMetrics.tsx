
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Building, Banknote, Users, Calendar } from 'lucide-react';

interface MetricCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  subtitle?: string;
  className?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ icon, title, value, subtitle, className }) => {
  return (
    <Card className={cn("border-extrafin-100", className)}>
      <CardContent className="p-6">
        <div className="flex items-center space-x-4">
          <div className="bg-extrafin-50 p-3 rounded-full">
            {icon}
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <h3 className="text-2xl font-bold text-extrafin-900">{value}</h3>
            {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const KeyMetrics: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <MetricCard 
        icon={<Calendar className="h-6 w-6 text-extrafin-600" />} 
        title="Founded" 
        value="2015" 
        subtitle="Vienna Stock Exchange Listed"
      />
      <MetricCard 
        icon={<Building className="h-6 w-6 text-extrafin-600" />} 
        title="Properties" 
        value="2,800+ m²" 
        subtitle="Schlosswirt Hotel Castello"
      />
      <MetricCard 
        icon={<Users className="h-6 w-6 text-extrafin-600" />} 
        title="Shareholders" 
        value="100+" 
        subtitle="Ordinary & Preference"
      />
      <MetricCard 
        icon={<Banknote className="h-6 w-6 text-extrafin-600" />} 
        title="Founding Capital" 
        value="€500" 
        subtitle="Initial Investment"
      />
    </div>
  );
};

export default KeyMetrics;
