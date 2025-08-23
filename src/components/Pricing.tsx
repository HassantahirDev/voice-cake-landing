'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Pricing() {
  const [activeTab, setActiveTab] = useState('conversa');
  const { t } = useLanguage();

  return (
    <section id="pricing" className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16 xl:px-10 py-8">
      <div className="text-center mb-8">
        <h2 className="text-sm text-[#90cbc4] mb-2">{t('pricing.subtitle')}</h2>
        <h3 className="text-[22px] font-bold heading-font">{t('pricing.title')}</h3>
      </div>
      
      {/* Pricing Tabs */}
      <div className="flex justify-center mb-8">
        <div className="flex rounded-lg border border-[#316862] bg-[#183431] p-1">
          <button 
            className={`pricing-tab px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              activeTab === 'conversa' ? 'active' : ''
            }`}
            onClick={() => setActiveTab('conversa')}
          >
            {t('pricing.tabs.conversa')}
          </button>
          <button 
            className={`pricing-tab px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              activeTab === 'empth' ? 'active' : ''
            }`}
            onClick={() => setActiveTab('empth')}
          >
            {t('pricing.tabs.empth')}
          </button>
        </div>
      </div>

      {/* Conversa Pricing Cards */}
      <div className={`pricing-content ${activeTab === 'conversa' ? 'active' : 'hidden'}`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Basic Conversa */}
          <div className="rounded-lg border border-[#316862] bg-[#183431] p-6 flex flex-col gap-4 hover:shadow-lg hover:shadow-[#09ae9b]/20 transition">
            <div>
              <h4 className="text-base font-bold heading-font">Basic Conversa</h4>
              <p className="text-sm text-[#90cbc4] mt-1">300 minutes • 30 days</p>
              <p className="mt-2 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold">$59.99</span>
              </p>
            </div>
            <a 
              href="https://www.app.voicecake.io/auth/signin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-base btn-primary inline-flex"
            >
              Select Basic Conversa
            </a>
          </div>

          {/* Ultra Conversa */}
          <div className="rounded-lg border border-[#316862] bg-[#183431] p-6 flex flex-col gap-4 hover:shadow-lg hover:shadow-[#09ae9b]/20 transition">
            <div>
              <h4 className="text-base font-bold heading-font">Ultra Conversa</h4>
              <p className="text-sm text-[#90cbc4] mt-1">500 minutes • 30 days</p>
              <p className="mt-2 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold">$89.99</span>
              </p>
            </div>
            <a 
              href="https://www.app.voicecake.io/auth/signin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-base btn-primary inline-flex"
            >
              Select Ultra Conversa
            </a>
          </div>

          {/* Enterprise Conversa */}
          <div className="rounded-lg border border-[#316862] bg-[#183431] p-6 flex flex-col gap-4 hover:shadow-lg hover:shadow-[#09ae9b]/20 transition">
            <div>
              <h4 className="text-base font-bold heading-font">Enterprise Conversa</h4>
              <p className="text-sm text-[#90cbc4] mt-1">900 minutes • 30 days</p>
              <p className="mt-2 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold">$119.99</span>
              </p>
            </div>
            <a 
              href="https://www.app.voicecake.io/auth/signin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-base btn-primary inline-flex"
            >
              Select Enterprise Conversa
            </a>
          </div>
        </div>
      </div>

      {/* Empth Pricing Cards */}
      <div className={`pricing-content ${activeTab === 'empth' ? 'active' : 'hidden'}`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Basic Empth */}
          <div className="rounded-lg border border-[#316862] bg-[#183431] p-6 flex flex-col gap-4 hover:shadow-lg hover:shadow-[#09ae9b]/20 transition">
            <div>
              <h4 className="text-base font-bold heading-font">Basic Empth</h4>
              <p className="text-sm text-[#90cbc4] mt-1">300 minutes • 30 days</p>
              <p className="mt-2 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold">$69.99</span>
              </p>
            </div>
            <a 
              href="https://www.app.voicecake.io/auth/signin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-base btn-primary inline-flex"
            >
              Select Basic Empth
            </a>
          </div>

          {/* Ultra Empth */}
          <div className="rounded-lg border border-[#316862] bg-[#183431] p-6 flex flex-col gap-4 hover:shadow-lg hover:shadow-[#09ae9b]/20 transition">
            <div>
              <h4 className="text-base font-bold heading-font">Ultra Empth</h4>
              <p className="text-sm text-[#90cbc4] mt-1">500 minutes • 30 days</p>
              <p className="mt-2 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold">$99.99</span>
              </p>
            </div>
            <a 
              href="https://www.app.voicecake.io/auth/signin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-base btn-primary inline-flex"
            >
              Select Ultra Empth
            </a>
          </div>

          {/* Enterprise Empth */}
          <div className="rounded-lg border border-[#316862] bg-[#183431] p-6 flex flex-col gap-4 hover:shadow-lg hover:shadow-[#09ae9b]/20 transition">
            <div>
              <h4 className="text-base font-bold heading-font">Enterprise Empth</h4>
              <p className="text-sm text-[#90cbc4] mt-1">900 minutes • 30 days</p>
              <p className="mt-2 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold">$129.99</span>
              </p>
            </div>
            <a 
              href="https://www.app.voicecake.io/auth/signin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-base btn-primary inline-flex"
            >
              Select Enterprise Empth
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
