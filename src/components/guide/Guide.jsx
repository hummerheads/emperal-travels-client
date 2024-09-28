const Guide = () => {
    return (
        <div className="md:py-10 md:pb-20">
            <h1 className="text-center text-2xl md:text-5xl font-bold py-10 md:py-20 uppercase">Local Tour Guide</h1>
            <div className="block md:flex justify-center gap-20">
                <div className="shadow-2xl">
                    <img src="Team/team1.jpg" alt="" className="md:w-96 md:h-80 w-full h-auto px-4 md:px-0 " />
                    <div className="text-center pb-5 md:py-5">
                        <h1 className="text-xl font-bold text-gray-800">Yeasin Rafee</h1>
                        <p className="text-gray-600 text-sm">Tour Guide</p>
                    </div>
                </div>
                <div className="shadow-2xl">
                    <img src="Team/team2.jpg" alt="" className="md:w-96 md:h-80 w-full h-auto px-4 md:px-0" />
                    <div className="text-center pb-5 md:py-5">
                        <h1 className="text-xl font-bold text-gray-800">Abdullah Al Mamun</h1>
                        <p className="text-gray-600 text-sm">Tour Guide</p>
                    </div></div>
                <div className="shadow-2xl">
                    <img src="Team/team3.jpg" alt="" className="md:w-96 md:h-80 w-full h-auto px-4 md:px-0"/>
                    <div className="text-center pb-5 md:py-5">
                        <h1 className="text-xl font-bold text-gray-800">Alif Hossain</h1>
                        <p className="text-gray-600 text-sm">Tour Guide</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Guide;