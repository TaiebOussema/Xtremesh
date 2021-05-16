/* eslint-disable */

export const GET_HOSTS = 'GET_HOSTS'
export const GET_HOSTS_SUCCESS = 'GET_HOSTS_SUCCESS';
export const GET_HOSTS_FAILURE = 'GET_HOSTS_FAILURE';

export const getHosts = () => ({
    type: GET_HOSTS
});

export const getHostsSuccess = hosts => ({
    type: GET_HOSTS_SUCCESS,
    payload: hosts
});

export const getHostsFailure = () => ({
    type: GET_HOSTS_FAILURE
});

export function fetchHosts() {
    return async (dispatch) => {
        dispatch(getHosts())
        try {
            const res = await fetch('http://192.168.1.18/zabbix/api_jsonrpc.php', { 
                method: 'POST',
                headers: {
                'Content-Type': 'application/json-rpc'
                },
                body: JSON.stringify({
                    "jsonrpc": "2.0",
                    "method": "host.get",
                    "params": {
                      "output": [
                          "hostid",
                          "host"
                      ],
                      "selectInterfaces": [
                          "interfaceid",
                          "ip"
                      ]
                  },
                    "id": 2,
                    "auth": "ecd239e8734d6837ae2fa1f8074d3771",
                  })
                });
            const data = await res.json();
            dispatch(getHostsSuccess(data.result));
        }
        catch (error) {
            dispatch(getHostsFailure());
        }
    }
}