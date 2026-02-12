'use client';

const PackageCard = ({
  title,
  description,
  tags,
  price,
  image = '/0003.jpg',
  zillowLogo = false,
}: {
  title: string;
  description: string;
  tags: { label: string; icon?: string }[];
  price: string;
  image?: string;
  zillowLogo?: boolean;
}) => (
  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition">
    <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      {zillowLogo && (
        <div className="absolute top-3 right-3 bg-white rounded-lg px-2.5 py-1 shadow-md">
          <span className="text-xs font-bold text-gray-900">ZILLOW</span>
        </div>
      )}
    </div>
    <div className="p-5">
      <h3 className="font-bold text-gray-900 mb-2 text-base leading-tight">{title}</h3>
      <p className="text-sm text-gray-600 mb-3 line-clamp-2 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 font-medium border border-gray-200"
          >
            {tag.icon && <span className="text-xs">{tag.icon}</span>}
            {tag.label}
          </span>
        ))}
      </div>
      <div className="mb-4">
        <p className="text-base font-semibold text-gray-900">{price}</p>
        <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
          or $0 due till close
          <span className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center text-[10px] text-gray-500 font-medium">i</span>
        </p>
      </div>
      <div className="flex items-center justify-end gap-3">
        <button
          type="button"
          className="bg-white border border-gray-300 text-gray-900 px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition h-[38px]"
        >
          View More
        </button>
        <button
          type="button"
          className="bg-black text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition h-[38px]"
        >
          Select
        </button>
      </div>
    </div>
  </div>
);

