import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2';

const Update = () => {

    const spot = useLoaderData();

    const {_id, image, tourists_spot_name, country_Name, location, short_description, average_cost, seasonality, travel_time, totaVisitorsPerYear, user_email, user_name} = spot;

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;

        const image = form.image.value;
        const tourists_spot_name = form.tourists_spot_name.value;
        const country_Name = form.country_Name.value;
        const location = form.location.value;
        const short_description = form.short_description.value;
        const average_cost = form.average_cost.value;
        const seasonality = form.seasonality.value;
        const travel_time = form.travel_time.value;
        const totaVisitorsPerYear = form.totaVisitorsPerYear.value;
        const user_email = form.user_email.value;
        const user_name = form.user_name.value;

        const updatedTouristSpot = {
            image,
            tourists_spot_name,
            country_Name,
            location,
            short_description,
            average_cost,
            seasonality,
            travel_time,
            totaVisitorsPerYear,
            user_email,
            user_name
        };

        console.log(updatedTouristSpot);

        fetch(`http://localhost:5000/all-tourist-spots/${_id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(updatedTouristSpot)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Tourist Spot Updated Successfully!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                }).then(() => {
                    form.reset();
                });
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: 'There was an issue Updating the tourist spot.',
                    icon: 'error',
                    confirmButtonText: 'Try Again'
                });
            }
        })
        
        .catch(error => {
            console.error('Error:', error);
            Swal.fire({
                title: 'Error!',
                text: 'There was an error connecting to the server.',
                icon: 'error',
                confirmButtonText: 'Try Again'
            });
        });
    }

    return (
        <div>
            <div className="bg-[url('/Footer/2.jpg')] h-[50vh] w-screen flex items-center justify-center relative">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <h1 className="text-center text-4xl md:text-8xl text-white font-black relative z-10">ADD TOURIST SPOTS</h1>
            </div>
            <div className="max-w-lg mx-auto p-5">
                <form onSubmit={handleUpdate}  className="space-y-4">
                    <input 
                        type="text" 
                        name="image" 
                        defaultValue={image}
                        placeholder="Image URL" 
                        required 
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    <input 
                        type="text" 
                        defaultValue={tourists_spot_name}
                        name="tourists_spot_name" 
                        placeholder="Tourist Spot Name" 
                        required 
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    <input 
                        type="text" 
                        defaultValue={country_Name}
                        name="country_Name" 
                        placeholder="Country Name" 
                        required 
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    <input 
                        type="text" 
                        defaultValue={location}
                        name="location" 
                        placeholder="Location" 
                        required 
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    <textarea
                        name="short_description"
                        defaultValue={short_description}
                        placeholder="Short Description"
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    <input 
                        type="number" 
                        defaultValue={average_cost}
                        name="average_cost" 
                        placeholder="Average Cost" 
                        required 
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    <input 
                        type="text" 
                        defaultValue={seasonality}
                        name="seasonality" 
                        placeholder="Seasonality (e.g., Summer, Winter)" 
                        required 
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    <input
                        type="text"
                        defaultValue={travel_time}
                        name="travel_time"
                        placeholder="Travel Time (e.g., 7 days)"
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    <input
                        type="number"
                        defaultValue={totaVisitorsPerYear}
                        name="totaVisitorsPerYear"
                        placeholder="Total Visitors Per Year (e.g., 10000)"
                        required
                       className="w-full p-2 border border-gray-300 rounded"
                    />
                    <input
                       type="email"
                       defaultValue={user_email}
                       name="user_email"
                       placeholder="User Email"
                       required
                       className="w-full p-2 border border-gray-300 rounded"
                   />
                   <input
                       type="text"
                       defaultValue={user_name}
                       name="user_name"
                       placeholder="User Name"
                       required
                       className="w-full p-2 border border-gray-300 rounded"
                   />

                   <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
                       Update Tourist Spot
                   </button>
               </form>
           </div>
       </div>
    );
};

export default Update;