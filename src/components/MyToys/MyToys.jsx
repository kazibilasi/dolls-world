import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import MyToy from "../MyToy/MyToy";


const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [addingToys, setAddingToys] = useState([]);
    console.log(addingToys)
    const url = `http://localhost:5000/addingToys?email=${user?.email}`
    // const url = `http://localhost:5000/addingToys/${subCategory}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAddingToys(data))
    }, [])
    return (


        <div className="container mx-auto mt-10">
            <div className=" sm:min-w-fit">
                <div className="flex flex-col ">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Photo
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Toy Name
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Sub-category
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Price
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Available Quantity
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">
                                                Seller Name
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">
                                                Description
                                            </th>
                                        </tr>
                                    </thead>



                                    {
                                        addingToys.map(addingToy => <MyToy
                                            key={addingToy}
                                            addingToy={addingToy}
                                        >

                                        </MyToy>)
                                    }



                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default MyToys;