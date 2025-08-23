export default function Comparison() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16 xl:px-10 py-8">
      <h3 className="text-[22px] font-bold heading-font">Comparison of Voice Automation Solutions</h3>
      <div className="table-wrap mt-4">
        <table className="min-w-[720px] w-full">
          <thead>
            <tr className="bg-[#183431]">
              <th className="px-4 py-3 text-left w-[240px]">FEATURES</th>
              <th className="px-4 py-3 text-left w-[240px]">VOICE CAKE</th>
              <th className="px-4 py-3 text-left w-[240px]">VAPI / ELEVENLABS</th>
              <th className="px-4 py-3 text-left w-[240px]">AMAZON / GOOGLE / AZURE</th>
            </tr>
          </thead>
          <tbody className="[&_tr:nth-child(even)]:bg-[#102321] [&_tr:nth-child(odd)]:bg-transparent">
            <tr className="border-t border-[#316862]">
              <td className="px-4 py-3">Unified Speech-to-Speech</td>
              <td className="px-4 py-3 text-[#09ae9b]">✓</td>
              <td className="px-4 py-3 text-red-400">✕</td>
              <td className="px-4 py-3 text-red-400">✕</td>
            </tr>
            <tr className="border-t border-[#316862]">
              <td className="px-4 py-3">Sub-250ms Latency</td>
              <td className="px-4 py-3 text-[#09ae9b]">✓</td>
              <td className="px-4 py-3 text-red-400">✕</td>
              <td className="px-4 py-3 text-red-400">✕</td>
            </tr>
            <tr className="border-t border-[#316862]">
              <td className="px-4 py-3">All-in-One Pricing</td>
              <td className="px-4 py-3 text-[#09ae9b]">✓</td>
              <td className="px-4 py-3 text-red-400">✕</td>
              <td className="px-4 py-3 text-red-400">✕</td>
            </tr>
            <tr className="border-t border-[#316862]">
              <td className="px-4 py-3">50+ Expressive Voices</td>
              <td className="px-4 py-3 text-[#09ae9b]">✓</td>
              <td className="px-4 py-3 text-[#09ae9b]">✓</td>
              <td className="px-4 py-3 text-red-400">✕</td>
            </tr>
            <tr className="border-t border-[#316862]">
              <td className="px-4 py-3">Real-time Analytics</td>
              <td className="px-4 py-3 text-[#09ae9b]">✓</td>
              <td className="px-4 py-3 text-[#09ae9b]">✓</td>
              <td className="px-4 py-3 text-red-400">✕</td>
            </tr>
            <tr className="border-t border-[#316862]">
              <td className="px-4 py-3">Emotion & Reasoning</td>
              <td className="px-4 py-3 text-[#09ae9b]">✓</td>
              <td className="px-4 py-3 text-red-400">✕</td>
              <td className="px-4 py-3 text-red-400">✕</td>
            </tr>
            <tr className="border-t border-[#316862]">
              <td className="px-4 py-3">WebRTC Streaming</td>
              <td className="px-4 py-3 text-[#09ae9b]">✓</td>
              <td className="px-4 py-3 text-red-400">✕</td>
              <td className="px-4 py-3 text-red-400">✕</td>
            </tr>
            <tr className="border-t border-[#316862]">
              <td className="px-4 py-3">No Hidden Fees</td>
              <td className="px-4 py-3 text-[#09ae9b]">✓</td>
              <td className="px-4 py-3 text-red-400">✕</td>
              <td className="px-4 py-3 text-red-400">✕</td>
            </tr>
            <tr className="border-t border-[#316862]">
              <td className="px-4 py-3">5 Free Minutes Monthly</td>
              <td className="px-4 py-3 text-[#09ae9b]">✓</td>
              <td className="px-4 py-3 text-[#09ae9b]">✓</td>
              <td className="px-4 py-3 text-red-400">✕</td>
            </tr>
            <tr className="border-t border-[#316862]">
              <td className="px-4 py-3">Volume Discounts</td>
              <td className="px-4 py-3 text-[#09ae9b]">✓</td>
              <td className="px-4 py-3 text-[#09ae9b]">✓</td>
              <td className="px-4 py-3 text-red-400">✕</td>
            </tr>
            <tr className="border-t border-[#316862]">
              <td className="px-4 py-3">Automation</td>
              <td className="px-4 py-3 text-[#09ae9b]">✓</td>
              <td className="px-4 py-3 text-red-400">✕</td>
              <td className="px-4 py-3 text-red-400">✕</td>
            </tr>
            <tr className="border-t border-[#316862]">
              <td className="px-4 py-3">No-Code / Developer Friendly</td>
              <td className="px-4 py-3 text-[#09ae9b]">✓</td>
              <td className="px-4 py-3 text-red-400">✕</td>
              <td className="px-4 py-3 text-red-400">✕</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Competitor Comparison Section */}
      <section className="mt-8">
        <h3 className="text-[22px] font-bold heading-font mb-6">Why Choose VoiceCake Over VAPI.ai, Make.com, and n8n?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#183431] rounded-lg p-6 border border-[#316862]">
            <h4 className="text-lg font-bold heading-font mb-3 text-[#09ae9b]">vs VAPI.ai</h4>
            <ul className="space-y-2 text-sm text-[#90cbc4]">
              <li>• Unified voice automation platform</li>
              <li>• Built-in CRM, WhatsApp, SMS integrations</li>
              <li>• More affordable pricing structure</li>
              <li>• No-code automation workflows</li>
              <li>• Better customer support</li>
            </ul>
          </div>
          <div className="bg-[#183431] rounded-lg p-6 border border-[#316862]">
            <h4 className="text-lg font-bold heading-font mb-3 text-[#09ae9b]">vs Make.com</h4>
            <ul className="space-y-2 text-sm text-[#90cbc4]">
              <li>• Specialized in voice AI automation</li>
              <li>• Ultra-realistic voice agents</li>
              <li>• Voice-specific workflow tools</li>
              <li>• Better voice quality and latency</li>
              <li>• Voice-first design approach</li>
            </ul>
          </div>
          <div className="bg-[#183431] rounded-lg p-6 border border-[#316862]">
            <h4 className="text-lg font-bold heading-font mb-3 text-[#09ae9b]">vs n8n</h4>
            <ul className="space-y-2 text-sm text-[#90cbc4]">
              <li>• Simpler voice automation setup</li>
              <li>• Pre-built voice AI templates</li>
              <li>• Voice-optimized interface</li>
              <li>• Faster time to deployment</li>
              <li>• Voice-specific support team</li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
}
