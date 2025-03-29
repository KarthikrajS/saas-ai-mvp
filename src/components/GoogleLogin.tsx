'use client';
import { auth, provider } from '@/lib/firebase';
import { signInWithPopup } from 'firebase/auth';

export default function GoogleLogin() {
    const handleLogin = async () => {
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error("Login Error:", error);
        }
    };

    return (
        <button onClick={handleLogin} className="bg-blue-600 text-white px-4 py-2 rounded">
            Sign in with Google
        </button>
    );
}