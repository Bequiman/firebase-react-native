import { GoogleSignin } from '@react-native-google-signin/google-signin';

export const onGoogleLogin = async () => {
  const user = await GoogleSignin.signIn();
  return user;
};

export const onGoogleLogout = async () => {
  return await GoogleSignin.signOut();
};

GoogleSignin.configure({
  webClientId:
  "837733470532-50pu9528gv8obd2gngko4g0eib2ign44.apps.googleusercontent.com",
});
