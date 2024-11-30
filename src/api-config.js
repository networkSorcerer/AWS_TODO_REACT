let backendHost;

//const hostname = window && window.location && window.location.hostname;

// if (hostname === "localhost") {
//   backendHost = "http://54.180.139.78:8080";
// }
backendHost = "http://54.180.139.78:8080";
// 템플릿 리터럴에서 `${}` 사용
export const API_BASE_URL = `${backendHost}`;
