import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  // Collectively resolve all promises
  return Promise.all([uploadPhoto(), createUser()])
    .then((responses) => {
      // Log the desired properties to the console
      const [uploadResponse, userResponse] = responses;
      console.log(`${uploadResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
    })
    .catch(() => {
      // Handle errors
      console.log('Signup system offline');
    });
}
