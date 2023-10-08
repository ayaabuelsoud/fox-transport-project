export const ACTION_API_V1_COMMON_LKP_YEAR_MANUFACTURING_LKP_GET_YEAR_MANUFACTURING_DATA_REQUEST = "@V1/COMMON/LKP/LKP_YEAR_MANUFACTURING/GET_YEAR_MANUFACTURING_DATA_REQUEST"
export const ACTION_API_V1_COMMON_LKP_YEAR_MANUFACTURING_LKP_GET_YEAR_MANUFACTURING_DATA_SUCCESS = "@V1/COMMON/LKP/LKP_YEAR_MANUFACTURING/GET_YEAR_MANUFACTURING_DATA_SUCCESS"
export const ACTION_API_V1_COMMON_LKP_YEAR_MANUFACTURING_LKP_GET_YEAR_MANUFACTURING_DATA_FAILED = "@V1/COMMON/LKP/LKP_YEAR_MANUFACTURING/GET_YEAR_MANUFACTURING_DATA_FAILED"

export function getYearManufacturingData(data) {
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

// http://localhost:27017/api/v1/common/lkp/year_manufacturing_lkp/En/get_year_manufacturing_data/all
// http://localhost:27017/api/v1/common/lkp/year_manufacturing_lkp/:langTitle/get_year_manufacturing_data/:suspendStatus


export const ACTION_API_V1_COMMON_LKP_YEAR_MANUFACTURING_LKP_UPDATE_YEAR_MANUFACTURING_DATA_REQUEST = "@V1/COMMON/LKP/LKP_YEAR_MANUFACTURING/UPDATE_YEAR_MANUFACTURING_DATA_REQUEST"
export const ACTION_API_V1_COMMON_LKP_YEAR_MANUFACTURING_LKP_UPDATE_YEAR_MANUFACTURING_DATA_SUCCESS = "@V1/COMMON/LKP/LKP_YEAR_MANUFACTURING/UPDATE_YEAR_MANUFACTURING_DATA_SUCCESS"
export const ACTION_API_V1_COMMON_LKP_YEAR_MANUFACTURING_LKP_UPDATE_YEAR_MANUFACTURING_DATA_FAILED = "@V1/COMMON/LKP/LKP_YEAR_MANUFACTURING/UPDATE_YEAR_MANUFACTURING_DATA_FAILED"

export function updateYearManufacturingData(data) {
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

// http://localhost:27017/api/v1/common/lkp/year_manufacturing_lkp/En/update_year_manufacturing_data/46166160320
// http://localhost:27017/api/v1/common/lkp/year_manufacturing_lkp/:langTitle/update_year_manufacturing_data /:id



export const ACTION_API_V1_COMMON_LKP_YEAR_MANUFACTURING_LKP_INSERT_YEAR_MANUFACTURING_DATA_REQUEST = "@V1/COMMON/LKP/LKP_YEAR_MANUFACTURING/INSERT_YEAR_MANUFACTURING_DATA_REQUEST"
export const ACTION_API_V1_COMMON_LKP_YEAR_MANUFACTURING_LKP_INSERT_YEAR_MANUFACTURING_DATA_SUCCESS = "@V1/COMMON/LKP/LKP_YEAR_MANUFACTURING/INSERT_YEAR_MANUFACTURING_DATA_SUCCESS"
export const ACTION_API_V1_COMMON_LKP_YEAR_MANUFACTURING_LKP_INSERT_YEAR_MANUFACTURING_DATA_FAILED = "@V1/COMMON/LKP/LKP_YEAR_MANUFACTURING/INSERT_YEAR_MANUFACTURING_DATA_FAILED"

export function insertYearManufacturingData(data) {
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

// http://localhost:27017/api/v1/common/lkp/year_manufacturing_lkp/En/insert_year_manufacturing_data/
// http://localhost:27017/api/v1/common/lkp/year_namufacturing_lkp/:langTitle/insert_year_manufacturing_data /
