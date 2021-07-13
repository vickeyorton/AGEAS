import React from 'react';
import './InsuranceTab.css';



function InsuranceTab() {

    const Tab = [
        {   
    pic:"https://www.ageas.co.uk/globalassets/assets/icons/70x70/car_insurance.png",
    name:"Car Insurance"   
        },
    {   
    pic:"https://www.ageas.co.uk/globalassets/assets/icons/70x70/home_insurance.png",
    name:"Home Insurance"   
        },
    {   
    pic:"https://www.ageas.co.uk/globalassets/assets/icons/70x70/ageas_icons_master_v2_pet_line_option1.png",
    name:"Pet Insurance"   
        },
    {   
    pic:"https://www.ageas.co.uk/globalassets/assets/icons/70x70/business_insurance.png",
    name:"Business Insurance"   
        },
    {   
    pic:"https://www.ageas.co.uk/globalassets/assets/icons/70x70/travel_icon_70x70_purple.png",
    name:"Travel Insurance"   
        },
    {   
    pic:"https://www.ageas.co.uk/globalassets/assets/icons/70x70/bike_insurance.png",
    name:"Motorcycle Insurance"   
        },
    {   
    pic:"https://www.ageas.co.uk/globalassets/assets/icons/70x70/ageas_icons_master_v2_security_insurance_line.png",
    name:"Other Products"   
        },
    ];

    return (
        <div className="Tab-Container">
            {Tab.map((value,index) => {
                return(
                // <div className="Tab-Box" key={index}>
                    <div className="Tab-Card" key={index}>
                        <div className="Tab-Card-Content">
                            <div className="Tab-Card-Logo">
                                <img src={value.pic} alt={value.name}/>
                            </div>
                            <div className="Tab-Card-Text">
                                {value.name}
                            </div>
                        </div>
                    </div>
                // </div>
                )
            })}
        </div>
    )
}

export default InsuranceTab
