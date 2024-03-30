"use client";
import { useEffect, useState } from "react";
import { HoverEffect } from "./ui/card-hover";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiApollographql,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPython,
  SiCplusplus,
  SiC,
  SiGit,
  SiGithub,
  SiVercel,
  SiThreedotjs,
  SiDocker,
  SiFigma,
  SiRedux,
  SiSass,
} from "react-icons/si";

interface SkillProps {
  skills: String[];
}

export default function Skills({ skills }: SkillProps) {
  const [icons, setIcons] = useState<string[]>([]);

  useEffect(() => {
    const fetchIconData = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_ICON_API}`,
        },
      };

      try {
        const iconDataPromises = skills.map(async (skill) => {
          const response = await fetch(
            `https://api.iconfinder.com/v4/icons/search?${skill}&count=1`,
            options
          );

          if (!response.ok) {
            throw new Error(`Failed to fetch icon for skill: ${skill}`);
          }

          const { icons } = await response.json();
          if (icons.length > 0) {
            // Extracting the icon URL for the first icon
            const iconUrl = icons[0].raster_sizes[0].formats[0].preview_url;
            return { name: skill, iconUrl };
          } else {
            throw new Error(`No icon found for skill: ${skill}`);
          }
        });

        // Wait for all requests to complete and store the icon data
        const allIconData: any = await Promise.all(iconDataPromises);
        setIcons(allIconData);
      } catch (err) {
        console.error(err);
      }
    };

    fetchIconData();
  }, [skills]);

  const items = [
    {
      title: "React",
      icon: SiReact,
    },
    {
      title: "Next.js",
      icon: SiNextdotjs,
    },
    {
      title: "TailwindCSS",
      icon: SiTailwindcss,
    },
    {
      title: "Node.js",
      icon: SiNodedotjs,
    },
    {
      title: "Express",
      icon: SiExpress,
    },
    {
      title: "MongoDB",
      icon: SiMongodb,
    },
    {
      title: "PostgreSQL",
      icon: SiPostgresql,
    },
    {
      title: "GraphQL",
      icon: SiGraphql,
    },
    {
      title: "Apollo",
      icon: SiApollographql,
    },
    {
      title: "TypeScript",
      icon: SiTypescript,
    },
    {
      title: "JavaScript",
      icon: SiJavascript,
    },
    {
      title: "HTML",
      icon: SiHtml5,
    },
    {
      title: "CSS",
      icon: SiCss3,
    },
    {
      title: "Python",
      icon: SiPython,
    },
    {
      title: "C++",
      icon: SiCplusplus,
    },
    {
      title: "C",
      icon: SiC,
    },
    {
      title: "Git",
      icon: SiGit,
    },
    {
      title: "GitHub",
      icon: SiGithub,
    },
    {
      title: "Docker",
      icon: SiDocker,
    },
    {
      title: "Figma",
      icon: SiFigma,
    },
    {
      title: "Three.js",
      icon: SiThreedotjs,
    },
    {
      title: "Redux",
      icon: SiRedux,
    },
    {
      title: "Sass",
      icon: SiSass,
    },
    {
      title: "Vercel",
      icon: SiVercel,
    },
  ];

  return (
    <div id="skills" className="max-w-5xl mx-auto px-8">
      <h1 className="text-7xl -rotate-6">Skills</h1>
      <HoverEffect items={items} />
    </div>
  );
}

{/* <div className="-translate-x-4 flex flex-col">
          <div className="bg-blue-500"></div>
          <div className="bg-white"></div>
      </div> */}