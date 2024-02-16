import React from "react";
import github from "../../assets/gitHub.png";
export interface GithubButtonProps {
  className?: string;
}

export const GithubButton: React.FC<GithubButtonProps> = ({
  className = "",
}) => (
  <div className={" "}>
    <button className=" bg-black rounded-xl w-full">
      <div className="flex justify-between p-4">
        <img className="w-8" src={github} alt="" />
        <h2 className="text-white">Sign in with GitHub</h2>
      </div>
    </button>
  </div>
);
