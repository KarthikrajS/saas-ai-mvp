'use client';
import { useState } from 'react';
import { auth, provider } from '@/lib/firebase';
import { signInWithPopup } from 'firebase/auth';

export default function GoogleLogin() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async () => {
        setLoading(true);
        setError(null);  // Clear previous errors
        try {
            await signInWithPopup(auth, provider);
            // Handle success (e.g., redirect, show user info, etc.)
        } catch (err) {
            setError("Login failed! Please try again.");
            console.error("Login Error:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <button
                onClick={handleLogin}
                className="bg-blue-600 text-white px-4 py-2 rounded"
                disabled={loading}
            >
                {loading ? 'Signing in...' : 'Sign in with Google'}
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
    );
}
