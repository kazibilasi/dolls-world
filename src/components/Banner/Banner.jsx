

const Banner = () => {
    return (
        <div className="container mx-auto ">
            <div className="card w-full h-[600px] image-full">
                <figure><img className="w-full mx-auto" src="https://s2.r29static.com/bin/entry/7e9/0,0,2000,1050/x,80/1650396/image.jpg" alt="Shoes" /></figure>
                <div className="card-body mx-auto my-auto ">
                    <h2 className="card-title text-center text-4xl font-medium ">Welcome to Dolls World</h2>
                    <p className=" text-center text-xl font-normal">Step into a World of Magic and Imagination with Our Exquisite Doll Collection! <br />
                    Immerse yourself in the enchanting world of dolls, where dreams come to life. From whimsical fairies to elegant princesses, our collection offers a wide array of captivating characters.</p>
                   
                </div>
            </div>
        </div>
    );
};

export default Banner;