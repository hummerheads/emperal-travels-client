
const Banner = () => {
    return (
        <div className="relative bg-gray-300">
        <img src="banner.jpg" alt="People walking on a beach with large rock formations and ocean waves" className="px-48 py-20 w-5/6 h-3/4" />
        <div className="absolute top-60 right-80 bg-gray-800 bg-opacity-75 text-white px-20 py-24 rounded-lg shadow-lg">
            <div className="mb-2">
                <span className="bg-green-500 text-xs font-bold px-2 py-1 rounded">FEATURED</span>
                <span className="ml-2 text-sm">Adventure Tours</span>
            </div>
            <h2 className="text-2xl font-bold mb-2">Embracing City Lights, Landm, And Iconic Culture.</h2>
            <div className="flex items-center mb-2">
                <span className="">3 Days / 4 Night</span>
            </div>
            <ul className="mb-4">
                <li className="flex items-center mb-2"><i className="fas fa-check-circle mr-2"></i> Home Pickup</li>
                <li className="flex items-center mb-2"><i className="fas fa-check-circle mr-2"></i> Night Food</li>
                <li className="flex items-center mb-2"><i className="fas fa-check-circle mr-2"></i> Seaplane Flying</li>
            </ul>
            <div className="mb-4">
                <span className="text-lg">Starting From:</span>
                <span className="text-3xl font-bold text-green-400 ml-2">$240</span>
                <span className="text-lg line-through ml-2">$380</span>
                <span className="text-sm block">TAXES INCLUDED</span>
            </div>
            <button className="bg-green-500 text-white px-4 py-2 rounded">Book A Trip</button>
        </div>
    </div>
    );
};

export default Banner;