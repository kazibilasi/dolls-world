import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const AddAToy = () => {
    const { user } = useContext(AuthContext)
   
    
    

   
    const addAToy = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const sellerName = form.sellerName.value;
        const subCategory = form.subcategory.value;
        const price = form.price.value;
        const pictureUrl = form.pictureUrl.value;
        const email = user?.email;
        const rating =form.rating.value;
        const availableQuantity = form.quantity.value;
        const description = form.description.value;
        console.log(name, email,sellerName,price,subCategory,pictureUrl,rating,availableQuantity,description)

    }
    return (
        <div className="container mx-auto mt-10">
            <div className="card flex-shrink-0 w-3/4 mx-auto shadow-2xl bg-base-100">
                <p className=" text-3xl font-medium text-center mt-5">Add A Toy</p>
                <form onSubmit={addAToy} className=" mx-auto">
                    <div className="flex gap-10 mt-10 ">
                        <div>
                            <div className="mb-4">
                                <label htmlFor="pictureUrl" className="block">Picture URL:</label>
                                <input type="text" id="pictureUrl" name="pictureUrl" required className="w-full border border-gray-300 rounded-md py-2 px-3" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="name" className="block">Name:</label>
                                <input type="text" id="name" name="name" defaultValue={user?.displayName} required className="w-full border border-gray-300 rounded-md py-2 px-3" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="sellerName" className="block">Seller Name:</label>
                                <input type="text" id="sellerName" name="sellerName" required className="w-full border border-gray-300 rounded-md py-2 px-3" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="sellerEmail" className="block">Seller Email:</label>
                                <input type="email" id="sellerEmail" defaultValue={user?.email} name="sellerEmail" required className="w-full border border-gray-300 rounded-md py-2 px-3" />
                            </div>
                        </div>

                        <div>
                            <div className="mb-4">
                                <label htmlFor="subcategory" className="block">Sub-category:</label>
                                <input type="text" id="subcategory" name="subcategory" required className="w-full border border-gray-300 rounded-md py-2 px-3" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="price" className="block">Price:</label>
                                <input type="number" id="price" name="price" required className="w-full border border-gray-300 rounded-md py-2 px-3" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="rating" className="block">Rating:</label>
                                <input type="number" id="rating" name="rating" min="0" max="5" step="0.1" required className="w-full border border-gray-300 rounded-md py-2 px-3" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="quantity" className="block">Available Quantity:</label>
                                <input type="number" id="quantity" name="quantity" required className="w-full border border-gray-300 rounded-md py-2 px-3" />
                            </div>
                        </div>
                    </div>



                    <div className="mb-4">
                        <label htmlFor="description" className="block">Description:</label>
                        <textarea id="description" name="description" required className="w-full border border-gray-300 rounded-md py-2 px-3"></textarea>
                    </div>

                    <input type="submit" value="Submit" className="bg-pink-600 mb-5 hover:bg-slate-500 text-white font-semibold py-2 px-4 rounded-md cursor-pointer" />
                </form  >
            </div>


        </div>
    );
};

export default AddAToy;