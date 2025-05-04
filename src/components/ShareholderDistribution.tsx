
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
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

// Define the top shareholders for the pie chart (we'll show the top 7 and group the rest)
const ordinaryShareholdersData = [
  { name: "CORNiola S.R.L.", percentage: 16.18, color: "#3B82F6" },
  { name: "ROMANO LUIGI", percentage: 15.19, color: "#2563EB" },
  { name: "MY GROUP S.R.L.", percentage: 6.50, color: "#1D4ED8" },
  { name: "N.G.C.- NEW GENERATION COMPANY SRL", percentage: 5.13, color: "#1E40AF" },
  { name: "EXTRACREDIT S.R.L.", percentage: 5.00, color: "#1E3A8A" },
  { name: "INVEST CLUB ITALIA", percentage: 5.00, color: "#3730A3" },
  { name: "Others", percentage: 47.00, color: "#6B7280" },
];

const preferenceShareholdersData = [
  { name: "ZUSI RICCARDO", percentage: 23.04, color: "#F59E0B" },
  { name: "RINCO MASSIMO", percentage: 13.26, color: "#D97706" },
  { name: "ZANDOMENEGHI GIANLUIGI", percentage: 10.24, color: "#B45309" },
  { name: "N.G.C.- NEW GENERATION COMPANY SRL", percentage: 7.69, color: "#92400E" },
  { name: "MONEGATO SIMONE", percentage: 6.40, color: "#78350F" },
  { name: "PANTE ELOISA", percentage: 5.12, color: "#B45309" },
  { name: "Others", percentage: 34.25, color: "#6B7280" },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 shadow rounded border border-gray-200">
        <p className="font-medium">{payload[0].name}</p>
        <p className="text-gray-700">{`${payload[0].value.toFixed(2)}%`}</p>
      </div>
    );
  }

  return null;
};

const ShareholderDistribution: React.FC = () => {
  return (
    <Card className="border-extrafin-200">
      <CardHeader>
        <CardTitle className="text-extrafin-800">Shareholder Distribution</CardTitle>
        <CardDescription>
          Overview of Extrafin's corporate structure and ownership distribution
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="ordinary">
          <TabsList className="grid grid-cols-2 mb-6">
            <TabsTrigger value="ordinary">Ordinary Shares</TabsTrigger>
            <TabsTrigger value="preference">Preference Shares</TabsTrigger>
          </TabsList>
          
          <TabsContent value="ordinary" className="mt-0">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={ordinaryShareholdersData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="percentage"
                    >
                      {ordinaryShareholdersData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                    <Legend layout="vertical" verticalAlign="middle" align="right" />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-3">
                <h3 className="font-medium text-lg text-extrafin-800">Key Information</h3>
                <p className="text-sm text-gray-600">
                  Ordinary shares represent voting rights and standard equity participation in Extrafin Spa. 
                  The company has 20,000 ordinary shares distributed among 50+ shareholders.
                </p>
                <div className="bg-extrafin-50 p-4 rounded-md border border-extrafin-100">
                  <h4 className="font-medium text-sm text-extrafin-700 mb-2">Major Shareholders</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span>CORNiola S.R.L.</span>
                      <span className="font-medium">16.18%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>ROMANO LUIGI</span>
                      <span className="font-medium">15.19%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>MY GROUP S.R.L.</span>
                      <span className="font-medium">6.50%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>N.G.C.- NEW GENERATION COMPANY SRL</span>
                      <span className="font-medium">5.13%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="preference" className="mt-0">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={preferenceShareholdersData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="percentage"
                    >
                      {preferenceShareholdersData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                    <Legend layout="vertical" verticalAlign="middle" align="right" />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-3">
                <h3 className="font-medium text-lg text-gold-800">Key Information</h3>
                <p className="text-sm text-gray-600">
                  Preference shares in Extrafin Spa (Limited Rights shares) confer economic rights without voting powers. 
                  The company has 7,812 preference shares distributed among 50+ preference shareholders.
                </p>
                <div className="bg-gold-50 p-4 rounded-md border border-gold-100">
                  <h4 className="font-medium text-sm text-gold-700 mb-2">Major Preference Shareholders</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span>ZUSI RICCARDO</span>
                      <span className="font-medium">23.04%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>RINCO MASSIMO</span>
                      <span className="font-medium">13.26%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>ZANDOMENEGHI GIANLUIGI</span>
                      <span className="font-medium">10.24%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>N.G.C.- NEW GENERATION COMPANY SRL</span>
                      <span className="font-medium">7.69%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ShareholderDistribution;
