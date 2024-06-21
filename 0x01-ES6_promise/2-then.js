export default function handleResponseFromAPI(promise) {
  promise.then((value) => new Promise(value))
    .catch(() => new Error())
    .finally(() => console.log('Got a response from the API'));
}
