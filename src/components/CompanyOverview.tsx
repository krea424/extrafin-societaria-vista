
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, GraduationCap, Handshake, LightbulbIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const CompanyOverview: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card className="border-extrafin-200">
        <CardHeader className="pb-2">
          <CardTitle className="text-extrafin-800">Panoramica del Gruppo Extrafin</CardTitle>
          <CardDescription>Fondata nel 2015, Extrafin è diventata un advisor di riferimento nel settore fintech</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none text-gray-600 space-y-4">
            <p>
              Extrafin Spa si distingue nel panorama in evoluzione del fintech come advisor finanziario di riferimento con una 
              missione chiara: supportare la crescita di startup e PMI attraverso un'educazione finanziaria di alto livello e 
              consulenza specializzata nei campi della finanza straordinaria e del venture capital.
            </p>
            <p>
              Fondata nel 2015 con soli €500, Extrafin ha compiuto passi significativi nel settore, raggiungendo traguardi importanti 
              tra cui la quotazione alla Borsa di Vienna.
            </p>
            <p>
              Nel 2023, con l'acquisizione dello Schlosswirt Hotel Castello, una struttura situata in Alta Val di Non e operativa 
              dal 1907, l'azienda ha intrapreso un percorso strategico che culminerà nella creazione del primo Fintech Hub 
              integrato in una struttura turistico-ricettiva, un progetto innovativo che coniuga formazione finanziaria, consulenza 
              strategica ed eccellenza nell'ospitalità.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <BusinessUnitCard 
          icon={<Building className="h-8 w-8 text-extrafin-500" />}
          title="Turismo & Ospitalità" 
          description="Offrire esperienze di ospitalità innovative in sinergia con il mondo fintech"
        />
        
        <BusinessUnitCard 
          icon={<GraduationCap className="h-8 w-8 text-extrafin-500" />}
          title="Formazione" 
          description="Sviluppare competenze avanzate in finanza straordinaria e fintech"
        />
        
        <BusinessUnitCard 
          icon={<Handshake className="h-8 w-8 text-extrafin-500" />}
          title="Consulenza Aziendale" 
          description="Supportare startup e PMI nell'accesso a strumenti di finanziamento alternativi"
        />
      </div>

      <Card className="border-gold-200">
        <CardHeader className="pb-2 border-b">
          <div className="flex items-center space-x-2">
            <LightbulbIcon className="h-5 w-5 text-gold-500" />
            <CardTitle className="text-gold-800">Profilo Innovativo</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="prose max-w-none text-gray-600 space-y-4">
            <p>
              Investire in questo progetto significa contribuire alla crescita di un hub fintech innovativo e accedere a interessanti 
              vantaggi finanziari. Grazie alla natura innovativa di due delle società coinvolte – Mendel Business School Srl 
              è una Start-Up Innovativa, mentre Extraholiday Srl è una PMI Innovativa – gli investitori possono beneficiare di un credito 
              d'imposta del 30% sulle somme investite.
            </p>
            <p>
              Tra i progetti futuri del Fintech Hub c'è la creazione di un incubatore selezionato per sole 30 startup, offrendo 
              loro un'opportunità unica per crescere, nonché una rete di supporto strategico per accedere a capitali e sviluppare modelli 
              di business sostenibili.
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
