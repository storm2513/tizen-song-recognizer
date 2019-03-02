export default function identify(blob, callback) {
  let params = {
    blob: blob
  }

  let formData = new FormData();

  for(let name in params) {
    formData.append(name, params[name]);
  }
  fetch(process.env.REACT_APP_IDENTIFY_API_URL, {
    method: 'POST',
    body: formData
  }).then(function(response) {
    return response.json()
  }).then(callback)
}