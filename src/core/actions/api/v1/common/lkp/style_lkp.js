export const ACTION_API_V1_COMMON_LKP_STYLE_LKP_GET_STYLE_DATA_REQUEST = "@V1/COMMON/LKP/LKP_STYLE/GET_STYLE_DATA_REQUEST"
export const ACTION_API_V1_COMMON_LKP_STYLE_LKP_GET_STYLE_DATA_SUCCESS = "@V1/COMMON/LKP/LKP_STYLE/GET_STYLE_DATA_SUCCESS"
export const ACTION_API_V1_COMMON_LKP_STYLE_LKP_GET_STYLE_DATA_FAILED = "@V1/COMMON/LKP/LKP_STYLE/GET_STYLE_DATA_FAILED"

export function getStyleData(data) {
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

// http://localhost:27017/api/v1/common/lkp/style_lkp/En/get_style_data/all
// http://localhost:27017/api/v1/common/lkp/style_lkp/:langTitle/get_style_data /:suspendStatus



export const ACTION_API_V1_COMMON_LKP_STYLE_LKP_UPDATE_STYLE_DATA_REQUEST = "@V1/COMMON/LKP/LKP_STYLE/UPDATE_STYLE_DATA_REQUEST"
export const ACTION_API_V1_COMMON_LKP_STYLE_LKP_UPDATE_STYLE_DATA_SUCCESS = "@V1/COMMON/LKP/LKP_STYLE/UPDATE_STYLE_DATA_SUCCESS"
export const ACTION_API_V1_COMMON_LKP_STYLE_LKP_UPDATE_STYLE_DATA_FAILED = "@V1/COMMON/LKP/LKP_STYLE/UPDATE_STYLE_DATA_FAILED"

export function updateStyleData(data) {
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

// http://localhost:27017/api/v1/common/lkp/style_lkp/En/update_style_data/46166160320
// http://localhost:27017/api/v1/common/lkp/style_lkp/:langTitle/update_style_data /:id


export const ACTION_API_V1_COMMON_LKP_STYLE_LKP_INSERT_STYLE_DATA_REQUEST = "@V1/COMMON/LKP/LKP_STYLE/INSERT_STYLE_DATA_REQUEST"
export const ACTION_API_V1_COMMON_LKP_STYLE_LKP_INSERT_STYLE_DATA_SUCCESS = "@V1/COMMON/LKP/LKP_STYLE/INSERT_STYLE_DATA_SUCCESS"
export const ACTION_API_V1_COMMON_LKP_STYLE_LKP_INSERT_STYLE_DATA_FAILED = "@V1/COMMON/LKP/LKP_STYLE/INSERT_STYLE_DATA_FAILED"

export function insertStyleData(data) {
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

// http://localhost:27017/api/v1/common/lkp/style_lkp/En/insert_style_data/
// http://localhost:27017/api/v1/common/lkp/style_lkp/:langTitle/insert_style_data /