import fetch from 'node-fetch';

function delay(timePeriod) {
  return new Promise((_resolve, reject) => {
    setTimeout(() => reject('Request Timeout'), timePeriod);
  });
}

const timePeriod = 0;
const apiCall = fetch('https://api.github.com/');
const timeoutFunc = delay(timePeriod);

Promise.race([apiCall, timeoutFunc])
  .then((data) => data.json())
  .then((data) => console.log('Data : ', data))
  .catch((error) => console.log('Error : ', error));
