
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Gallery = () => {

    const images = [
        'https://webdesign-finder.com/craftly/wp-content/uploads/2017/06/carousel_img_2.jpg',
        'https://webdesign-finder.com/craftly/wp-content/uploads/2017/06/carousel_img_3.jpg',
        'https://webdesign-finder.com/craftly/wp-content/uploads/2017/06/carousel_img_4.jpg',
        'https://webdesign-finder.com/craftly/wp-content/uploads/2017/06/carousel_img_5.jpg',
        'https://webdesign-finder.com/craftly/wp-content/uploads/2017/06/carousel_img_6.jpg',
        'https://webdesign-finder.com/craftly/wp-content/uploads/2017/06/carousel_img_7.jpg',
        'https://webdesign-finder.com/craftly/wp-content/uploads/2017/06/carousel_img_8.jpg',
        'https://webdesign-finder.com/craftly/wp-content/uploads/2017/06/carousel_img_1.jpg'
      ];
    
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };
    
    return (
        <div className="container mx-auto mt-10">
            <div>
                <h2 className="text-2xl font-bold mb-4">Gallery</h2>
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div key={index}>
                            <div className=" h-fit bg-gray-200 rounded-lg shadow-lg overflow-hidden">
                                <img
                                    src={image}
                                    alt={`Image ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Gallery;