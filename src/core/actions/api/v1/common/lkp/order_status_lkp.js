export const ACTION_API_V1_COMMON_LKP_ORDER_STATUS_LKP_GET_ORDER_STATUS_DATA_REQUEST = "@V1/COMMON/LKP/LKP_ORDER_STATUS/GET_ORDER_STATUS_DATA_REQUEST"
export const ACTION_API_V1_COMMON_LKP_ORDER_STATUS_LKP_GET_ORDER_STATUS_DATA_SUCCESS = "@V1/COMMON/LKP/LKP_ORDER_STATUS/GET_ORDER_STATUS_DATA_SUCCESS"
export const ACTION_API_V1_COMMON_LKP_ORDER_STATUS_LKP_GET_ORDER_STATUS_DATA_FAILED = "@V1/COMMON/LKP/LKP_ORDER_STATUS/GET_ORDER_STATUS_DATA_FAILED"

export function getORDER_STATUSData(data) {
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
// http://localhost:27017/api/v1/common/lkp/order_status_lkp/En/get_order_status_data/all
// http://localhost:27017/api/v1/common/lkp/order_status_lkp/:langTitle/get_order_status_data /:suspendStatus




export const ACTION_API_V1_COMMON_LKP_ORDER_STATUS_LKP_UPDATE_ORDER_STATUS_DATA_REQUEST = "@V1/COMMON/LKP/LKP_ORDER_STATUS/UPDATE_ORDER_STATUS_DATA_REQUEST"
export const ACTION_API_V1_COMMON_LKP_ORDER_STATUS_LKP_UPDATE_ORDER_STATUS_DATA_SUCCESS = "@V1/COMMON/LKP/LKP_ORDER_STATUS/UPDATE_ORDER_STATUS_DATA_SUCCESS"
export const ACTION_API_V1_COMMON_LKP_ORDER_STATUS_LKP_UPDATE_ORDER_STATUS_DATA_FAILED = "@V1/COMMON/LKP/LKP_ORDER_STATUS/UPDATE_ORDER_STATUS_DATA_FAILED"

export function updateORDER_STATUSData(data) {
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
// http://localhost:27017/api/v1/common/lkp/order_status_lkp/En/update_order_status_data/
// http://localhost:27017/api/v1/common/lkp/order_status_lkp/:langTitle/update_order_status_data /


export const ACTION_API_V1_COMMON_LKP_ORDER_STATUS_LKP_INSERT_ORDER_STATUS_DATA_REQUEST = "@V1/COMMON/LKP/LKP_ORDER_STATUS/INSERT_ORDER_STATUS_DATA_REQUEST"
export const ACTION_API_V1_COMMON_LKP_ORDER_STATUS_LKP_INSERT_ORDER_STATUS_DATA_SUCCESS = "@V1/COMMON/LKP/LKP_ORDER_STATUS/INSERT_ORDER_STATUS_DATA_SUCCESS"
export const ACTION_API_V1_COMMON_LKP_ORDER_STATUS_LKP_INSERT_ORDER_STATUS_DATA_FAILED = "@V1/COMMON/LKP/LKP_ORDER_STATUS/INSERT_ORDER_STATUS_DATA_FAILED"

export function insertORDER_STATUSData(data) {
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
// http://localhost:27017/api/v1/common/lkp/order_status_lkp/En/insert_order_status_data/
// http://localhost:27017/api/v1/common/lkp/order_status_lkp/:langTitle/insert_order_status_data /