import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_ENDPOINT;
const instance = axios.create({
  baseURL: apiUrl,  // เปลี่ยนเป็น URL ของ API จริง
  timeout: 10000,  // timeout 10 วินาที
  headers: {
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${yourToken}` // ถ้ามี token
  }
});

export default instance;