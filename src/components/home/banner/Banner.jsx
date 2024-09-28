
const Banner = () => {
    return (
        <div className="md:relative bg-gray-300">
        <img src="banner.jpg" alt="People walking on a beach with large rock formations and ocean waves" className="md:px-48 md:py-20 w-full md:w-5/6 h-3/4" />
        <div className=" md:absolute top-40 right-80 bg-gray-800 bg-opacity-75 text-white  md:px-20 px-3 py-5 md:py-24 rounded-lg shadow-lg md:w-1/3">
            <div className="mb-2 flex justify-between items-center ">
                <span className="bg-green-500 text-xs font-bold p-2 px-2 rounded">FEATURED</span> 
                <br />
                <span className="ml-2 text-sm bg-gray-400 p-1">Adventure Tours</span>
            </div>
            <h2 className="text-lg md:text-2xl font-bold mb-2">Embracing City Lights, Landm, And Iconic Culture.</h2>
            <div className="flex items-center justify-end md:mb-5 gap-2 ">
                <img src="/public/Group - 2/calender.png" alt="" />
                <span className="">3 Days / 4 Night</span>
            </div>
            <hr />
            <div className="md:mb-10">
                <div className="flex justify-between md:mt-10">
                <div className="flex justify-start"><img src="/public/Group - 2/like.png" className="pr-3" alt="" /><p>Home Pickup</p></div>
                <div className="flex justify-start"><img src="/public/Group - 2/like.png" className="pr-3" alt="" />Night Food</div>
                </div>
    
                <div className="flex justify-start"><img src="/public/Group - 2/like.png" className="pr-3" alt="" />Seaplane Flying</div>
            </div>
<hr />
            <div className="md:mb-4 flex justify-between md:mt-10 items-center">
                <div>
                <span className="text-lg">Starting From:</span>
                <span className="text-lg md:text-3xl font-bold text-green-400 ml-2">$240</span>
                <span className="text-lg line-through ml-2">$380</span>
                <span className="text-sm block">TAXES INCLUDED</span>
                </div>
                <div>
                <button className="bg-green-500 text-white md:px-4 md:py-2 rounded">Book A Trip</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Banner;