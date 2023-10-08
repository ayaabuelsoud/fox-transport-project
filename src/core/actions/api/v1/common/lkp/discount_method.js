export const ACTION_API_V1_COMMON_LKP_DISCOUNT_METHOD_GET_DISCOUNT_METHOD_DATA_REQUEST = "@V1/COMMON/LKP/DISCOUNT_METHOD/GET_DISCOUNT_METHOD_DATA_REQUEST"
export const ACTION_API_V1_COMMON_LKP_DISCOUNT_METHOD_GET_DISCOUNT_METHOD_DATA_SUCCESS = "@V1/COMMON/LKP/DISCOUNT_METHOD/GET_DISCOUNT_METHOD_DATA_SUCCESS"
export const ACTION_API_V1_COMMON_LKP_DISCOUNT_METHOD_GET_DISCOUNT_METHOD_DATA_FAILED = "@V1/COMMON/LKP/DISCOUNT_METHOD/GET_DISCOUNT_METHOD_DATA_FAILED"

export function getDiscountMethodData(data) {
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

// http://localhost:27017/api/v1/common/lkp/discount_method/En/get_discount_method_data/all
// http://localhost:27017/api/v1/common/lkp/discount_method/:langTitle/get_discount_method_data/:suspendStatus

export const ACTION_API_V1_COMMON_LKP_DISCOUNT_METHOD_LKP_UPDATE_DISCOUNT_METHOD_DATA_REQUEST = "@V1/COMMON/LKP/LKP_DISCOUNT_METHOD/UPDATE_DISCOUNT_METHOD_DATA_REQUEST"
export const ACTION_API_V1_COMMON_LKP_DISCOUNT_METHOD_LKP_UPDATE_DISCOUNT_METHOD_DATA_SUCCESS = "@V1/COMMON/LKP/LKP_DISCOUNT_METHOD/UPDATE_DISCOUNT_METHOD_DATA_SUCCESS"
export const ACTION_API_V1_COMMON_LKP_DISCOUNT_METHOD_LKP_UPDATE_DISCOUNT_METHOD_DATA_FAILED = "@V1/COMMON/LKP/LKP_DISCOUNT_METHOD/UPDATE_DISCOUNT_METHOD_DATA_FAILED"

export function updateDISCOUNTMETHODData(data) {
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

// http://localhost:27017/api/v1/common/lkp/discount_method_lkp/:langTitle/update_discount_method_data/:Id
// http://localhost:27017/api/v1/common/lkp/discount_method_lkp/En/update_discount_method_data/5

export const ACTION_API_V1_COMMON_LKP_DISCOUNT_METHOD_LKP_Get_discountmethods_related_to_discounttype_DISCOUNT_METHOD_DATA_REQUEST = "@V1/COMMON/LKP/LKP_DISCOUNT_METHOD/Get_discountmethods_related_to_discounttype_DISCOUNT_METHOD_DATA_REQUEST"
export const ACTION_API_V1_COMMON_LKP_DISCOUNT_METHOD_LKP_Get_discountmethods_related_to_discounttype_DISCOUNT_METHOD_DATA_SUCCESS = "@V1/COMMON/LKP/LKP_DISCOUNT_METHOD/Get_discountmethods_related_to_discounttype_DISCOUNT_METHOD_DATA_SUCCESS"
export const ACTION_API_V1_COMMON_LKP_DISCOUNT_METHOD_LKP_Get_discountmethods_related_to_discounttype_DISCOUNT_METHOD_DATA_FAILED = "@V1/COMMON/LKP/LKP_DISCOUNT_METHOD/Get_discountmethods_related_to_discounttype_DISCOUNT_METHOD_DATA_FAILED"

export function Get_discountmethods_related_to_discounttype_DISCOUNTMETHODData(data) {
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

// http://localhost:27017/api/v1/common/lkp/discount_method_lkp/En/get_discountmethods_related_to_discounttype/discounttype_ids?650aaf3d61aff41fd7e10f09,650aaf3d61aff41fd7e10f0a/all
// http://localhost:27017/api/v1/common/lkp/discount_method_lkp /:langTitle/get_discount_method_data/:suspendStatus