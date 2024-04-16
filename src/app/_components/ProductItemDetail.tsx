
import Image from "next/image";
import React, { useState } from "react";
import prisma from "@/lib/prisma";
import { productType } from "@/types/productTypes";
import { ShoppingBasket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { number } from "zod";
import { useRecoilState } from "recoil";
import { totalPriceState } from "@/state/totalPriceState";
import ProductItemClient from "./ProductItemClient";

interface ProductType {
  id: number;
  image: string;
  name: string;
  sellingPrice: number;
  mrp: number;
  description: string;
}

async function ProductItemDetail({ product }: { product: ProductType }) {

  const productDetail = await prisma.product.findFirst({
    where: { id: product.id },
    include:{
        category:true
    }
  });
  

  return(
    <ProductItemClient productDetail={productDetail}/>
  )
}
export default ProductItemDetail
