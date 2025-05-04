
import React from 'react';
import Header from '@/components/Header';
import CompanyOverview from '@/components/CompanyOverview';
import KeyMetrics from '@/components/KeyMetrics';
import ShareholderDistribution from '@/components/ShareholderDistribution';
import ShareholderTable from '@/components/ShareholderTable';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 pb-16">
        <div className="space-y-8">
          <KeyMetrics />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <CompanyOverview />
            <ShareholderDistribution />
          </div>
          
          <ShareholderTable />
          
          <footer className="mt-16 text-center text-sm text-gray-500">
            <p>Extrafin Group Corporate Structure • Confidential • For Investment Purposes Only</p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Index;
