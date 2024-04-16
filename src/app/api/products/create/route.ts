import { CategoryType } from "@/types/categoryTypes";
import { productType, productZodSchma } from "@/types/productTypes";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()
export  async function POST(req: NextRequest) {
    try{
  const inputBody: productType = await req.json();
  console.log(inputBody);
  const parsedInput = productZodSchma.safeParse(inputBody);
  if (!parsedInput.success){
    console.log(parsedInput.error)
    return NextResponse.json({ message: "invalidInput" }, { status: 404 });
  }

  const { category, ...productInfo } = parsedInput.data;
  const existingCategory = await prisma?.category.findFirst({
    where: {
      name: category.name,
    },
  });
  if (!existingCategory)
    return NextResponse.json({ message: "invalid Category" }, { status: 404 });

  const newProduct = await prisma?.product.create({
    data: {
      ...productInfo,
      category: {
        connect: { id: existingCategory.id },
      },
    },
  });
  return NextResponse.json({data:newProduct},{status: 200});
}
catch(err){
    console.error(err);
    return NextResponse.json(err);
}
}
