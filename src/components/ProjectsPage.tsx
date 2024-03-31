import { cn } from "@/lib/cn";
import Link from "next/link";
import React from "react";
import { DirectionAwareHover } from "./ui/project-hover";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function ProjectsPage({ projects }: any) {
  return (
    <div className="my-10 p-3 sm:p-0">
      <h1 id="projects" className=" text-center text-7xl underline rotate-6">
        Projects
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 pt-10">
        {/* @ts-ignore */}
        {projects.map((project, idx): Object => {
          return (
            <Link href={project.link ? project.link : "#"} key={idx}>
              <div className={cn("p-5 rounded-sm bg-black")}>
                <div className="h-[25rem] relative flex items-center justify-center">
                  <DirectionAwareHover imageUrl={project.cover}>
                    <p className="font-bold text-xl">{project.title}</p>
                    <p className="font-normal text-sm">{project.desc}</p>
                    <p className="text-sky-400">{project.tech}</p>
                    <p className="p-1 bg-black w-[4rem] hover:bg-teal-300">
                      <Link href={project.git}>GitHub</Link>
                    </p>
                  </DirectionAwareHover>
                </div>
              </div>
            </Link>
          );
        })}
        <a href="#testimonials">
          <button className="mt-[12rem] ml-[8rem] animate-bounce">
            <RiArrowDropDownLine size={60} />
          </button>
        </a>
      </div>
    </div>
  );
}
