import { useState } from 'react';
import toast from 'react-hot-toast'; // For toast notifications
import { useAuth } from '../authProvider/AuthProvider';

const Login = () => {
    const { login, googleLogin } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false); // Loading state

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading state to true
        try {
            await login(email, password);
            toast.success("Login successful!");
            // Optionally redirect to the user's profile or home page
            window.location.href = '/profile'; // Change this as necessary
        } catch (error) {
            toast.error("Login failed: " + error.message);
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    const handleGoogleLogin = async () => {
        setLoading(true); // Set loading state to true
        try {
            await googleLogin();
            toast.success("Google login successful!");
            // Optionally redirect to the user's profile or home page
            window.location.href = '/profile'; // Change this as necessary
        } catch (error) {
            toast.error("Google login failed: " + error.message);
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
            <h1 className="text-4xl font-bold mb-6">Login</h1>
            <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md md:w-1/3">
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
                <button type="submit" disabled={loading} className={`bg-green-500 text-white px-4 py-2 rounded w-full hover:bg-green-600 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}>
                    {loading ? 'Logging in...' : 'Login'}
                </button>
            </form>
            <button onClick={handleGoogleLogin} disabled={loading} className={`mt-4 bg-white text-gray-800 px-4 py-2 rounded hover:bg-blue-600 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}>
                <div className='flex items-center'>
                    <img className='w-10' src="google.png" alt="" /><span>Login with Google</span>
                </div>
            </button>
            <p className="mt-4">
                Don&apos;t have an account? 
                <a href="/register" className="text-blue-500 hover:underline"> Register here</a>
            </p>
        </div>
    );
};

export default Login;