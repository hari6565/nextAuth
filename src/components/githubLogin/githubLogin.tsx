import React from "react";
import github from "../../assets/gitHub.png";

export const GitHubSignUpForm = () => (
  <div className={"h-screen flex items-center justify-center flex-col"}>
    <div className="w-96 h-96 ">
      <div>
        <img className="w-9 mx-40" src={github} alt="" />
      </div>
      <div className="text-center text-xl font-semibold mx-20 my-2">
        <div>
          <h3 className="w-48 h-7">Sign in to GitHub</h3>
        </div>
      </div>
      <div className="border-2 border-gray-400 rounded-lg my-6 ">
        <div className="mx-7 my-1">
          <label>Username or email address</label>
          <div>
            <input className="h-8 rounded-lg w-[100%]  border-2" />
          </div>
        </div>
        <div className="mx-7 my-2">
          <label className="flex justify-between">
            <h2>Password</h2>
            <h2 className="text-blue-500">Forgot Password?</h2>
          </label>
          <div>
            <input className="h-8 rounded-lg w-[100%]  border-2" />
          </div>
        </div>
        <div className="mx-7 my-6">
          <div className={"w-48 h-8"}>
            <button className=" bg-green-500 w-80 h-9 bg- text-lg text-white decoration-from-font rounded-md shadow-lg  font-bold">
              Sign in
            </button>
          </div>
        </div>
      </div>
      <div className="p-2 border-2 rounded-md w-96 text-center border-gray-400 my-5">
        <button className="flex">
          <h2>New to GitHub?</h2>
          <h2 className="text-blue-500 ">Create an account.</h2>
        </button>
      </div>
    </div>
  </div>
);
