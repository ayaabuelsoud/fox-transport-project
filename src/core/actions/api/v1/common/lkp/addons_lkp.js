export const ACTION_API_V1_COMMON_LKP_ADDONS_LKP_GET_ADDONS_DATA_REQUEST = "@V1/COMMON/LKP/LKP_ADDONS/GET_ADDONS_DATA_REQUEST"
export const ACTION_API_V1_COMMON_LKP_ADDONS_LKP_GET_ADDONS_DATA_SUCCESS = "@V1/COMMON/LKP/LKP_ADDONS/GET_ADDONS_DATA_SUCCESS"
export const ACTION_API_V1_COMMON_LKP_ADDONS_LKP_GET_ADDONS_DATA_FAILED = "@V1/COMMON/LKP/LKP_ADDONS/GET_ADDONS_DATA_FAILED"

export function getAddonsData(data) {
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
//http://localhost:27017/api/v1/common/lkp/addons_lkp/En/get_addons_data/all
//http://localhost:27017/api/v1/common/lkp/addons_lkp/:langTitle/get_addons_data/:suspendStatus

export const ACTION_API_V1_COMMON_LKP_ADDONS_LKP_INSERT_ADDONS_DATA_REQUEST = "@V1/COMMON/LKP/LKP_ADDONS/INSERT_ADDONS_DATA_REQUEST"
export const ACTION_API_V1_COMMON_LKP_ADDONS_LKP_INSERT_ADDONS_DATA_SUCCESS = "@V1/COMMON/LKP/LKP_ADDONS/INSERT_ADDONS_DATA_SUCCESS"
export const ACTION_API_V1_COMMON_LKP_ADDONS_LKP_INSERT_ADDONS_DATA_FAILED = "@V1/COMMON/LKP/LKP_ADDONS/INSERT_ADDONS_DATA_FAILED"

export function insertAddonsData(data) {
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

//http://localhost:27017/api/v1/common/lkp/addons_lkp/En/insert_addons_data/all
//http://localhost:27017/api/v1/common/lkp/addons_lkp/:langTitle/insert_addons_data/:suspendStatus


export const ACTION_API_V1_COMMON_LKP_ADDONS_LKP_UPDATE_ADDONS_DATA_REQUEST = "@V1/COMMON/LKP/LKP_ADDONS/UPDATE_ADDONS_DATA_REQUEST"
export const ACTION_API_V1_COMMON_LKP_ADDONS_LKP_UPDATE_ADDONS_DATA_SUCCESS = "@V1/COMMON/LKP/LKP_ADDONS/UPDATE_ADDONS_DATA_SUCCESS"
export const ACTION_API_V1_COMMON_LKP_ADDONS_LKP_UPDATE_ADDONS_DATA_FAILED = "@V1/COMMON/LKP/LKP_ADDONS/UPDATE_ADDONS_DATA_FAILED"

export function updateAddonsData(data) {
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

//http://localhost:27017/api/v1/common/lkp/addons_lkp/En/update_addons_data/5
//http://localhost:27017/api/v1/common/lkp/addons_lkp/:langTitle/update_addons_data/:id
