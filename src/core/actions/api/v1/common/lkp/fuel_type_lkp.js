export const ACTION_API_V1_COMMON_LKP_FUEL_TYPE_LKP_GET_FUEL_TYPE_DATA_REQUEST = "@V1/COMMON/LKP/LKP_FUEL_TYPE/GET_FUEL_TYPE_DATA_REQUEST"
export const ACTION_API_V1_COMMON_LKP_FUEL_TYPE_LKP_GET_FUEL_TYPE_DATA_SUCCESS = "@V1/COMMON/LKP/LKP_FUEL_TYPE/GET_FUEL_TYPE_DATA_SUCCESS"
export const ACTION_API_V1_COMMON_LKP_FUEL_TYPE_LKP_GET_FUEL_TYPE_DATA_FAILED = "@V1/COMMON/LKP/LKP_FUEL_TYPE/GET_FUEL_TYPE_DATA_FAILED"

export function getFUEL_TYPEData(data) {
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

// http://localhost:27017/api/v1/common/lkp/fuel_type_lkp/En/get_fuel_type_data/all
// http://localhost:27017/api/v1/common/lkp/fuel_type_lkp/:langTitle/get_fuel_type_data /:suspendStatus



export const ACTION_API_V1_COMMON_LKP_FUEL_TYPE_LKP_UPDATE_FUEL_TYPE_DATA_REQUEST = "@V1/COMMON/LKP/LKP_FUEL_TYPE/UPDATE_FUEL_TYPE_DATA_REQUEST"
export const ACTION_API_V1_COMMON_LKP_FUEL_TYPE_LKP_UPDATE_FUEL_TYPE_DATA_SUCCESS = "@V1/COMMON/LKP/LKP_FUEL_TYPE/UPDATE_FUEL_TYPE_DATA_SUCCESS"
export const ACTION_API_V1_COMMON_LKP_FUEL_TYPE_LKP_UPDATE_FUEL_TYPE_DATA_FAILED = "@V1/COMMON/LKP/LKP_FUEL_TYPE/UPDATE_FUEL_TYPE_DATA_FAILED"

export function updateFUEL_TYPEData(data) {
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

// http://localhost:27017/api/v1/common/lkp/fuel_type_lkp/En/update_fuel_type_data/46166160320
// http://localhost:27017/api/v1/common/lkp/fuel_type_lkp/:langTitle/update_fuel_type_data /:id


export const ACTION_API_V1_COMMON_LKP_FUEL_TYPE_LKP_INSERT_FUEL_TYPE_DATA_REQUEST = "@V1/COMMON/LKP/LKP_FUEL_TYPE/INSERT_FUEL_TYPE_DATA_REQUEST"
export const ACTION_API_V1_COMMON_LKP_FUEL_TYPE_LKP_INSERT_FUEL_TYPE_DATA_SUCCESS = "@V1/COMMON/LKP/LKP_FUEL_TYPE/INSERT_FUEL_TYPE_DATA_SUCCESS"
export const ACTION_API_V1_COMMON_LKP_FUEL_TYPE_LKP_INSERT_FUEL_TYPE_DATA_FAILED = "@V1/COMMON/LKP/LKP_FUEL_TYPE/INSERT_FUEL_TYPE_DATA_FAILED"

export function insertFUEL_TYPEData(data) {
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

// http://localhost:27017/api/v1/common/lkp/fuel_type_lkp/En/insert_fuel_type_data/
// http://localhost:27017/api/v1/common/lkp/fuel_type_lkp/:langTitle/insert_fuel_type_data /

