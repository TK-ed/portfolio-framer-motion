"use client";
import { cn } from "@/lib/cn";
import Link from "next/link";
import React from "react";
import { DirectionAwareHover } from "./ui/project-hover";
import { RiArrowDropDownLine } from "react-icons/ri";
import { motion } from "framer-motion";

interface ProductPageProps {
  title: String;
  desc: String;
  tech: String[];
  git: String;
  cover: String;
  link: String;
}

export default function ProjectsPage({ projects }: any) {
  return (
    <div className="my-16 p-3 sm:p-0">
      <motion.h1
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
        id="projects"
        className=" text-center text-7xl underline rotate-6"
      >
        Projects
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 pt-10"
      >
        {/* @ts-ignore */}
        {projects.map((project, idx): any => {
          return (
            <Link href={project.link ? project.link : "#"} key={idx}>
              <div className={cn("p-5 rounded-sm bg-black")}>
                <div className="h-[25rem] relative flex items-center justify-center">
                  <DirectionAwareHover imageUrl={project.cover}>
                    <p className="font-bold">{project.title}</p>
                    <p className="font-extralight text-xs">{project.desc}</p>
                    <p className="text-sky-400 font-extralight text-xs">
                      {project.tech}
                    </p>
                    <p className="p-1 bg-black w-[4rem] hover:bg-slate-300/95">
                      <Link href={project.git}>GitHub</Link>
                    </p>
                  </DirectionAwareHover>
                </div>
              </div>
            </Link>
          );
        })}
      </motion.div>
      <a href="#testimonials">
        <button className="mt-8 flex mx-auto animate-bounce">
          <RiArrowDropDownLine size={60} />
        </button>
      </a>
    </div>
  );
}
