'use client';

import { useState } from 'react';

export default function ListingMedia() {
  const [activeTab, setActiveTab] = useState('hdr');

  const tabs = [
    { id: 'hdr', label: 'HDR Photography' },
    { id: 'cinematic', label: 'Cinematic Video' },
    { id: 'aerial', label: 'Aerial/Drone' },
    { id: 'matterport', label: 'Matterport 3D' },
    { id: 'branding', label: 'Branding Essentials' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white z-50 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">
            <span className="text-[#A67C52]">◆</span> CANOPY STONE
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-gray-700 hover:text-[#A67C52] transition font-medium">HOME</a>
            <a href="/services/listing-media" className="text-[#A67C52] font-medium">SERVICES & PRICING</a>
            <a href="/portfolio" className="text-gray-700 hover:text-[#A67C52] transition font-medium">PORTFOLIO</a>
            <a href="/getting-ready" className="text-gray-700 hover:text-[#A67C52] transition font-medium">GETTING READY</a>
            <button className="bg-[#A67C52] text-white px-6 py-2 rounded hover:bg-[#8B6341] transition font-medium">
              SIGN IN
            </button>
          </div>
        </div>
      </nav>

      {/* Tab Navigation */}
      <div className="fixed top-16 w-full bg-[#A67C52] z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-8 overflow-x-auto py-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap font-semibold transition ${
                  activeTab === tab.id
                    ? 'text-white border-b-2 border-white pb-1'
                    : 'text-white opacity-70 hover:opacity-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="pt-36">
        {/* HDR Photography */}
        {activeTab === 'hdr' && (
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <h1 className="text-5xl font-bold text-gray-900 mb-8"><span className="text-[#A67C52]">HDR</span> PHOTOGRAPHY</h1>
              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <div>
                  <p className="text-gray-700 mb-6 leading-relaxed text-lg">Utilizes multiple exposures to capture the high and low range of light and dark in every frame, to showcase all of the details that come together to sell your listing.</p>
                  <p className="text-gray-700 mb-6 leading-relaxed text-lg">HDR stands for High Dynamic Range photography – and with this 5-exposure technique, our photographer is able to photograph the details in each room, to balance the lighting naturally without using flash photography.</p>
                  <p className="text-gray-700 mb-8 leading-relaxed text-lg">That HDR multi-exposure process gives us the ability to blend out lens flares, dark shadows and other exposure issues — with just five clicks of our camera!</p>
                  
                  <div className="bg-[#A67C52] text-white p-4 rounded mb-8">
                    <p className="font-bold">Starting at $160, or bundle and save with our Cinematic Walkthrough Video, starting at $260!</p>
                  </div>
                  
                  <table className="w-full mb-8 border border-gray-300">
                    <thead className="bg-gray-900 text-white">
                      <tr>
                        <th className="p-3 text-left">Square Footage</th>
                        <th className="p-3 text-left">HDR Photography</th>
                        <th className="p-3 text-left bg-[#A67C52]">HDR Photos + Video Bundle</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-3 text-gray-900">0 - 2,000</td>
                        <td className="p-3 text-gray-900">$160.00</td>
                        <td className="p-3 bg-gray-100 text-gray-900">$260.00</td>
                      </tr>
                      <tr className="border-b bg-gray-50">
                        <td className="p-3 text-gray-900">2,001 - 3,500</td>
                        <td className="p-3 text-gray-900">$175.00</td>
                        <td className="p-3 bg-gray-100 text-gray-900">$275.00</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 text-gray-900">3,001 - 5,000</td>
                        <td className="p-3 text-gray-900">$225.00</td>
                        <td className="p-3 bg-gray-100 text-gray-900">$325.00</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="p-3 text-gray-900">5,001 - 7,500</td>
                        <td className="p-3 text-gray-900">$275.00</td>
                        <td className="p-3 bg-gray-100 text-gray-900">$375.00</td>
                      </tr>
                    </tbody>
                  </table>
                  
                  <p className="text-sm text-gray-600 mb-8">*Pricing based on square footage of the listing. Your brokerage may qualify for discounted rates - contact us to find out!</p>
                  
                  <div className="flex gap-4">
                    <button className="border-2 border-[#A67C52] text-[#A67C52] px-6 py-3 font-bold rounded hover:bg-[#A67C52] hover:text-white transition">
                      SEE OUR PORTFOLIO →
                    </button>
                    <button className="bg-[#A67C52] text-white px-6 py-3 font-bold rounded hover:bg-[#8B6341] transition">
                      ORDER NOW
                    </button>
                  </div>
                </div>
                <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                  <span className="text-gray-500">HDR Photography Sample</span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Cinematic Video */}
        {activeTab === 'cinematic' && (
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <h1 className="text-5xl font-bold text-gray-900 mb-8"><span className="text-[#A67C52]">CINEMATIC</span> WALKTHROUGH VIDEO</h1>
              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                  <span className="text-gray-500">Cinematic Video Sample</span>
                </div>
                <div>
                  <p className="text-gray-700 mb-6 leading-relaxed text-lg">The Cinematic Walkthrough Video offers a fast-paced tour of the entire home, allowing prospective Buyers to not only see every detail, but also get a better understanding of the layout and the flow of the home.</p>
                  <p className="text-gray-700 mb-8 leading-relaxed text-lg">With our unique, cinematic filming and editing style, your viewers will stay engaged and be more likely to watch the video from start to finish!</p>
                  
                  <div className="bg-[#A67C52] text-white p-4 rounded mb-8">
                    <p className="font-bold">Starting at $200, or bundle and save with our HDR Photography, starting at $260!</p>
                  </div>
                  
                  <table className="w-full mb-8 border border-gray-300">
                    <thead className="bg-gray-900 text-white">
                      <tr>
                        <th className="p-3 text-left">Square Footage</th>
                        <th className="p-3 text-left">Cinematic Video</th>
                        <th className="p-3 text-left bg-[#A67C52]">HDR Photos + Video</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-3 text-gray-900">0 - 2,000</td>
                        <td className="p-3 text-gray-900">$200.00</td>
                        <td className="p-3 bg-gray-100 text-gray-900">$275.00</td>
                      </tr>
                      <tr className="border-b bg-gray-50">
                        <td className="p-3 text-gray-900">2,001 - 3,500</td>
                        <td className="p-3 text-gray-900">$200.00</td>
                        <td className="p-3 bg-gray-100 text-gray-900">$325.00</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 text-gray-900">3,501 - 5,000</td>
                        <td className="p-3 text-gray-900">$200.00</td>
                        <td className="p-3 bg-gray-100 text-gray-900">$325.00</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="p-3 text-gray-900">5,001 - 7,500</td>
                        <td className="p-3 text-gray-900">$300.00</td>
                        <td className="p-3 bg-gray-100 text-gray-900">$375.00</td>
                      </tr>
                    </tbody>
                  </table>
                  
                  <div className="flex gap-4">
                    <button className="border-2 border-[#A67C52] text-[#A67C52] px-6 py-3 font-bold rounded hover:bg-[#A67C52] hover:text-white transition">
                      SEE OUR PORTFOLIO →
                    </button>
                    <button className="bg-[#A67C52] text-white px-6 py-3 font-bold rounded hover:bg-[#8B6341] transition">
                      ORDER NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Aerial/Drone */}
        {activeTab === 'aerial' && (
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <h1 className="text-5xl font-bold text-gray-900 mb-8"><span className="text-[#A67C52]">AERIAL</span> PHOTOS & VIDEO</h1>
              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <div>
                  <p className="text-gray-700 mb-6 leading-relaxed text-lg">Your marketing blasts off with drone videography & photography that positions your listing high above the competition (400 feet in the air to be exact!)</p>
                  <p className="text-gray-700 mb-8 leading-relaxed text-lg">Choose between our Bronze (4 aerial photos), Silver (5 aerial photos and 3 video clips), and Gold (8 aerial photos and 1-2 minutes of aerial video) packages.</p>
                  
                  <div className="bg-[#A67C52] text-white p-4 rounded mb-8">
                    <p className="font-bold">Starting at $149 as a standalone service, or add-on starting at $79!</p>
                  </div>
                  
                  <table className="w-full mb-8 border border-gray-300">
                    <thead className="bg-gray-900 text-white">
                      <tr>
                        <th className="p-3 text-left">Aerial Package</th>
                        <th className="p-3 text-left">Standalone</th>
                        <th className="p-3 text-left bg-[#A67C52]">Add On</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-3 font-bold text-gray-900">Bronze</td>
                        <td className="p-3 text-gray-900">$149.00</td>
                        <td className="p-3 bg-gray-100 text-gray-900">$79.00</td>
                      </tr>
                      <tr className="border-b bg-gray-50">
                        <td className="p-3 font-bold text-gray-900">Silver</td>
                        <td className="p-3 text-gray-900">$199.00</td>
                        <td className="p-3 bg-gray-100 text-gray-900">$129.00</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="p-3 font-bold text-gray-900">Gold</td>
                        <td className="p-3 text-gray-900">$299.00</td>
                        <td className="p-3 bg-gray-100 text-gray-900">$229.00</td>
                      </tr>
                    </tbody>
                  </table>
                  
                  <div className="flex gap-4">
                    <button className="border-2 border-[#A67C52] text-[#A67C52] px-6 py-3 font-bold rounded hover:bg-[#A67C52] hover:text-white transition">
                      SEE OUR PORTFOLIO →
                    </button>
                    <button className="bg-[#A67C52] text-white px-6 py-3 font-bold rounded hover:bg-[#8B6341] transition">
                      ORDER NOW
                    </button>
                  </div>
                </div>
                <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                  <span className="text-gray-500">Aerial Drone Photo</span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Matterport 3D */}
        {activeTab === 'matterport' && (
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <h1 className="text-5xl font-bold text-gray-900 mb-8"><span className="text-[#A67C52]">MATTERPORT</span> 3D & FLOOR PLAN</h1>
              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                  <span className="text-gray-500">Matterport 3D Sample</span>
                </div>
                <div>
                  <p className="text-gray-700 mb-6 leading-relaxed text-lg">The next best option to touring the home in person, the Matterport 3D Tour gives prospective Buyers the ability to tour your listing online from anywhere around the world.</p>
                  <p className="text-gray-700 mb-8 leading-relaxed text-lg">All Matterport 3D Tour's also include a two dimensional floor plan with room measurements.</p>
                  
                  <div className="bg-[#A67C52] text-white p-4 rounded mb-8">
                    <p className="font-bold">Starting at $199, or bundle and save!</p>
                  </div>
                  
                  <table className="w-full mb-8 border border-gray-300">
                    <thead className="bg-gray-900 text-white">
                      <tr>
                        <th className="p-3 text-left">Square Footage</th>
                        <th className="p-3 text-left">Matterport 3D</th>
                        <th className="p-3 text-left bg-[#A67C52]">Matterport + HDR</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-3 text-gray-900">0 - 2,000</td>
                        <td className="p-3 text-gray-900">$199.00</td>
                        <td className="p-3 bg-gray-100 text-gray-900">$299.00</td>
                      </tr>
                      <tr className="border-b bg-gray-50">
                        <td className="p-3 text-gray-900">2,001 - 3,500</td>
                        <td className="p-3 text-gray-900">$299.00</td>
                        <td className="p-3 bg-gray-100 text-gray-900">$399.00</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 text-gray-900">3,501 - 5,000</td>
                        <td className="p-3 text-gray-900">$399.00</td>
                        <td className="p-3 bg-gray-100 text-gray-900">$499.00</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="p-3 text-gray-900">5,001 - 7,500</td>
                        <td className="p-3 text-gray-900">$549.00</td>
                        <td className="p-3 bg-gray-100 text-gray-900">$649.00</td>
                      </tr>
                    </tbody>
                  </table>
                  
                  <div className="flex gap-4">
                    <button className="border-2 border-[#A67C52] text-[#A67C52] px-6 py-3 font-bold rounded hover:bg-[#A67C52] hover:text-white transition">
                      SEE OUR PORTFOLIO →
                    </button>
                    <button className="bg-[#A67C52] text-white px-6 py-3 font-bold rounded hover:bg-[#8B6341] transition">
                      ORDER NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Branding Essentials */}
        {activeTab === 'branding' && (
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <h1 className="text-5xl font-bold text-gray-900 mb-4"><span className="text-[#A67C52]">BRANDING</span> ESSENTIALS</h1>
              <p className="text-gray-700 text-lg mb-12 leading-relaxed">Each listing you have is an opportunity to market your brand and connect with your clients. Take advantage of your listings by marketing yourself – you are your brand!</p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-500">Virtual Staging</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">VIRTUAL STAGING</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">Virtual staging can help you sell vacant properties more quickly and for a higher price. By digitally furnishing a space, you can show potential buyers how the space could be used.</p>
                  <p className="text-[#A67C52] font-bold text-lg">$65-$249</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-500">Lux Editing</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">LUX EDITING</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">Deluxe editing for enhanced clarity, greater detail, and clear window views. Stand out from your competition with professional photo enhancement.</p>
                  <p className="text-[#A67C52] font-bold text-lg">$65-$199</p>
                </div>

                <div className="text-center">
                  <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-500">Twilight Edits</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">TWILIGHT EDITS</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">Capture more attention with custom twilight edits turning daytime photos into unique dusk views.</p>
                  <p className="text-[#A67C52] font-bold text-lg">$25-$199</p>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-bold text-[#A67C52] mb-4">CANOPY STONE</h3>
              <p className="text-gray-400">Professional real estate media & marketing for serious agents.</p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">QUICK LINKS</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/" className="hover:text-[#A67C52] transition">Home</a></li>
                <li><a href="/services/listing-media" className="hover:text-[#A67C52] transition">Services</a></li>
                <li><a href="/portfolio" className="hover:text-[#A67C52] transition">Portfolio</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">CONTACT</h3>
              <p className="text-gray-400">contact@canopystone.com</p>
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