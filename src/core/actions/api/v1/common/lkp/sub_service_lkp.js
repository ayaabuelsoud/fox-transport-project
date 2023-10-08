export const ACTION_API_V1_COMMON_LKP_SUB_SERVICES_LKP_GET_SUB_SERVICES_DATA_REQUEST = "@V1/COMMON/LKP/LKP_SUB_SERVICES/GET_SUB_SERVICES_DATA_REQUEST"
export const ACTION_API_V1_COMMON_LKP_SUB_SERVICES_LKP_GET_SUB_SERVICES_DATA_SUCCESS = "@V1/COMMON/LKP/LKP_SUB_SERVICES/GET_SUB_SERVICES_DATA_SUCCESS"
export const ACTION_API_V1_COMMON_LKP_SUB_SERVICES_LKP_GET_SUB_SERVICES_DATA_FAILED = "@V1/COMMON/LKP/LKP_SUB_SERVICES/GET_SUB_SERVICES_DATA_FAILED"

export function getSubervices(data) {
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

//http://localhost:27017/api/v1/common/lkp/sub_services_lkp/En/get_subservices_data/all
//http://localhost:27017/api/v1/common/lkp/ sub_services_lkp /:langTitle/get_subservices_data/:suspendStatus

export const ACTION_API_V1_COMMON_LKP_SUB_SERVICES_LKP_UPDATE_SUB_SERVICES_DATA_REQUEST = "@V1/COMMON/LKP/LKP_SUB_SERVICES/UPDATE_SUB_SERVICES_DATA_REQUEST"
export const ACTION_API_V1_COMMON_LKP_SUB_SERVICES_LKP_UPDATE_SUB_SERVICES_DATA_SUCCESS = "@V1/COMMON/LKP/LKP_SUB_SERVICES/UPDATE_SUB_SERVICES_DATA_SUCCESS"
export const ACTION_API_V1_COMMON_LKP_SUB_SERVICES_LKP_UPDATE_SUB_SERVICES_DATA_FAILED = "@V1/COMMON/LKP/LKP_SUB_SERVICES/UPDATE_SUB_SERVICES_DATA_FAILED"

export function UpdateSubervices(data) {
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

//http://localhost:27017/api/v1/common/lkp/sub_services_lkp/:langTitle/update_subservices_data/
//http://localhost:27017/api/v1/common/lkp/sub_services_lkp/En/update_subservices_data/


export const ACTION_API_V1_COMMON_LKP_SUB_SERVICES_LKP_get_subservices_related_to_mainservices_DATA_REQUEST = "@V1/COMMON/LKP/LKP_SUB_SERVICES/get_subservices_related_to_mainservices_DATA_REQUEST"
export const ACTION_API_V1_COMMON_LKP_SUB_SERVICES_LKP_get_subservices_related_to_mainservices_DATA_SUCCESS = "@V1/COMMON/LKP/LKP_SUB_SERVICES/get_subservices_related_to_mainservices_DATA_SUCCESS"
export const ACTION_API_V1_COMMON_LKP_SUB_SERVICES_LKP_get_subservices_related_to_mainservices_DATA_FAILED = "@V1/COMMON/LKP/LKP_SUB_SERVICES/get_subservices_related_to_mainservices_DATA_FAILED"

export function GetSubServicesRelatedtoMainservices(data) {
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

//http://localhost:27017/api/v1/common/lkp/sub_services_lkp/En/get_subservices_related_to_mainservices/main_services_ids?650aaf3d61aff41fd7e10f09,650aaf3d61aff41fd7e10f0a/all
//http://localhost:27017/api/v1/common/lkp/ sub_services_lkp /:langTitle/get_subservices _data/:suspendStatus 
