//"use client"

import CategoryList from "@/components/CategoryList"
import ProductList from "@/components/ProductList"
import Slider from "@/components/Slider"
import { Suspense, useContext, useEffect } from "react"
import { WixClientContext, WixClient } from './context/wixContext';
import { useWixClient } from "@/hooks/useWixClient"
import { wixClientServer } from "@/lib/wixClientServer";

const HomePage = async () => {
 

  //const wixClient = useWixClient()

  //useEffect(() =>{
    //const getProducts = async ()=>{

    //console.log(res)
   // }

   // getProducts();
  //},[wixClient]);

  //const WixClient = await wixClientServer();

  //const res = await WixClient.products.queryProducts().find();

  //console.log(res);



  return (
    <div className=''>
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        <Suspense fallback = {"loading"}>
        <ProductList categoryId = {process.env.FEATURED_PRODUCTS_CATEGORY_ID!} limit = {4}/>
        </Suspense>
      </div>
      <div className="mt-24">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">Categories</h1>
        <Suspense fallback = {"loading"}>
        <CategoryList />

        </Suspense>
        </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">New Products</h1>   
      </div>
    </div>
  )
}

export default HomePage 