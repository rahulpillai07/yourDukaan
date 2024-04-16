import { userType, userZodSchema } from "@/types/userTypes";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const inputData: userType = await req.json();
    console.log(`Data from the signup route: ${inputData}`);

    const parsedInput = userZodSchema.safeParse(inputData);
    if (!parsedInput.success) {
      return NextResponse.json({ message: "Invalid Input" }, { status: 400 });
    }

    const validatedInput = parsedInput.data;
    const { email, password, username } = parsedInput.data;
    console.log("code working till here");
    const checkUserExists = await prisma.user.findFirst({
      where: {
        email: validatedInput.email,
      },
    });

    if (checkUserExists) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 409 }
      );
    }

    const hashedPassword = await bcryptjs.hash(validatedInput.password, 10);
    const newUser = await prisma.user.create({
      data: {
        email: validatedInput.email,
        password: hashedPassword,
        username: validatedInput.username,
      },
    });

    console.log(newUser);
    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("User creation failed:", error.message);
    return NextResponse.json(
      { message: "User creation failed" },
      { status: 500 }
    );
  }
}
