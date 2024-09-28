const Instagram = () => {
    return (
        <div>
            <div className="text-center py-8 ">
                <h1 className="text-2xl md:text-5xl font-bold uppercase">Instagram</h1>
                <p className="text-gray-600">Follow Us On @Emperal Travels</p>
            </div>
            <div className="grid md:flex md:justify-center md:space-x-4 px-2 md:px-1  md:pb-20">
                <img src="Footer/1.jpg" alt="" className="ml-0 rounded-lg md:w-1/6 w-full h-auto mb-4 md:mb-0 m-0" />
                <img src="/Footer/2.jpg" alt="" className="ml-0 rounded-lg md:w-1/6 w-full h-auto mb-4 md:mb-0" />
                <img src="/Footer/6.jpg" alt="" className="rounded-lg md:w-1/6 w-full h-auto mb-4 md:mb-0" />
                <img src="/Footer/4.jpg" alt="" className="rounded-lg md:w-1/6 w-full h-auto mb-4 md:mb-0" />
                <img src="/Footer/5.jpg" alt="" className="rounded-lg md:w-1/6 w-full h-auto mb-4 md:mb-0" />
            </div>
        </div>
    );
};

export default Instagram;