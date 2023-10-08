export const ACTION_API_V1_COMMON_LKP_creditcard_type_LKP_GET_creditcard_type_DATA_REQUEST = "@V1/COMMON/LKP/LKP_creditcard_type/GET_creditcard_type_DATA_REQUEST"
export const ACTION_API_V1_COMMON_LKP_creditcard_type_LKP_GET_creditcard_type_DATA_SUCCESS = "@V1/COMMON/LKP/LKP_creditcard_type/GET_creditcard_type_DATA_SUCCESS"
export const ACTION_API_V1_COMMON_LKP_creditcard_type_LKP_GET_creditcard_type_DATA_FAILED = "@V1/COMMON/LKP/LKP_creditcard_type/GET_creditcard_type_DATA_FAILED"

export function getCreditCardTypeData(data) {
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

//http://localhost:27017/api/v1/common/lkp/creditcard_type_lkp/En/get_creditcard_type_data/all
//http://localhost:27017/api/v1/common/lkp/creditcard_type_lkp/:langTitle/get_creditcard_type_data /:suspendStatus

export const ACTION_API_V1_COMMON_LKP_creditcard_type_LKP_UPDATE_creditcard_type_DATA_REQUEST = "@V1/COMMON/LKP/LKP_creditcard_type/UPDATE_creditcard_type_DATA_REQUEST"
export const ACTION_API_V1_COMMON_LKP_creditcard_type_LKP_UPDATE_creditcard_type_DATA_SUCCESS = "@V1/COMMON/LKP/LKP_creditcard_type/UPDATE_creditcard_type_DATA_SUCCESS"
export const ACTION_API_V1_COMMON_LKP_creditcard_type_LKP_UPDATE_creditcard_type_DATA_FAILED = "@V1/COMMON/LKP/LKP_creditcard_type/UPDATE_creditcard_type_DATA_FAILED"

export function updateCreditCardTypeData(data) {
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

//http://localhost:27017/api/v1/common/lkp/creditcard_type_lkp/En/update_creditcard_type_data/46166160320
//http://localhost:27017/api/v1/common/lkp/creditcard_type_lkp/:langTitle/update_creditcard_type_data /:id

export const ACTION_API_V1_COMMON_LKP_creditcard_type_LKP_INSERT_creditcard_type_DATA_REQUEST = "@V1/COMMON/LKP/LKP_creditcard_type/INSERT_creditcard_type_DATA_REQUEST"
export const ACTION_API_V1_COMMON_LKP_creditcard_type_LKP_INSERT_creditcard_type_DATA_SUCCESS = "@V1/COMMON/LKP/LKP_creditcard_type/INSERT_creditcard_type_DATA_SUCCESS"
export const ACTION_API_V1_COMMON_LKP_creditcard_type_LKP_INSERT_creditcard_type_DATA_FAILED = "@V1/COMMON/LKP/LKP_creditcard_type/INSERT_creditcard_type_DATA_FAILED"

export function insertCreditCardTypeData(data) {
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

//http://localhost:27017/api/v1/common/lkp/creditcard_type_lkp/En/insert_creditcard_type_data/
//http://localhost:27017/api/v1/common/lkp/creditcard_type_lkp/:langTitle/insert_creditcard_type_data /

