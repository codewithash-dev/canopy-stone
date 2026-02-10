'use client';

const PackageCard = ({
  title,
  description,
  tags,
  price,
  image = '/0003.jpg',
}: {
  title: string;
  description: string;
  tags: string[];
  price: string;
  image?: string;
}) => (
  <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition">
    <div className="aspect-[4/3] bg-gray-100">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="p-5">
      <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{description}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((t) => (
          <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">
            {t}
          </span>
        ))}
      </div>
      <p className="text-lg font-semibold text-gray-900">{price}</p>
      <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
        or $0 due till close
        <span className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center text-[10px]">i</span>
      </p>
      <div className="flex gap-2 mt-4">
        <button type="button" className="flex-1 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
          View More
        </button>
        <a
          href="/book-now"
          className="flex-1 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 text-center"
        >
          Select
        </a>
      </div>
    </div>
  </div>
);

const SectionBar = ({ label, icon }: { label: string; icon?: string }) => (
  <button
    type="button"
    className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white py-3 px-4 rounded-lg font-semibold text-sm"
  >
    {icon && <span className="text-lg">{icon}</span>}
    {label}
  </button>
);

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img src="/images/logo.png" alt="Canopy Stone" className="h-10 w-auto" />
          </a>
          <span className="hidden sm:inline text-gray-900 font-semibold">Pricing</span>
          <a
            href="/book-now"
            className="flex items-center gap-2 bg-[#A67C52] text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#8B6341] transition"
          >
            Book Now
          </a>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-6">
          <SectionBar label="Bundle & Save" icon="⚙" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <PackageCard title="Canopy Essentials – HDR Photography and Cinematic Walkthrough Video" description="HDR Photography and Cinematic Walkthrough Video Tour." tags={['Photography', 'Cinematic W.']} price="from $260.00" />
          <PackageCard title="Zillow Showcase Media Bundle" description="HDR Photography and Zillow 3D Home Tour for Zillow Showcase listings." tags={['Photography', 'Residential Z.']} price="from $259.00" />
          <PackageCard title="Canopy Essentials + Silver Aerial" description="Wide angle HDR Photography, Cinematic Walkthrough Video and Silver Aerials." tags={['Cinematic W.', 'Photography', 'Aerial Silver']} price="from $389.00" />
        </div>

        <div className="mb-6">
          <SectionBar label="Single Services" icon="☰" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <PackageCard title="Vertical AHHA" description="Agent on-camera intro/outro for Instagram, TikTok, and Facebook." tags={['Vertical AHH...']} price="$199.00" />
          <PackageCard title="Vertical Video" description="30–60 second vertical video for social media." tags={['Vertical Video']} price="$149.00" />
          <PackageCard title="Walkthrough Video Tour" description="Walkthrough Video Tour" tags={['Cinematic W.']} price="from $200.00" />
          <PackageCard title="Photography" description="Wide Angle HDR Photography" tags={['Photography']} price="from $160.00" />
          <PackageCard title="Exterior Only" description="Photography of the Exterior Only" tags={['Exterior Phot...']} price="$50.00" />
        </div>

        <div className="mb-6">
          <SectionBar label="Matterport" icon="◉" />
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <PackageCard title="Matterport 3D Tour + Floorplan" description="Matterport 3D Tour + Floorplan." tags={['Matterport 3...']} price="from $199.00" />
          <PackageCard title="Matterport 3D Tour + Photography + Floorplan" description="Matterport 3D Tour + Photography + Floorplan." tags={['Matterport 3...', 'Photography']} price="from $299.00" />
          <PackageCard title="Matterport 3D Tour + Photography + Walkthrough Video + Floorplan" description="Full package with 3D tour, photography, and walkthrough video." tags={['Matterport 3...', 'Photography', 'Cinematic W...']} price="from $449.00" />
        </div>

        <div className="mb-6">
          <SectionBar label="Commercial Listings" icon="🏢" />
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <PackageCard title="Commercial Listing Package (1-Hour On-Site)" description="Ground level HDR photography and walkthrough video in one hour." tags={['Commercial']} price="$250.00" />
          <PackageCard title="Commercial Listing Package (2-Hours On-Site)" description="HDR photography and walkthrough video in two hours on site." tags={['Commercial']} price="$500.00" />
        </div>

        <div className="mb-6">
          <SectionBar label="Photography" icon="📷" />
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <PackageCard title="Wide Angle HDR Photography" description="Wide Angle HDR Photography" tags={['Photography']} price="from $160.00" />
          <PackageCard title="Exterior Only" description="Photography of the Exterior Only" tags={['Exterior Phot...']} price="$50.00" />
        </div>

        <div className="mb-6">
          <SectionBar label="Aerial/Drone" icon="🚁" />
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <PackageCard title="Aerial Only - Gold" description="10 photographs and 1-2 minutes of video. Great for properties with many outdoor amenities." tags={['Aerial Gold']} price="$299.00" />
          <PackageCard title="Aerial Only - Bronze" description="4 Photographs from the sky of your property" tags={['Aerial Bronze']} price="$149.00" />
          <PackageCard title="Aerial Only - Silver" description="Silver Aerial 5 HDR Photos and 3 video clips" tags={['Aerial Silver']} price="$199.00" />
        </div>
      </main>
    </div>
  );
}
