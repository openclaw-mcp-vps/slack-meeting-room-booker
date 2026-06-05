export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          Slack Productivity Tool
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Book meeting rooms directly from{' '}
          <span className="text-[#58a6ff]">Slack messages</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-10 max-w-xl mx-auto">
          RoomBot monitors your Slack conversations for meeting keywords, checks calendar availability in real time, and lets your team book conference rooms without leaving Slack.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-lg"
        >
          Get Started — $29/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No credit card required to try.</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: '🔍', title: 'Smart Detection', desc: 'Detects meeting intent from natural Slack conversations automatically.' },
            { icon: '📅', title: 'Calendar Sync', desc: 'Integrates with Google Calendar and Outlook to check real-time room availability.' },
            { icon: '⚡', title: 'One-Click Booking', desc: 'Interactive Slack buttons let anyone book a room without switching apps.' },
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-3">{f.icon}</div>
              <h3 className="font-semibold text-white mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-4xl font-bold text-white mb-1">$29<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] mb-6">Everything you need for your whole team</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited Slack workspaces',
              'Google Calendar & Outlook integration',
              'Unlimited room bookings',
              'Real-time availability checks',
              'Dashboard for room management',
              'Priority email support',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Start Booking Rooms
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does RoomBot detect meeting conversations?',
              a: 'RoomBot uses keyword and context analysis on Slack messages. When it detects phrases like "let\'s meet", "schedule a call", or "book a room", it proactively suggests available rooms in that channel.',
            },
            {
              q: 'Which calendar systems are supported?',
              a: 'RoomBot integrates with Google Calendar and Microsoft Outlook/Exchange. Setup takes under 5 minutes via OAuth — no IT involvement needed.',
            },
            {
              q: 'Is my Slack data stored or shared?',
              a: 'No. RoomBot only reads messages in channels where it is explicitly invited. Message content is processed in real time and never stored on our servers.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-sm text-[#8b949e]">
        © {new Date().getFullYear()} RoomBot. All rights reserved.
      </footer>
    </main>
  )
}
