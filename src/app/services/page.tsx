'use client';

import Image from 'next/image';

export default function Services() {
    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-black z-50 border-b border-gray-800">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="text-2xl font-bold text-white">
                        <span className="text-[#8B6F47]">◆</span> CANOPY STONE
                    </div>
                    <div className="hidden md:flex items-center gap-8">
                        <a href="/" className="text-white hover:text-[#8B6F47] transition">HOME</a>
                        <a href="/services" className="text-[#8B6F47] hover:text-white transition">SERVICES</a>
                        <a href="/portfolio" className="text-white hover:text-[#8B6F47] transition">PORTFOLIO</a>
                        <a href="/getting-ready" className="text-white hover:text-[#8B6F47] transition">GETTING READY</a>
                        <button className="bg-[#8B6F47] text-white px-6 py-2 rounded hover:bg-[#7A5E3A] transition">
                            SIGN IN
                        </button>
                    </div>
                </div>
            </nav>

            {/* Service Tabs */}
            <div className="fixed top-20 w-full bg-[#8B6F47] z-40">
                <div className="max-w-7xl mx-auto px-6 py-3 flex gap-6 overflow-x-auto">
                    <a href="#hdr" className="text-white font-semibold hover:opacity-80">HDR Photography</a>
                    <a href="#cinematic" className="text-white font-semibold hover:opacity-80">Cinematic Walkthrough Video</a>
                    <a href="#aerial" className="text-white font-semibold hover:opacity-80">Aerial/Drone</a>
                    <a href="#matterport" className="text-white font-semibold hover:opacity-80">Matterport 3D</a>
                    <a href="#branding" className="text-white font-semibold hover:opacity-80">Branding Essentials</a>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative h-96 pt-40 flex items-center justify-center bg-gradient-to-b from-gray-800 to-gray-900">
                <div className="text-center text-white">
                    <h1 className="text-5xl font-bold mb-4">Professional Real Estate Media Services</h1>
                    <p className="text-xl text-gray-300">Everything you need to market your listings and your brand</p>
                </div>
            </section>

            {/* Included With Every Order */}
            <section className="py-20 bg-black">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-white text-center mb-16">Included With Every Order...</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gray-900 p-8 rounded">
                            <h3 className="text-xl font-bold text-white mb-4">✓ Fast Scheduling & Quick Delivery</h3>
                            <p className="text-gray-400">Appointments typically available within 1-3 business days and most media is delivered the next business day.</p>
                        </div>
                        <div className="bg-gray-900 p-8 rounded">
                            <h3 className="text-xl font-bold text-white mb-4">✓ Personalized Property Website</h3>
                            <p className="text-gray-400">Market your listing with a dedicated, personalized property website with built-in lead capture capabilities.</p>
                        </div>
                        <div className="bg-gray-900 p-8 rounded">
                            <h3 className="text-xl font-bold text-white mb-4">✓ Customizable Marketing Toolkit</h3>
                            <p className="text-gray-400">Quickly create branded flyers, postcards, and social media likes for each of your listings.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* HDR Photography */}
            <section id="hdr" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-8"><span className="text-[#8B6F47]">HDR</span> PHOTOGRAPHY</h2>
                    <div className="grid md:grid-cols-2 gap-12 mb-12">
                        <div>
                            <p className="text-gray-600 mb-6">Utilizes multiple exposures to capture the high and low range of light and dark in every frame, to showcase all of the details that come together to sell your listing.</p>
                            <p className="text-gray-600 mb-6">HDR stands for High Dynamic Range photography – and with this 5-exposure technique, your WOW Videographer is able to photograph the details in each room, to balance the lighting naturally without using flash photography.</p>
                            <p className="text-gray-600 mb-8">That HDR multi-exposure process gives us the ability to blend out lens flares, dark shadows and other exposure issues — with just five clicks of our Videographer's camera!</p>
                            <div className="bg-[#8B6F47] text-white p-4 rounded mb-8">
                                <p className="font-bold">Starting at $160, or bundle and save with our Cinematic Walkthrough Video, starting at $260!</p>
                            </div>
                            <table className="w-full mb-8 border border-gray-300">
                                <thead className="bg-black text-white">
                                    <tr>
                                        <th className="p-3 text-left">Square Footage</th>
                                        <th className="p-3 text-left">HDR Photography</th>
                                        <th className="p-3 text-left bg-[#8B6F47]">HDR Photos + Video Bundle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-3">0 - 2,000</td>
                                        <td className="p-3">$160.00</td>
                                        <td className="p-3 bg-gray-100">$260.00</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3">2,001 - 3,500</td>
                                        <td className="p-3">$175.00</td>
                                        <td className="p-3 bg-gray-100">$275.00</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3">3,001 - 5,000</td>
                                        <td className="p-3">$225.00</td>
                                        <td className="p-3 bg-gray-100">$325.00</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="p-3">5,001 - 7,500</td>
                                        <td className="p-3">$275.00</td>
                                        <td className="p-3 bg-gray-100">$375.00</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className="text-sm text-gray-500 mb-8">*Pricing based on square footage of the listing. Your brokerage may qualify for discounted rates - contact us to find out!</p>
                            <div className="flex gap-4">
                                <button className="border-2 border-[#8B6F47] text-[#8B6F47] px-6 py-2 font-bold rounded hover:bg-[#8B6F47] hover:text-white">
                                    SEE OUR PORTFOLIO →
                                </button>
                                <button className="bg-[#8B6F47] text-white px-6 py-2 font-bold rounded hover:bg-[#7A5E3A]">
                                    ORDER NOW
                                </button>
                            </div>
                        </div>
                        <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                            <span className="text-gray-400">HDR Photography Sample Image</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cinematic Video */}
            <section id="cinematic" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-8"><span className="text-[#8B6F47]">CINEMATIC</span> WALKTHROUGH VIDEO</h2>
                    <div className="grid md:grid-cols-2 gap-12 mb-12">
                        <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                            <span className="text-gray-400">Cinematic Video Sample</span>
                        </div>
                        <div>
                            <p className="text-gray-600 mb-6">The Cinematic Walkthrough Video offers a fast-paced tour of the entire home, allowing prospective Buyers to not only see every detail, but also get a better understanding of the layout and the flow of the home.</p>
                            <p className="text-gray-600 mb-8">With our unique, cinematic filming and editing style, your viewers will stay engaged and be more likely to watch the video from start to finish!</p>
                            <div className="bg-[#8B6F47] text-white p-4 rounded mb-8">
                                <p className="font-bold">Starting at $200, or bundle and save with our HDR Photography, starting at $260!</p>
                            </div>
                            <table className="w-full mb-8 border border-gray-300">
                                <thead className="bg-black text-white">
                                    <tr>
                                        <th className="p-3 text-left">Square Footage</th>
                                        <th className="p-3 text-left">Cinematic Walkthrough Video</th>
                                        <th className="p-3 text-left bg-[#8B6F47]">HDR Photos + Walkthrough Video</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-3">0 - 2,000</td>
                                        <td className="p-3">$200.00</td>
                                        <td className="p-3 bg-gray-100">$275.00</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3">2,001 - 3,500</td>
                                        <td className="p-3">$200.00</td>
                                        <td className="p-3 bg-gray-100">$325.00</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3">3,501 - 5,000</td>
                                        <td className="p-3">$200.00</td>
                                        <td className="p-3 bg-gray-100">$325.00</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="p-3">5,001 - 7,500</td>
                                        <td className="p-3">$300.00</td>
                                        <td className="p-3 bg-gray-100">$375.00</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="flex gap-4">
                                <button className="border-2 border-[#8B6F47] text-[#8B6F47] px-6 py-2 font-bold rounded hover:bg-[#8B6F47] hover:text-white">
                                    SEE OUR PORTFOLIO →
                                </button>
                                <button className="bg-[#8B6F47] text-white px-6 py-2 font-bold rounded hover:bg-[#7A5E3A]">
                                    ORDER NOW
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Aerial/Drone */}
            <section id="aerial" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-8"><span className="text-[#8B6F47]">AERIAL</span> PHOTOS & VIDEO</h2>
                    <div className="grid md:grid-cols-2 gap-12 mb-12">
                        <div>
                            <p className="text-gray-600 mb-6">Your marketing blasts off with Wow Video Tours drone videography & photography that positions your listing high above the competition (400 feet in the air to be exact!)</p>
                            <p className="text-gray-600 mb-8">Choose between our Bronze (4 aerial photos), Silver (5 aerial photos and 3 video clips), and Gold (8 aerial photos and 1-2 minutes of aerial video) packages.</p>
                            <div className="bg-[#8B6F47] text-white p-4 rounded mb-8">
                                <p className="font-bold">Starting at $149 as a standalone service, or add-on to your existing order starting at $79!</p>
                            </div>
                            <table className="w-full mb-8 border border-gray-300">
                                <thead className="bg-black text-white">
                                    <tr>
                                        <th className="p-3 text-left">Aerial Package</th>
                                        <th className="p-3 text-left">Standalone Pricing</th>
                                        <th className="p-3 text-left bg-[#8B6F47]">Add On Pricing</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-3 font-bold">Bronze</td>
                                        <td className="p-3">$149.00</td>
                                        <td className="p-3 bg-gray-100">$79.00</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-bold">Silver</td>
                                        <td className="p-3">$199.00</td>
                                        <td className="p-3 bg-gray-100">$129.00</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="p-3 font-bold">Gold</td>
                                        <td className="p-3">$299.00</td>
                                        <td className="p-3 bg-gray-100">$229.00</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="flex gap-4">
                                <button className="border-2 border-[#8B6F47] text-[#8B6F47] px-6 py-2 font-bold rounded hover:bg-[#8B6F47] hover:text-white">
                                    SEE OUR PORTFOLIO →
                                </button>
                                <button className="bg-[#8B6F47] text-white px-6 py-2 font-bold rounded hover:bg-[#7A5E3A]">
                                    ORDER NOW
                                </button>
                            </div>
                        </div>
                        <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                            <span className="text-gray-400">Aerial Drone Photo Sample</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Matterport 3D */}
            <section id="matterport" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-8"><span className="text-[#8B6F47]">MATTERPORT</span> 3D & FLOOR PLAN</h2>
                    <div className="grid md:grid-cols-2 gap-12 mb-12">
                        <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                            <span className="text-gray-400">Matterport 3D Tour Sample</span>
                        </div>
                        <div>
                            <p className="text-gray-600 mb-6">The next best option to touring the home in person, the Matterport 3D Tour gives prospective Buyers the ability to tour your listing online from anywhere around the world.</p>
                            <p className="text-gray-600 mb-8">All Matterport 3D Tour's also include a two dimensional floor plan with room measurements.</p>
                            <div className="bg-[#8B6F47] text-white p-4 rounded mb-8">
                                <p className="font-bold">Starting at $199, or bundle and save with our HDR Photography or Cinematic Walkthrough Video!</p>
                            </div>
                            <table className="w-full mb-8 border border-gray-300">
                                <thead className="bg-black text-white">
                                    <tr>
                                        <th className="p-3 text-left">Square Footage</th>
                                        <th className="p-3 text-left">Matterport 3D Tour & Floor Plan</th>
                                        <th className="p-3 text-left bg-[#8B6F47]">Matterport + Floor Plan + HDR Photo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-3">0 - 2,000</td>
                                        <td className="p-3">$199.00</td>
                                        <td className="p-3 bg-gray-100">$299.00</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3">2,001 - 3,500</td>
                                        <td className="p-3">$299.00</td>
                                        <td className="p-3 bg-gray-100">$399.00</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3">3,501 - 5,000</td>
                                        <td className="p-3">$399.00</td>
                                        <td className="p-3 bg-gray-100">$499.00</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="p-3">5,001 - 7,500</td>
                                        <td className="p-3">$549.00</td>
                                        <td className="p-3 bg-gray-100">$649.00</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="flex gap-4">
                                <button className="border-2 border-[#8B6F47] text-[#8B6F47] px-6 py-2 font-bold rounded hover:bg-[#8B6F47] hover:text-white">
                                    SEE OUR PORTFOLIO →
                                </button>
                                <button className="bg-[#8B6F47] text-white px-6 py-2 font-bold rounded hover:bg-[#7A5E3A]">
                                    ORDER NOW
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Branding Essentials */}
            <section id="branding" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-4"><span className="text-[#8B6F47]">BRANDING</span> ESSENTIALS</h2>
                    <p className="text-gray-600 mb-12">Each listing you have is an opportunity to market your brand and connect with your clients. Take advantage of your listings by marketing yourself – you are your brand!</p>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div className="text-center">
                            <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                                <span className="text-gray-400">Virtual Staging Sample</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">VIRTUAL STAGING</h3>
                            <p className="text-gray-600 mb-4">Virtual staging can help you sell vacant properties more quickly and for a higher price. By digitally furnishing a space, you can show potential buyers how the space could be used and help them visualize themselves living there.</p>
                            <p className="text-[#8B6F47] font-bold">$65-$249</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                                <span className="text-gray-400">Lux Editing Sample</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">LUX EDITING</h3>
                            <p className="text-gray-600 mb-4">Deluxe editing for enhanced clarity, greater detail, and clear window views. Stand out from your competition with professional photo enhancement.</p>
                            <p className="text-[#8B6F47] font-bold">$65-$199</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                                <span className="text-gray-400">Twilight Edits Sample</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">TWILIGHT EDITS</h3>
                            <p className="text-gray-600 mb-4">Capture more attention for your listing! Our custom twilight edits turn your daytime, exterior photos into a unique dusk view.</p>
                            <p className="text-[#8B6F47] font-bold">$25-$199</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-[#8B6F47]">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Ready to Elevate Your Listings?</h2>
                    <p className="text-xl text-white mb-8 opacity-90">Professional media that attracts buyers and closes deals.</p>
                    <button className="bg-white text-[#8B6F47] px-8 py-4 text-lg font-bold rounded hover:bg-gray-100">
                        PLACE ORDER NOW
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black text-white py-12">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-12 mb-12">
                        <div>
                            <h3 className="text-xl font-bold text-[#8B6F47] mb-4">CANOPY STONE</h3>
                            <p className="text-gray-400">Professional real estate media & marketing for serious agents.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-white mb-4">QUICK LINKS</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="/" className="hover:text-[#8B6F47] transition">Home</a></li>
                                <li><a href="/services" className="hover:text-[#8B6F47] transition">Services</a></li>
                                <li><a href="/portfolio" className="hover:text-[#8B6F47] transition">Portfolio</a></li>
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