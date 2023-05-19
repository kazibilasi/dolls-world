import { useEffect, useState } from "react";
import AllToysInformation from "../AllToysInformation/AllToysInformation";


const AllToys = () => {

    const [dollsData, setDollsData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/information')
            .then(res => res.json())
            .then(data => setDollsData(data));

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
                                                Seller
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
                                                View Details
                                            </th>
                                        </tr>
                                    </thead>



                                    {
                                        dollsData.map(dollData => <AllToysInformation
                                            key={dollData._id}
                                            dollData={dollData}

                                        ></AllToysInformation>)
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

export default AllToys;