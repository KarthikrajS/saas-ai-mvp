'use client';
import { useState } from 'react';

export default function AIListingForm() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const generateListing = async () => {
        const res = await fetch('/api/ai/generateListing', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ input }),
        });

        const data = await res.json();
        setResult(data.listing);
    };

    return (
        <div className="mt-6">
            <textarea
                placeholder="Describe your product..."
                className="w-full border p-2 rounded"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={generateListing} className="mt-2 bg-green-600 text-white px-4 py-2 rounded">
                Generate Listing
            </button>
            {result && (
                <div className="mt-4 p-3 bg-gray-100 border rounded">
                    <h4 className="font-semibold mb-2">Generated Listing:</h4>
                    <p>{result}</p>
                </div>
            )}
        </div>
    );
}