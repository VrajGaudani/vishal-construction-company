const initialState = {
    userData: null,
    pickupServices: null,
    deleveryServices: null,
    handlingServices: null,
    editInfo: null,
    saveInfo: null,
    freightClassCheck:null,
    addressByZip: null
}

const shipmentReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_PICKUP_SERVICES":
            return {
                ...state,
                pickupServices: action.payload
            }
        case "GET_DELIVERY_SERVICES":
            return {
                ...state,
                deleveryServices: action.payload
            }
        case "GET_HANDLING_SERVICES":
            return {
                ...state,
                handlingServices: action.payload
            }
        case "POST_EDIT_INFO":
            return {
                ...state,
                editInfo: action.payload
            }
        case "POST_SAVE_INFO":
            return {
                ...state,
                saveInfo: action.payload
            }
        case "GET_USER_FREIGHT_CHECK":
            return {
                ...state,
                freightClassCheck: action.payload
            }
        case "GET_ADDRESS_BY_CITY":
            return {
                ...state,
                addressByZip: action.payload
            }
        default:
            return state
    }
}

export default shipmentReducer;
