export const ACTION_API_V1_COMMON_LKP_VEHICLE_CHANGE_REASONS_LKP_GET_VEHICLE_CHANGE_REASONS_DATA_REQUEST = "@V1/COMMON/LKP/LKP_VEHICLE_CHANGE_REASONS/GET_VEHICLE_CHANGE_REASONS_DATA_REQUEST"
export const ACTION_API_V1_COMMON_LKP_VEHICLE_CHANGE_REASONS_LKP_GET_VEHICLE_CHANGE_REASONS_DATA_SUCCESS = "@V1/COMMON/LKP/LKP_VEHICLE_CHANGE_REASONS/GET_VEHICLE_CHANGE_REASONS_DATA_SUCCESS"
export const ACTION_API_V1_COMMON_LKP_VEHICLE_CHANGE_REASONS_LKP_GET_VEHICLE_CHANGE_REASONS_DATA_FAILED = "@V1/COMMON/LKP/LKP_VEHICLE_CHANGE_REASONS/GET_VEHICLE_CHANGE_REASONS_DATA_FAILED"

export function getVehicleChangeReasonsData(data) {
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

// http://localhost:27017/api/v1/common/lkp/vehicle_change_reasons_lkp/En/get_vehicle_change_reasons_data/all
// http://localhost:27017/api/v1/common/lkp/vehicle_change_reasons_reason_lkp/:langTitle/get_vehicle_change_reasons_reason_data/:suspendStatus


export const ACTION_API_V1_COMMON_LKP_VEHICLE_CHANGE_REASONS_LKP_UPDATE_VEHICLE_CHANGE_REASONS_DATA_REQUEST = "@V1/COMMON/LKP/LKP_VEHICLE_CHANGE_REASONS/UPDATE_VEHICLE_CHANGE_REASONS_DATA_REQUEST"
export const ACTION_API_V1_COMMON_LKP_VEHICLE_CHANGE_REASONS_LKP_UPDATE_VEHICLE_CHANGE_REASONS_DATA_SUCCESS = "@V1/COMMON/LKP/LKP_VEHICLE_CHANGE_REASONS/UPDATE_VEHICLE_CHANGE_REASONS_DATA_SUCCESS"
export const ACTION_API_V1_COMMON_LKP_VEHICLE_CHANGE_REASONS_LKP_UPDATE_VEHICLE_CHANGE_REASONS_DATA_FAILED = "@V1/COMMON/LKP/LKP_VEHICLE_CHANGE_REASONS/UPDATE_VEHICLE_CHANGE_REASONS_DATA_FAILED"

export function updateVehicleChangeReasonsData(data) {
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

// http://localhost:27017/api/v1/common/lkp/vehicle_change_reasons_lkp/En/update_vehicle_change_reasons_data/46166160320
// http://localhost:27017/api/v1/common/lkp/vehicle_change_reasons_lkp/:langTitle/update_vehicle_change_reasons_data /:id

export const ACTION_API_V1_COMMON_LKP_VEHICLE_CHANGE_REASONS_LKP_INSERT_VEHICLE_CHANGE_REASONS_DATA_REQUEST = "@V1/COMMON/LKP/LKP_VEHICLE_CHANGE_REASONS/INSERT_VEHICLE_CHANGE_REASONS_DATA_REQUEST"
export const ACTION_API_V1_COMMON_LKP_VEHICLE_CHANGE_REASONS_LKP_INSERT_VEHICLE_CHANGE_REASONS_DATA_SUCCESS = "@V1/COMMON/LKP/LKP_VEHICLE_CHANGE_REASONS/INSERT_VEHICLE_CHANGE_REASONS_DATA_SUCCESS"
export const ACTION_API_V1_COMMON_LKP_VEHICLE_CHANGE_REASONS_LKP_INSERT_VEHICLE_CHANGE_REASONS_DATA_FAILED = "@V1/COMMON/LKP/LKP_VEHICLE_CHANGE_REASONS/INSERT_VEHICLE_CHANGE_REASONS_DATA_FAILED"

export function insertVehicleChangeReasonsData(data) {
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

// http://localhost:27017/api/v1/common/lkp/vehicle_change_reasons_lkp/En/insert_vehicle_change_reasons_data/
// http://localhost:27017/api/v1/common/lkp/vehicle_change_reasons_lkp/:langTitle/insert_vehicle_change_reasons_data/
