import { CategoryType, categoryZodSchema } from "@/types/categoryTypes";
import { PrismaClient } from '@prisma/client'


import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function GET(request:NextRequest,response:NextResponse){
    const fetchCategory=await prisma.category.findMany();
    console.log(fetchCategory)
    return NextResponse.json({
        data:fetchCategory
    });
}