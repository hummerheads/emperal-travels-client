import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllTouristSpots = () => {
    const allTouristSpots = useLoaderData(); 
    const [sortOrder, setSortOrder] = useState('ascending');
    const [selectedCountry, setSelectedCountry] = useState('All');

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };

    const handleCountryFilter = (country) => {
        setSelectedCountry(country);
    };

    const filteredTouristSpots = allTouristSpots.filter(spot => 
        selectedCountry === 'All' || spot.country_Name === selectedCountry
    );

    const sortedTouristSpots = [...filteredTouristSpots].sort((a, b) => {
        return sortOrder === 'ascending' 
            ? a.average_cost - b.average_cost 
            : b.average_cost - a.average_cost;
    });

    return (
        <div>
            <div className="bg-[url('/Footer/2.jpg')] h-[50vh] w-screen flex items-center justify-center relative">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <h1 className="text-center text-4xl md:text-8xl text-white font-black relative z-10">ALL TOURIST SPOTS</h1>
            </div>   

            <div className="gap-2 md:gap-10 flex flex-wrap justify-center md:my-12 mt-4">
                {['All', 'France', 'Italy', 'Spain', 'England', 'Netherlands', 'Switzerland'].map(country => (
                    <button 
                        key={country} 
                        onClick={() => handleCountryFilter(country)} 
                        className={`md:px-5 px-6 mx-2 p-2 rounded-md ${selectedCountry === country ? 'bg-green-600 text-white' : 'bg-gray-300'}`}
                    >
                        {country}
                    </button>
                ))}
            </div>

            {/* Dropdown for sorting */}
            <div className="flex justify-center md:my-12 mt-4">
                <select 
                    value={sortOrder} 
                    onChange={handleSortChange} 
                    className="p-2 rounded-md"
                >
                    <option value="ascending">Sort by Average Cost (Ascending)</option>
                    <option value="descending">Sort by Average Cost (Descending)</option>
                </select>
            </div>

            {/* Tourist Spots Cards */}
            <div className="flex gap-5 md:gap-10 flex-wrap justify-center mt-8">
                {sortedTouristSpots.map((spot) => (
                    <div key={spot._id} className="m-0 p-2 md:p-10 border rounded-lg shadow-lg bg-white ">
                        <img src={spot.image} alt={spot.tourists_spot_name} className="w-96 h-60 object-cover rounded-md" />
                        <h2 className="text-gray-800 text-xl md:pb-5 text-center md:text-3xl font-bold mt-2">{spot.tourists_spot_name}</h2>
                        <p className='text-gray-700'><strong>Average Cost:</strong> ${spot.average_cost}</p>
                        <p className='text-gray-700'><strong>Total Visitors Per Year:</strong> {spot.totaVisitorsPerYear}</p>
                        <p className='text-gray-700'><strong>Travel Time:</strong> {spot.travel_time}</p>
                        <p className='text-gray-700'><strong>Seasonality:</strong> {spot.seasonality}</p>
                        <Link to={`/all-tourist-spots/${spot._id}`} className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded-md text-center">
                            View Details
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllTouristSpots;