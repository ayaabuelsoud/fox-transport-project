export const ACTION_API_V1_COMMON_LKP_AIRLINE_LKP_GET_AIRLINE_DATA_REQUEST = "@V1/COMMON/LKP/LKP_AIRLINE/GET_AIRLINE_DATA_REQUEST"
export const ACTION_API_V1_COMMON_LKP_AIRLINE_LKP_GET_AIRLINE_DATA_SUCCESS = "@V1/COMMON/LKP/LKP_AIRLINE/GET_AIRLINE_DATA_SUCCESS"
export const ACTION_API_V1_COMMON_LKP_AIRLINE_LKP_GET_AIRLINE_DATA_FAILED = "@V1/COMMON/LKP/LKP_AIRLINE/GET_AIRLINE_DATA_FAILED"

export function getAirLineData(data) {
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