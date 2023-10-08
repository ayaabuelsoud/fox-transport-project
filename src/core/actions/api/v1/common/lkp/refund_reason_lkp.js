export const ACTION_API_V1_COMMON_LKP_refund_reason_LKP_GET_refund_reason_DATA_REQUEST = "@V1/COMMON/LKP/LKP_refund_reason/GET_refund_reason_DATA_REQUEST"
export const ACTION_API_V1_COMMON_LKP_refund_reason_LKP_GET_refund_reason_DATA_SUCCESS = "@V1/COMMON/LKP/LKP_refund_reason/GET_refund_reason_DATA_SUCCESS"
export const ACTION_API_V1_COMMON_LKP_refund_reason_LKP_GET_refund_reason_DATA_FAILED = "@V1/COMMON/LKP/LKP_refund_reason/GET_refund_reason_DATA_FAILED"

export function getRefundReasonData(data) {
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

//http://localhost:27017/api/v1/common/lkp/refund_reason_lkp/En/get_refund_reason_data/all
//http://localhost:27017/api/v1/common/lkp/refund_reason_lkp/:langTitle/get_refund_reason_data /:suspendStatus



export const ACTION_API_V1_COMMON_LKP_refund_reason_LKP_UPDATE_refund_reason_DATA_REQUEST = "@V1/COMMON/LKP/LKP_refund_reason/UPDATE_refund_reason_DATA_REQUEST"
export const ACTION_API_V1_COMMON_LKP_refund_reason_LKP_UPDATE_refund_reason_DATA_SUCCESS = "@V1/COMMON/LKP/LKP_refund_reason/UPDATE_refund_reason_DATA_SUCCESS"
export const ACTION_API_V1_COMMON_LKP_refund_reason_LKP_UPDATE_refund_reason_DATA_FAILED = "@V1/COMMON/LKP/LKP_refund_reason/UPDATE_refund_reason_DATA_FAILED"

export function updateRefundReasonData(data) {
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

//http://localhost:27017/api/v1/common/lkp/refund_reason_lkp/En/update_refund_reason_data/46166160320
//http://localhost:27017/api/v1/common/lkp/refund_reason_lkp/:langTitle/update_refund_reason_data /:id



export const ACTION_API_V1_COMMON_LKP_refund_reason_LKP_INSERT_refund_reason_DATA_REQUEST = "@V1/COMMON/LKP/LKP_refund_reason/INSERT_refund_reason_DATA_REQUEST"
export const ACTION_API_V1_COMMON_LKP_refund_reason_LKP_INSERT_refund_reason_DATA_SUCCESS = "@V1/COMMON/LKP/LKP_refund_reason/INSERT_refund_reason_DATA_SUCCESS"
export const ACTION_API_V1_COMMON_LKP_refund_reason_LKP_INSERT_refund_reason_DATA_FAILED = "@V1/COMMON/LKP/LKP_refund_reason/INSERT_refund_reason_DATA_FAILED"

export function insertRefundReasonData(data) {
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
//http://localhost:27017/api/v1/common/lkp/refund_reason_lkp/En/insert_refund_reason_data/
// http://localhost:27017/api/v1/common/lkp/refund_reason_lkp/:langTitle/insert_refund_reason_data /


