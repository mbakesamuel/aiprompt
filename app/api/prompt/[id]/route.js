import { connectToDB } from "@config/database";
import Prompt from "@models/prompt";
import User from "@models/user";
import { NextResponse } from "next/server";

// 1. read (GET)
export const GET = async (request, { params }) => {
  try {
    await connectToDB();
    const prompt = await Prompt.findById(params.id).populate({
      path: "creator",
      model: User,
    });

    if (!prompt)
      return new NextResponse("prompt not found", {
        status: 404,
      });1

    return new NextResponse(JSON.stringify(prompt, { status: 200 }));
  } catch (error) {
    return new NextResponse("failed to fetch the specified prompt", {
      status: 404,
    });
  }
};

// 2. Patch (UPDATE)
export const PATCH = async (request, { params }) => {
  const { prompt, tag } = await request.json();
  try {
    await connectToDB();

    const existingPrompt = await Prompt.findById(params.id);

    if (!existingPrompt)
      return new NextResponse("prompt not found", {
        status: 404,
      });

    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;

    await existingPrompt.save();

    return new NextResponse(JSON.stringify(existingPrompt), { status: 200 });
  } catch (error) {
    return new NextResponse("unable to update prompt", {
      status: 500,
    });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();
    await Prompt.findByIdAndDelete(params.id);

    return new NextResponse(
      JSON.stringify("Prompt deleted successfully", { status: 200 })
    );
  } catch (error) {
    return new NextResponse("Failed to delete prompt", { status: 500 });
  }
};
