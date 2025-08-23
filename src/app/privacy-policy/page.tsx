import Link from 'next/link';
import Image from 'next/image';

export default function PrivacyPolicy() {
  return (
    <>
      {/* Header */}
      <header className="border-b border-[#224944] bg-[#102321]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16 xl:px-10">
          <div className="flex items-center justify-between h-16">
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
            <Link href="/" className="text-[#90cbc4] hover:text-[#09ae9b] transition-colors duration-200">
              ← Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-6 md:px-10 lg:px-16 xl:px-10 py-12">
          <h1 className="text-4xl font-bold heading-font mb-8">Privacy Policy</h1>
          <p className="text-[#90cbc4] mb-8">Last updated: December 2025</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold heading-font mb-4">1. Introduction</h2>
              <p className="text-[#90cbc4] leading-relaxed">
                VoiceCake.io (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI voice automation platform and services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold heading-font mb-4">2. Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">2.1 Personal Information</h3>
                  <p className="text-[#90cbc4] leading-relaxed">
                    We may collect personal information that you provide directly to us, including:
                  </p>
                  <ul className="list-disc list-inside text-[#90cbc4] mt-2 space-y-1">
                    <li>Name and contact information (email address, phone number)</li>
                    <li>Company information and job title</li>
                    <li>Payment and billing information</li>
                    <li>Account credentials and preferences</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">2.2 Voice Data</h3>
                  <p className="text-[#90cbc4] leading-relaxed">
                    Our platform processes voice data to provide AI voice automation services:
                  </p>
                  <ul className="list-disc list-inside text-[#90cbc4] mt-2 space-y-1">
                    <li>Voice recordings for training and improving AI models</li>
                    <li>Conversation transcripts and analytics</li>
                    <li>Voice interaction patterns and preferences</li>
                    <li>Audio quality metrics and performance data</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">2.3 Technical Information</h3>
                  <p className="text-[#90cbc4] leading-relaxed">
                    We automatically collect technical information when you use our services:
                  </p>
                  <ul className="list-disc list-inside text-[#90cbc4] mt-2 space-y-1">
                    <li>Device information and IP addresses</li>
                    <li>Browser type and operating system</li>
                    <li>Usage patterns and service interactions</li>
                    <li>Performance metrics and error logs</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold heading-font mb-4">3. How We Use Your Information</h2>
              <p className="text-[#90cbc4] leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc list-inside text-[#90cbc4] space-y-2">
                <li>Providing and maintaining our AI voice automation services</li>
                <li>Processing payments and managing your account</li>
                <li>Improving our AI models and voice recognition accuracy</li>
                <li>Providing customer support and technical assistance</li>
                <li>Sending service updates and important notifications</li>
                <li>Analyzing usage patterns to enhance user experience</li>
                <li>Complying with legal obligations and protecting our rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold heading-font mb-4">4. Data Sharing and Disclosure</h2>
              <p className="text-[#90cbc4] leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-[#90cbc4] space-y-2">
                <li><strong>Service Providers:</strong> With trusted third-party service providers who assist in operating our platform</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>Consent:</strong> With your explicit consent for specific purposes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold heading-font mb-4">5. Data Security</h2>
              <p className="text-[#90cbc4] leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure data centers, access controls, and regular security assessments.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold heading-font mb-4">6. Data Retention</h2>
              <p className="text-[#90cbc4] leading-relaxed">
                We retain your information for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy. Voice data may be retained for model improvement purposes, but we implement data minimization practices and anonymization where possible.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold heading-font mb-4">7. Your Rights</h2>
              <p className="text-[#90cbc4] leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-[#90cbc4] space-y-2">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                <li><strong>Objection:</strong> Object to certain processing activities</li>
                <li><strong>Withdrawal:</strong> Withdraw consent where processing is based on consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold heading-font mb-4">8. Cookies and Tracking</h2>
              <p className="text-[#90cbc4] leading-relaxed">
                We use cookies and similar tracking technologies to enhance your experience, analyze usage patterns, and provide personalized content. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold heading-font mb-4">9. International Data Transfers</h2>
              <p className="text-[#90cbc4] leading-relaxed">
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with applicable data protection laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold heading-font mb-4">10. Children&apos;s Privacy</h2>
              <p className="text-[#90cbc4] leading-relaxed">
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold heading-font mb-4">11. Changes to This Policy</h2>
              <p className="text-[#90cbc4] leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the &quot;Last updated&quot; date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold heading-font mb-4">12. Contact Us</h2>
              <p className="text-[#90cbc4] leading-relaxed">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-[#183431] rounded-lg">
                <p className="text-[#90cbc4]"><strong>Email:</strong> kamran@voicecake.co.uk</p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
