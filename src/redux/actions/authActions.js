/* eslint-disable */

export const GET_AUTH = 'GET_AUTH'
export const GET_AUTH_SUCCESS = 'GET_AUTH_SUCCESS';
export const GET_AUTH_FAILURE = 'GET_AUTH_FAILURE';

export const getAuth = () => ({
    type: GET_AUTH
});

export const getAuthSuccess = auth => ({
    type: GET_AUTH_SUCCESS,
    payload: auth
});

export const getAuthFailure = () => ({
    type: GET_AUTH_FAILURE
});

export function fetchAuth() {
    return async (dispatch) => {
        dispatch(getAuth())
        try {
            const res = await fetch('http://192.168.1.18/zabbix/api_jsonrpc.php', { 
                method: 'POST',
                headers: {
                'Content-Type': 'application/json-rpc'
                },
                body: JSON.stringify({
                    "jsonrpc": "2.0",
                    "method": "user.login",
                    "params": {
                        "user": "Admin",
                        "password": "zabbix"
                    },
                    "id": 1,
                    "auth": null
                })
                });
            const data = await res.json();
            dispatch(getAuthSuccess(data.result));
        }
        catch (error) {
            dispatch(getAuthFailure());
        }
    }
}