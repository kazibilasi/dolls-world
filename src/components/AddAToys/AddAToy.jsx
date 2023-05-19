

const AddAToy = () => {
    return (
        <div className="container mx-auto mt-10">
            <div className="card flex-shrink-0 w-3/4 mx-auto shadow-2xl bg-base-100">
                <p className=" text-3xl font-medium text-center mt-5">Add A Toy</p>
                <form className=" mx-auto">
                    <div className="flex gap-10 mt-10 ">
                        <div>
                            <div className="mb-4">
                                <label htmlFor="pictureUrl" className="block">Picture URL:</label>
                                <input type="text" id="pictureUrl" name="pictureUrl" required className="w-full border border-gray-300 rounded-md py-2 px-3" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="name" className="block">Name:</label>
                                <input type="text" id="name" name="name" required className="w-full border border-gray-300 rounded-md py-2 px-3" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="sellerName" className="block">Seller Name:</label>
                                <input type="text" id="sellerName" name="sellerName" required className="w-full border border-gray-300 rounded-md py-2 px-3" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="sellerEmail" className="block">Seller Email:</label>
                                <input type="email" id="sellerEmail" name="sellerEmail" required className="w-full border border-gray-300 rounded-md py-2 px-3" />
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