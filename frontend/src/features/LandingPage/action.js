import {
    api,
    addActionLoader,
    removeActionLoader,
    apiEndPoints,
} from '../../api';

export const ADD_BILLING_ADDRESS = `ADD_BILLING_ADDRESS`;
export const GET_PICKUP_SERVICES = 'GET_PICKUP_SERVICES';
export const GET_ADDRESS_BY_CITY = 'GET_ADDRESS_BY_CITY';
export const GET_DELIVERY_SERVICES = 'GET_DELIVERY_SERVICES';
export const GET_HANDLING_SERVICES = 'GET_HANDLING_SERVICES';
export const POST_SAVE_INFO = 'POST_SAVE_INFO';
export const POST_EDIT_INFO = 'POST_EDIT_INFO';
export const GET_USER_FREIGHT_CHECK = "GET_USER_FREIGHT_CHECK";

const getPickupservice = (payload) => {
    return {
        type: GET_PICKUP_SERVICES,
        payload: payload.data.pickupServices,
    }
};

const getAddressByCity = (payload) => {
    return {
        type: GET_ADDRESS_BY_CITY,
        payload: payload,
    }
};
const getDeliveryservice = (payload) => {
    return {
        type: GET_DELIVERY_SERVICES,
        payload: payload.data.deliveryServices,
    }
};
const getHandleingservice = (payload) => {
    return {
        type: GET_HANDLING_SERVICES,
        payload: payload.data.HandlingType,
    }
};
const postSaveInfo = (payload) => {
    return {
        type: POST_SAVE_INFO,
        payload: payload,
    }
};
const postEditInfo = (payload) => {
    return {
        type: POST_EDIT_INFO,
        payload: payload,
    }
};
const getUserFreightCheck = (payload) => {
    return {
        type: GET_USER_FREIGHT_CHECK,
        payload: payload.data,
    };
};

export const postAddBillingAddress = (payload) => async (dispatch) => {
    try {
        dispatch(addActionLoader(ADD_BILLING_ADDRESS));
        await api.post(
            apiEndPoints.shipments,
            payload
        );

    } catch (error) {
        const { response: { data = {} } = {} } = error;
        return data;
    } finally {
        dispatch(removeActionLoader(ADD_BILLING_ADDRESS));
    }
};

export const getPickUpServices = () => async (dispatch) => {
    try {
        const response = await api.get(
            apiEndPoints.getPickupService(),
        );
        dispatch(getPickupservice(response))

    } catch (error) {
        const { response: { data = {} } = {} } = error;
        return data;
    }
}

export const getAddressByCityOrZip = (payload) => async (dispatch) => {
    try {
        const response = await api.post(apiEndPoints.getCityZipAddress(), { name: payload });
        dispatch(getAddressByCity(response))
    } catch (error) {
        const { response: { data = {} } = {} } = error;
        return data;
    }
}

export const getDeliveryServiceData = () => async (dispatch) => {
    try {
        const response = await api.get(
            apiEndPoints.getDeliveryService(),
        );
        dispatch(getDeliveryservice(response))

    } catch (error) {
        const { response: { data = {} } = {} } = error;
        return data;
    }
}

export const getHandleingType = () => async (dispatch) => {
    try {
        const response = await api.get(
            apiEndPoints.getHandlingService(),
        );
        dispatch(getHandleingservice(response))

    } catch (error) {
        const { response: { data = {} } = {} } = error;
        return data;
    }
}

export const postGetQuote = (data, router, preset) => async (dispatch) => {
    try {
        const response = await api.post(
            apiEndPoints.postSaveInfo(), data
        );
        await dispatch(postEditInfo({ ...data, preset: preset }))
        await dispatch(postSaveInfo(response.data))
        if (response.status) {
            router.push(`/ltl-quotes/${response?.data?.shipment?.id}`)
        }

    } catch (error) {
        const { response: { data = {} } = {} } = error;
        return data;
    }
}

export const getUserFreightClass = () => async (dispatch) => {
    try {
        const response = await api.get(apiEndPoints.getUserFreightClass());
        dispatch(getUserFreightCheck(response));
    } catch (error) {
        const { response: { data = {} } = {} } = error;
        return data;
    }
};
