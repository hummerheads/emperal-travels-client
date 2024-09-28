const Footer = () => {
    return (
        <div>
                <footer className="bg-gray-900 text-white mt-8 md:py-20">
                    <div className="container mx-auto px-4">
                        <div className="md:flex justify-between">
                            <div className="w-full md:w-1/4 mb-8">
                                <div className="flex items-center mb-4 py-5">
                                    <div className="bg-white p-2">
                                        <img src="Emperal.png" alt="" className="w-10"/>
                                    </div>
                                    <span className="ml-2 text-xl font-bold">Emperal Travels</span>
                                </div>
                                <h2 className="text-lg font-bold mb-2">Want To Take Tour Packages?</h2>
                                <button className="bg-green-500 text-white px-4 py-2 rounded">Book A Tour</button>
                            </div>
                            <div className="w-full md:w-1/4 mb-8">
                                <h2 className="text-lg font-bold mb-2">Quick Links</h2>
                                <ul>
                                    <li>About Us</li>
                                    <li>Destinations</li>
                                    <li>Tour Package</li>
                                    <li>Article</li>
                                    <li>Contact Us</li>
                                </ul>
                            </div>
                            <div className="w-full md:w-1/4 mb-8">
                                <h2 className="text-lg font-bold mb-2">More Inquiry</h2>
                                <p className="flex items-center mb-2"><img src="/Group-1/call.svg" className="pr-2" alt="" /> +999-858 624 984</p>
                                <p className="flex items-center mb-2"><img src="/Group-1/mail.svg" className="pr-2" alt="" /> info@example.com</p>
                                <p className="flex items-center pr-3"><img src="/Group-1/location.svg" className="pr-2" alt="" /> House 95, Road 13, Nabinagar Housing, Mirpur, Dhaka, Bangladesh</p>
                            </div>
                            <div className="w-full md:w-1/4 mb-8">
                                <h2 className="text-lg font-bold mb-2">Contact us</h2>
                                <p className="mb-4">For personalized travel experiences and unforgettable journeys!</p>
                                <h2 className="text-lg font-bold mb-2">Payment Partner</h2>
                                <div className="flex space-x-2">
                                    <img src="Payment/Visa.svg" alt="VISA" className="w-auto h-8"/>
                                    <img src="Payment/amex.png" alt="Stripe"  className="w-auto h-8"/>
                                    <img src="Payment/Mastercard.webp" alt="PayPal"  className="w-auto h-8"/>
                                    <img src="Payment/paypal.png" alt="VSO"  className="w-auto h-8"/>
                                    <img src="Payment/skrill.png" alt="Skrill"  className="w-auto h-8"/>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row justify-between items-center mt-8">
    
                            <p className="text-gray-500 text-center">©Copyright 2024 Emperal Tech | Design By Abdullah Al Mamun</p>

                            <div className="flex space-x-4 mt-4 md:mt-0">
                                <a href="#" className="text-gray-500">Privacy Policy</a>
                                <a href="#" className="text-gray-500">Terms & Condition</a>
                            </div>
                        </div>

                    </div>
                </footer>
        </div>
    );
};

export default Footer;
