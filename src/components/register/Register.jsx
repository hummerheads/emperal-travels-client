import { useState } from 'react';
import toast from 'react-hot-toast'; // For toast notifications

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();

        // Password validation
        const passwordValidation = validatePassword(password);
        if (!passwordValidation.isValid) {
            toast.error(passwordValidation.message);
            return;
        }


    };

    const validatePassword = (password) => {
        const upperCasePattern = /[A-Z]/;
        const lowerCasePattern = /[a-z]/;
        if (password.length < 6) {
            return { isValid: false, message: 'Password must be at least 6 characters long.' };
        }
        if (!upperCasePattern.test(password)) {
            return { isValid: false, message: 'Password must contain at least one uppercase letter.' };
        }
        if (!lowerCasePattern.test(password)) {
            return { isValid: false, message: 'Password must contain at least one lowercase letter.' };
        }
        return { isValid: true };
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
            <h1 className="text-4xl font-bold mb-6">Register</h1>
            <form onSubmit={handleRegister} className="bg-white p-8 rounded shadow-md md:w-1/3">
                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                        className="border border-gray-300 p-2 w-full rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                        className="border border-gray-300 p-2 w-full rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="photoURL">Photo URL</label>
                    <input 
                        type="text" 
                        id="photoURL" 
                        value={photoURL} 
                        onChange={(e) => setPhotoURL(e.target.value)} 
                        required 
                        className="border border-gray-300 p-2 w-full rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                        className="border border-gray-300 p-2 w-full rounded"
                    />
                </div>
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded w-full hover:bg-green-600">
                    Register
                </button>
            </form>
            <p className="mt-4">
                Already have an account? 
                <a href="/login" className="text-blue-500 hover:underline"> Login here</a>
            </p>

            {/* Toast container */}
        </div>
    );
};

export default Register;