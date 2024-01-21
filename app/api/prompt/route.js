import { connectToDB } from "@config/database";
import User from "@models/user";
import Prompt from "@models/prompt";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await connectToDB();
    const prompts = await Prompt.find().populate({
      path: "creator",
      model: User,
    });
    return new NextResponse(JSON.stringify(prompts, { status: 200 }));
  } catch (error) {
    return new NextResponse("Failed to fetch all post", { status: 500 });
  }
};
