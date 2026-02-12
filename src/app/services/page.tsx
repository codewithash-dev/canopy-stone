'use client';

const photoUpgrades = [
  {
    title: 'LUX EDITING',
    price: '$65',
    description: 'Deluxe editing for enhanced clarity, greater detail, and clear window views.',
  },
  {
    title: 'AERIAL/DRONE',
    price: 'BRONZE $79 · SILVER $129 · GOLD $229',
    description:
      'Choose between Bronze (4 aerial photos), Silver (5 aerial photos + 3 video clips), and Gold (8 photos + 1-2 min video).',
  },
  {
    title: 'TWILIGHT EDITS',
    price: 'SINGLE IMAGE $25 · TWO IMAGES $40',
    description: 'Custom twilight edits turn your daylight exterior photos into a unique dusk view.',
  },
  {
    title: 'VIRTUAL STAGING',
    price: '1-3 $35/EACH · 4-7 $30/EACH · 8+ $25/EACH',
    description:
      'Digitally furnish a space to help buyers visualize how the home could be used and lived in.',
  },
  {
    title: 'ZILLOW 3D + FLOOR PLAN',
    price: '$99',
    description:
      'Immersive 3D Home tour plus floor plan. Listings with 3D tours can attract more views.',
  },
  {
    title: 'MEASUREMENTS + FLOOR PLAN',
    price: '$65',
    description: 'Detailed floor plan with room measurements to showcase layout and functionality.',
  },
  {
    title: 'PREMIUM MEASUREMENTS + FLOOR PLAN',
    price: '$89',
    description: 'Premium floor plan includes fixed furniture, appliances, and door swing indicators.',
  },
];

const videoUpgrades = [
  {
    title: 'AH HA LITE',
    price: '$129',
    description:
      'Welcome viewers with a custom intro, highlight video, and call-to-action featuring you on camera.',
  },
  {
    title: 'BIG AH HA',
    price: '$249',
    description: 'All benefits of AH HA Lite with custom narration throughout the highlight video.',
  },
  {
    title: 'VERTICAL VIDEO',
    price: '$99',
    description:
      'Perfect for Reels, TikTok, and Shorts. A 30–60 second vertical highlight video for social media.',
  },
  {
    title: 'SOCIAL6 BUNDLE',
    price: '$129',
    description:
      'Turns your walkthrough into 5 additional videos and a branded lead capture page.',
  },
  {
    title: 'ZILLOW 3D + FLOOR PLAN',
    price: '$99',
    description:
      'Immersive 3D Home tour plus floor plan to increase engagement on your listing.',
  },
  {
    title: 'AERIAL/DRONE',
    price: 'BRONZE $79 · SILVER $129 · GOLD $229',
    description:
      'Add aerial photos or aerial video to your Cinematic Walkthrough package.',
  },
  {
    title: 'TRENDY VIDEO',
    price: '$99',
    description:
      '60-second upbeat edit with a call-to-action and your agent/company branding.',
  },
  {
    title: 'PREMIUM MEASUREMENTS + FLOOR PLAN',
    price: '$89',
    description: 'Premium floor plan includes fixed furniture and door swing indicators.',
  },
];

