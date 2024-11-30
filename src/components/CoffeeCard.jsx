import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const CoffeeCard = ({ coffee, setCoffees, coffees }) => {
    const { _id, name, chef, photo } = coffee
    const handleDelete = id => {
        fetch(`http://localhost:5000/coffee/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                }).then((result) => {
                    if (data.deletedCount === 1) {
                        if (result.isConfirmed) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });
                        }
                        const remaining = coffees.filter(cof => cof._id !== id)
                        setCoffees(remaining)
                    }
                });
            })
    }

    return (
        <div className="flex items-center justify-between bg-[#F5F4F1] border border-[#D2B48C] shadow-md p-4 rounded-lg bg-cover bg-center bg-card-bg">
            <div className="flex items-center space-x-4">
                <img
                    src={photo}
                    alt="Black Coffee"
                    className="w-20 h-28 rounded-md object-cover"
                />
                <div>
                    <h2 className="text-lg font-semibold">Name: {name}</h2>
                    <p className="text-sm text-gray-600"><span className="font-medium text-gray-800">Chef:</span> {chef}</p>
                    <p className="text-sm text-gray-600"><span className="font-medium text-gray-800">Price:</span> 890 Taka</p>
                </div>
            </div>
            <div className="flex flex-col space-y-2">
                <Link to={`/coffee/${_id}`} className="btn btn-sm btn-outline btn-primary">
                    <FaEye />
                </Link>
                <Link to={`/update/${_id}`} className="btn btn-sm btn-outline btn-accent">
                    <FaEdit />
                </Link>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-outline btn-error">
                    <FaTrash />
                </button>
            </div>
        </div>
    );
};

export default CoffeeCard;