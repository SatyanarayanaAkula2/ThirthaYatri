import React from "react";

function Guide(){
    const contents=[
        {
            block1:'Click on Signin Button. ? Login with your Credentials or create a new account if your are new.',
            block2:'Search for the Temples. ? Book the tickets from available slots.'
        },
        {
            block1:'Select the accommodations service. ? Filter the accommodations near the place based on price,luxury etc... ? Book the accomodation. ',
            block2:'Select the Travel Service. ? Plan your Journey from choices displayed. ? Book your Journey.'
        },
        {
            block1:'Select the other Services. ? Choose services like Near Medical Services,etc... ? Access those on your need.',
            block2:'Share your Feedback on your Experience. ?'
        }
    ]
    return(
    <div className="guideblock flex flex-col gap-16 m-16">

    <div className="guideblock-heading font-bold italic ">Make Yourself Comfortable with the platform</div>
       
        
        
        {
            contents.map((content,index)=>{
                const conts=content.block1.split('?');
                const conts2=content.block2.split('?');
                return(
                <div key={index} className="steps px-16 my-4">
                 <div className="step_1 flex gap-40 ">
            <div className="content py-16" style={{width:'500px', height:'100px'}}>
            <div className="content  p-8 shadow-md rounded-lg bg-gradient-to-r from-orange-500/30 to-white/70 hover:animate-enlarge align-content ">
                <ul className=" flex flex-col gap-10 list-disc">
                <li>{conts[0]}</li>
                <li>{conts[1]}</li>
                </ul>
            </div>
            </div>
            <div className="image flex-1">
                <img src="./hero_image.png"  style={{width:'600px',height:'400px'}}/>
            </div>
        </div>

        <div className="step_1 flex gap-40 my-8 ">
            <div className="image flex-1">
                <img src="./hero_image.png" style={{width:'600px',height:'400px'}}/>
            </div>
        <div className="content py-16 " style={{width:'500px', height:'100px'}}>
            <div className="content  p-8 shadow-md rounded-lg bg-gradient-to-r from-orange-500/30 to-white/70 hover:animate-enlarge align-content ">
                <ul className=" flex flex-col gap-10 list-disc">
                <li>{conts2[0]}</li>
                <li>{conts2[1]}</li>
                </ul>
            </div>
       </div>
       </div>
       </div>
            )})
            }

        </div>
    );
}
export default Guide;