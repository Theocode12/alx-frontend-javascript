import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((res) => {
      const str = `${res[0].body} ${res[1].firstName} ${res[1].lastName}`;
      console.log(str);
    })
    .catch(() => console.log('Signup system offline'));
}
