import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  const profile = [];
  Promise.all([uploadPhoto(), createUser()]).then((values) => {
    profile.push(values[0].body);
    profile.push(values[1].firstName);
    profile.push(values[1].lastName);
    console.log(profile.join(' '));
  }).catch(() => console.error('Signup system offline'));
}
