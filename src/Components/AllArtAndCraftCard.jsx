import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { MdDetails } from "react-icons/md";
import Swal from "sweetalert2";
const AllArtAndCraftCard = ({allartandcraft, allartandcrafts, SetAllartandcrafts}) => {
    const {item_name, subcategory_name, price, customization, processing_time, description, photo, _id}=allartandcraft;
    const handleDelete=(_id)=>{
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
        if (result.isConfirmed) {
            fetch(`http://localhost:5000/crafts/${_id}`, {
                method:"DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount>0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            })
        }
        const remaining=allartandcrafts.filter(allart=>allart._id !== _id)
        SetAllartandcrafts(remaining);
        });
    }
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img className="w-full h-[300px]" src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Item_name: {item_name}</h2>
                <p>Subcategory_Name: {subcategory_name}</p>
                <p>Price: {price}</p>
                <p>Customization: {customization}</p>
                <p>Processing_time: {processing_time}</p>
                <p>Description: {description}</p>
                <div className="card-actions justify-end">
                <button className="btn bg-green-500 text-white btn-sm text-xl"><MdDetails /></button>
                <button className="btn bg-yellow-500 btn-sm text-xl"><FaEdit /></button>
                <button onClick={()=>handleDelete(_id)} className="btn bg-red-500 btn-sm text-xl"><MdDelete /></button>
                </div>
            </div>
        </div>
    );
};

export default AllArtAndCraftCard;