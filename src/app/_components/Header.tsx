
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  LayoutGrid,
  LucideShoppingBag,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"; 
import globalApi from "@/lib/globlApiClient";
import { CategoryType } from "@/types/categoryTypes";
import prisma from "@/lib/prisma";

export async function Header() {

  const fetchCategory=await prisma.category.findMany();

  return (
    <div className="p-5 shadow-md flex justify-between">
      <div className="flex items-center gap-8">
        <Image src="/groceryLogo.png" alt="Grocery Store Logo" height={100} width={150} />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <h2 className="md:flex items-center gap-2 border rounded-full p-2 px-10 bg-slate-200 hidden cursor-pointer">
              <LayoutGrid className="h-5 w-5" />
              Category
            </h2>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Browse Category</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {fetchCategory.map((category, index) => (
              <DropdownMenuItem key={index} className="flex items-center">
                <Image src={category.icon} alt={category.name} width={50} height={50} />
                <h2>{category.name}</h2>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="md:flex items-center gap-3 border rounded-full p-2 px-5 hidden">
          <Search />
          <input type="text" placeholder="Search" className="outline-none" />
        </div>
      </div>
      <div className="flex items-center gap-5">
        <h2 className="flex items-center gap-2 text-lg">
          <LucideShoppingBag />0
        </h2>

        <Button>Login</Button>
      </div>
    </div>
  );
}

export default Header;
