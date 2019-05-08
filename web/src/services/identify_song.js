export function identify(blob, callback) {
  let formData = new FormData();
  formData.append("blob", blob);

  fetch(process.env.REACT_APP_IDENTIFY_API_URL, {
    method: "POST",
    body: formData
  }).then(function(response) {
    return response.json()
  }).then(callback).catch(function(error) {
    alert(error)
  });
}

export function isSongRecognized(code) {
  return code === 0
}
