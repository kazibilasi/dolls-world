import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ToyDetails = () => {
    const [data, setData] = useState([]);
    const { _id } = useParams()

    useEffect(() => {

        fetch('http://localhost:5000/information')
            .then(res => res.json())
            .then(data => setData(data))


    }, [])

    const newData = data.find(d => d.id === _id)

    return (
        <div className='container mx-auto mt-15'>
            <div className="card w-3/4 mx-auto mt-10 h-2/4 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={newData?.picture} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{newData?.seller}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button className="btn bg-pink-600">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;