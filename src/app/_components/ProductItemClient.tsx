"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingBasket } from "lucide-react";
import { productType } from "@/types/productTypes";
import { useRecoilState } from "recoil";
import { totalPriceState } from "@/state/totalPriceState";
import { quantityState } from "@/state/quantityState";

function ProductItemClient({ productDetail }) {
  const [totalPrice, setTotalPrice] = useRecoilState(totalPriceState);
  const newPrice = productDetail?.sellingPrice!
    ? productDetail?.sellingPrice!
    : productDetail?.mrp!;
  setTotalPrice(newPrice);

  const[quantity,setQuantity]=useRecoilState(quantityState);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 text-black">
      <Image
        src={productDetail?.image as string}
        width={300}
        height={300}
        alt="image"
        className="bg-slate-200 p-5 h-[320px] w-[300px] object-contain rounded-lg"
      />
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-bold text-black">{productDetail?.name}</h2>
        <h2 className="text-sm text-gray-500">{productDetail?.description}</h2>
        <div className="flex gap-3">
          {productDetail?.sellingPrice && (
            <h2 className="font-bold text-lg">
              Rs.{productDetail.sellingPrice}
            </h2>
          )}
          <h2
            className={`font-bold text-lg text-black ${
              productDetail?.sellingPrice && `line-through`
            }`}
          >
            Rs.
          </h2>
        </div>
        <h2 className="font-medium text-lg text-black">
          Quantity({productDetail?.quantity})
        </h2>
        <div className="flex flex-col items-baseline gap-y-2">
          <div className="p-2 border flex items-center gap-10 px-5">
            <button onClick={()=>{if(quantity>1){setQuantity(quantity-1)}}}>-</button>
            <h2>{quantity}</h2>
            <button onClick={()=>setQuantity(quantity+1)}>+</button>
          </div>
          <Button
            className="flex gap-3 hover:bg-green-600"
            variant={"outline" as any}
          >
            <ShoppingBasket />
            Add To Cart
          </Button>
        </div>
        <h2>
          <span className="font-semibold">Category:</span>
          {productDetail?.category.name}
        </h2>
      </div>
    </div>
  );
}

export default ProductItemClient;
