import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-t border-[#224944] bg-[#102321]">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16 xl:px-10 py-12">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="flex items-center justify-center">
                <Image 
                  src="/images/voice-cake-logo-gradient 1.png" 
                  alt="VoiceCake.io - AI Voice Automation Platform Logo" 
                  width={32} 
                  height={32}
                  className="h-8 w-auto"
                />
              </div>
              <h2 className="text-white text-sm font-bold tracking-[1px] font-roboto">voicecake.io</h2>
            </Link>
          </div>
          
          {/* Links */}
          <div className="flex gap-8 text-sm">
            <Link href="/faq" className="text-[#90cbc4] hover:text-[#09ae9b] transition-colors duration-200">
              FAQ
            </Link>
            <Link href="/privacy-policy" className="text-[#90cbc4] hover:text-[#09ae9b] transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="text-[#90cbc4] hover:text-[#09ae9b] transition-colors duration-200">
              Terms & Conditions
            </Link>
          </div>
          
          {/* Copyright */}
          <div className="text-[#90cbc4] text-sm">
            © 2025 VoiceCake.io. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
