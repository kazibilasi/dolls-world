import { Link } from "react-router-dom";


const AllToysInformation = ({dollData}) => {

    const {seller, price, toy_name, sub_category,
        available_quantity , _id} = dollData;
    return (
       
            <tbody className="bg-white divide-y  divide-gray-200">
                <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                            <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{seller}</div>
                            </div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{toy_name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{sub_category}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{price}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{available_quantity}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <Link to= {`/toyDetails/${_id}`} className="bg-pink-600 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded">
                           view
                        </Link>
                    </td>
                </tr>


            </tbody>
        
    );
};

export default AllToysInformation;