const PricingTable = ({
  columns,
  rows,
  bannerText,
}: {
  columns: string[];
  rows: string[][];
  bannerText?: string;
}) => (
  <div className="mb-6">
    <div className="grid grid-cols-3 gap-2">
      {columns.map((column, index) => (
        <div key={column} className="text-center flex flex-col">
          <div className={`${bannerText && index === 2 ? '' : 'opacity-0'} h-6 mb-1`}>
            {bannerText && index === 2 ? (
          <div className="h-6 bg-[#A67C52] text-white text-[9px] font-bold uppercase tracking-[0.08em] px-2 flex items-center justify-center gap-2 leading-none text-center">
                <span className="inline-block h-3 w-3 border border-white/70 rounded-sm" />
                {bannerText}
              </div>
            ) : null}
          </div>
          <div className="min-h-[40px] bg-black text-white text-[11px] font-bold uppercase tracking-[0.08em] px-2 py-2 flex items-center justify-center text-center leading-tight">
            {column}
          </div>
        </div>
      ))}
    </div>
    <div className="mt-2 space-y-2">
      {rows.map((row, rowIndex) => (
        <div key={row[0]} className="grid grid-cols-3 gap-2 text-center text-[15px] text-gray-900">
          {row.map((cell, cellIndex) => (
            <div
              key={`${rowIndex}-${cellIndex}`}
              className={`py-3 ${rowIndex % 2 === 1 ? 'bg-gray-200' : 'bg-white'}`}
            >
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

const brandingItems = [
  {
    title: 'VERTICAL VIDEO',
    price: '$99',
    description:
      'Vertical highlight video for social platforms (Reels, TikTok, Shorts) with your branding.',
  },
  {
    title: 'AH HA LITE',
    price: '$129',
    description:
      'Custom intro + highlight video featuring you on camera to build brand awareness.',
  },
  {
    title: 'VERTICAL AH HA',
    price: '$149',
    description:
      'AH HA Lite formatted as a Vertical Video for social media networks.',
  },
  {
    title: 'BIG AH HA',
    price: '$249',
    description:
      'All benefits of AH HA Lite with custom narration throughout the highlight video.',
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-black z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <a href="/" className="flex items-center gap-4 text-2xl font-bold text-white">
            <img src="/images/logo.png" alt="Canopy Stone logo" className="h-14 w-auto" />
          </a>
          <div className="hidden md:flex items-center gap-8 text-[13px] tracking-wide">
            <a href="/" className="text-white/70 hover:text-white transition font-semibold">HOME</a>
            <a href="/services" className="text-white font-semibold">SERVICES & PRICING</a>
            <a href="/knowledge-base" className="text-white/70 hover:text-white transition font-semibold">KNOWLEDGE BASE</a>
            <a
              href="/order"
              className="bg-[#A67C52] text-white px-6 py-2 rounded-md hover:bg-[#8B6341] transition font-semibold"
            >
              PLACE ORDER / SIGN-IN
            </a>
          </div>
        </div>
      </nav>

      <div className="pt-20 bg-[#A67C52] text-white sticky top-[72px] z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative -top-[14px] flex items-start justify-center gap-6 pt-0 pb-3 text-[10px] font-semibold uppercase tracking-[0.25em] whitespace-nowrap">
            <a href="#hdr" className="hover:text-white/80">HDR Photography</a>
            <a href="#cinematic" className="hover:text-white/80">Cinematic Walkthrough Video</a>
            <a href="#aerial" className="hover:text-white/80">Aerial/Drone</a>
            <a href="#matterport" className="hover:text-white/80">Matterport 3D</a>
            <a href="#branding" className="hover:text-white/80">Branding Essentials</a>
          </div>
        </div>
      </div>

      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Included With Every Order...</h2>
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            <div>
              <div className="grid md:grid-cols-3 gap-8 mb-10">
                {[
                  {
                    title: 'Fast Scheduling & Quick Delivery',
                    text: 'Appointments typically available within 1-3 business days and most media is delivered the next business day.',
                  },
                  {
                    title: 'Personalized Property Website',
                    text: 'Market your listing with a dedicated, personalized property website with built-in lead capture capabilities.',
                  },
                  {
                    title: 'Customizable Marketing Toolkit',
                    text: 'Quickly create branded flyers, postcards, and social media tiles for each of your listings.',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="h-4 w-4 border-2 border-[#A67C52] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-white/70 text-sm">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 max-w-md">
                <div className="h-4 w-4 border-2 border-[#A67C52] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Dedicated Customer Service Team</h3>
                  <p className="text-white/70 text-sm">
                    Have questions or concerns about your appointment, media, or invoices? Our team is just a call or email away!
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img src="/images/home/laptop-phone-overlay.png" alt="Media preview" className="w-full max-w-[420px]" />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <div className="border-t border-gray-300" />
      </div>

      <section id="hdr" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="text-[#A67C52]">HDR</span> PHOTOGRAPHY
            </h2>
            <p className="text-gray-700 mb-4">
              Utilizes multiple exposures to capture the high and low ranges of light and dark in every frame, to showcase all of the details that come together to sell your listing.
            </p>
            <p className="text-gray-700 mb-4">
              HDR stands for High Dynamic Range photography — with this 5-exposure technique, your photographer is able to photograph the details in each room, to balance lighting naturally without flash photography.
            </p>
            <p className="text-gray-700 mb-6">
              That HDR multi-exposure process gives us the ability to blend out lens flares, dark shadows and other exposure issues — with just five clicks of our camera!
            </p>
            <div className="border-l-4 border-[#A67C52] pl-4 font-semibold text-gray-900 mb-6">
              Starting at $160, or bundle and save with our <span className="text-[#A67C52] italic">Cinematic Walkthrough Video</span>, starting at $260!
            </div>
            <PricingTable
              columns={[
                'SQUARE FOOTAGE',
                'HDR PHOTOGRAPHY',
                'HDR PHOTO + WALKTHROUGH VIDEO',
              ]}
              rows={[
                ['0 - 2,000', '$160.00', '$260.00'],
                ['2,001 - 3,500', '$175.00', '$275.00'],
                ['3,501 - 5,000', '$225.00', '$325.00'],
                ['5,001 - 7,500', '$275.00', '$375.00'],
              ]}
              bannerText="BUNDLE & SAVE WITH 'CANOPY ESSENTIALS'"
            />
            <p className="text-xs text-gray-500 mb-6">
              *Pricing based on square footage of the listing. Your brokerage may qualify for discounted rates — contact us to find out!
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/order" className="bg-[#A67C52] text-white px-6 py-2 font-semibold rounded hover:bg-[#8B6341] transition">
                ORDER NOW
              </a>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img src="/0003.jpg" alt="HDR Photography example" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <div className="border-t border-gray-300" />
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-gray-900">Upgrade Your Photo Experience</h3>
          <p className="text-gray-600 mt-2">Browse our available upgrades to take your HDR Photography appointment to the next level!</p>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photoUpgrades.map((item) => (
            <div key={item.title} className="text-center">
              <div className="bg-gray-100 rounded-lg h-44 mb-4" />
              <div className="inline-block bg-[#A67C52] text-black text-xs font-bold px-2 py-1 rounded mb-2">
                {item.price}
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm mb-2">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <div className="border-t border-gray-300" />
      </div>

      <section id="cinematic" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <div className="h-64 flex items-center justify-center text-gray-500">Video Placeholder</div>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="text-[#A67C52]">CINEMATIC</span> WALKTHROUGH VIDEO
            </h2>
            <p className="text-gray-700 mb-4">
              The Cinematic Walkthrough Video offers a fast-paced tour of the entire home, allowing prospective buyers to not only see every detail, but also get a better understanding of the layout and flow of the home.
            </p>
            <p className="text-gray-700 mb-6">
              With our unique, cinematic filming and editing style, your viewers will stay engaged and be more likely to watch the video from start to finish!
            </p>
            <div className="border-l-4 border-[#A67C52] pl-4 font-semibold text-gray-900 mb-6">
              Starting at $200, or bundle and save with our <span className="text-[#A67C52] italic">HDR Photography</span>, starting at $260!
            </div>
            <PricingTable
              columns={[
                'SQUARE FOOTAGE',
                'CINEMATIC WALKTHROUGH VIDEO',
                'HDR PHOTO + WALKTHROUGH VIDEO',
              ]}
              rows={[
                ['0 - 2,000', '$200.00', '$260.00'],
                ['2,001 - 3,500', '$200.00', '$275.00'],
                ['3,501 - 5,000', '$250.00', '$325.00'],
                ['5,001 - 7,500', '$300.00', '$375.00'],
              ]}
              bannerText="BUNDLE & SAVE WITH 'CANOPY ESSENTIALS'"
            />
            <p className="text-xs text-gray-500 mb-6">
              *Pricing based on square footage of the listing. Your brokerage may qualify for discounted rates — contact us to find out!
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/order" className="bg-[#A67C52] text-white px-6 py-2 font-semibold rounded hover:bg-[#8B6341] transition">
                ORDER NOW
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <div className="border-t border-gray-300" />
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-gray-900">Upgrade Your Video Experience</h3>
          <p className="text-gray-600 mt-2">Take advantage of available add-ons for your Cinematic Walkthrough Video appointment!</p>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoUpgrades.map((item) => (
            <div key={item.title} className="text-center">
              <div className="bg-gray-100 rounded-lg h-44 mb-4" />
              <div className="inline-block bg-[#A67C52] text-black text-xs font-bold px-2 py-1 rounded mb-2">
                {item.price}
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm mb-2">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <div className="border-t border-gray-300" />
      </div>

      <section id="aerial" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="text-[#A67C52]">AERIAL</span> PHOTOS & VIDEO
            </h2>
            <p className="text-gray-700 mb-4">
              Your marketing blasts off with drone videography & photography that positions your listing high above the competition (400 feet in the air to be exact)!
            </p>
            <p className="text-gray-700 mb-6">
              Choose between Bronze (4 aerial photos), Silver (5 aerial photos and 3 video clips), and Gold (8 aerial photos and 1-2 minutes of aerial video) packages.
            </p>
            <div className="border-l-4 border-[#A67C52] pl-4 font-semibold text-gray-900 mb-6">
              Starting at $149 as a standalone service, or add-on to your existing order starting at $79!
            </div>
            <PricingTable
              columns={['AERIAL PACKAGE', 'STANDALONE PRICING', 'ADD ON PRICING']}
              rows={[
                ['BRONZE', '$149.00', '$79.00'],
                ['SILVER', '$199.00', '$129.00'],
                ['GOLD', '$299.00', '$229.00'],
              ]}
            />
            <div className="flex flex-wrap gap-4">
              <a href="/order" className="bg-[#A67C52] text-white px-6 py-2 font-semibold rounded hover:bg-[#8B6341] transition">
                ORDER NOW
              </a>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img src="/0003.jpg" alt="Aerial example" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <div className="border-t border-gray-300" />
      </div>

      <section id="matterport" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <div className="h-64 flex items-center justify-center text-gray-500">Matterport Preview</div>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="text-[#A67C52]">MATTERPORT</span> 3D & FLOOR PLAN
            </h2>
            <p className="text-gray-700 mb-4">
              The next best option to touring the home in person, the Matterport 3D Tour gives buyers the ability to tour your listing online from anywhere around the world.
            </p>
            <p className="text-gray-700 mb-6">
              All Matterport 3D Tours also include a two dimensional floor plan with room measurements.
            </p>
            <div className="border-l-4 border-[#A67C52] pl-4 font-semibold text-gray-900 mb-6">
              Starting at $199, or bundle and save with our <span className="text-[#A67C52] italic">HDR Photography</span> or <span className="text-[#A67C52] italic">Cinematic Walkthrough Video</span>!
            </div>
            <PricingTable
              columns={[
                'SQUARE FOOTAGE',
                'MATTERPORT 3D TOUR & FLOOR PLAN',
                'MATTERPORT + FLOOR PLAN + HDR PHOTO',
              ]}
              rows={[
                ['0 - 2,000', '$199.00', '$299.00'],
                ['2,001 - 3,500', '$299.00', '$399.00'],
                ['3,501 - 5,000', '$399.00', '$499.00'],
                ['5,001 - 7,500', '$549.00', '$649.00'],
              ]}
            />
            <p className="text-xs text-gray-500 mb-6">*Pricing based on square footage of the listing.</p>
            <div className="flex flex-wrap gap-4">
              <a href="/order" className="bg-[#A67C52] text-white px-6 py-2 font-semibold rounded hover:bg-[#8B6341] transition">
                ORDER NOW
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="branding" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="text-[#A67C52]">BRANDING</span> ESSENTIALS
          </h2>
          <p className="text-gray-700 mb-10">
            Each listing you have is an opportunity to market your brand and connect with your clients. Take advantage of your listings by marketing yourself — you are your brand!
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {brandingItems.map((item) => (
              <div key={item.title} className="text-center">
                <div className="bg-gray-100 rounded-lg h-40 mb-4" />
                <div className="inline-block bg-[#A67C52] text-black text-xs font-bold px-2 py-1 rounded mb-2">
                  {item.price}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm mb-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="inline-block bg-[#A67C52] text-white text-xs font-semibold px-3 py-1 rounded mb-4">
              LOOKING FOR MORE INFO?
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">SEND US A MESSAGE</h2>
            <div className="h-1 w-12 bg-[#A67C52] mb-4" />
            <p className="text-gray-700 mb-6">
              Send us a quick message and we&apos;ll be happy to respond as soon as possible with more information.
            </p>
            <p className="text-gray-700">
              For a quicker response during business hours, feel free to contact our home office.
            </p>
          </div>
          <form className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold text-gray-700">I would like to chat about...</label>
                <select className="mt-2 w-full rounded border border-gray-300 px-3 py-2 focus:border-[#A67C52] focus:outline-none">
                  <option>Custom Content Videos</option>
                  <option>Services & Pricing</option>
                  <option>Scheduling</option>
                  <option>Editing & Support</option>
                  <option>Billing & Payments</option>
                  <option>Marketing</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700">Email</label>
                <input type="email" className="mt-2 w-full rounded border border-gray-300 px-3 py-2 focus:border-[#A67C52] focus:outline-none" />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700">Name</label>
                <input className="mt-2 w-full rounded border border-gray-300 px-3 py-2 focus:border-[#A67C52] focus:outline-none" />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700">Please choose your area</label>
                <select className="mt-2 w-full rounded border border-gray-300 px-3 py-2 focus:border-[#A67C52] focus:outline-none">
                  <option>- Choose Your Location -</option>
                  <option>NC</option>
                  <option>SC</option>
                  <option>GA</option>
                  <option>VA</option>
                  <option>TN</option>
                  <option>FL</option>
                  <option>WV</option>
                  <option>OK</option>
                  <option>MO</option>
                  <option>LA</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700">Phone</label>
                <input className="mt-2 w-full rounded border border-gray-300 px-3 py-2 focus:border-[#A67C52] focus:outline-none" />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700">Comment or Message</label>
                <textarea className="mt-2 w-full rounded border border-gray-300 px-3 py-2 min-h-[110px] focus:border-[#A67C52] focus:outline-none" />
              </div>
            </div>
            <div className="mt-6">
              <div className="border border-gray-200 rounded-md p-3 inline-flex items-center gap-3 text-sm text-gray-500">
                <span className="h-5 w-5 border border-gray-300 rounded" />
                <span>I am human</span>
              </div>
            </div>
            <button className="mt-6 bg-[#A67C52] text-white px-6 py-3 rounded font-semibold hover:bg-[#8B6341] transition">
              SUBMIT
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-black text-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <img src="/images/logo.png" alt="Canopy Stone logo" className="h-10 w-auto mb-4" />
              <p className="text-gray-400">Canopy Stone is your dedicated partner for real estate media, offering you the tools to help you grow your business!</p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">NAVIGATE</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/" className="hover:text-white transition">Home</a></li>
                <li><a href="/services" className="hover:text-white transition">Services & Pricing</a></li>
                <li><a href="/knowledge-base" className="hover:text-white transition">Knowledge Base</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">LET'S CONNECT</h3>
              <p className="text-gray-400 mb-4">Be the first to know of promotions, new products, and more - subscribe to our newsletter!</p>
              <form className="space-y-3">
                <input className="w-full rounded-full px-4 py-2 text-gray-900" placeholder="Name *" />
                <input className="w-full rounded-full px-4 py-2 text-gray-900" placeholder="Email *" />
                <input className="w-full rounded-full px-4 py-2 text-gray-900" placeholder="Phone *" />
                <input className="w-full rounded-full px-4 py-2 text-gray-900" placeholder="Company Name *" />
                <button className="w-full bg-[#A67C52] text-white py-2 rounded-full font-semibold hover:bg-[#8B6341] transition">
                  Submit
                </button>
              </form>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">CONTACT US</h3>
              <p className="text-gray-400">contact@canopystone.com</p>
              <p className="text-gray-400">13727 SW 152 Street 1027</p>
              <p className="text-gray-400">Miami, FL 33177</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>Privacy Policy • Terms of Service • Cookie Policy</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