const SectionHeader = ({ label, icon }: { label: string; icon: React.ReactNode }) => (
  <div className="mb-6">
    <button
      type="button"
      className="inline-flex items-center justify-center gap-2 bg-black text-white py-3 px-6 rounded-lg font-semibold text-sm hover:bg-gray-800 transition"
    >
      <span className="text-orange-500">{icon}</span>
      {label}
    </button>
  </div>
);

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header - WVT style */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img src="/images/logo.png" alt="Canopy Stone" className="h-10 w-auto" />
          </a>
          <div className="flex items-center gap-4">
            <a
              href="/portal/order-now"
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium text-sm"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Order Now
            </a>
            <a
              href="/signin"
              className="flex items-center gap-2 border border-gray-300 bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition"
            >
              Sign In
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Bundle & Save Banner */}
        <div className="mb-8">
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 bg-black text-white py-3 px-6 rounded-lg font-semibold text-sm hover:bg-gray-800 transition"
          >
            <svg className="w-4 h-4 fill-orange-500" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Bundle & Save
          </button>
        </div>

        {/* Package Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <PackageCard
            title="Canopy Essentials – HDR Photography and Cinematic Walkthrough Video"
            description="HDR Photography and Cinematic Walkthrough Video Tour."
            tags={[
              { label: 'Photography', icon: '📷' },
              { label: 'Cinematic Walkthrough', icon: '🎥' },
            ]}
            price="from $260.00"
          />
          <PackageCard
            title="Zillow Showcase Media Bundle"
            description="HDR Photography and Zillow 3D Home Tour for Zillow Showcase listings."
            tags={[
              { label: 'Photography', icon: '📷' },
              { label: 'Residential Zillow 3D', icon: '🏠' },
            ]}
            price="from $259.00"
            zillowLogo={true}
          />
          <PackageCard
            title="Canopy Essentials + Silver Aerial"
            description="Wide angle HDR Photography, Cinematic Walkthrough Video and Silver Aerials."
            tags={[
              { label: 'Cinematic Walkthrough', icon: '🎥' },
              { label: 'Photography', icon: '📷' },
              { label: 'Aerial Silver', icon: '🚁' },
            ]}
            price="from $389.00"
          />
          <PackageCard
            title="Luxury Listing Package"
            description="Premium package with enhanced photography, video, and aerial coverage."
            tags={[
              { label: 'Photography', icon: '📷' },
              { label: 'Cinematic Walkthrough', icon: '🎥' },
              { label: 'Aerial Gold', icon: '🚁' },
            ]}
            price="from $549.00"
          />
          <PackageCard
            title="Canopy Essentials + Social6"
            description="Complete media package with social media video bundle."
            tags={[
              { label: 'Photography', icon: '📷' },
              { label: 'Cinematic Walkthrough', icon: '🎥' },
              { label: 'Social6', icon: '📱' },
            ]}
            price="from $389.00"
          />
          <PackageCard
            title="Complete Media Package"
            description="Everything you need: photography, video, 3D tour, and aerial coverage."
            tags={[
              { label: 'Photography', icon: '📷' },
              { label: 'Cinematic Walkthrough', icon: '🎥' },
              { label: 'Zillow 3D', icon: '🏠' },
              { label: 'Aerial Gold', icon: '🚁' },
            ]}
            price="from $599.00"
          />
        </div>

        {/* Single Services Section */}
        <SectionHeader
          label="Single Services"
          icon={
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          }
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <PackageCard
            title="Vertical AHHA"
            description="Agent on-camera intro/outro for Instagram, TikTok, and Facebook."
            tags={[{ label: 'Vertical AHHA', icon: '📱' }]}
            price="$199.00"
          />
          <PackageCard
            title="Vertical Video"
            description="30–60 second vertical video for social media."
            tags={[{ label: 'Vertical Video', icon: '📱' }]}
            price="$149.00"
          />
          <PackageCard
            title="Walkthrough Video Tour"
            description="Cinematic walkthrough video tour of your listing."
            tags={[{ label: 'Cinematic Walkthrough', icon: '🎥' }]}
            price="from $200.00"
          />
          <PackageCard
            title="Photography"
            description="Wide Angle HDR Photography"
            tags={[{ label: 'Photography', icon: '📷' }]}
            price="from $160.00"
          />
          <PackageCard
            title="Exterior Only"
            description="Photography of the Exterior Only"
            tags={[{ label: 'Exterior Photography', icon: '📷' }]}
            price="$50.00"
          />
        </div>

        {/* Matterport Section */}
        <SectionHeader
          label="Matterport"
          icon={
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          }
        />

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <PackageCard
            title="Matterport 3D Tour + Floorplan"
            description="Matterport 3D Tour + Floorplan."
            tags={[{ label: 'Matterport 3D', icon: '🏠' }, { label: 'Floorplan', icon: '📐' }]}
            price="from $199.00"
          />
          <PackageCard
            title="Matterport 3D Tour + Photography + Floorplan"
            description="Matterport 3D Tour + Photography + Floorplan."
            tags={[
              { label: 'Matterport 3D', icon: '🏠' },
              { label: 'Photography', icon: '📷' },
              { label: 'Floorplan', icon: '📐' },
            ]}
            price="from $299.00"
          />
          <PackageCard
            title="Matterport 3D Tour + Photography + Walkthrough Video + Floorplan"
            description="Full package with 3D tour, photography, and walkthrough video."
            tags={[
              { label: 'Matterport 3D', icon: '🏠' },
              { label: 'Photography', icon: '📷' },
              { label: 'Cinematic Walkthrough', icon: '🎥' },
              { label: 'Floorplan', icon: '📐' },
            ]}
            price="from $449.00"
          />
        </div>

        {/* Commercial Listings Section */}
        <SectionHeader
          label="Commercial Listings"
          icon={
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          }
        />

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <PackageCard
            title="Commercial Listing Package (1-Hour On-Site)"
            description="Ground level HDR photography and walkthrough video in one hour."
            tags={[{ label: 'Commercial', icon: '🏢' }]}
            price="$250.00"
          />
          <PackageCard
            title="Commercial Listing Package (2-Hours On-Site)"
            description="HDR photography and walkthrough video in two hours on site."
            tags={[{ label: 'Commercial', icon: '🏢' }]}
            price="$500.00"
          />
        </div>

        {/* Photography Section */}
        <SectionHeader
          label="Photography"
          icon={
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          }
        />

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <PackageCard
            title="Wide Angle HDR Photography"
            description="Wide Angle HDR Photography"
            tags={[{ label: 'Photography', icon: '📷' }]}
            price="from $160.00"
          />
          <PackageCard
            title="Exterior Only"
            description="Photography of the Exterior Only"
            tags={[{ label: 'Exterior Photography', icon: '📷' }]}
            price="$50.00"
          />
        </div>

        {/* Aerial/Drone Section */}
        <SectionHeader
          label="Aerial/Drone"
          icon={
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          }
        />

        <div className="grid md:grid-cols-3 gap-6">
          <PackageCard
            title="Aerial Only - Gold"
            description="10 photographs and 1-2 minutes of video. Great for properties with many outdoor amenities."
            tags={[{ label: 'Aerial Gold', icon: '🚁' }]}
            price="$299.00"
          />
          <PackageCard
            title="Aerial Only - Bronze"
            description="4 Photographs from the sky of your property"
            tags={[{ label: 'Aerial Bronze', icon: '🚁' }]}
            price="$149.00"
          />
          <PackageCard
            title="Aerial Only - Silver"
            description="Silver Aerial 5 HDR Photos and 3 video clips"
            tags={[{ label: 'Aerial Silver', icon: '🚁' }]}
            price="$199.00"
          />
        </div>
      </main>
    </div>
  );
}
