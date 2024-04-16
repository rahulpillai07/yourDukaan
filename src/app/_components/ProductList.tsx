import React from "react";
import prisma from "@/lib/prisma";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import ProductItem from "./ProductItem";
export default async function ProductList() {
 const fetchProducts=(await prisma.product.findMany({}));

  return(
    <div className="mt-12">
        <h2 className="text-3xl font-bold text-green-500">Our Popular Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {fetchProducts.map((product)=>(
                <div key={product.id}>
                    <ProductItem product={product}/>
                </div>
            ))}
        </div>

    </div>
  )
}


