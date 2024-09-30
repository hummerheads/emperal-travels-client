import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { auth, db } from '../firebase/firebase.config'; // Ensure correct imports
import { doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

const Profile = () => {
    const [userData, setUserData] = useState(null);
    const [bookmarkedSpots, setBookmarkedSpots] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch user data and bookmarked spots
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                try {
                    // Fetch user data from Firestore
                    const docRef = doc(db, 'users', user.uid); // Use user's UID to fetch their document
                    const docSnap = await getDoc(docRef);

                    if (!docSnap.exists()) {
                        throw new Error('User profile not found.');
                    }

                    const data = docSnap.data();
                    setUserData(data);
                    setBookmarkedSpots(data.bookmarkedSpots || []); // Ensure bookmarkedSpots is initialized
                } catch (err) {
                    setError(err.message);
                    Swal.fire({
                        title: 'Error!',
                        text: err.message,
                        icon: 'error',
                        confirmButtonText: 'Try Again'
                    });
                } finally {
                    setLoading(false);
                }
            } else {
                // No user is signed in
                setLoading(false);
                setError('No user is currently logged in.');
            }
        });

        return () => unsubscribe(); // Cleanup subscription on unmount
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="max-w-4xl mx-auto p-5">
            <h1 className="text-3xl font-bold mb-4">Profile</h1>
            {userData && (
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold">Personal Information</h2>
                    <img src={userData.photoUrl} alt="User" className="w-24 h-24 rounded-full mb-4" />
                    <p><strong>Name:</strong> {userData.name}</p>
                    <p><strong>Email:</strong> {userData.email}</p>
                </div>
            )}
            <h2 className="text-2xl font-semibold mb-4">Bookmarked Spots</h2>
            {bookmarkedSpots.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {bookmarkedSpots.map(spot => (
                        <div key={spot._id} className="border rounded-lg shadow-lg p-4">
                            <img src={spot.image} alt={spot.tourists_spot_name} className="w-full h-40 object-cover rounded-md mb-2" />
                            <h3 className="text-xl font-bold">{spot.tourists_spot_name}</h3>
                            <p><strong>Country:</strong> {spot.country_Name}</p>
                            <p><strong>Average Cost:</strong> ${spot.average_cost}</p>
                            {/* Remove Bookmark Button */}
                            <button className="mt-2 bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600">
                                Remove Bookmark
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No bookmarked spots found.</p>
            )}
        </div>
    );
};

export default Profile;