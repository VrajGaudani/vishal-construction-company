import { AccountBox } from '@mui/icons-material';
import box from '../../../assets/icons/package-5.png'
import pallet from '../../../assets/icons/package-4.png'
import skid from '../../../assets/icons/package-3.png'
import Bag from '../../../assets/icons/package-2.png'
import bundle from '../../../assets/icons/package-1.png'
import cartoon from '../../../assets/icons/package.png'
import React from "react";

export const delevery = [
    {
        "sort_value": "deliveryappointment",
        "desc": "Delivery Appointment",
        "val": "delivery_appointment"
    },
    {
        "sort_value": "deliveryliftgate",
        "desc": "Delivery Liftgate",
        "val": "delivery_liftgate_service"
    },
    {
        "sort_value": "deliverylimitedaccess",
        "desc": "Delivery Limited Access",
        "val": "delivery_limited_access"
    },
    {
        "sort_value": "residentialdelivery",
        "desc": "Residential Delivery",
        "val": "delivery_residential"
    }
];
export const pickUp = [
    {
        "sort_value": "deliveryappointment",
        "desc": "Delivery Appointment",
        "val": "pickup_appointment"
    },
    {
        "sort_value": "deliveryliftgate",
        "desc": "Delivery Liftgate",
        "val": "pickup_liftgate_service"
    },
    {
        "sort_value": "deliverylimitedaccess",
        "desc": "Delivery Limited Access",
        "val": "pickup_limited_access"
    },
    {
        "sort_value": "residentialdelivery",
        "desc": "Residential Delivery",
        "val": "pickup_residential"
    }
];
export const LinearFeet= [0,0];
export const FreightClass = [
    {id: 1, desc: '50', val: '50'},
    {id: 2, desc: '55', val: '55'},
    {id: 3, desc: '60', val: '60'},
    {id: 4, desc: '65', val: '65'},
    {id: 5, desc: '70', val: '70'},
    {id: 6, desc: '77.5', val: '77.5'},
    {id: 7, desc: '85', val: '85'},
    {id: 8, desc: '92.5', val: '92.5'},
    {id: 9, desc: '100', val: '100'},
    {id: 9, desc: '110', val: '110'},
    {id: 9, desc: '125', val: '125'},
    {id: 9, desc: '150', val: '150'},
    {id: 9, desc: '175', val: '175'},
    {id: 9, desc: '200', val: '200'},
    {id: 9, desc: '250', val: '250'},
    {id: 9, desc: '300', val: '300'},
    {id: 9, desc: '400', val: '400'},
];

export const HandlingType = [
    {id: 1, name: 'Box', img: box},
    {id: 2, name: 'Pallet', img: pallet},
    {id: 3, name: 'Skid', img: skid},
    {id: 5, name: 'Carton', img: cartoon},
];

export const AdditionalInfo = [
    {
        id: "0",
        name: "These Are mixed Commodity pallets",
        keyName: "is_turnable"
    },
    {
        id: "1",
        name: "These Are stackable",
        keyName: "is_stackable"
    }
];

export const ClassDropDown = [
    {
        id: 1,
        name: "1. Explosives 1.1 Explosives With Mass Explosion Hazard . ",
    },
    {
        id: 2,
        name: "1.1 Explosives With Mass Explosion Hazard . ",
    },
    {
        id: 3,
        name: "1.1E Article Containing A Secondary Detonating Explosive Substance Without Means Of Initiating . With A Propelling Charge .",
    },

]

export const SecondaryClassDropDown = [
    {
        id: 1,
        name: "1. Explosives 1.1 Explosives With Mass Explosion Hazard . ",
    },
    {
        id: 2,
        name: "1.1 Explosives With Mass Explosion Hazard . ",
    },
    {
        id: 3,
        name: "1.1E Article Containing A Secondary Detonating Explosive Substance Without Means Of Initiating . With A Propelling Charge .",
    },

]

export const PackGroup = [
    {
        id: 1,
        name: "1. Explosives 1.1 Explosives With Mass Explosion Hazard . ",
    },
    {
        id: 2,
        name: "1.1 Explosives With Mass Explosion Hazard . ",
    },
    {
        id: 3,
        name: "1.1E Article Containing A Secondary Detonating Explosive Substance Without Means Of Initiating . With A Propelling Charge .",
    },

]
