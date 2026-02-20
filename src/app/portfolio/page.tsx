import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | Canopy Stone',
  description: 'Portfolio — Cinematographer, FAA Part 107 Drone Pilot, photographer, videographer, Visual Storyteller.',
};

const bioParagraph = `Cinematic media producer and FAA Part 107 drone pilot specializing in aerial and ground video storytelling across environments and locations. Skilled in shot composition, stabilized motion capture, and full production workflows from planning to delivery—including location scouting, color grading, and dynamic motion tracking. Experience ranges from commercial property and real estate media (cinematic aerial and ground footage, Matterport and virtual tours, client workflows and delivery) to environmental storytelling and establishing shots. Brings a technical background and a focus on clear, story-driven visuals.`;

export default function PortfolioPage() {
  return (
    <div
      className="min-h-screen text-gray-700 relative"
      style={{
        background: 'linear-gradient(135deg, #FAFAFA 0%, #F5F0EB 35%, #E8DED4 65%, #8B6341 100%)',
      }}
    >
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center flex-shrink-0">
            <img src="/images/logo.png" alt="Canopy Stone" className="h-16 w-auto" />
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition"
          >
            ← Back to Home
          </Link>
        </div>
      </nav>

      <div className="absolute bottom-0 left-0 w-full h-24 md:h-28 overflow-hidden pointer-events-none z-0">
        <div
          className="absolute bottom-0 left-0 bg-[#8B6341]"
          style={{
            width: '100%',
            height: '100%',
            clipPath: 'polygon(0 100%, 0 30%, 100% 0)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 bg-[#A67C52]"
          style={{
            width: '100%',
            height: '85%',
            clipPath: 'polygon(0 100%, 0 0, 100% 0)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-28 py-14">
        <header className="mb-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Portfolio
          </h1>
          <p className="text-base text-gray-600">
            Cinematographer · FAA Part 107 Drone Pilot · Photographer · Videographer · Visual Storyteller
          </p>
        </header>

        {/* Two videos side by side — bigger than photo grid */}
        <section className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="rounded-xl overflow-hidden shadow-lg aspect-video bg-gray-900">
            <video
              className="w-full h-full object-contain"
              controls
              playsInline
              poster="/images/portfolio/kitchen.png"
            >
              <source src="/videos/portfolio/3014-old-timber-way.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg aspect-video bg-gray-900">
            <video
              className="w-full h-full object-contain"
              controls
              playsInline
              poster="/images/portfolio/aerial-urban.png"
            >
              <source src="/videos/portfolio/drone-video.mp4" type="video/mp4" />
            </video>
          </div>
        </section>

        {/* Portfolio gallery — 4 cols on large, 3 on medium, 2 on small */}
        <section className="mb-12">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[#8B6341] mb-4">
            Work samples
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="rounded-xl overflow-hidden shadow-lg aspect-[4/3]">
              <img
                src="/images/portfolio/hdr-3.png"
                alt="Aerial — property overview"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg aspect-[4/3]">
              <img
                src="/images/portfolio/kitchen.png"
                alt="Open-plan kitchen with island and outdoor view"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg aspect-[4/3]">
              <img
                src="/images/portfolio/living-lake.png"
                alt="Living room with lake view"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg aspect-[4/3]">
              <img
                src="/images/portfolio/aerial-waterfront.png"
                alt="Aerial — waterfront properties"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg aspect-[4/3]">
              <img
                src="/images/portfolio/exterior-white.png"
                alt="Modern white exterior with black-framed windows"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg aspect-[4/3]">
              <img
                src="/images/portfolio/shower.png"
                alt="Modern walk-in shower — marble-look tile, dual rain shower"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg aspect-[4/3]">
              <img
                src="/images/portfolio/bathroom-vanity.png"
                alt="Double vanity bathroom with lake view"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg aspect-[4/3]">
              <img
                src="/images/portfolio/living-lake-view.png"
                alt="Living room with panoramic lake view"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg aspect-[4/3]">
              <img
                src="/images/portfolio/aerial-urban.png"
                alt="Aerial — urban event space and city skyline"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg aspect-[4/3]">
              <img
                src="/images/portfolio/aerial-commercial.png"
                alt="Aerial — commercial property"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg aspect-[4/3]">
              <img
                src="/images/portfolio/kitchen-living-fireplace.png"
                alt="Open-concept kitchen and living with stone fireplace"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg aspect-[4/3]">
              <img
                src="/images/portfolio/entryway-dining.png"
                alt="Entryway and dining room"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8 items-start">
          <div className="rounded-xl overflow-hidden shadow-lg aspect-[4/3] max-w-md">
            <img
              src="/images/portfolio/drone-about.png"
              alt="FAA Part 107 drone pilot — aerial capture"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[#8B6341] mb-3">
              About
            </h2>
            <p className="text-[15px] leading-relaxed text-gray-700">
              {bioParagraph}
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
