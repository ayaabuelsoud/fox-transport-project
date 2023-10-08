export const ACTION_API_V1_COMMON_LKP_MODEL_LKP_GET_MODEL_DATA_REQUEST = "@V1/COMMON/LKP/LKP_MODEL/GET_MODEL_DATA_REQUEST"
export const ACTION_API_V1_COMMON_LKP_MODEL_LKP_GET_MODEL_DATA_SUCCESS = "@V1/COMMON/LKP/LKP_MODEL/GET_MODEL_DATA_SUCCESS"
export const ACTION_API_V1_COMMON_LKP_MODEL_LKP_GET_MODEL_DATA_FAILED = "@V1/COMMON/LKP/LKP_MODEL/GET_MODEL_DATA_FAILED"

export function getModelData(data) {
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

// http://localhost:27017/api/v1/common/lkp/model_lkp/En/get_model_data/all
// http://localhost:27017/api/v1/common/lkp/model_lkp/:langTitle/get_model_data/:suspendStatus



export const ACTION_API_V1_COMMON_LKP_MODEL_LKP_UPDATE_MODEL_DATA_REQUEST = "@V1/COMMON/LKP/LKP_MODEL/UPDATE_MODEL_DATA_REQUEST"
export const ACTION_API_V1_COMMON_LKP_MODEL_LKP_UPDATE_MODEL_DATA_SUCCESS = "@V1/COMMON/LKP/LKP_MODEL/UPDATE_MODEL_DATA_SUCCESS"
export const ACTION_API_V1_COMMON_LKP_MODEL_LKP_UPDATE_MODEL_DATA_FAILED = "@V1/COMMON/LKP/LKP_MODEL/UPDATE_MODEL_DATA_FAILED"

export function updateModelData(data) {
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

// http://localhost:27017/api/v1/common/lkp/model_lkp/:langTitle/update_model_data/:Id
// http://localhost:27017/api/v1/common/lkp/model_lkp/En/update_model_data/5


export const ACTION_API_V1_COMMON_LKP_MODEL_LKP_get_model_related_to_brandname_MODEL_DATA_REQUEST = "@V1/COMMON/LKP/LKP_MODEL/get_model_related_to_brandname_MODEL_DATA_REQUEST"
export const ACTION_API_V1_COMMON_LKP_MODEL_LKP_get_model_related_to_brandname_MODEL_DATA_SUCCESS = "@V1/COMMON/LKP/LKP_MODEL/get_model_related_to_brandname_MODEL_DATA_SUCCESS"
export const ACTION_API_V1_COMMON_LKP_MODEL_LKP_get_model_related_to_brandname_MODEL_DATA_FAILED = "@V1/COMMON/LKP/LKP_MODEL/get_model_related_to_brandname_MODEL_DATA_FAILED"

export function get_model_related_to_brandname_ModelData(data) {
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

// http://localhost:27017/api/v1/common/lkp/model_lkp/En/get_model_related_to_brandname/brandname_ids?650aaf3d61aff41fd7e10f09,650aaf3d61aff41fd7e10f0a/all
// http://localhost:27017/api/v1/common/lkp/model_lkp /:langTitle/get_model_data/:suspendStatus
