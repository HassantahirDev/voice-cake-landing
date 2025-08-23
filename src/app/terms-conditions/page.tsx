import Link from 'next/link';
import Image from 'next/image';

export default function TermsConditions() {
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
          <h1 className="text-4xl font-bold heading-font mb-8">Terms & Conditions</h1>
          <p className="text-[#90cbc4] mb-8">Last updated: December 2025</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold heading-font mb-4">1. Acceptance of Terms</h2>
              <p className="text-[#90cbc4] leading-relaxed">
                By accessing and using VoiceCake.io (&quot;Service&quot;), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold heading-font mb-4">2. Description of Service</h2>
              <p className="text-[#90cbc4] leading-relaxed mb-4">
                VoiceCake.io provides AI-powered voice automation services, including:
              </p>
              <ul className="list-disc list-inside text-[#90cbc4] space-y-2">
                <li>AI voice agent creation and management</li>
                <li>Voice interaction automation and processing</li>
                <li>Conversation analytics and insights</li>
                <li>Integration with third-party platforms</li>
                <li>Voice data processing and storage</li>
                <li>Technical support and maintenance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold heading-font mb-4">3. User Accounts</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">3.1 Account Creation</h3>
                  <p className="text-[#90cbc4] leading-relaxed">
                    To access certain features of our Service, you must create an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">3.2 Account Security</h3>
                  <p className="text-[#90cbc4] leading-relaxed">
                    You are responsible for safeguarding the password and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">3.3 Account Termination</h3>
                  <p className="text-[#90cbc4] leading-relaxed">
                    We reserve the right to terminate or suspend your account at any time for violations of these Terms or for any other reason at our sole discretion.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold heading-font mb-4">4. Acceptable Use Policy</h2>
              <p className="text-[#90cbc4] leading-relaxed mb-4">
                You agree not to use the Service to:
              </p>
              <ul className="list-disc list-inside text-[#90cbc4] space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Transmit harmful, offensive, or inappropriate content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the Service</li>
                <li>Use the Service for spam or unsolicited communications</li>
                <li>Reverse engineer or attempt to extract source code</li>
                <li>Use the Service for any illegal or fraudulent activities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold heading-font mb-4">5. Payment Terms</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">5.1 Pricing</h3>
                  <p className="text-[#90cbc4] leading-relaxed">
                    Service pricing is available on our website and may be subject to change. We will provide reasonable notice of any price changes.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">5.2 Billing</h3>
                  <p className="text-[#90cbc4] leading-relaxed">
                    Payment is due upon subscription activation and will be charged automatically on a recurring basis. You authorize us to charge your payment method for all fees incurred.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">5.3 Refunds</h3>
                  <p className="text-[#90cbc4] leading-relaxed">
                    Refunds are provided at our discretion and in accordance with our refund policy. No refunds will be provided for partial months of service.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold heading-font mb-4">6. Intellectual Property</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">6.1 Our Rights</h3>
                  <p className="text-[#90cbc4] leading-relaxed">
                    The Service and its original content, features, and functionality are owned by VoiceCake.io and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">6.2 Your Content</h3>
                  <p className="text-[#90cbc4] leading-relaxed">
                    You retain ownership of content you submit to the Service. By submitting content, you grant us a worldwide, non-exclusive license to use, reproduce, and distribute your content for the purpose of providing the Service.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold heading-font mb-4">7. Privacy and Data Protection</h2>
              <p className="text-[#90cbc4] leading-relaxed">
                Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold heading-font mb-4">8. Service Availability</h2>
              <p className="text-[#90cbc4] leading-relaxed">
                We strive to maintain high service availability but do not guarantee uninterrupted access. The Service may be temporarily unavailable due to maintenance, updates, or technical issues. We are not liable for any damages resulting from service interruptions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold heading-font mb-4">9. Limitation of Liability</h2>
              <p className="text-[#90cbc4] leading-relaxed">
                To the maximum extent permitted by law, VoiceCake.io shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold heading-font mb-4">10. Disclaimer of Warranties</h2>
              <p className="text-[#90cbc4] leading-relaxed">
                The Service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied. We disclaim all warranties, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold heading-font mb-4">11. Indemnification</h2>
              <p className="text-[#90cbc4] leading-relaxed">
                You agree to defend, indemnify, and hold harmless VoiceCake.io and its officers, directors, employees, and agents from and against any claims, damages, obligations, losses, liabilities, costs, or debt arising from your use of the Service or violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold heading-font mb-4">12. Governing Law</h2>
              <p className="text-[#90cbc4] leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law provisions. Any disputes arising from these Terms shall be resolved in the courts of the United Kingdom.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold heading-font mb-4">13. Changes to Terms</h2>
              <p className="text-[#90cbc4] leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the new Terms on our website. Your continued use of the Service after such changes constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold heading-font mb-4">14. Severability</h2>
              <p className="text-[#90cbc4] leading-relaxed">
                If any provision of these Terms is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall be enforced to the fullest extent under law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold heading-font mb-4">15. Contact Information</h2>
              <p className="text-[#90cbc4] leading-relaxed">
                If you have any questions about these Terms & Conditions, please contact us at:
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
