const Contact = () => {
    return (
        <div className="">
            <div className="bg-[url('/contact.png')] h-[50vh] w-screen flex items-center justify-center">
                <h1 className="text-center text-4xl md:text-8xl text-white font-black">Contact Us</h1>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center py-10 md:gap-10">
                <div className="shadow-2xl p-5 md:p-20 w-full md:w-1/3">
                    <input 
                        type="text" 
                        placeholder="Your Name" 
                        className="w-full py-2 px-2 my-2 border border-solid border-gray-500 rounded-xl"
                    />
                    <input 
                        className="w-full py-2 rounded-xl px-2 my-2 border border-solid border-gray-500" 
                        type="email" 
                        placeholder="Your Email"
                    />
                    <input 
                        className="w-full py-2 px-2 my-2 rounded-xl border border-solid border-gray-500" 
                        type="text" 
                        placeholder="Subject"
                    />
                    <textarea 
                        className="w-full pt-2 pb-32 px-2 rounded-xl my-2 border border-solid border-gray-500" 
                        placeholder="Message"
                    />
                    <button className="text-white hover:bg-green-900 px-5 py-2 bg-green-500 rounded-2xl my-4 w-full">Send Message</button>
                </div>

                <div className="shadow-2xl p-5 md:p-20 w-full md:w-1/3">
                    <h1 className="text-3xl md:text-5xl font-bold py-5">Get In Touch</h1>
                    <p className="text-base md:text-lg text-justify">
                        We&apos;d love to hear from you! Whether you have questions, feedback, or need assistance, our team is here to help. Please fill out the form below or reach out through any of the contact methods listed. Your inquiries are important to us, and we strive to respond as quickly as possible.
                    </p>
                    <div className="w-full mb-8 mt-5">
                        <h2 className="text-lg font-bold mb-2">More Inquiry</h2>
                        <p className="flex items-center mb-2"><img src="/Group-1/call.svg" className="pr-2" alt="" /> +999-858 624 984</p>
                        <p className="flex items-center mb-2"><img src="/Group-1/mail.svg" className="pr-2" alt="" /> info@example.com</p>
                        <p className="flex items-center pr-3"><img src="/Group-1/location.svg" className="pr-2" alt="" /> House 95, Road 13, Nabinagar Housing,<br /> Mirpur, Dhaka, Bangladesh</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;