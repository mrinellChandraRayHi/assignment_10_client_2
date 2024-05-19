import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateArtAndCraft = () => {
    const loadedUpdateArtAndCraft=useLoaderData();
    const {item_name, subcategory_name, price, customization, processing_time, description, photo, _id}=loadedUpdateArtAndCraft
    const handleUpdateCraft=(e)=>{
        e.preventDefault();
        const form=e.target;
        const item_name=form.item_name.value;
        const subcategory_name=form.subcategory_name.value;
        const price=form.price.value;
        const customization=form.customization.value;
        const processing_time=form.processing_time.value;
        const description=form.description.value;
        const photo=form.photo.value;

        const updateCraft={item_name, subcategory_name, price, customization, processing_time, description, photo};
        console.log(updateCraft);
        fetch(`http://localhost:5000/crafts/${_id}`,{
            method:"PUT",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateCraft)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
    }
    return (
        <div>
            <div>
                <h1 className="text-center font-bold text-6xl my-10">This is Update Craft</h1>
                <form onSubmit={handleUpdateCraft} className="mb-10 p-3">
                    <div className="space-y-4 bg-gray-400 p-5 rounded max-w-[900px] mx-auto">
                    <div>
                        <label className="font-bold text-xl" htmlFor="">Item_Name: </label>
                        <input defaultValue={item_name} className="w-full border border-black rounded py-2 px-2" type="text" name="item_name" id="" />
                    </div>
                    <div>
                        <label className="font-bold text-xl" htmlFor="">Subcategory_Name:</label>
                        <input defaultValue={subcategory_name} className="w-full border border-black rounded py-2 px-2" type="text" name="subcategory_name" id="" />
                    </div>
                    <div>
                        <label className="font-bold text-xl" htmlFor="">Price: </label>
                        <input defaultValue={price} className="w-full border border-black rounded py-2 px-2" type="number" name="price" id="" />
                    </div>
                    <div>
                        <label className="font-bold text-xl" htmlFor="">Customization: </label>
                        <select defaultValue={customization} className="w-[300px] rounded border border-black" name="customization" id="">
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                    </div>
                    <div>
                        <label className="font-bold text-xl" htmlFor="">Processing_time: </label>
                        <input defaultValue={processing_time} className="w-full border border-black rounded py-2 px-2" type="number" name="processing_time" id="" />
                    </div>
                    <div>
                        <label className="block font-bold text-xl" htmlFor="">Description: </label>
                        <textarea defaultValue={description} className="w-full border border-black rounded p-2" name="description" id=""></textarea>
                    </div>
                    <div>
                        <label className="font-bold text-xl" htmlFor="">Photo: </label>
                        <input defaultValue={photo} className="w-full py-2 rounded px-2" type="text" name="photo" id="" />
                    </div>
                    <div>
                        <input className="w-full border border-black rounded py-2 bg-red-200 font-bold" type="submit" value="Update Craft" />
                    </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateArtAndCraft;