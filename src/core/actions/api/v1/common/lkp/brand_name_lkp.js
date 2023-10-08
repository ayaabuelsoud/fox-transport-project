export const ACTION_API_V1_COMMON_LKP_BRAND_NAME_LKP_GET_BRAND_NAME_DATA_REQUEST = "@V1/COMMON/LKP/LKP_BRAND_NAME/GET_BRAND_NAME_DATA_REQUEST"
export const ACTION_API_V1_COMMON_LKP_BRAND_NAME_LKP_GET_BRAND_NAME_DATA_SUCCESS = "@V1/COMMON/LKP/LKP_BRAND_NAME/GET_BRAND_NAME_DATA_SUCCESS"
export const ACTION_API_V1_COMMON_LKP_BRAND_NAME_LKP_GET_BRAND_NAME_DATA_FAILED = "@V1/COMMON/LKP/LKP_BRAND_NAME/GET_BRAND_NAME_DATA_FAILED"

export function getBrandNameData(data) {
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

// http://localhost:27017/api/v1/common/lkp/brand_name_lkp/En/get_brand_name_data/all
// http://localhost:27017/api/v1/common/lkp/brand_name_lkp/:langTitle/get_brand_name_data /:suspendStatus



export const ACTION_API_V1_COMMON_LKP_BRAND_NAME_LKP_UPDATE_BRAND_NAME_DATA_REQUEST = "@V1/COMMON/LKP/LKP_BRAND_NAME/UPDATE_BRAND_NAME_DATA_REQUEST"
export const ACTION_API_V1_COMMON_LKP_BRAND_NAME_LKP_UPDATE_BRAND_NAME_DATA_SUCCESS = "@V1/COMMON/LKP/LKP_BRAND_NAME/UPDATE_BRAND_NAME_DATA_SUCCESS"
export const ACTION_API_V1_COMMON_LKP_BRAND_NAME_LKP_UPDATE_BRAND_NAME_DATA_FAILED = "@V1/COMMON/LKP/LKP_BRAND_NAME/UPDATE_BRAND_NAME_DATA_FAILED"

export function updateBrandNameData(data) {
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

// http://localhost:27017/api/v1/common/lkp/brand_name_lkp/En/update_brand_name_data/
// http://localhost:27017/api/v1/common/lkp/brand_name_lkp/:langTitle/update_brand_name_data /



export const ACTION_API_V1_COMMON_LKP_BRAND_NAME_LKP_INSERT_BRAND_NAME_DATA_REQUEST = "@V1/COMMON/LKP/LKP_BRAND_NAME/INSERT_BRAND_NAME_DATA_REQUEST"
export const ACTION_API_V1_COMMON_LKP_BRAND_NAME_LKP_INSERT_BRAND_NAME_DATA_SUCCESS = "@V1/COMMON/LKP/LKP_BRAND_NAME/INSERT_BRAND_NAME_DATA_SUCCESS"
export const ACTION_API_V1_COMMON_LKP_BRAND_NAME_LKP_INSERT_BRAND_NAME_DATA_FAILED = "@V1/COMMON/LKP/LKP_BRAND_NAME/INSERT_BRAND_NAME_DATA_FAILED"

export function insertBrandNameData(data) {
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


// http://localhost:27017/api/v1/common/lkp/brand_name_lkp/En/insert_brand_name_data/
// http://localhost:27017/api/v1/common/lkp/brand_name_lkp/:langTitle/insert_brand_name_data /
