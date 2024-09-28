import { useState } from 'react';
import Slider from 'react-slick';

const activitiesData = [
    { title: 'Zip Lining', image: '/Activities/ziplining.jpg' },
    { title: 'Bungee Jumping', image: '/Activities/bungee.jpg' },
    { title: 'Rafting', image: '/Activities/rafting.jpg' },
    { title: 'Ski Touring', image: '/Activities/ski_touring.jpg' },
    { title: 'Surfing', image: '/Activities/surfing.jpg' },
    { title: 'Nightlife & Eco-Tourism', image: '/Activities/nightlife.jpg' }
];

const Activities = () => {
    const [selectedActivityIndex, setSelectedActivityIndex] = useState(0);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 0, // Changed to 1 for smoother scrolling
        arrows: false,
    };

    return (
        <div className=" bg-gray-200 px-3 py-5 md:py-20">
            <h1 className="text-gray-700 uppercase text-2xl md:text-6xl font-bold text-center py-5">Finest Tour Activities</h1>
            <h3 className="text-sm text-gray-600 pb-10 text-center md:px-96 px-4">
                Dive into the excitement with our selection of the finest tour activities! Whether you&apos;re soaring through the skies while paragliding over breathtaking landscapes, or feeling the rush of adrenaline as you zip-line through lush forests...
            </h3>

            <div className="flex justify-center space-x-4 md:pb-10 mb-5 flex-wrap">
                {activitiesData.map((activity, index) => (
                    <button 
                        key={index} 
                        className="text-white bg-green-400 hover:bg-green-700 px-4 py-2 rounded mb-2"
                        onClick={() => setSelectedActivityIndex(index)} 
                    >
                        {activity.title}
                    </button>
                ))}
            </div>

            <Slider {...settings}>
                <div className="flex justify-center">
                    <img 
                        src={activitiesData[selectedActivityIndex].image} 
                        alt={activitiesData[selectedActivityIndex].title} 
                        className="rounded-lg w-full md:w-2/3 mx-auto" 
                    />
                </div>
            </Slider>
        </div>
    );
};

export default Activities;