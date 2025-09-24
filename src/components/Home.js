import React from "react";
import Services from "./Services";
 function Home(){
    return(
        <div>
        <div className="Hero mx-10 my-20 flex flex-row gap-10  ">
            <div className="Hero_left ">
                <div className="text-3xl pl-[10%] font-semibold">Travel Aggregator</div>
                <form>
                <label htmlFor="search_home"></label>
                <input type="text"id="search_home" className="ml-[15%] mr-4 mt-20 mb-10 px-2 rounded-2xl h-12 w-[500px]  border-2 border-grey " placeholder="search for places,accomodations,travels"></input>
                <button className="px-4 py-2 bg-orange-500 rounded-lg font-semibold hover:bg-orange-700 text-lg " type="submit">Search</button>
                </form>
                <div className="hero_content px-[15%]  ">
                    <span className="italic font-semibold ">"Discover Plan Book. Relax"</span>
                    <p className="py-4">Plan your visit with ease:book temple slots,reserve stays,organize your travel,and access medical services - all in one place.</p>
                </div>
            </div>
            <div className="Hero_right">
                {/* <img className="h-[400px] w-[400px]"src="/hero_image.png"/>
            */}</div>
        </div>
        <Services />
        <div className="bg-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p className="max-w-2xl mx-auto mb-8 text-gray-300">
            We are dedicated to making your pilgrimage and travel experience
            seamless. From booking temple rituals and accommodations to ensuring
            medical safety and travel convenience — we bring all services under
            one platform.
          </p>

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
        </div>
    )
}

export default Home;