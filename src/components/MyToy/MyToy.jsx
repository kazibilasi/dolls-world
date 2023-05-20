import React from 'react';

const MyToy = ({ addingToy }) => {

    const { subCategory, price,
        name,
        sellerName,
        pictureUrl,
        rating,
        availableQuantity,
        description
    } = addingToy;

    return (
        <tbody  className="bg-white divide-y  divide-gray-200">
            <tr className='border rounded-md'>

                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-20 h-20">
                                <img src={pictureUrl} alt="" />
                            </div>
                        </div>

                    </div>
                </td>
                <td>
                    {name}
                </td>
                <td>{subCategory}</td>
                <td>{price}</td>
                <td>{rating}</td>
                <td>{availableQuantity}</td>
                <td>{sellerName}</td>
                <td>{description}</td>

            </tr>
        </tbody>
    );
};

export default MyToy;