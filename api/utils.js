export const rejectOnError = resp => {
  if (resp.status >= 200 && resp.status < 300) {
    return resp;
  } else {
    return Promise.reject(resp);
  }
}
