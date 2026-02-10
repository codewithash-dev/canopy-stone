'use client';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white z-50 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 text-2xl font-bold text-gray-900">
            <img src="/images/logo.png" alt="Canopy Stone logo" className="h-10 w-auto" />
            
          </a>
          <div className="hidden md:flex items-center gap-6">
            <a href="/" className="text-gray-700 hover:text-[#A67C52] transition font-medium">HOME</a>
            <a href="/services" className="text-gray-700 hover:text-[#A67C52] transition font-medium">SERVICES & PRICING</a>
            <a href="/portfolio" className="text-gray-700 hover:text-[#A67C52] transition font-medium">PORTFOLIO</a>
            <a href="/getting-ready" className="text-gray-700 hover:text-[#A67C52] transition font-medium">GETTING READY</a>
            <a href="/knowledge-base" className="text-gray-700 hover:text-[#A67C52] transition font-medium">KNOWLEDGE BASE</a>
            <a href="/gift-shop" className="text-gray-700 hover:text-[#A67C52] transition font-medium">GIFT SHOP</a>
            <a
              href="/order"
              className="bg-[#A67C52] text-white px-5 py-2 rounded hover:bg-[#8B6341] transition font-medium"
            >
              PLACE ORDER / SIGN-IN
            </a>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm uppercase tracking-[0.3em] text-[#A67C52] mb-4">Terms of Service</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
          <p className="text-sm text-gray-500">Updated 8/21/2024</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 space-y-10 text-gray-700">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Appointment Availability</h2>
            <p>
              While we typically strive to have availability for most appointments within 1–3 days, choosing certain
              services (ex. Matterport), picking a specific photographer, inclement weather, or increased volume during
              peak season may impact availability and you may see times extend from this window.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Property Readiness</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>The client is expected to have the property camera-ready prior to the arrival window.</li>
              <li>We ask that you review our Getting Ready checklist with your clients.</li>
              <li>If the home is not ready, the property will be shot as-is.</li>
              <li>Notes and preferred angles should be shared in the order comments or on site.</li>
              <li>Absent input, the videographer will use professional judgment to capture the property.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Order Details & Accuracy</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Clients must enter or communicate accurate listing details at the time the order is placed.</li>
              <li>We reserve the right to update incorrect information and adjust pricing accordingly.</li>
              <li>Pricing reflects a single residential dwelling. Commercial or multi-unit properties require a quote.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Reschedule/Cancellation Policy</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Appointments canceled or rescheduled within 24 hours may be subject to a $50 fee.</li>
              <li>Weather-related cancellations (ex. drone unable to fly) will be rescheduled and the fee waived.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Payment Terms</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Beginning 3/1/2024, payment is required before media can be downloaded unless otherwise agreed.
              </li>
              <li>
                Clients receive a link to view watermarked media; once payment is submitted, the watermark is removed.
              </li>
              <li>Accounts with balances over 45 days outstanding may have assets frozen and ordering paused.</li>
              <li>After 90 days of non-payment, accounts may be sent to collections.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Service Area Coverage</h2>
            <p className="mb-4">
              We service up to a 50-mile driving radius from the center of our primary service areas. Appointments
              within the following ranges receive trip fees:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>0 miles to 29.9 miles = $0</li>
              <li>30 miles to 34.9 miles = $25</li>
              <li>35 miles to 39.9 miles = $50</li>
            </ul>
            <p className="mb-4">
              Properties that are 40–50 miles can be scheduled by contacting our office. The following trip fees apply:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>40 miles to 44.9 miles = $75</li>
              <li>45 miles to 49.9 miles = $100</li>
            </ul>
            <p className="mb-4">
              Properties outside the 50-mile radius are beyond our service area, but inquiries can be reviewed.
            </p>
            <p className="mb-2">
              We also service a 10-mile driving radius from the center of each secondary market area at no additional
              charge. Appointments beyond this 10-mile radius are reviewed case-by-case:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Hamilton, OH</li>
              <li>Mason, OH</li>
              <li>West Chester, OH</li>
              <li>Morrow, OH</li>
              <li>Springfield, OH</li>
              <li>Marysville, OH</li>
              <li>Newark, OH</li>
              <li>Celina, OH</li>
              <li>Van Wert, OH</li>
              <li>Findlay, OH</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Hosting</h2>
            <p>
              Media hosting is guaranteed for one year from appointment date, except for Matterport 3D tours and
              floorplans. Matterport media is stored until sold, with a maximum of six months. Once hosting expires,
              the user is responsible for permanent media storage.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Delivery Times</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-gray-900">Next Business Day Following Appointment (before 5 p.m.)</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>HDR Photography</li>
                  <li>Cinematic Walkthrough Video</li>
                  <li>Aerial/Drone Packages</li>
                  <li>Vertical Video & Vertical AH HA</li>
                  <li>Agent on Camera video (AH HA videos)</li>
                  <li>Trendy Video</li>
                  <li>Social6 Package</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Second Business Day Following Appointment (before 5 p.m.)</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Lux Editing</li>
                  <li>Twilight Edits</li>
                  <li>Virtual Staging (if desired photos are chosen the same day)</li>
                  <li>Matterport 3D Tour</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Up to 3 Business Days Following Appointment (before 5 p.m.)</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Floorplans</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Rights and Usage</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-gray-900">Grant of Rights</p>
                <p>
                  You grant Canopy Stone a non-exclusive, perpetual, transferable license to create, reproduce,
                  display, transmit, and distribute the work for portfolio, samples, self-promotions, and commercial
                  partner distribution unless otherwise specified.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Usage Rights</p>
                <p>
                  You may use the images and media for marketing and promoting the property, your listings, your
                  brokerage, and your business. Usage is non-exclusive, non-transferable, and tied to active listing
                  marketing.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Releases, Licenses, and Authorizations</p>
                <p>
                  You represent that you have obtained all necessary permissions for the property and any intellectual
                  property captured in the work, and you agree to indemnify Canopy Stone against claims arising from
                  insufficient clearances.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Indemnification/Hold Harmless</p>
                <p>
                  You agree to indemnify and hold Canopy Stone harmless from claims, damages, costs, or expenses
                  resulting from breach of these terms or negligent acts related to the work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <img src="/images/logo.png" alt="Canopy Stone logo" className="h-10 w-auto mb-4" />
              <p className="text-gray-400">Professional real estate media & marketing for serious agents.</p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">QUICK LINKS</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/" className="hover:text-[#A67C52] transition">Home</a></li>
                <li><a href="/services" className="hover:text-[#A67C52] transition">Services & Pricing</a></li>
                <li><a href="/portfolio" className="hover:text-[#A67C52] transition">Portfolio</a></li>
                <li><a href="/getting-ready" className="hover:text-[#A67C52] transition">Getting Ready</a></li>
                <li><a href="/knowledge-base" className="hover:text-[#A67C52] transition">Knowledge Base</a></li>
                <li><a href="/gift-shop" className="hover:text-[#A67C52] transition">Gift Shop</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">RESOURCES</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/marketing-resources" className="hover:text-[#A67C52] transition">Marketing Resources</a></li>
                <li><a href="/videographer-resources" className="hover:text-[#A67C52] transition">Videographer Resources</a></li>
                <li><a href="/terms-of-service" className="hover:text-[#A67C52] transition">Terms of Service</a></li>
                <li><a href="/privacy-policy" className="hover:text-[#A67C52] transition">Privacy Policy</a></li>
                <li><a href="/cookie-policy" className="hover:text-[#A67C52] transition">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">CONTACT</h3>
              <p className="text-gray-400">contact@canopystone.com</p>
              <p className="text-gray-400">13727 SW 152 Street 1027</p>
              <p className="text-gray-400">Miami, FL 33177</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Canopy Stone. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
