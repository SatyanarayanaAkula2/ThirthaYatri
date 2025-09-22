import React from "react";

 function Home(){
    return(
       <div className="Hero px-10 py-20 animate-fallin" style={{ backgroundImage: "url('/hero_bg.png')",
       backgroundRepeat:'no-repeat',
       backgroundSize:'cover',
       
       }}> 
            <div className="Hero_content mr-[40%] animate-fallin">
                <div className="text-3xl pl-[10%] font-semibold">Travel Aggregator</div>
                <form className='searchbar_home'>
                <label htmlFor="search_home"></label>
                <input type="text"id="search_home" className="ml-[15%] mr-4 mt-20 mb-10 px-2 rounded-2xl h-12 w-[500px]  border-2 border-grey " placeholder="search for places,accomodations,travels"></input>
                <button className="px-4 py-2 bg-orange-500 rounded-lg font-semibold hover:bg-orange-700 text-lg " type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                </form>
                <div className="hero_content px-[15%]  ">
                    <span className="italic font-semibold ">"Discover Plan Book. Relax"</span>
                    <p className="py-4">From booking temple visits to planning your trip and ensuring your health and comfort,make every step of your journey effortless and memorable.Plan your visit with ease:book temple slots,reserve stays,organize your travel,and access medical services - all in one place.</p>
                </div>
                <div className='pt-12 pb-2 px-[30%]'>
                <button className="px-4 py-2  bg-orange-500 rounded-lg font-semibold hover:bg-orange-700 text-lg">Know More!</button>
                </div>
        </div>
        </div>
    )
}

export default Home;