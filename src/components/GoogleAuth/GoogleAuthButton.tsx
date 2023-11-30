import React from 'react';
import { signIn } from 'next-auth/react';

const GoogleAuthButton: React.FC = () => {
    return (
        <button
            onClick={() => signIn('google')}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
            type='button'
        >
            Sign in with Google
        </button>
    );
};

export default GoogleAuthButton;
