export const ACTION_API_V1_COMMON_LKP_COURIER_CATEGORIES_LKP_GET_COURIER_CATEGORIES_DATA_REQUEST = "@V1/COMMON/LKP/LKP_COURIER_CATEGORIES/GET_COURIER_CATEGORIES_DATA_REQUEST"
export const ACTION_API_V1_COMMON_LKP_COURIER_CATEGORIES_LKP_GET_COURIER_CATEGORIES_DATA_SUCCESS = "@V1/COMMON/LKP/LKP_COURIER_CATEGORIES/GET_COURIER_CATEGORIES_DATA_SUCCESS"
export const ACTION_API_V1_COMMON_LKP_COURIER_CATEGORIES_LKP_GET_COURIER_CATEGORIES_DATA_FAILED = "@V1/COMMON/LKP/LKP_COURIER_CATEGORIES/GET_COURIER_CATEGORIES_DATA_FAILED"

export function getCOURIER_CATEGORIESData(data) {
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

// http://localhost:27017/api/v1/common/lkp/courier_categories_lkp/En/get_courier_categories_data/all
// http://localhost:27017/api/v1/common/lkp/courier_categories_lkp/:langTitle/get_courier_categories_data/:suspendStatus




export const ACTION_API_V1_COMMON_LKP_COURIER_CATEGORIES_LKP_UPDATE_COURIER_CATEGORIES_DATA_REQUEST = "@V1/COMMON/LKP/LKP_COURIER_CATEGORIES/UPDATE_COURIER_CATEGORIES_DATA_REQUEST"
export const ACTION_API_V1_COMMON_LKP_COURIER_CATEGORIES_LKP_UPDATE_COURIER_CATEGORIES_DATA_SUCCESS = "@V1/COMMON/LKP/LKP_COURIER_CATEGORIES/UPDATE_COURIER_CATEGORIES_DATA_SUCCESS"
export const ACTION_API_V1_COMMON_LKP_COURIER_CATEGORIES_LKP_UPDATE_COURIER_CATEGORIES_DATA_FAILED = "@V1/COMMON/LKP/LKP_COURIER_CATEGORIES/UPDATE_COURIER_CATEGORIES_DATA_FAILED"

export function updateCOURIER_CATEGORIESData(data) {
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

// http://localhost:27017/api/v1/common/lkp/courier_categories_lkp/En/update_courier_categories_data/46166160320
// http://localhost:27017/api/v1/common/lkp/courier_categories_lkp/:langTitle/update_courier_categories_data /:id




export const ACTION_API_V1_COMMON_LKP_COURIER_CATEGORIES_LKP_INSERT_COURIER_CATEGORIES_DATA_REQUEST = "@V1/COMMON/LKP/LKP_COURIER_CATEGORIES/INSERT_COURIER_CATEGORIES_DATA_REQUEST"
export const ACTION_API_V1_COMMON_LKP_COURIER_CATEGORIES_LKP_INSERT_COURIER_CATEGORIES_DATA_SUCCESS = "@V1/COMMON/LKP/LKP_COURIER_CATEGORIES/INSERT_COURIER_CATEGORIES_DATA_SUCCESS"
export const ACTION_API_V1_COMMON_LKP_COURIER_CATEGORIES_LKP_INSERT_COURIER_CATEGORIES_DATA_FAILED = "@V1/COMMON/LKP/LKP_COURIER_CATEGORIES/INSERT_COURIER_CATEGORIES_DATA_FAILED"

export function insertCOURIER_CATEGORIESData(data) {
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


// http://localhost:27017/api/v1/common/lkp/courier_categories_lkp/En/insert_courier_categories_data/
// http://localhost:27017/api/v1/common/lkp/courier_categories_lkp/:langTitle/insert_courier_categories_data /

