import React, { useState } from "react";
import { ChevronDown,ChevronUp } from "lucide-react";

function Faqs(){
    const queries=[
       {
        'id':1,
        question:'How do I know my booking was confirmed?',
        answer:'Once your booking is complete, you’ll receive an instant confirmation via email and SMS with your booking details and reference number.',
        image:'./assets/hero_bg.png'
       },
       {
        'id':2,
        question:'Is this platform only for temple bookings?',
         answer:'No. Along with temple bookings, we also assist with accommodations, transportation, travel itineraries, and emergency support services in the area.',
         image:'./assets/hero_image.png'
       },
       {
        'id':3,
        question:'Can I also book travel tickets (bus, train, cab) here?',
         answer:'Yes, you can plan and book your travel along with your temple visit. We provide options for buses, trains, cabs, and even local transport arrangements.',
         image:'./assets/flight.png'
       },
       {
        'id':4,
        question:'What if I need medical help during my trip?',
         answer:'Our platform connects you with nearby hospitals, clinics, and emergency services. You’ll also find 24x7 helpline support for urgent assistance.',
         image:'./assets/medical-result.png'
       },
       {
        'id':5,
        question:'Is my personal information safe on this platform?',
         answer:'Yes, we follow strict security measures to protect your personal and payment details. All transactions are encrypted and secure.',
         image:'./assets/shield.png'
       },

    ]

    const[accordions,setaccordions]=useState({});
    const[activeimage,setactiveimage]=useState(null);

    const handler=(item)=>{
        setaccordions((prev)=>({...prev,[item.id]:!prev[item.id]}));
        setactiveimage(item.image);
    };

    return(
        <div className="faq_main ">
            <div className="text-xl font-bold flex justify-center ">
                Begin Your Journey
            </div>

            <div className="faq-container flex flex-row justify-between items-center my-20 mx-32">

                <div>
                    {
                        queries.map((item)=>{
                            return (
                    <div className="accordion">
                     <button onClick={()=>{handler(item)}} className="accoridion p-8 shadow-md hover:shadow-xl my-4 bg-blue-100 hover:bg-blue-200" style={{width:'600px', height:'80px'}}>
                        <div className="flex flex-row justify-between">
                          <p>{item.question}</p>
                          <p>{accordions[item.id]?<ChevronUp/>:<ChevronDown/>}</p>
                        </div>
                    </button>
                    { accordions[item.id]&&(
                        <div className="bg-blue-50 rounded" style={{width:'600px'}}>
                            <p className="p-12">
                            {item.answer} 
                            </p>
                        </div>
                        )}
                    </div>
                            );
                        })
                    }

                </div>

                <div className="items-center justify-center">
                    <img src={activeimage} width='500px'  />
                </div>

            </div>

        </div>
    )
}

export {Faqs}; 