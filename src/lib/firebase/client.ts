// Import the functions you need from the FirebaseSDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app';
//Import SDKs for Firebase Authentication
import { getAuth, inMemoryPersistence, setPersistence } from 'firebase/auth';

//Check to make sure firebase client environment variables are defined
if (
	!import.meta.env.VITE_FIREBASE_PROJECT_ID ||
	!import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ||
	!import.meta.env.VITE_FIREBASE_API_KEY
) {
	throw new Error('Firebase client environment variables not set!');
}

//import the firebase client environment variables
const firebaseConfig = {
	projectID: import.meta.env.VITE_FIREBASE_PROJECT_ID,
	authDOMAIN: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY
};

// Initialize Firebase
export const getClientApp = () => {
	if (getApps().length) return getApp();
	const app = initializeApp(firebaseConfig);

	const auth = getAuth(app);
	setPersistence(auth, inMemoryPersistence);

	return app;
};
