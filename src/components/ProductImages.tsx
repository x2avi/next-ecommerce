"use client"
import { url } from 'inspector'
import Image from 'next/image'
import { useState } from 'react';
//const images = [
   // {
     //   id:1,
       //  url:"https://images.pexels.com/photos/5956161/pexels-photo-5956161.jpeg?auto=compress&cs=tinysrgb&w=600",
        //},

        //{
          //  id:2,
            // url:"https://images.pexels.com/photos/1476209/pexels-photo-1476209.jpeg?auto=compress&cs=tinysrgb&w=600",
            //},

            //{
              //  id:3,
                // url:"https://images.pexels.com/photos/3146180/pexels-photo-3146180.jpeg?auto=compress&cs=tinysrgb&w=600",
                //},

                //{
                  //  id:3,
                    // url:"https://images.pexels.com/photos/8957613/pexels-photo-8957613.png?auto=compress&cs=tinysrgb&w=600&lazy=load",
                    //},
//];

const ProductImages = ({items}: {items: any}) => {
    const [index, setIndex] = useState(0)
  return (
    <div className=''>
        <div className="h-[500px] relative">
            <Image src={items[index].image?.url}
            alt='' 
            fill 
            sizes='50vw' className='object-cover rounded-md' />
        </div>
        <div className="flex justify-between gap-4 mt-8">
            {items.map((item:any,i:number) =>(
                 <div className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer" key={item.id} onClick={()=> setIndex(i)}
                 >
                 <Image src={item.image?.url}
                     alt='' 
                     fill 
                     sizes='30vw' className='object-cover rounded-md' />
                 </div>
            ))}  
        </div>
    </div>
  )
}

export default ProductImages