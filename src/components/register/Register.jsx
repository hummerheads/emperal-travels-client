import { useState } from 'react';
import toast from 'react-hot-toast'; 
import { auth } from '../firebase/firebase.config';
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Register = () => {
    const db = getFirestore();
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();
        const passwordValidation = validatePassword(password);
        if (!passwordValidation.isValid) {
            toast.error(passwordValidation.message);
            return;
        }

        if (!validatePhotoURL(photoURL)) {
            toast.error('Please enter a valid photo URL.');
            return;
        }

        setLoading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await setDoc(doc(db, "users", user.uid), {
                name,
                email: user.email,
                photoURL,
                bookmarkedSpots: []
            });

            toast.success("Registration successful!");
            window.location.href = '/profile'; // Redirect after registration
        } catch (error) {
            let errorMessage = "Registration failed.";
            if (error.code === 'auth/email-already-in-use') {
                errorMessage = "Email is already in use.";
            } else if (error.code === 'auth/invalid-email') {
                errorMessage = "Invalid email address.";
            }
            toast.error(errorMessage);
        } finally {
            setLoading(false);
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

    const validatePhotoURL = (url) => {
        const pattern = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg))$/i;
        return pattern.test(url);
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
                <button type="submit" disabled={loading} className="bg-green-500 text-white px-4 py-2 rounded w-full hover:bg-green-600">
                    {loading ? 'Registering...' : 'Register'}
                </button>
            </form>
            <p className="mt-4">
                Already have an account? 
                <a href="/login" className="text-blue-500 hover:underline"> Login here</a>
            </p>
        </div>
    );
};

export default Register;