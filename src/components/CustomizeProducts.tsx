"use client"

import { products } from "@wix/stores"

const CustomizeProducts = ({productId, variants, productOptions } : {productId:string; variants:products.Variant[]; productOptions:products.ProductOption[];}) => {
  return (
    <div className="flex flex-col gap-6">
       {
       
       productOptions.map((option) =>(
       <div className="flex flex-col gap-4" key={option.name}>
        <h4 className="font-medium">Choose a {option.name}</h4>
        {option.choices?.map((choice) => (<div className="" key={choice.value}>
          {choice.description}
          </div>
          ))}
       </div>
      ))}
       
       {/* COLOR */}

       { /*
        <ul className="flex items-center gap-3">
            <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-red-500 ">
                <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "/>
            </li>
            <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-blue-500 ">
            </li>
            <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-not-allowed relative bg-gray-500 ">
            <div className="absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "/>
            </li>
            
        </ul>
        */}

        {/* OTHERS */}
       
        {/*<h4 className="">Choose a size</h4>
        <ul className="flex items-center gap-3">
          <li className="ring-1 ring-lama text-lama rounded-md py-1 px-4 text-sm cursor-pointer">Six</li>
          <li className="ring-1 ring-lama text-white bg-lama rounded-md py-1 px-4 text-sm cursor-pointer">Seven</li>
          <li className="ring-1 ring-pink-200 text-white bg-pink-200 rounded-md py-1 px-4 text-sm cursor-not-allowed">Eight</li>
        </ul>*/}
    </div>
  )
}

export default CustomizeProducts