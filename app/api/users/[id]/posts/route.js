import { connectToDB } from "@config/database";
import Prompt from "@models/prompt";
import { NextResponse } from "next/server";
import User from "@models/user";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();
    const prompts = await Prompt.find({ creator: params.id }).populate({
      path: "creator",
      model: User,
    });
    return new NextResponse(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new NextResponse("Failed to fetch all post", { status: 500 });
  }
};
