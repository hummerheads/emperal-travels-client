import { useLoaderData, useParams, Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const TouristSpot = () => {
  const allTouristSpots = useLoaderData(); 
  const { id } = useParams(); 
  const spot = allTouristSpots.find((spot) => spot._id === id); 

  if (!spot) {
    return <div className="text-center text-xl">Spot not found</div>; 
  }


  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure you want to delete this Spot?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://emperal-travels-server-6hhgduu08.vercel.app/all-tourist-spots/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your spot has been deleted.", "success");
            } else {
              Swal.fire("Error!", "Failed to delete the spot.", "error");
            }
          })
          .catch((err) => console.error("Delete error:", err));
      }
    });
  };


  return (
    <div className="flex justify-center items-center min-h-screen bg-green-500 p-6">
      <div className="max-w-6xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:block mx-auto">
          <div className="w-full h-96 sm:h-auto">
            <img
              className="object-cover w-full h-full"
              src={spot.image}
              alt={spot.tourists_spot_name}
            />
          </div>

          <div className="w-full p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-bold mb-4 text-gray-800">
                {spot.tourists_spot_name}
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                <strong>Country:</strong> {spot.country_Name}
              </p>
              <p className="text-lg text-gray-600 mb-4">
                <strong>Description:</strong> {spot.short_description}
              </p>
              <p className="text-lg text-gray-600 mb-4">
                <strong>Average Cost:</strong> ${spot.average_cost}
              </p>
              <p className="text-lg text-gray-600 mb-4">
                <strong>Total Visitors Per Year:</strong> {spot.
totaVisitorsPerYear}
              </p>
              <p className="text-lg text-gray-600 mb-4">
                <strong>Travel Time:</strong> {spot.travel_time}
              </p>
              <p className="text-lg text-gray-600 mb-4">
                <strong>Seasonality:</strong> {spot.seasonality}
              </p>
            </div>

            <div className="grid md:flex md:justify-center md:gap-10 items-center text-center">

              <Link to={`/update/${id}`}>
                <button
                    
                    className="md:mt-8 text-xs bg-blue-500 text-white md:text-lg p-2 md:py-3 md:px-6 rounded-md hover:bg-blue-800 transition"
                >
                    UPDATE
                </button>
              </Link>
              <button
                onClick={handleDelete}
                className="mt-2 md:mt-8 text-xs bg-red-500 text-white md:text-lg p-2 md:py-3 md:px-6 rounded-md hover:bg-red-800 transition"
              >
                DELETE
              </button>
              <button

                className="mt-2 md:mt-8 text-xs bg-green-600 text-white md:text-lg p-2 md:py-3 md:px-6 rounded-md hover:bg-green-800 transition"
              >
                BOOK <strong>${spot.average_cost}</strong>
              </button>
              <Link
                to={`/all-tourist-spots/`}
                className="mt-2 md:mt-8 text-xs bg-gray-600 text-white md:text-lg p-2 md:py-3 md:px-6 rounded-md hover:bg-gray-800 transition"
              >
                BACK TO ALL TOURIST SPOTS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristSpot;
