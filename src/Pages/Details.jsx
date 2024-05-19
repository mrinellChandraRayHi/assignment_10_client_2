import { useLoaderData } from "react-router-dom";

const Details = () => {
    const loadedDetails=useLoaderData();
    const {item_name, subcategory_name, price, customization, processing_time, description, photo}=loadedDetails;
    return (
        <div className="card card-compact w-96 mx-auto my-20 bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Item_Name: {item_name}</h2>
                <p>Subcategory_Name: {subcategory_name}</p>
                <p>Price: {price}</p>
                <p>Customization: {customization}</p>
                <p>Processing_time: {processing_time}</p>
                <p>Description: {description}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary btn-sm">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Details;