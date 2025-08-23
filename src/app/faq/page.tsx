import Link from 'next/link';
import Image from 'next/image';

export default function FAQ() {
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
          <h1 className="text-4xl font-bold heading-font mb-8">Frequently Asked Questions</h1>
          <p className="text-[#90cbc4] mb-12">Find answers to common questions about VoiceCake.io&apos;s AI voice automation platform.</p>

          <div className="space-y-8">
            {/* Product Overview */}
            <section>
              <h2 className="text-2xl font-bold heading-font mb-6 text-[#09ae9b]">Product Overview</h2>
              
              <div className="space-y-6">
                <div className="bg-[#183431] rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">What is VoiceCake.io?</h3>
                  <p className="text-[#90cbc4] leading-relaxed">
                    VoiceCake.io is an AI-driven conversational voice platform that enables businesses to deploy ultra-realistic, empathetic, and lightning-fast voice agents that sound indistinguishably human. Our solution combines Speech-to-Speech (Empth) and Text-to-Speech (Conversa) technologies with automation workflows to deliver a complete customer engagement suite.
                  </p>
                </div>

                <div className="bg-[#183431] rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">What are the two main voice technologies you offer?</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-medium mb-2 text-[#09ae9b]">VoiceCake Empath (Speech-to-Speech)</h4>
                      <p className="text-[#90cbc4] leading-relaxed">
                        Real-time, bidirectional voice conversations with ultra-low latency (&lt;1s response times), human-realistic voice capture, full-duplex communication, emotional intelligence, and multilingual support. Perfect for phone-based customer support, sales calls, virtual receptionists, and live surveys.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2 text-[#09ae9b]">VoiceCake Conversa (Text-to-Speech)</h4>
                      <p className="text-[#90cbc4] leading-relaxed">
                        Transforms text into studio-quality speech with multiple voice styles, premium & free voices, voice cloning capabilities, token-based usage, and downloadable audio. Ideal for voiceovers, IVR menus, personalized content delivery, and accessibility applications.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#183431] rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">What makes VoiceCake.io different from other voice AI platforms?</h3>
                  <p className="text-[#90cbc4] leading-relaxed mb-4">
                    VoiceCake.io stands out with:
                  </p>
                  <ul className="list-disc list-inside text-[#90cbc4] space-y-2">
                    <li>Unmatched voice realism - voices indistinguishable from human speakers</li>
                    <li>Emotionally aware conversations with contextual empathy</li>
                    <li>Full automation + voice in one platform (most platforms do either, not both)</li>
                    <li>Scalable infrastructure designed for enterprise-level call volumes</li>
                    <li>Flexible deployment for telephony, web, mobile, or embedded applications</li>
                    <li>No-code interface for non-technical users</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Pricing & Plans */}
            <section>
              <h2 className="text-2xl font-bold heading-font mb-6 text-[#09ae9b]">Pricing & Plans</h2>
              
              <div className="space-y-6">
                <div className="bg-[#183431] rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">How does VoiceCake.io pricing work?</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-medium mb-2 text-[#09ae9b]">VoiceCake Conversa</h4>
                      <ul className="list-disc list-inside text-[#90cbc4] space-y-1">
                        <li>$0.12/min usage</li>
                        <li>$10/month for 10,000 automations (overage $0.012/automation)</li>
                        <li>Bundled plans: 300–5,000 minutes ($54–$900)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2 text-[#09ae9b]">VoiceCake Empth</h4>
                      <ul className="list-disc list-inside text-[#90cbc4] space-y-1">
                        <li>$0.18/min usage</li>
                        <li>Bundled plans: 300–5,000 minutes ($54–$900)</li>
                        <li>Enterprise pricing available for high-volume customers</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-[#183431] rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Do you offer a free trial?</h3>
                  <p className="text-[#90cbc4] leading-relaxed">
                    Yes! We offer a free trial with 5 minutes of usage to test our platform. No credit card required to start. You can upgrade to a paid plan at any time.
                  </p>
                </div>

                <div className="bg-[#183431] rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Are there any hidden fees?</h3>
                  <p className="text-[#90cbc4] leading-relaxed">
                    No hidden fees. Our pricing is transparent and includes all features. You only pay for what you use, and we offer volume discounts for high-usage customers.
                  </p>
                </div>
              </div>
            </section>

            {/* Technical Questions */}
            <section>
              <h2 className="text-2xl font-bold heading-font mb-6 text-[#09ae9b]">Technical Questions</h2>
              
              <div className="space-y-6">
                <div className="bg-[#183431] rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">What integrations do you support?</h3>
                  <p className="text-[#90cbc4] leading-relaxed mb-4">
                    VoiceCake.io integrates with:
                  </p>
                  <ul className="list-disc list-inside text-[#90cbc4] space-y-2">
                    <li>CRM systems (Salesforce, HubSpot, Pipedrive)</li>
                    <li>Communication platforms (WhatsApp, SMS, Email)</li>
                    <li>Payment processors (Stripe, PayPal)</li>
                    <li>Database systems (MySQL, PostgreSQL, MongoDB)</li>
                    <li>Webhook support for custom integrations</li>
                    <li>REST API for developers</li>
                  </ul>
                </div>

                <div className="bg-[#183431] rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">What languages do you support?</h3>
                  <p className="text-[#90cbc4] leading-relaxed">
                    We support multiple languages including English, Spanish, French, German, Italian, Portuguese, and Arabic. Our platform can handle multilingual conversations and automatically detect the user&apos;s language.
                  </p>
                </div>

                <div className="bg-[#183431] rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">How secure is your platform?</h3>
                  <p className="text-[#90cbc4] leading-relaxed">
                    Security is our top priority. We use enterprise-grade encryption, comply with GDPR and SOC 2 standards, and implement strict access controls. All data is encrypted in transit and at rest.
                  </p>
                </div>
              </div>
            </section>

            {/* Support & Getting Started */}
            <section>
              <h2 className="text-2xl font-bold heading-font mb-6 text-[#09ae9b]">Support & Getting Started</h2>
              
              <div className="space-y-6">
                <div className="bg-[#183431] rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">How long does it take to set up?</h3>
                  <p className="text-[#90cbc4] leading-relaxed">
                    Most customers can get started in under 5 minutes. Our no-code interface makes it easy to create voice agents and set up automation workflows. For complex integrations, our team can help you get up and running quickly.
                  </p>
                </div>

                <div className="bg-[#183431] rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">What kind of support do you offer?</h3>
                  <p className="text-[#90cbc4] leading-relaxed">
                    We offer comprehensive support including:
                  </p>
                  <ul className="list-disc list-inside text-[#90cbc4] space-y-2 mt-4">
                    <li>24/7 technical support</li>
                    <li>Documentation and tutorials</li>
                    <li>Video guides and webinars</li>
                    <li>Dedicated account managers for enterprise customers</li>
                    <li>Community forum for developers</li>
                  </ul>
                </div>

                <div className="bg-[#183431] rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Can I cancel my subscription anytime?</h3>
                  <p className="text-[#90cbc4] leading-relaxed">
                    Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. You&apos;ll continue to have access to your account until the end of your current billing period.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
