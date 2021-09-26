import {
  facebookProvider,
  firebaseAuth,
  githubProvider,
  googleProvider,
} from "./firebase";

class AuthService {
  login(providerName) {
    const authProvider = this.getProvider(providerName);
    return firebaseAuth.signInWithPopup(authProvider);
  }

  onAuthChange(onUserChanged) {
    return firebaseAuth.onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }

  logout() {
    firebaseAuth.signOut();
  }

  getProvider(providerName) {
    switch (providerName) {
      case "Google":
        return googleProvider;
      case "Github":
        return githubProvider;
      case "Facebook":
        return facebookProvider;
      default:
        return new Error(`not supported provider: ${providerName}`);
    }
  }
}

export default AuthService;
