export const ACTION_API_V1_COMMON_LKP_business_organizations_LKP_GET_business_organizations_DATA_REQUEST = "@V1/COMMON/LKP/LKP_business_organizations/GET_business_organizations_DATA_REQUEST"
export const ACTION_API_V1_COMMON_LKP_business_organizations_LKP_GET_business_organizations_DATA_SUCCESS = "@V1/COMMON/LKP/LKP_business_organizations/GET_business_organizations_DATA_SUCCESS"
export const ACTION_API_V1_COMMON_LKP_business_organizations_LKP_GET_business_organizations_DATA_FAILED = "@V1/COMMON/LKP/LKP_business_organizations/GET_business_organizations_DATA_FAILED"

export function getBusinessOrganizationsData(data) {
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

//http://localhost:27017/api/v1/common/lkp/business_organizations_lkp/:langTitle/get_business_organizations_data/:suspendStatus
//http://localhost:27017/api/v1/common/lkp/business_organizations_lkp/En/get_business_organizations_data/only-false


export const ACTION_API_V1_COMMON_LKP_business_organizations_LKP_UPDATE_business_organizations_DATA_REQUEST = "@V1/COMMON/LKP/LKP_business_organizations/UPDATE_business_organizations_DATA_REQUEST"
export const ACTION_API_V1_COMMON_LKP_business_organizations_LKP_UPDATE_business_organizations_DATA_SUCCESS = "@V1/COMMON/LKP/LKP_business_organizations/UPDATE_business_organizations_DATA_SUCCESS"
export const ACTION_API_V1_COMMON_LKP_business_organizations_LKP_UPDATE_business_organizations_DATA_FAILED = "@V1/COMMON/LKP/LKP_business_organizations/UPDATE_business_organizations_DATA_FAILED"

export function UpdateBusinessOrganizationsData(data) {
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

//http://localhost:27017/api/v1/common/lkp/business_organizations_lkp/:langTitle/update_business_organizations_data/:Id
//http://localhost:27017/api/v1/common/lkp/business_organizations_lkp/En/update_business_organizations_data/650afb2ab348f09f218c523f

//http://localhost:27017/api/v1/common/lkp/business_organizations_lkp/:langTitle/update_business_organizations_data/
//http://localhost:27017/api/v1/common/lkp/business_organizations_lkp/En/update_business_organizations_data/

export const ACTION_API_V1_COMMON_LKP_business_organizations_LKP_INSERT_business_organizations_DATA_REQUEST = "@V1/COMMON/LKP/LKP_business_organizations/INSERT_business_organizations_DATA_REQUEST"
export const ACTION_API_V1_COMMON_LKP_business_organizations_LKP_INSERT_business_organizations_DATA_SUCCESS = "@V1/COMMON/LKP/LKP_business_organizations/INSERT_business_organizations_DATA_SUCCESS"
export const ACTION_API_V1_COMMON_LKP_business_organizations_LKP_INSERT_business_organizations_DATA_FAILED = "@V1/COMMON/LKP/LKP_business_organizations/INSERT_business_organizations_DATA_FAILED"

export function INSERTBusinessOrganizationsData(data) {
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
//http://localhost:27017/api/v1/common/lkp/business_organizations_lkp/:langTitle/insert_business_organizations_data/:suspendStatus
//http://localhost:27017/api/v1/common/lkp/business_organizations_lkp/En/insert_business_organizations_data/all
