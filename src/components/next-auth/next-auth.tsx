import React from "react";
import { GithubButton } from "../github-button/github-button.tsx";
import { GoogleButton } from "../googleButton/googleButton.tsx";

export const NextAuth = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-slate-100">
      <div className="bg-white rounded-[30px] flex flex-col p-5 gap-4 w-[25%] divide-y-2 ">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="text-lg">username</label>
            <input
              className="border-2 border-slate-400 rounded-lg h-9 p-3 "
              placeholder="Enter your username"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg">password</label>
            <input
              className="border-2 border-slate-400 rounded-lg h-9 p-3"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex flex-col">
            <button className="border-2 border-slate-400 p-3  rounded-lg text-lg">
              Sign with Credentials
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <a href="/githubLogin">
            <div>
              <br />
              <GithubButton />
            </div>
          </a>
          <a href="/goolgleLogin">
            <div>
              <GoogleButton />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
