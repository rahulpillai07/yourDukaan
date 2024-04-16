import { CategoryType, categoryZodSchema } from "@/types/categoryTypes";
import { PrismaClient } from '@prisma/client'


import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient()

export async function POST(req:NextRequest,res:NextResponse){
    const body:CategoryType=await req.json();
    const parsedInput=categoryZodSchema.safeParse(body);
    if(!parsedInput.success) return NextResponse.json({message:"invalid input"},{status:404})
    const{name,icon}=parsedInput.data;
    const CategoryExists=await prisma.category.findFirst({
        where:{
            name
        }
    })
    
    if(CategoryExists) return NextResponse.json({message:"category already exists"},{status:404});
    const newCategory=await prisma.category.create({
        data:{
            name,
            icon
        }
    });
    console.log(newCategory);
    return NextResponse.json({data:newCategory},{status:200},)
    

}