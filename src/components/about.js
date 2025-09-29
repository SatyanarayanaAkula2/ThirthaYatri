import React from "react";

export default function About(){
    return(
        <div className="bg-gray-900 text-white py-12 mt-16">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-2xl font-bold mb-4">About Us</h2>
    <p className="max-w-2xl mx-auto mb-8 text-gray-300">
      We are dedicated to making your pilgrimage and travel experience
      seamless. From booking temple rituals and accommodations to ensuring
      medical safety and travel convenience — we bring all services under
      one platform.
    </p>

    {/* Quick Links Section */}
    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
    <div className="flex justify-center gap-6 mb-8">
      <a href="/" className="hover:text-orange-400">Home</a>
      <a href="/services" className="hover:text-orange-400">Services</a>
      <a href="/guide" className="hover:text-orange-400">Guide</a>
      <a href="/contact" className="hover:text-orange-400">Contact</a>
      <a href="/faq" className="hover:text-orange-400">FAQ</a>
    </div>

    <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
    <p>Email: <a href="mailto:support@thirthayatri.com" className="text-orange-400 underline">support@thirthayatri.com</a></p>
    <p>Phone: <span className="text-orange-400">+91 98765 43210</span></p>
    <p className="mt-2">Address: 123 Pilgrimage Street, Tirupati, India</p>

    {/* Social Media Links */}
    <div className="flex justify-center gap-6 mt-6">
      <a href="#" className="hover:text-orange-400">Facebook</a>
      <a href="#" className="hover:text-orange-400">Twitter</a>
      <a href="#" className="hover:text-orange-400">Instagram</a>
    </div>

    <p className="mt-8 text-gray-500 text-sm">
      © {new Date().getFullYear()} ThirthaYatri. All rights reserved.
    </p>
  </div>
</div>
    );
}