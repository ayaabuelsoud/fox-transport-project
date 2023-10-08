export const ACTION_API_V1_COMMON_LKP_TRIP_TYPE_LKP_GET_TRIP_TYPE_DATA_REQUEST = "@V1/COMMON/LKP/LKP_TRIP_TYPE/GET_TRIP_TYPE_DATA_REQUEST"
export const ACTION_API_V1_COMMON_LKP_TRIP_TYPE_LKP_GET_TRIP_TYPE_DATA_SUCCESS = "@V1/COMMON/LKP/LKP_TRIP_TYPE/GET_TRIP_TYPE_DATA_SUCCESS"
export const ACTION_API_V1_COMMON_LKP_TRIP_TYPE_LKP_GET_TRIP_TYPE_DATA_FAILED = "@V1/COMMON/LKP/LKP_TRIP_TYPE/GET_TRIP_TYPE_DATA_FAILED"

export function getTripTypeData(data) {
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

// http://localhost:27017/api/v1/common/lkp/trip_type_lkp/En/get_trip_type_data/all
// http://localhost:27017/api/v1/common/lkp/trip_type_lkp/:langTitle/get_trip_type_data /:suspendStatus




export const ACTION_API_V1_COMMON_LKP_TRIP_TYPE_LKP_UPDATE_TRIP_TYPE_DATA_REQUEST = "@V1/COMMON/LKP/LKP_TRIP_TYPE/UPDATE_TRIP_TYPE_DATA_REQUEST"
export const ACTION_API_V1_COMMON_LKP_TRIP_TYPE_LKP_UPDATE_TRIP_TYPE_DATA_SUCCESS = "@V1/COMMON/LKP/LKP_TRIP_TYPE/UPDATE_TRIP_TYPE_DATA_SUCCESS"
export const ACTION_API_V1_COMMON_LKP_TRIP_TYPE_LKP_UPDATE_TRIP_TYPE_DATA_FAILED = "@V1/COMMON/LKP/LKP_TRIP_TYPE/UPDATE_TRIP_TYPE_DATA_FAILED"

export function updateTripTypeData(data) {
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
// http://localhost:27017/api/v1/common/lkp/trip_type_lkp/En/update_trip_type_data/46166160320
// http://localhost:27017/api/v1/common/lkp/trip_type_lkp/:langTitle/update_trip_type_data /:id


