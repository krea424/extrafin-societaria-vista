
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

// Define types for shareholders
interface Shareholder {
  name: string;
  fiscalCode: string;
  shareType: string;
  numerator: number;
  denominator: number;
  percentage: number;
  location?: string;
  capital?: string;
  revenue?: string;
  profit?: string;
  description?: string;
  averagePrice?: string;
  website?: string;
  notes?: string;
}

// Define ordinary shareholders data
const ordinaryShareholders: Shareholder[] = [
  {
    name: "CORNiola S.R.L.",
    fiscalCode: "02251600975",
    shareType: "Ordinarie",
    numerator: 3235,
    denominator: 20000,
    percentage: 16.18,
    location: "Prato",
    capital: "€20,000",
    revenue: "€18,000",
    profit: "-€102,000",
    description: "Corniola offers businesses a wide range of business consulting, administrative-management and business planning services...",
    website: "https://www.corniolapartecipazioni.it/"
  },
  {
    name: "ROMANO LUIGI",
    fiscalCode: "RMNLGU64A25C349Z",
    shareType: "Ordinarie",
    numerator: 3038,
    denominator: 20000,
    percentage: 15.19
  },
  {
    name: "MY GROUP S.R.L.",
    fiscalCode: "06350950488",
    shareType: "Ordinarie",
    numerator: 1300,
    denominator: 20000,
    percentage: 6.50,
    location: "Pontassieve",
    capital: "€100,000",
    revenue: "€253,149",
    profit: "-€88,548",
    description: "Financial consulting. Purchase, management, recovery and enhancement of non-performing loans."
  },
  {
    name: "N.G.C.- NEW GENERATION COMPANY SRL",
    fiscalCode: "03665910133",
    shareType: "Ordinarie",
    numerator: 1025,
    denominator: 20000,
    percentage: 5.13,
    location: "Olgiate Comasco",
    capital: "€10,000",
    revenue: "€12,645",
    profit: "-€2,484",
    description: "Other business consulting activities and other administrative-management consulting and business planning."
  },
  {
    name: "EXTRACREDIT S.R.L.",
    fiscalCode: "04821220235",
    shareType: "Ordinarie",
    numerator: 1000,
    denominator: 20000,
    percentage: 5.00
  },
  {
    name: "INVEST CLUB ITALIA",
    fiscalCode: "91098410938",
    shareType: "Ordinarie",
    numerator: 1000,
    denominator: 20000,
    percentage: 5.00
  },
  {
    name: "COSTAMAGNA ANTONIO LIVIO",
    fiscalCode: "CSTNNL54L18H150F",
    shareType: "Ordinarie",
    numerator: 1000,
    denominator: 20000,
    percentage: 5.00
  },
  {
    name: "TAVELLA SILVIO",
    fiscalCode: "TVLSLV67T07D205A",
    shareType: "Ordinarie",
    numerator: 900,
    denominator: 20000,
    percentage: 4.50
  }
];

// Define preference shareholders data (limited rights)
const limitedRightsShareholders: Shareholder[] = [
  {
    name: "ZUSI RICCARDO",
    fiscalCode: "ZSURCR70M20Z114N",
    shareType: "Diritti Limitati",
    numerator: 1800,
    denominator: 7812,
    percentage: 23.04
  },
  {
    name: "RINCO MASSIMO",
    fiscalCode: "RNCMSM70M12F918T",
    shareType: "Diritti Limitati",
    numerator: 1036,
    denominator: 7812,
    percentage: 13.26
  },
  {
    name: "ZANDOMENEGHI GIANLUIGI",
    fiscalCode: "ZNDGLG58T11H783E",
    shareType: "Diritti Limitati",
    numerator: 800,
    denominator: 7812,
    percentage: 10.24
  },
  {
    name: "N.G.C.- NEW GENERATION COMPANY SRL",
    fiscalCode: "03665910133",
    shareType: "Diritti Limitati",
    numerator: 601,
    denominator: 7812,
    percentage: 7.69
  },
  {
    name: "MONEGATO SIMONE",
    fiscalCode: "MNGSMN71L16L781N",
    shareType: "Diritti Limitati",
    numerator: 500,
    denominator: 7812,
    percentage: 6.40
  },
  {
    name: "PANTE ELOISA",
    fiscalCode: "PNTLSE89T65F206N",
    shareType: "Diritti Limitati",
    numerator: 400,
    denominator: 7812,
    percentage: 5.12
  },
  {
    name: "BERARDO MORIS",
    fiscalCode: "BRRMRS86P15B107T",
    shareType: "Diritti Limitati",
    numerator: 290,
    denominator: 7812,
    percentage: 3.71
  },
  {
    name: "AD HOC SRL",
    fiscalCode: "04032690267",
    shareType: "Diritti Limitati",
    numerator: 202,
    denominator: 7812,
    percentage: 2.59
  }
];

interface ShareholderTableProps {
  title: string;
  description: string;
  shareholders: Shareholder[];
  colorClass?: string;
}

const ShareholderTable: React.FC<ShareholderTableProps> = ({
  title,
  description,
  shareholders,
  colorClass = "border-extrafin-200"
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredShareholders = shareholders.filter(shareholder => 
    shareholder.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Card className={cn(colorClass)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="relative mt-2">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search shareholders..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[300px]">Name</TableHead>
                <TableHead className="w-[200px]">Fiscal Code</TableHead>
                <TableHead className="text-right">Share %</TableHead>
                <TableHead>Location</TableHead>
                <TableHead className="hidden md:table-cell">Capital</TableHead>
                <TableHead className="hidden lg:table-cell">Revenue</TableHead>
                <TableHead className="hidden lg:table-cell">Website</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredShareholders.map((shareholder, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">{shareholder.name}</TableCell>
                  <TableCell className="font-mono text-xs">{shareholder.fiscalCode}</TableCell>
                  <TableCell className="text-right font-medium">{shareholder.percentage}%</TableCell>
                  <TableCell>{shareholder.location || "-"}</TableCell>
                  <TableCell className="hidden md:table-cell">{shareholder.capital || "-"}</TableCell>
                  <TableCell className="hidden lg:table-cell">{shareholder.revenue || "-"}</TableCell>
                  <TableCell className="hidden lg:table-cell">
                    {shareholder.website ? (
                      <a href={shareholder.website} target="_blank" rel="noopener noreferrer" className="text-extrafin-600 hover:underline">
                        Website
                      </a>
                    ) : "-"}
                  </TableCell>
                </TableRow>
              ))}
              {filteredShareholders.length === 0 && (
                <TableRow>
                  <TableCell colSpan={7} className="h-24 text-center">
                    No results found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

const ShareholderTables: React.FC = () => {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="ordinary">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="ordinary">Ordinary Shareholders</TabsTrigger>
          <TabsTrigger value="preference">Preference Shareholders</TabsTrigger>
        </TabsList>
        <TabsContent value="ordinary" className="mt-6">
          <ShareholderTable 
            title="Ordinary Shareholders"
            description="Shareholders with voting rights (20,000 shares total)" 
            shareholders={ordinaryShareholders}
            colorClass="border-extrafin-200"
          />
        </TabsContent>
        <TabsContent value="preference" className="mt-6">
          <ShareholderTable 
            title="Preference Shareholders" 
            description="Shareholders with limited rights (7,812 shares total)"
            shareholders={limitedRightsShareholders}
            colorClass="border-gold-200"
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ShareholderTables;
