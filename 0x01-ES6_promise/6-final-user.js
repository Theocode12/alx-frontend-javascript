import uploadPhoto from './5-photo-reject';
import signUpUser from './4-user-promise';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => {
      const response = [];
      results.forEach((result) => {
        response.push({ status: result.status, value: result.value || result.reason.message });
      });
      return response;
    });
}
