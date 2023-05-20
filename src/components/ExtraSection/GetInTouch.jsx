import React from 'react';
import { CiLocationOn } from "react-icons/ci";

import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";


const GetInTouch = () => {
    return (
        <div className='container mx-auto mb-15'>
            <div className="hero h-[600px] mb-16 bg-base-100">
                <div className="hero-content w-full  flex-col lg:flex-row justify-around">
                    <div className="text-center  lg:text-left">
                        <div>
                            <h1 className="text-3xl font-bold">Get In Touch</h1>
                            <p className="py-6">We'd love to hear from you, lets get in touch!.</p>
                        </div>

                        <div className='mt-16 '>
                            <div className='mt-9 flex justify-center gap-5 items-center'>
                                <div>
                                    <p className='text-5xl'  ><MdLocationOn className=' text-pink-600'></MdLocationOn></p>
                                </div>

                                <div>
                                    <h1 className="text-2xl font-bold">Headquarter</h1>
                                    <p className="py-1">Address goes here, street, Crossroad 123.</p>
                                </div>
                            </div>


                            <div className='mt-9 flex gap-5 justify-center items-center'>
                                <div>
                                    <p  className='text-5xl' ><MdPhone className=' text-pink-600'></MdPhone></p>
                                </div>

                                <div>
                                    <h1 className="text-2xl font-bold">Phone Number</h1>
                                    <p className="py-1">+1 23 456 789 000 / +2 23 456 789 000.</p>
                                </div>
                            </div>

                            <div className='mt-9 gap-5 flex justify-center items-center '>
                                <div >
                                    <p  className='text-5xl' > <MdEmail className=' text-pink-600'></MdEmail></p>

                                </div>


                                <div>
                                    <h1 className="text-2xl font-bold">Email Us</h1>
                                    <p className="py-1">info@example.com / info@example.com</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-3/5 gap-9  shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">

                                <input type="text" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">

                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">

                                <input type="text" placeholder="password" className="input input-bordered" />

                            </div>
                            <textarea className='border rounded-xl mt-5' rows="4" cols="50" placeholder="Enter your text..."></textarea>

                            <div className="form-control  mt-6 ">
                                <button className="btn border-none rounded-full w-1/4 bg-pink-600">Send Massage</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetInTouch;