"use client"

import { WixClientContext } from "@/app/context/wixContext";
import { useContext } from "react";


export const useWixClient = ()=>{


return useContext(WixClientContext);
}