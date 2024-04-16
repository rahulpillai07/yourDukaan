import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
export async function GET(req:NextRequest){

  const url = new URL(req.url)
  const categoryName=await req.json();
  console.log(categoryName);
  const name = url.searchParams.get(categoryName)
   return name;
}