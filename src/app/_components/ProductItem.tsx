import React from "react";
import Image from "next/image";
import { productType } from "@/types/productTypes";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ProductItemDetail from "./ProductItemDetail";

interface ProductType {
  id: number;
  image: string;
  name: string;
  sellingPrice: number;
  mrp: number;
  description: string;
}
function ProductItem({ product }: { product: ProductType }) {
  
  const {id, image, name, sellingPrice, mrp } = product;

  return (
    <div
      className="p-2 md:p-6 mt-6
    flex flex-col items-center justify-centergap-3 border rounded-lg space-y-3 hover:scale-110 hover:shadow-lg transition-all ease-in-out cursor-pointer"
    >
      <Image
        src={image}
        alt={name}
        width={500}
        height={200}
        className="h-[200px] w-[200px] object-contain"
      />
      <h2 className="font-bold text-lg">{name}</h2>
      <div className="flex gap-3">
        {sellingPrice && (
          <h2 className="font-bold text-lg">Rs.{sellingPrice}</h2>
        )}
        <h2 className={`font-bold text-lg ${sellingPrice && `line-through`}`}>
          {mrp}
        </h2>
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant={"outline"}
            className="text-primary hover:text-white hover:bg-green-600"
          >
            Add to cart
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            
            <DialogDescription>
              <ProductItemDetail product={product}/>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ProductItem;
