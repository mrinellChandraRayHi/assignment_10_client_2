import Swal from "sweetalert2";

const AddCraftItem = () => {
    const handleAddCraft=(e)=>{
        e.preventDefault();
        const form=e.target;
        const item_name=form.item_name.value;
        const subcategory_name=form.subcategory_name.value;
        const price=form.price.value;
        const customization=form.customization.value;
        const processing_time=form.processing_time.value;
        const description=form.description.value;

        const addCraft={item_name, subcategory_name, price, customization, processing_time, description};
        console.log(addCraft);
        fetch('http://localhost:5000/crafts',{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(addCraft)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
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
                <h1 className="text-center font-bold text-6xl my-10">This is Add Craft</h1>
                <form onSubmit={handleAddCraft}>
                    <div className="space-y-4 bg-gray-400 p-5 rounded">
                    <div>
                        <label className="font-bold text-xl" htmlFor="">Item_Name: </label>
                        <input className="w-full border border-black rounded py-2 px-2" type="text" name="item_name" id="" />
                    </div>
                    <div>
                        <label className="font-bold text-xl" htmlFor="">Subcategory_Name:</label>
                        <input className="w-full border border-black rounded py-2 px-2" type="text" name="subcategory_name" id="" />
                    </div>
                    <div>
                        <label className="font-bold text-xl" htmlFor="">Price: </label>
                        <input className="w-full border border-black rounded py-2 px-2" type="number" name="price" id="" />
                    </div>
                    <div>
                        <label className="font-bold text-xl" htmlFor="">Customization: </label>
                        <select className="w-[300px] rounded border border-black" name="customization" id="">
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                    </div>
                    <div>
                        <label className="font-bold text-xl" htmlFor="">Processing_time: </label>
                        <input className="w-full border border-black rounded py-2 px-2" type="number" name="processing_time" id="" />
                    </div>
                    <div>
                        <label className="block font-bold text-xl" htmlFor="">Description: </label>
                        <textarea className="w-full border border-black rounded p-2" name="description" id=""></textarea>
                    </div>
                    <div>
                        <input className="w-full border border-black rounded py-2 bg-red-200 font-bold" type="submit" value="Add Craft" />
                    </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCraftItem;