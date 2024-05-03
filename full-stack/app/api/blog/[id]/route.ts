import { NextResponse } from "next/server";
import { main } from "../route";
import prisma from "@/prisma";


export const GET = async (req:Request, res: NextResponse) => {
    try {
       const id = req.url.split("/blog/")[1]; // getting the id
       await main(); // connecting to the db
       const post = await prisma.post.findFirst({ where: {id} }); // fetching the post
       if(!post) {
        return NextResponse.json({message: "Not Found."}, { status: 404 });
       }
       return NextResponse.json({message: "Success!"}, { status: 200 });
    } catch (error) {
        return NextResponse.json({message: "Error!", error}, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}

export const PUT = async (req:Request, res: NextResponse) => {
    try {
       
       
    } catch (error) {
        return NextResponse.json({message: "Error!", error}, { status: 500});
    }
}

export const DELETE = async (req:Request, res: NextResponse) => {
    try {
       
       
    } catch (error) {
        return NextResponse.json({message: "Error!", error}, { status: 500});
    }
}