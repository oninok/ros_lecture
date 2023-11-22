// This snippet file was generated by processing the source file:
// ./auth-next/email-link-auth.js
//
// To update the snippets in this file, edit the source and then run
// 'npm run snippets'.

// [START auth_email_link_link_modular]
import { getAuth, linkWithCredential, EmailAuthProvider } from "firebase/auth";

// Construct the email link credential from the current URL.
const credential = EmailAuthProvider.credentialWithLink(
  email, window.location.href);

// Link the credential to the current user.
const auth = getAuth();
linkWithCredential(auth.currentUser, credential)
  .then((usercred) => {
    // The provider is now successfully linked.
    // The phone user can now sign in with their phone number or email.
  })
  .catch((error) => {
    // Some error occurred.
  });
// [END auth_email_link_link_modular]