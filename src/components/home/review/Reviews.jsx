
const Reviews = () => {
    return (
        <div>
            <div className="flex flex-col items-center py-10 px-5 md:py-20 md:px-4 bg-cover bg-gray-800">
                <h1 className="md:py-10 text-white text-xl md:text-5xl font-bold mb-4 uppercase">Reviews by Travellers</h1>
                <p className="text-center max-w-2xl mb-12 text-gray-500">
                    &quot;Embark on an unforgettable journey through the heart of England&apos;s enchanting landscapes and rich cultural heritage. From the iconic landmarks of London to the picturesque countryside villages, every moment promises to be a captivating adventure.&quot;
                </p>
                <div className="md:w-3/4 flex flex-col md:flex-row justify-center gap-8 mb-12">
                    <div className=" review-card w-full md:w-1/3 text-center">
                        <div className="rating mb-2 flex items-center justify-center">
                            <img src="Item.svg" alt="" />
                            <img src="Item.svg" alt="" />
                            <img src="Item.svg" alt="" />
                            <img src="Item.svg" alt="" />
                            <img src="Item.svg" alt="" />
                        </div>
                        <h2 className="text-xl font-bold mb-2">Excursion Charming Spain</h2>
                        <p className="mb-4">&quot;Embark on an enchanting excursion through the vibrant streets and captivating landscapes of Spain.&quot;</p>
                        <img src="review/1.png" alt="Portrait of Alexander" className="mx-auto mb-2" />
                        <p className="font-bold">Alexander</p>
                        <p className="text-sm">Founder, EduXpart</p>
                    </div>
                    <div className="review-card w-full md:w-1/3 text-center">
                    <div className="rating mb-2 flex items-center justify-center">
                            <img src="Item.svg" alt="" />
                            <img src="Item.svg" alt="" />
                            <img src="Item.svg" alt="" />
                            <img src="Item.svg" alt="" />
                            <img src="Item.svg" alt="" />
                        </div>
                        <h2 className="text-xl font-bold mb-2">Trek Stunning France</h2>
                        <p className="mb-4">&quot;Exemplary service! Egens Lab&apos;s web design and development team went above and beyond, leaving me thoroughly impressed and grateful.&quot;</p>
                        <img src="review/2.png" alt="Portrait of James" className="mx-auto mb-2" />
                        <p className="font-bold">James</p>
                        <p className="text-sm">Founder, Ezenzy Ltd</p>
                    </div>
                    <div className="review-card w-full md:w-1/3 text-center">
                    <div className="rating mb-2 flex items-center justify-center">
                            <img src="Item.svg" alt="" />
                            <img src="Item.svg" alt="" />
                            <img src="Item.svg" alt="" />
                            <img src="Item.svg" alt="" />
                            <img src="Item.svg" alt="" />
                        </div>
                        <h2 className="text-xl font-bold mb-2">Expedition Lovely Brazil</h2>
                        <p className="mb-4">&quot;I cannot express enough how satisfied I am with the webgot deve services provided by Egens Lab from the initial.&quot;</p>
                        <img src="review/3.png" alt="Portrait of Harper" className="mx-auto mb-2" />
                        <p className="font-bold">Harper</p>
                        <p className="text-sm">Founder, Enosis Soft</p>
                    </div>
                </div>

                <div className="md:w-1/2 flex items-center bg-white text-black rounded-lg p-1 md:p-4 shadow-md">
                    <img src="review/trip.svg" alt="Tripadvisor logo" className="mr-4" />
                    <div>
                        <p className="font-bold">Tripadvisor</p>
                        <p className="text-sm">Rating</p>
                    </div>
                    <div className="md:ml-auto text-right md:mr-0 mr-1">
                        <p className="font-bold text-green-600">5.0</p>
                        <p className="text-xs  md:text-sm">306 Reviews</p>
                    </div>
                    <button className="md:ml-4 bg-green-600 text-white md:px-4 py-1 md:py-2 rounded-lg text-xs">Write A Review</button>
                </div>
            </div>
        </div>
    );
};

export default Reviews;