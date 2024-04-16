import { userType, userZodSchema } from "@/types/userTypes";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcryptjs from "bcryptjs";

export  async function POST(req: NextRequest) {
    try {
        const inputDetail: userType = await req.json();
        console.log(`Received input detail from the user route: ${inputDetail}`);
        
        const parsedInput = userZodSchema.safeParse(inputDetail);
        if (!parsedInput.success) {
            console.log(parsedInput.error.message);
            return NextResponse.json({ error: "Invalid input" }, { status: 400 });
        }

        
        const validatedInput = parsedInput.data;
        const checkUserExists = await prisma.user.findFirst({
            where: {
                email: validatedInput.email
            }
        });

        if (!checkUserExists) {
            return NextResponse.json({ error: "User does not exist" }, { status: 404 });
        }

        const providedPassword = validatedInput.password;
        const isPasswordMatch = await bcryptjs.compare(providedPassword, checkUserExists.password);

        if (!isPasswordMatch) {
            return NextResponse.json({ error: "Invalid password" }, { status: 401 });
        }

        return NextResponse.json({ message: "User successfully logged in" }, { status: 200 });
    } catch (error) {
        console.error("An error occurred:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
