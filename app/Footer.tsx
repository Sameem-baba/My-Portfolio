"use client";
import React, { useState } from "react";

type Props = {};

const Footer = (props: Props) => {
  const [heartColor, setHeartColor] = useState("#4F3DFE");

  function randomColor() {
    let color = "#";
    let letters = "0123456789ABCDEF";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  return (
    <div className="max-w-7xl mx-auto py-12 border-t border-gray-500/10">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
        <p className="text-lg text-zinc-400">
          © 2019 - {new Date().getFullYear()} Sameem. All rights reserved.
        </p>
        <div className="text-right">
          <p className="text-lg text-zinc-400 select-none">
            Made with{" "}
            <i
              onClick={() => {
                setHeartColor(randomColor());
              }}
              className="fas fa-heart"
              style={{ color: heartColor, cursor: "pointer" }}
            />{" "}
            by{" "}
            <a
              href=""
              className="text-zinc-400 hover:text-primary hover:dark:text-white"
            >
              sameem
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
