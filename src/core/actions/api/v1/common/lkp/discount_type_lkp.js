export const ACTION_API_V1_COMMON_LKP_DISCOUNT_TYPE_LKP_GET_DISCOUNT_TYPE_DATA_REQUEST = "@V1/COMMON/LKP/LKP_DISCOUNT_TYPE/GET_DISCOUNT_TYPE_DATA_REQUEST"
export const ACTION_API_V1_COMMON_LKP_DISCOUNT_TYPE_LKP_GET_DISCOUNT_TYPE_DATA_SUCCESS = "@V1/COMMON/LKP/LKP_DISCOUNT_TYPE/GET_DISCOUNT_TYPE_DATA_SUCCESS"
export const ACTION_API_V1_COMMON_LKP_DISCOUNT_TYPE_LKP_GET_DISCOUNT_TYPE_DATA_FAILED = "@V1/COMMON/LKP/LKP_DISCOUNT_TYPE/GET_DISCOUNT_TYPE_DATA_FAILED"

export function getDISCOUNT_TYPEData(data) {
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

// http://localhost:27017/api/v1/common/lkp/discount_type_lkp/En/get_discount_type_data/all
// http://localhost:27017/api/v1/common/lkp/discount_type_lkp/:langTitle/get_discount_type_data /:suspendStatus


