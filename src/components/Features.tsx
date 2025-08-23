'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Features() {
  const [activeTab, setActiveTab] = useState('empth');
  const { t } = useLanguage();

  return (
    <section id="features" className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16 xl:px-10 py-8">
      {/* Core Features Section */}
      <h2 className="text-[22px] font-black heading-font">{t('features.title')}</h2>
      <div className="mt-4 flex border-b border-[#316862] gap-8 px-1">
        <button 
          className={`tab-btn border-b-[3px] pb-[13px] pt-4 text-sm font-bold ${
            activeTab === 'empth' 
              ? 'border-b-[#09ae9b] text-white' 
              : 'border-transparent text-[#90cbc4]'
          }`}
          data-tab="empth"
          onClick={() => setActiveTab('empth')}
        >
          {t('features.tabs.empth')}
        </button>
        <button 
          className={`tab-btn border-b-[3px] pb-[13px] pt-4 text-sm font-bold ${
            activeTab === 'conversa' 
              ? 'border-b-[#09ae9b] text-white' 
              : 'border-transparent text-[#90cbc4]'
          }`}
          data-tab="conversa"
          onClick={() => setActiveTab('conversa')}
        >
          {t('features.tabs.conversa')}
        </button>
      </div>

                        {/* Empth Tab Content */}
                  <div id="empth-content" className={`tab-content mt-8 ${activeTab === 'empth' ? '' : 'hidden'}`}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Card 1 */}
                      <div className="bg-[#183431] rounded-lg border border-[#316862] p-6 hover:border-[#09ae9b] transition-colors">
                        <div className="w-full h-48 bg-cover bg-center rounded-lg mb-4" style={{backgroundImage: 'url("/images/thumbnail-VC-conversa.png")'}} />
                        <h3 className="text-lg font-bold text-white mb-2">{t('features.empth.main_title')}</h3>
                        <p className="text-[#90cbc4] text-sm">{t('features.empth.main_description')}</p>
                      </div>
                      
                      {/* Card 2 */}
                      <div className="bg-[#183431] rounded-lg border border-[#316862] p-6 hover:border-[#09ae9b] transition-colors">
                        <div className="w-full h-48 bg-cover bg-center rounded-lg mb-4" style={{backgroundImage: 'url("/images/empth-main.jpg")'}} />
                        <h3 className="text-lg font-bold text-white mb-2">{t('features.empth.use_cases_title')}</h3>
                        <p className="text-[#90cbc4] text-sm">{t('features.empth.use_cases_description')}</p>
                      </div>
                    </div>
                  </div>

                        {/* Conversa Tab Content */}
                  <div id="conversa-content" className={`tab-content mt-8 ${activeTab === 'conversa' ? '' : 'hidden'}`}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Card 1 */}
                      <div className="bg-[#183431] rounded-lg border border-[#316862] p-6 hover:border-[#09ae9b] transition-colors">
                        <div className="w-full h-48 bg-cover bg-center rounded-lg mb-4" style={{backgroundImage: 'url("/images/empth-use-cases.jpg")'}} />
                        <h3 className="text-lg font-bold text-white mb-2">{t('features.conversa.main_title')}</h3>
                        <p className="text-[#90cbc4] text-sm">{t('features.conversa.main_description')}</p>
                      </div>
                      
                      {/* Card 2 */}
                      <div className="bg-[#183431] rounded-lg border border-[#316862] p-6 hover:border-[#09ae9b] transition-colors">
                        <div className="w-full h-48 bg-cover bg-center rounded-lg mb-4" style={{backgroundImage: 'url("/images/Thumbnail-vc-conversa1.png")'}} />
                        <h3 className="text-lg font-bold text-white mb-2">{t('features.conversa.use_cases_title')}</h3>
                        <p className="text-[#90cbc4] text-sm">{t('features.conversa.use_cases_description')}</p>
                      </div>
                    </div>
                  </div>

      {/* Technical Specifications - Always Visible */}
      <section className="mt-8">
        <div className="flex flex-col gap-3">
          <h3 className="text-[22px] font-bold heading-font">{t('specs.title')}</h3>
          <p className="text-white/90 max-w-3xl">{t('specs.description')}</p>
        </div>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="card">
            <div className="icon-chip">
              <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="currentColor" viewBox="0 0 256 256">
                <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Z"></path>
              </svg>
            </div>
            <h4 className="mt-2 font-bold heading-font">{t('specs.cards.technical.title')}</h4>
            <p className="text-[#90cbc4] text-sm font-bold">{t('specs.cards.technical.description')}</p>
          </div>
          <div className="card">
            <div className="icon-chip">
              <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="currentColor" viewBox="0 0 256 256">
                <path d="M208,40H48A16,16,0,0,0,32,56v58.78c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40Zm0,74.79c0,78.42-66.35,104.62-80,109.18-13.53-4.51-80-30.69-80-109.18V56H208ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.68l50.34-50.34a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z"></path>
              </svg>
            </div>
            <h4 className="mt-2 font-bold heading-font">{t('specs.cards.security.title')}</h4>
            <p className="text-[#90cbc4] text-sm font-bold">{t('specs.cards.security.description')}</p>
          </div>
          <div className="card">
            <div className="icon-chip">
              <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="currentColor" viewBox="0 0 256 256">
                <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,0,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>
              </svg>
            </div>
            <h4 className="mt-2 font-bold heading-font">{t('specs.cards.user_management.title')}</h4>
            <p className="text-[#90cbc4] text-sm font-bold">{t('specs.cards.user_management.description')}</p>
          </div>
        </div>
      </section>

      {/* Additional Features */}
                    <section className="mt-8">
                <h3 className="text-[22px] font-bold heading-font">{t('additional_features.title')}</h3>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="card">
            <div className="icon-chip">
              <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="currentColor" viewBox="0 0 256 256">
                <path d="M245.66,74.34l-32-32a8,8,0,0,0-11.32,11.32L220.69,72H192a74.49,74.49,0,0,0-28.35,6.73c-13.62,6.29-30.83,19.71-35.54,48-5.32,31.94-29.1,39.22-41,40.86a40,40,0,1,0,.18,16.06A71.65,71.65,0,0,0,108.13,178C121.75,172,139,158.6,143.89,129.31,150.65,88.77,190.34,88,192,88h28.69l-18.35,18.34a8,8,0,0,0,11.32,11.32l32-32A8,8,0,0,0,245.66,74.34ZM48,200a24,24,0,1,1,24-24A24,24,0,0,1,48,200Z"></path>
              </svg>
            </div>
                                <h4 className="mt-2 font-bold heading-font">{t('additional_features.cards.automation_workflows.title')}</h4>
                    <p className="text-[#90cbc4] text-sm">{t('additional_features.cards.automation_workflows.description')}</p>
          </div>
          <div className="card">
            <div className="icon-chip">
              <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="currentColor" viewBox="0 0 256 256">
                <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"></path>
              </svg>
            </div>
                                <h4 className="mt-2 font-bold heading-font">{t('additional_features.cards.telephony.title')}</h4>
                    <p className="text-[#90cbc4] text-sm">{t('additional_features.cards.telephony.description')}</p>
          </div>
          <div className="card">
            <div className="icon-chip">
              <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="currentColor" viewBox="0 0 256 256">
                <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
              </svg>
            </div>
                                <h4 className="mt-2 font-bold heading-font">{t('additional_features.cards.agent_creation.title')}</h4>
                    <p className="text-[#90cbc4] text-sm">{t('additional_features.cards.agent_creation.description')}</p>
          </div>
          <div className="card">
            <div className="icon-chip">
              <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="currentColor" viewBox="0 0 256 256">
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path>
              </svg>
            </div>
            <h4 className="mt-2 font-bold heading-font">{t('additional_features.cards.support.title')}</h4>
            <p className="text-[#90cbc4] text-sm">{t('additional_features.cards.support.description')}</p>
          </div>
        </div>
      </section>
    </section>
  );
}
