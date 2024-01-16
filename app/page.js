import React from "react";
import Feed from "@/components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> AI Prompts</span>
      </h1>

      <p className="desc text-center flex justify-center">
        The AI Prompt Hub is a web app that enables users to create and share AI
        prompts with the world. Whether it's for writing, storytelling, game
        development, or any other application that requires AI-generated
        content, the AI Prompt Hub provides a collaborative space for users to
        exchange and discover an array of thought-provoking prompts.
      </p>
      <Feed />
    </section>
  );
};

export default Home;
