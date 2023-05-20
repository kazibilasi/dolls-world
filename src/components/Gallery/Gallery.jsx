import React from 'react';

const Gallery = () => {
  return (
    <div className='container mx-auto mt-20'>
      
      <div className='mt-15'>
        <h1 className=' text-center text-2xl font-bold text-pink-600'>Dolls Gallery</h1>
        <p className=' text-center'>"Immerse yourself in a whimsical realm of childhood dreams and cherished memories. Behold these exquisite dolls, each a masterpiece of artistry and craftsmanship. From porcelain beauties to charming cloth companions, this gallery celebrates the timeless allure of dolls. Join us on a journey of wonder and nostalgia, where imagination knows no bounds."</p>
        <div className="grid grid-cols-3 gap-4 mt-10">
          <div className="..."><img className='w-full rounded-2xl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHMsGbxR8HMCCRyKbhB48acZx8GYBKvLS4VA&usqp=CAU" alt="" /></div>
          <div className="..."><img className='w-full rounded-2xl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlSThiexrKI6evjbbd2OFaSz1xbnzQB20e3g&usqp=CAU" alt="" /></div>
          <div className="..."><img className='w-full rounded-2xl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR20Pj17-6Z-TRWcaylbarcMmPK-miShUYm4A&usqp=CAU" alt="" /></div>
          <div className="col-span-2 w-full "><img className='h-72 w-full rounded-2xl brightness-50 hover:brightness-100 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKJwhBpP9dO9A_yH_FVIKC-wCDh5v4r-OXWQ&usqp=CAU" alt="" /></div>
          <div className="..."><img className='w-full rounded-2xl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHcsYQZVSFPMDO5V4H4smZu_pIB36PQoAHZA&usqp=CAU" alt="" /></div>
          <div className="..."><img className='w-full rounded-2xl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ3eoHLSLOAfK6jPeArqOzWQHT6hxmcMPiPg&usqp=CAU" alt="" /></div>
          <div className="col-span-2 "><img className='w-full h-80 rounded-2xl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTykGKV774xTEDiSsqndipTUOt3wKHVOxEloA&usqp=CAU" alt="" /></div>
        </div>
      </div>

    </div>
  );
};

export default Gallery;