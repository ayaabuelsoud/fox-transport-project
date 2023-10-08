export const ACTION_API_V1_COMMON_LKP_cancel_reason_LKP_GET_cancel_reason_DATA_REQUEST = "@V1/COMMON/LKP/LKP_cancel_reason/GET_cancel_reason_DATA_REQUEST"
export const ACTION_API_V1_COMMON_LKP_cancel_reason_LKP_GET_cancel_reason_DATA_SUCCESS = "@V1/COMMON/LKP/LKP_cancel_reason/GET_cancel_reason_DATA_SUCCESS"
export const ACTION_API_V1_COMMON_LKP_cancel_reason_LKP_GET_cancel_reason_DATA_FAILED = "@V1/COMMON/LKP/LKP_cancel_reason/GET_cancel_reason_DATA_FAILED"

export function getCancelReasonData(data) {
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

//http://localhost:27017/api/v1/common/lkp/cancel_reason_lkp/En/get_cancel_reason_data/all
//http://localhost:27017/api/v1/common/lkp/cancel_reason_lkp/:langTitle/get_cancel_reason_data /:suspendStatus

export const ACTION_API_V1_COMMON_LKP_cancel_reason_LKP_UPDATE_cancel_reason_DATA_REQUEST = "@V1/COMMON/LKP/LKP_cancel_reason/UPDATE_cancel_reason_DATA_REQUEST"
export const ACTION_API_V1_COMMON_LKP_cancel_reason_LKP_UPDATE_cancel_reason_DATA_SUCCESS = "@V1/COMMON/LKP/LKP_cancel_reason/UPDATE_cancel_reason_DATA_SUCCESS"
export const ACTION_API_V1_COMMON_LKP_cancel_reason_LKP_UPDATE_cancel_reason_DATA_FAILED = "@V1/COMMON/LKP/LKP_cancel_reason/UPDATE_cancel_reason_DATA_FAILED"

export function updateCancelReasonData(data) {
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

//http://localhost:27017/api/v1/common/lkp/cancel_reason_lkp/En/update_cancel_reason_data/46166160320
//http://localhost:27017/api/v1/common/lkp/cancel_reason_lkp/:langTitle/update_cancel_reason_data /:id


export const ACTION_API_V1_COMMON_LKP_cancel_reason_LKP_INSERT_cancel_reason_DATA_REQUEST = "@V1/COMMON/LKP/LKP_cancel_reason/INSERT_cancel_reason_DATA_REQUEST"
export const ACTION_API_V1_COMMON_LKP_cancel_reason_LKP_INSERT_cancel_reason_DATA_SUCCESS = "@V1/COMMON/LKP/LKP_cancel_reason/INSERT_cancel_reason_DATA_SUCCESS"
export const ACTION_API_V1_COMMON_LKP_cancel_reason_LKP_INSERT_cancel_reason_DATA_FAILED = "@V1/COMMON/LKP/LKP_cancel_reason/INSERT_cancel_reason_DATA_FAILED"

export function insertCancelReasonData(data) {
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
//http://localhost:27017/api/v1/common/lkp/cancel_reason_lkp/En/insert_cancel_reason_data/
//http://localhost:27017/api/v1/common/lkp/cancel_reason_lkp/:langTitle/insert_cancel_reason_data /