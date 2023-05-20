import React from 'react';

const Banner = () => {
    return (
        <div className='container mx-auto'>
            <div className="carousel h-[600px] rounded-md w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/fluffy-toy-texture-close-up_23-2149686884.jpg?size=626&ext=jpg&ga=GA1.1.1570833622.1680187286&semt=ais" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/group-stuffed-animals-are-lined-up-frame_1340-36077.jpg?size=626&ext=jpg&ga=GA1.2.1570833622.1680187286&semt=ais" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/flat-lay-composition-toys-with-copyspace_23-2148144822.jpg?size=626&ext=jpg&ga=GA1.1.1570833622.1680187286&semt=ais" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/cute-plush-toys-arrangement_23-2150312314.jpg?size=626&ext=jpg&ga=GA1.1.1570833622.1680187286&semt=ais" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;