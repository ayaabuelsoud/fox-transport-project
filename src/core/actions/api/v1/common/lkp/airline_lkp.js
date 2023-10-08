export const ACTION_API_V1_COMMON_LKP_AIRLINE_LKP_GET_AIRLINE_DATA_REQUEST = "@V1/COMMON/LKP/LKP_AIRLINE/GET_AIRLINE_DATA_REQUEST"
export const ACTION_API_V1_COMMON_LKP_AIRLINE_LKP_GET_AIRLINE_DATA_SUCCESS = "@V1/COMMON/LKP/LKP_AIRLINE/GET_AIRLINE_DATA_SUCCESS"
export const ACTION_API_V1_COMMON_LKP_AIRLINE_LKP_GET_AIRLINE_DATA_FAILED = "@V1/COMMON/LKP/LKP_AIRLINE/GET_AIRLINE_DATA_FAILED"

export function getAirLineData(data) {
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // Add any additional headers as needed
        },
        body: JSON.stringify(data),
    })
        .then((respones)=>{
            dispatch();
        })
        .catch((error) => {
            console.error('API error:', error);
            throw error;
        });
}

//http://localhost:27017/api/v1/common/lkp/airline_lkp/En/get_airline_data/all
//http://localhost:27017/api/v1/common/lkp/airline_lkp/:langTitle/get_airline_data/:suspendStatus


export const ACTION_API_V1_COMMON_LKP_AIRLINE_LKP_INSERT_AIRLINE_DATA_REQUEST = "@V1/COMMON/LKP/LKP_AIRLINE/INSERT_AIRLINE_DATA_REQUEST"
export const ACTION_API_V1_COMMON_LKP_AIRLINE_LKP_INSERT_AIRLINE_DATA_SUCCESS = "@V1/COMMON/LKP/LKP_AIRLINE/INSERT_AIRLINE_DATA_SUCCESS"
export const ACTION_API_V1_COMMON_LKP_AIRLINE_LKP_INSERT_AIRLINE_DATA_FAILED = "@V1/COMMON/LKP/LKP_AIRLINE/INSERT_AIRLINE_DATA_FAILED"

export function insertAirlineData(data) {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // Add any additional headers as needed
        },
        body: JSON.stringify(data),
    })
        .then((respones)=>{
            dispatch();
        })
        .catch((error) => {
            console.error('API error:', error);
            throw error;
        });
}

//http://localhost:27017/api/v1/common/lkp/airline_lkp/En/insert_airline_data/all
//http://localhost:27017/api/v1/common/lkp/airline_lkp/:langTitle/insert_airline_data/:suspendStatus


export const ACTION_API_V1_COMMON_LKP_AIRLINE_LKP_UPDATE_AIRLINE_DATA_REQUEST = "@V1/COMMON/LKP/LKP_AIRLINE/UPDATE_AIRLINE_DATA_REQUEST"
export const ACTION_API_V1_COMMON_LKP_AIRLINE_LKP_UPDATE_AIRLINE_DATA_SUCCESS = "@V1/COMMON/LKP/LKP_AIRLINE/UPDATE_AIRLINE_DATA_SUCCESS"
export const ACTION_API_V1_COMMON_LKP_AIRLINE_LKP_UPDATE_AIRLINE_DATA_FAILED = "@V1/COMMON/LKP/LKP_AIRLINE/UPDATE_AIRLINE_DATA_FAILED"

export function updateAirlineData(data) {
    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            // Add any additional headers as needed
        },
        body: JSON.stringify(data),
    })
        .then((respones)=>{
            dispatch();
        })
        .catch((error) => {
            console.error('API error:', error);
            throw error;
        });
}


//http://localhost:27017/api/v1/common/lkp/airline_lkp/En/update_airline_data/5
//http://localhost:27017/api/v1/common/lkp/airline_lkp/:langTitle/update_airline_data/:id