import React from "react";
import Picture from "../../assets/googleImg.png";

export interface GoogleProps {
  className?: string;
}

export const Google: React.FC<GoogleProps> = ({ className = "" }) => (
  <div className="h-screen flex items-center justify-center flex-col border-20">
    <div className="border-2 w-80 mt-3">
      <div className="my-7">
        <img
          className="w-12 mr-4 mx-32"
          justify-center
          src={Picture}
          alt="centered image"
        />
      </div>
      <div className="px-6 gap-2">
        <h1>Signin</h1>
      </div>

      <div className="px-6 flex flex-col gap-4">
        <input
          type="password"
          placeholder="Email or Phone"
          className="mt-2 p-1 border square-md"
        />
        <input
          type="text"
          placeholder="Password"
          className="mt-2 p-1 border square-md"
        />
      </div>
      <div className="px-5 my-3">
        <div className="mb-4  text-sm mt-4">
          <input type="checkbox" id="showPassword" className="mr-2 " />
          <label htmlFor="showPassword">Show Password</label>
        </div>
        <div className="flex items-center justify-between mb-4 my-5 text-blue-400 ">
          <a href="#" className="text-sm">
            Forgot Password?
          </a>
          <button className="px-4 py-1 bg-blue-500 text-white rounded-md">
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
);
