'use client';

const PackageCard = ({
  title,
  description,
  tags,
  price,
  image = '/0003.jpg',
  overlayBadge,
}: {
  title: string;
  description: string;
  tags: string[];
  price: string;
  image?: string;
  overlayBadge?: { line1: string; line2: string; red?: boolean };
}) => (
  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition">
    <div className="relative aspect-[4/3] bg-gray-100">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      {overlayBadge && (
        <div className={`absolute inset-0 flex flex-col items-center justify-center bg-black/40 ${overlayBadge.red ? 'border-4 border-red-600' : 'border-4 border-[#A67C52]'}`}>
          <span className="text-white font-bold text-sm tracking-wider uppercase">{overlayBadge.line1}</span>
          <span className="text-white font-semibold text-xs mt-1 uppercase">{overlayBadge.line2}</span>
        </div>
      )}
    </div>
    <div className="p-5">
      <h3 className="font-bold text-gray-900 mb-2 text-base leading-snug">{title}</h3>
      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{description}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((t) => (
          <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 border border-gray-200">
            {t}
          </span>
        ))}
      </div>
      <p className="text-base font-bold text-gray-900">{price}</p>
      <p className="text-xs text-gray-500 mt-1 flex items-center gap-1.5">
        or $0 due till close
        <span className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center text-[10px] font-bold text-gray-500">i</span>
      </p>
      <div className="flex gap-2 mt-4">
        <button type="button" className="flex-1 py-2.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
          View More
        </button>
        <button type="button" className="flex-1 py-2.5 bg-gray-900 text-white rounded-md text-sm font-semibold hover:bg-gray-800">
          Select
        </button>
      </div>
    </div>
  </div>
);

const SectionBar = ({ label, icon }: { label: string; icon?: React.ReactNode }) => (
  <div className="w-full flex items-center justify-center gap-2 bg-black text-white py-3.5 px-4 rounded-lg font-semibold text-sm mb-6">
    {icon}
    {label}
  </div>
);

export default function OrderContent() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-8">
      <SectionBar
        label="Bundle & Save"
        icon={<svg className="w-5 h-5 text-[#C9A06A]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 18.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>}
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <PackageCard
          title="Canopy Essentials – HDR Photography and Cinematic Walkthrough Video"
          description="HDR Photography and Cinematic Walkthrough Video Tour."
          tags={['Photography', 'Cinematic W.']}
          price="from $260.00"
        />
        <PackageCard
          title="Zillow Showcase Media Bundle"
          description="Using Zillow Showcase for your listing? This bundle includes HDR Photography and the Zillow 3D Home Tour that are required for Zillow Showcase."
          tags={['Photography', 'Residential Z.']}
          price="from $259.00"
        />
        <PackageCard
          title="Canopy Essentials + Silver Aerial"
          description="Wide angle HDR Photography, Cinematic Walkthrough Video and Silver Aerials."
          tags={['Cinematic W.', 'Photography', 'Aerial Silver']}
          price="from $389.00"
        />
      </div>

      <SectionBar label="Single Services" icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16"/></svg>} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <PackageCard
          title="Vertical AHHA"
          description="Tap into social media with this Vertical Video! This agent on-camera intro/outro is perfect for Instagram, TikTok, and Facebook."
          tags={['Vertical AHH...']}
          price="$199.00"
        />
        <PackageCard
          title="Vertical Video"
          description="Tap into social media with Vertical Video! Perfect for Instagram, TikTok, and Facebook, this upbeat, 30–60 second video highlights the home."
          tags={['Vertical Video']}
          price="$149.00"
        />
        <PackageCard
          title="Walkthrough Video Tour"
          description="Walkthrough Video Tour"
          tags={['Cinematic W.']}
          price="from $200.00"
        />
        <PackageCard
          title="Photography"
          description="Wide Angle HDR Photography"
          tags={['Photography']}
          price="from $160.00"
        />
        <PackageCard
          title="Exterior Only"
          description="Photography of the Exterior Only"
          tags={['Exterior Phot...']}
          price="$50.00"
        />
      </div>

      <SectionBar
        label="Matterport"
        icon={<svg className="w-5 h-5 text-[#C9A06A]" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>}
      />
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <PackageCard
          title="Matterport 3D Tour + Floorplan"
          description="Matterport 3D Tour + Floorplan."
          tags={['Matterport 3...']}
          price="from $199.00"
        />
        <PackageCard
          title="Matterport 3D Tour + Photography + Floorplan"
          description="Matterport 3D Tour + Photography + Floorplan."
          tags={['Matterport 3...', 'Photography']}
          price="from $299.00"
        />
        <PackageCard
          title="Matterport 3D Tour + Photography + Walkthrough Video + Floorplan"
          description="Matterport 3D Tour + Photography + Walkthrough Video + Floorplan."
          tags={['Matterport 3...', 'Photography', 'Cinematic W...']}
          price="from $449.00"
        />
      </div>

      <SectionBar label="Commercial Listings" icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>} />
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <PackageCard
          title="Commercial Listing Package (1-Hour On-Site)"
          description="Showcase your commercial space effectively with stunning ground level HDR photography and an engaging walkthrough video, all captured in one hour on site."
          tags={['Commercial']}
          price="$250.00"
          overlayBadge={{ line1: 'Commercial Listing', line2: '1-Hour On-Site', red: true }}
        />
        <PackageCard
          title="Commercial Listing Package (2-Hours On-Site)"
          description="Showcase your commercial space effectively with stunning HDR photography and an engaging walkthrough video, all captured in two hours on site."
          tags={['Commercial']}
          price="$500.00"
          overlayBadge={{ line1: 'Commercial Listing', line2: '2-Hours On-Site' }}
        />
      </div>

      <SectionBar label="Photography" icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13v7a2 2 0 01-2 2H7a2 2 0 01-2-2v-7"/></svg>} />
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <PackageCard
          title="Wide Angle HDR Photography"
          description="Wide Angle HDR Photography"
          tags={['Photography']}
          price="from $160.00"
        />
        <PackageCard
          title="Exterior Only"
          description="Photography of the Exterior Only"
          tags={['Exterior Phot...']}
          price="$50.00"
        />
      </div>

      <SectionBar label="Aerial/Drone" icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a7.5 7.5 0 0115 0v1m-15 0h15"/></svg>} />
      <div className="grid md:grid-cols-3 gap-6">
        <PackageCard
          title="Aerial Only - Gold"
          description="10 photographs and 1-2 minutes of video. Great for properties with many outdoor amenities, farms and acreage."
          tags={['Aerial Gold']}
          price="$299.00"
        />
        <PackageCard
          title="Aerial Only - Bronze"
          description="4 Photographs from the sky of your property"
          tags={['Aerial Bronze']}
          price="$149.00"
        />
        <PackageCard
          title="Aerial Only - Silver"
          description="Drone Only - Silver Aerial 5 HDR Photos and 3 video clips"
          tags={['Aerial Silver']}
          price="$199.00"
        />
      </div>
    </main>
  );
}
