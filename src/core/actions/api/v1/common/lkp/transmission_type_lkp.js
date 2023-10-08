export const ACTION_API_V1_COMMON_LKP_TRANSMISSION_TYPE_LKP_GET_TRANSMISSION_TYPE_DATA_REQUEST = "@V1/COMMON/LKP/LKP_TRANSMISSION_TYPE/GET_TRANSMISSION_TYPE_DATA_REQUEST"
export const ACTION_API_V1_COMMON_LKP_TRANSMISSION_TYPE_LKP_GET_TRANSMISSION_TYPE_DATA_SUCCESS = "@V1/COMMON/LKP/LKP_TRANSMISSION_TYPE/GET_TRANSMISSION_TYPE_DATA_SUCCESS"
export const ACTION_API_V1_COMMON_LKP_TRANSMISSION_TYPE_LKP_GET_TRANSMISSION_TYPE_DATA_FAILED = "@V1/COMMON/LKP/LKP_TRANSMISSION_TYPE/GET_TRANSMISSION_TYPE_DATA_FAILED"

export function getTRANSMISSION_TYPEData(data) {
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // Add any additional headers as needed
        },
        body: JSON.stringify(data),
    })
        .then((respones) => {
            dispatch();
        })
        .catch((error) => {
            console.error('API error:', error);
            throw error;
        });
}
//http://localhost:27017/api/v1/common/lkp/transmission_type_lkp/En/get_transmission_type_data/all
//http://localhost:27017/api/v1/common/lkp/transmission_type_lkp/:langTitle/get_trnasmission_type_data/:suspendStatus




export const ACTION_API_V1_COMMON_LKP_TRANSMISSION_TYPE_LKP_UPDATE_TRANSMISSION_TYPE_DATA_REQUEST = "@V1/COMMON/LKP/LKP_TRANSMISSION_TYPE/UPDATE_TRANSMISSION_TYPE_DATA_REQUEST"
export const ACTION_API_V1_COMMON_LKP_TRANSMISSION_TYPE_LKP_UPDATE_TRANSMISSION_TYPE_DATA_SUCCESS = "@V1/COMMON/LKP/LKP_TRANSMISSION_TYPE/UPDATE_TRANSMISSION_TYPE_DATA_SUCCESS"
export const ACTION_API_V1_COMMON_LKP_TRANSMISSION_TYPE_LKP_UPDATE_TRANSMISSION_TYPE_DATA_FAILED = "@V1/COMMON/LKP/LKP_TRANSMISSION_TYPE/UPDATE_TRANSMISSION_TYPE_DATA_FAILED"

export function updateTRANSMISSION_TYPEData(data) {
    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            // Add any additional headers as needed
        },
        body: JSON.stringify(data),
    })
        .then((respones) => {
            dispatch();
        })
        .catch((error) => {
            console.error('API error:', error);
            throw error;
        });
}
//http://localhost:27017/api/v1/common/lkp/transmission_type_lkp/En/update_transmission_type_data/46166160320
//http://localhost:27017/api/v1/common/lkp/transmission_type_lkp/:langTitle/update_transmission_type_data /:id


export const ACTION_API_V1_COMMON_LKP_TRANSMISSION_TYPE_LKP_INSERT_TRANSMISSION_TYPE_DATA_REQUEST = "@V1/COMMON/LKP/LKP_TRANSMISSION_TYPE/INSERT_TRANSMISSION_TYPE_DATA_REQUEST"
export const ACTION_API_V1_COMMON_LKP_TRANSMISSION_TYPE_LKP_INSERT_TRANSMISSION_TYPE_DATA_SUCCESS = "@V1/COMMON/LKP/LKP_TRANSMISSION_TYPE/INSERT_TRANSMISSION_TYPE_DATA_SUCCESS"
export const ACTION_API_V1_COMMON_LKP_TRANSMISSION_TYPE_LKP_INSERT_TRANSMISSION_TYPE_DATA_FAILED = "@V1/COMMON/LKP/LKP_TRANSMISSION_TYPE/INSERT_TRANSMISSION_TYPE_DATA_FAILED"

export function insertTRANSMISSION_TYPEData(data) {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // Add any additional headers as needed
        },
        body: JSON.stringify(data),
    })
        .then((respones) => {
            dispatch();
        })
        .catch((error) => {
            console.error('API error:', error);
            throw error;
        });
}

// http://localhost:27017/api/v1/common/lkp/transmisison_type_lkp/En/insert_transmission_type_data/
// http://localhost:27017/api/v1/common/lkp/transmission_type_lkp/:langTitle/insert_transmission_type_data /
