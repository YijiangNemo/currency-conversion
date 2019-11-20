import axios from 'axios';
import config from '../config'




export async function send_request(path, bodydata, querydata, method, header = { 'Accept': 'application/json', 'Content-Type': 'application/json', }) {
  let url = `${config.API_ADDRESS}/${path}`;
  if (querydata) {
    url = url + '?' + serializeData(querydata);
  }

  const request = axios(url, {
    method: method,
    data: bodydata,
    headers: header,
  }).then((res) => {
    return res
  }).catch((error) => {
    // console.log(error)
    throw error;
  })
  return request;
}

function serializeData(formBodyObj) {
  const requestBody = Object.keys(formBodyObj)
    .map(key => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(formBodyObj[key]);
    })
    .join('&');

  return requestBody;
}