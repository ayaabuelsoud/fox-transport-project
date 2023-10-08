export const ACTION_API_V1_COMMON_LKP_PAYMENT_METHOD_LKP_GET_PAYMENT_METHOD_DATA_REQUEST = "@V1/COMMON/LKP/LKP_PAYMENT_METHOD/GET_PAYMENT_METHOD_DATA_REQUEST"
export const ACTION_API_V1_COMMON_LKP_PAYMENT_METHOD_LKP_GET_PAYMENT_METHOD_DATA_SUCCESS = "@V1/COMMON/LKP/LKP_PAYMENT_METHOD/GET_PAYMENT_METHOD_DATA_SUCCESS"
export const ACTION_API_V1_COMMON_LKP_PAYMENT_METHOD_LKP_GET_PAYMENT_METHOD_DATA_FAILED = "@V1/COMMON/LKP/LKP_PAYMENT_METHOD/GET_PAYMENT_METHOD_DATA_FAILED"

export function getPaymentMethodData(data) {
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

// http://localhost:27017/api/v1/common/lkp/payment_method_lkp/En/get_payment_method_data/all
// http://localhost:27017/api/v1/common/lkp/payment_method_lkp/:langTitle/get_payment_method_data/:suspendStatus


export const ACTION_API_V1_COMMON_LKP_PAYMENT_METHOD_LKP_UPDATE_PAYMENT_METHOD_DATA_REQUEST = "@V1/COMMON/LKP/LKP_PAYMENT_METHOD/UPDATE_PAYMENT_METHOD_DATA_REQUEST"
export const ACTION_API_V1_COMMON_LKP_PAYMENT_METHOD_LKP_UPDATE_PAYMENT_METHOD_DATA_SUCCESS = "@V1/COMMON/LKP/LKP_PAYMENT_METHOD/UPDATE_PAYMENT_METHOD_DATA_SUCCESS"
export const ACTION_API_V1_COMMON_LKP_PAYMENT_METHOD_LKP_UPDATE_PAYMENT_METHOD_DATA_FAILED = "@V1/COMMON/LKP/LKP_PAYMENT_METHOD/UPDATE_PAYMENT_METHOD_DATA_FAILED"

export function updatePaymentMethodData(data) {
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

// http://localhost:27017/api/v1/common/lkp/payment_method_lkp/En/update_payment_method_data/46166160320
// http://localhost:27017/api/v1/common/lkp/payment_method_lkp/:langTitle/update_payment_method_data /:id


export const ACTION_API_V1_COMMON_LKP_PAYMENT_METHOD_LKP_INSERT_PAYMENT_METHOD_DATA_REQUEST = "@V1/COMMON/LKP/LKP_PAYMENT_METHOD/INSERT_PAYMENT_METHOD_DATA_REQUEST"
export const ACTION_API_V1_COMMON_LKP_PAYMENT_METHOD_LKP_INSERT_PAYMENT_METHOD_DATA_SUCCESS = "@V1/COMMON/LKP/LKP_PAYMENT_METHOD/INSERT_PAYMENT_METHOD_DATA_SUCCESS"
export const ACTION_API_V1_COMMON_LKP_PAYMENT_METHOD_LKP_INSERT_PAYMENT_METHOD_DATA_FAILED = "@V1/COMMON/LKP/LKP_PAYMENT_METHOD/INSERT_PAYMENT_METHOD_DATA_FAILED"

export function insertPaymentMethodData(data) {
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

// http://localhost:27017/api/v1/common/lkp/payment_method_lkp/En/insert_payment_method_data/
// http://localhost:27017/api/v1/common/lkp/payment_method_lkp/:langTitle/insert_payment_method_data /

