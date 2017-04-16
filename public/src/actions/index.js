import fetch from 'node-fetch';
const ROOT_URL = 'https://api.intrinio.com/historical_data?identifier=GE&item=average_daily_volume';

export const GET_STOCK_INFO = 'GET_STOCK_INFO';

export function setStockInfo(payload) {
  let dates = [];
  let values = [];

  payload.data.map(data => {
    dates.push(data.date);
    values.push(data.value);
  });

  return {
    type: GET_STOCK_INFO,
    identifier: payload.identifier,
    item: payload.item,
    dates: dates,
    values: values
  };
}

export function getStockInfo() {
  return (dispatch) => {
    return fetch(ROOT_URL, {
      headers: {
        'Authorization': 'Basic '+ btoa('97ab0bd603cc1881fd095e97d2ea8d68:b25ec936933b710d67bdfe054941c130'),
        'Content-Type': 'application/json',
      }, 
    })
    .then(res => {
      if (res.status === 200) {
        return res.json();
      }
    })
    .then(json => {
      dispatch(setStockInfo(json));
    })
    .catch(err => {
      console.log('err:' + err);
    });
  }
}