import React from "react";

 function Home(){
    return(
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
    )
}

export default Home;