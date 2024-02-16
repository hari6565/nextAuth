import React from "react";
import google from "../../assets/google.webp";

export interface GoogleProps {
  className?: string;
}

export const GoogleButton: React.FC<GoogleProps> = ({ className = "" }) => (

  <div className={" "}>
    <button className="border-2 rounded-lg w-full">
      <div className="flex justify-between p-4">
        <img className="w-8" src={google} alt="" />
        <h2>Sign in with Google</h2>
      </div>
    </button>
  </div>

);
