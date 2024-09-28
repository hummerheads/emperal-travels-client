const TopDestinations = () => {
    return (
        <div>
            <div className="flex flex-col md:py-12 px-4 md:px-96 items-center mb-5">
                <h1 className="text-5xl font-bold text-left text-gray-800 mb-5">Discover Our Top Destinations</h1>
                <p className="text-left text-gray-600 mb-5 md:mb-12">
                    Embark on an unforgettable journey as you explore our handpicked selection of top travel destinations! Whether you&apos;re seeking adventure, relaxation, or cultural experiences, we have something for everyone. Dive into breathtaking landscapes, vibrant cities, and hidden gems that await your discovery. Let us guide you to your next dream getaway!
                </p>
                <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 md:mb-5">
                    <div className="relative mb-4 md:mb-0">
                        <img src="Footer/france.jpg" alt="Arc de Triomphe in France at night" className="rounded-lg shadow-lg w-full h-auto md:w-96 md:h-96"/>
                        <div className="absolute bottom-4 left-4 text-white">
                            <p className="text-sm">Travel To</p>
                            <h2 className="text-xl font-bold">France</h2>
                        </div>
                    </div>
                    <div className="relative mb-4 md:mb-0">
                        <img src="Footer/italy.jpg" alt="Mount Fuji in Japan with a pagoda in the foreground" className="w-full h-auto rounded-lg shadow-lg md:w-96 md:h-96"/>
                        <div className="absolute bottom-4 left-4 text-white">
                            <p className="text-sm text-center">Travel To</p>
                            <h2 className="text-xl font-bold text-center">Italy</h2>
                        </div>
                    </div>
                    <div className="relative mb-4 md:mb-0">
                        <img src="Footer/spain.jpg" alt="Victoria Memorial in India at sunset" className="w-full h-auto rounded-lg shadow-lg md:w-96 md:h-96"/>
                        <div className="absolute bottom-4 left-4 text-white">
                            <p className="text-sm">Travel To</p>
                            <h2 className="text-xl font-bold">Spain</h2>
                        </div>
                    </div>
                </div>
                <button className="bg-green-500 text-white px-1 w-2/3 md:w-1/5 justify-center md:px-6 py-2 rounded-sm font-bold shadow-lg hover:bg-green-600 md:mt-10">
                    View All Destinations
                </button>
            </div>
        </div>
    );
};

export default TopDestinations;