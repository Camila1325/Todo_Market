import { 
    getAuth, 
    signOut, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword,
    updateProfile 
} from "firebase/auth";
import { firebaseApp } from "./firabase";

export const authFirebase = getAuth(firebaseApp);

export const loginWithEmail = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(authFirebase, email, password);
        return { success: true, user: userCredential.user };
    } catch (error) {
        console.error("Error en login:", error.code);
        return { success: false, error: error.message };
    }
};

export const registerWithEmail = async (email, password, displayName) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(authFirebase, email, password);
        // Actualizar el perfil con el nombre
        await updateProfile(userCredential.user, { displayName });
        return { success: true, user: userCredential.user };
    } catch (error) {
        console.error("Error en registro:", error.code);
        return { success: false, error: error.message };
    }
};

export const logout = async () => {
    try {
        await signOut(authFirebase);
        return { success: true };
    } catch (error) {
        console.error("Error en logout:", error);
        return { success: false, error: error.message };
    }
};