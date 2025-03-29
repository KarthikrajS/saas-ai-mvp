'use client'
import { redirect } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useEffect, useState } from 'react';
import AIListingForm from '../components/AIListingForm';


export default function DashboardPage() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!user) redirect('/');
            else setUser(user);
        });

        return () => unsubscribe();
    }, []);

    if (!user) return <div>Loading...</div>;

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Welcome, {user.displayName} 👋</h1>
            <p className="mt-2">This is your AI-powered dashboard.</p>
            <AIListingForm />
        </div>
    );
}