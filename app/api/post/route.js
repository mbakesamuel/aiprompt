import { NextResponse } from "next/server";
import { connectToDB } from "@config/database";
import Prompt from "@models/prompt";
import User from "@models/user";

export const GET = async () => {
  try {
    await connectToDB();
    const allprompts = await Prompt.find();
    return new NextResponse(JSON.stringify(allprompts, { status: 200 }));
  } catch (error) {
    console.log(error);
  }
};
