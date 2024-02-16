import React from "react";
import { createBoard } from "@wixc3/react-board";
import { NextAuth } from "../../../components/next-auth/next-auth";

export default createBoard({
  name: "NextAuth",
  Board: () => <NextAuth />,
  isSnippet: true,
  environmentProps: {
    canvasWidth: 1049,
    canvasHeight: 780,
  },
});
