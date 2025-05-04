
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, GraduationCap, Handshake, LightbulbIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const CompanyOverview: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card className="border-extrafin-200">
        <CardHeader className="pb-2">
          <CardTitle className="text-extrafin-800">Extrafin Group Overview</CardTitle>
          <CardDescription>Founded in 2015, Extrafin has grown to become a reference advisor in the fintech sector</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none text-gray-600 space-y-4">
            <p>
              Extrafin Spa distinguishes itself in the evolving fintech landscape as a reference financial advisor with a 
              clear mission: supporting the growth of startups and SMEs through high-level financial education and 
              specialized consulting in the fields of extraordinary finance and venture capital.
            </p>
            <p>
              Founded in 2015 with only €500, Extrafin has taken significant steps in the sector, achieving notable milestones 
              including a listing on the Vienna Stock Exchange.
            </p>
            <p>
              In 2023, with the acquisition of the Schlosswirt Hotel Castello, a facility located in Alta Val di Non and operational 
              since 1907, the company embarked on a strategic path that will culminate in the creation of the first Fintech Hub 
              integrated in a tourist-accommodation facility, an innovative project that combines financial training, strategic 
              consulting and excellence in hospitality.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <BusinessUnitCard 
          icon={<Building className="h-8 w-8 text-extrafin-500" />}
          title="Tourism & Accommodation" 
          description="Offering innovative hospitality experiences synergistic with the fintech world"
        />
        
        <BusinessUnitCard 
          icon={<GraduationCap className="h-8 w-8 text-extrafin-500" />}
          title="Education" 
          description="Developing advanced skills in extraordinary finance and fintech"
        />
        
        <BusinessUnitCard 
          icon={<Handshake className="h-8 w-8 text-extrafin-500" />}
          title="Business Consulting" 
          description="Supporting startups and SMEs in accessing alternative financing instruments"
        />
      </div>

      <Card className="border-gold-200">
        <CardHeader className="pb-2 border-b">
          <div className="flex items-center space-x-2">
            <LightbulbIcon className="h-5 w-5 text-gold-500" />
            <CardTitle className="text-gold-800">Innovation Profile</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="prose max-w-none text-gray-600 space-y-4">
            <p>
              Investing in this project means contributing to the growth of an innovative fintech hub and accessing interesting 
              financial advantages. Thanks to the innovative nature of two of the companies involved – Mendel Business School Srl 
              is an Innovative Start-Up, while Extraholiday Srl is an Innovative SME – investors can benefit from a 30% tax credit 
              on the sums invested.
            </p>
            <p>
              Among the future projects of the Fintech Hub is the creation of a selected incubator for only 30 startups, offering 
              them a unique opportunity to grow, as well as a strategic support network to access capital and develop sustainable 
              business models.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

interface BusinessUnitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const BusinessUnitCard: React.FC<BusinessUnitCardProps> = ({ icon, title, description, className }) => {
  return (
    <Card className={cn("bg-white border-extrafin-100", className)}>
      <CardContent className="pt-6">
        <div className="flex flex-col items-center text-center space-y-2">
          {icon}
          <h3 className="font-medium text-lg text-extrafin-800">{title}</h3>
          <p className="text-gray-500 text-sm">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CompanyOverview;
