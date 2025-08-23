'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Resources() {
  const { t } = useLanguage();
  return (
    <section id="resources" className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16 xl:px-10 py-8">
      <h3 className="text-[22px] font-bold heading-font">{t('resources.title')}</h3>
      <div className="mt-6 flex flex-wrap gap-4">
        <a href="#" className="group flex items-center gap-3 px-6 py-4 rounded-lg border border-[#316862] bg-[#183431] hover:bg-[#224944] hover:border-[#09ae9b] transition-all duration-300 hover:shadow-lg hover:shadow-[#09ae9b]/20">
          <div className="size-10 grid place-items-center text-[#09ae9b] group-hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="currentColor" viewBox="0 0 256 256">
              <path d="M224,48H160a40,40,0,0,0-32,16A40,40,0,0,0,96,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h64a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM96,192H32V64H96a24,24,0,0,1,24,24V200A39.81,39.81,0,0,0,96,192Zm128,0H160a39.81,39.81,0,0,0-24,8V88a24,24,0,0,1,24-24h64Z"/>
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-white group-hover:text-[#09ae9b] transition-colors">{t('resources.documentation.title')}</h4>
            <p className="text-sm text-[#90cbc4] mt-1">{t('resources.documentation.description')}</p>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" className="size-5 text-[#90cbc4] group-hover:text-[#09ae9b] ml-auto transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
        <Link href="/faq" className="group flex items-center gap-3 px-6 py-4 rounded-lg border border-[#316862] bg-[#183431] hover:bg-[#224944] hover:border-[#09ae9b] transition-all duration-300 hover:shadow-lg hover:shadow-[#09ae9b]/20">
          <div className="size-10 grid place-items-center text-[#09ae9b] group-hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="currentColor" viewBox="0 0 256 256">
              <path d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"/>
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-white group-hover:text-[#09ae9b] transition-colors">{t('resources.faq.title')}</h4>
            <p className="text-sm text-[#90cbc4] mt-1">{t('resources.faq.description')}</p>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" className="size-5 text-[#90cbc4] group-hover:text-[#09ae9b] ml-auto transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
