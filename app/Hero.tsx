"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div
      id="home"
      className="h-[80vh] flex flex-col justify-center items-center"
    >
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium sm:text-7xl text-black dark:text-white text-center">
        Hi there, I'm{" "}
        <span className="relative whitespace-nowrap text-primary">
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute -mt-1 ml-1 top-3/5 left-0 h-[0.45em] w-full fill-primary/20"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
          </svg>
          <Typewriter
            words={["Sameem"]}
            typeSpeed={200}
            cursor={true}
            cursorColor={"#4F3DFE"}
          />
          {/* <span className="relative">{text}</span> */}
        </span>
        .
      </h1>
      <p className="mx-auto mt-2 max-w-4xl font-display text-2xl text-gray-500/50 text-center">
        <Typewriter
          words={[
            "A full-stack developer",
            "GuyWhoLovesCoffee.tsx",
            "<ButLovesToCodeMore />",
          ]}
          loop={true}
        />
      </p>

      <div className="w-full lg:w-auto grid grid-cols-1 lg:grid-cols-4 gap-4 mt-24">
        <div className="rounded-lg border-2 border-gray-500/10 border-dotted px-4 py-2 text-center">
          <span className="text-primary uppercase">Technologies</span>
          <p className="text-gray-500 dark:text-gray-300 font-semibold text-xl">
            50+
          </p>
        </div>
        <div className="rounded-lg border-2 border-gray-500/10 border-dotted px-4 py-2 text-center">
          <span className="text-primary uppercase">Years of Experience</span>
          <p className="text-gray-500 dark:text-gray-300 font-semibold text-xl">
            2+
          </p>
        </div>
        <div className="rounded-lg border-2 border-gray-500/10 border-dotted px-4 py-2 text-center">
          <span className="text-primary uppercase">Completed Projects</span>
          <p className="text-gray-500 dark:text-gray-300 font-semibold text-xl">
            30+
          </p>
        </div>
        <div className="rounded-lg border-2 border-gray-500/10 border-dotted px-4 py-2 text-center">
          <span className="text-primary uppercase">Repositories</span>
          <p className="text-gray-500 dark:text-gray-300 font-semibold text-xl">
            40+
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
