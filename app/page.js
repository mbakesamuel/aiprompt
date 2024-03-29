import React from "react";
import Feed from "@/components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI Prompts</span>
      </h1>

      <p className="desc text-center">
        The AI Prompt Hub is a web app that enables users to create and share AI
        prompts with the rest of the world. You can create your own prompt as
        well as view that of others. You can also search for prompts, edit your
        own prompts etc. You can simply click on copy to copy a prompt of
        interest. Enjoy this amazing full stack application
      </p>
      <Feed />
    </section>
  );
};

export default Home;
