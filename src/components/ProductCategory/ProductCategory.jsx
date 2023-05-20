import React from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const ProductCategory = () => {
    return (
        <div className='container mx-auto mt-10'>
            <Tabs>
                <TabList>
                    <Tab>
                        <p className=' text-3xl font-medium text-pink-600'>Category</p>
                    </Tab>
                </TabList>
                <TabList>
                    <Tab> <p>Barbie Doll</p> </Tab>
                    <Tab>Fashion Doll</Tab>
                    <Tab>Fairy Doll</Tab>
                </TabList>

                <TabPanel>
                    <div className='flex  justify-center  mt-15 gap-24'>
                        <div >
                            <div className="card h-5/6 w-96 bg-base-100 shadow-xl">
                                <figure><img src="https://images.unsplash.com/photo-1612506001235-f0d0892aa11b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9sbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <p>Name:</p>
                                    <p>Price:</p>
                                    <p>Tating:</p>
                                    <div className="card-actions justify-end">
                                        view details
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card h-5/6 w-96 bg-base-100 shadow-xl">
                                <figure><img src="https://images.unsplash.com/photo-1613626253486-e2d1d9fd9bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRvbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">View Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='flex justify-center  mt-15 gap-24'>
                        <div>
                            <div className="card h-5/6 w-96 bg-base-100 shadow-xl">
                                <figure><img src="https://images.unsplash.com/photo-1563296102-c5f9255af9dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGRvbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">View Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="card h-5/6 w-96 bg-base-100 shadow-xl">
                                <figure><img src="https://images.unsplash.com/photo-1632456960235-4b72d18fbecd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGRvbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">View Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='flex justify-center  mt-15 gap-24'>
                        <div className='mt-15'>
                            <div className="card mt-15 h-5/6 w-96 bg-base-100 shadow-xl">
                                <figure><img src="https://images.unsplash.com/photo-1545724149-1d8de3baa55c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9sbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">View Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='mt-15'>
                            <div className="card mt-15 h-5/6 w-96 bg-base-100 shadow-xl">
                                <figure><img src="https://images.unsplash.com/photo-1569839365736-a80d9fb5d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHxkb2xsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">View Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ProductCategory;