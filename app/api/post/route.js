import { NextResponse } from "next/server";
import { connectToDB } from "@config/database";
import Prompt from "@models/prompt";
import User from "@models/user";

export const GET = async () => {
  try {
    await connectToDB();
    const allprompts = await Prompt.find({}).populate({
      path: "creator",
      model: User,
    });

    if (!allprompts) {
      return new NextResponse(
        JSON.stringify("post not found", { status: 404 })
      );
    }

    return new NextResponse(JSON.stringify(allprompts, { status: 200 }));
  } catch (error) {
    console.log(error);
  }
};
