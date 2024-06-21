export default function handleResponseFromAPI(promise) {
  return promise.then((value) => new Promise(value))
    .catch(() => new Error())
    .finally(() => console.log('Got a response from the API'));
}
