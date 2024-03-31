import { HeroSection } from "@/components/HeroSection";
import ProjectsPage from "@/components/ProjectsPage";
import Skills from "@/components/Skills";
import React from "react";

export default async function page() {
  const data = await fetch(
    "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
  );
  const res = await data.json();

  let name = res.user.about.name;
  let role = res.user.about.title;
  let title = res.user.about.subTitle;
  let img = res.user.about.avatar.url;
  let desc = res.user.about.description;
  let phone = res.user.about.phoneNumber;
  let skills = res.user.skills;
  let quote = res.user.about.quote;
  let mail = res.user.email;
  let address = res.user.about.address;
  let project = res.user.projects;
  let datas: String[] = [];
  let projects: Object[] = [];
  skills.map((skill: any) => {
    datas.push(skill.name);
  });
  project.map((project: any) => {
    projects.push({
      // @ts-ignore
      title: project.title,
      desc: project.description,
      link: project.liveurl,
      git: project.githuburl,
      cover: project.image.url,
      tech: project.techStack,
    });
  });
  // console.log(projects);

  return (
    <div className="text-white min-h-screen gap-16 overflow-hidden">
      <div className="bg-grid-black/[0.2]">
        <div className="max-w-7xl mx-auto">
          <HeroSection
            name={name}
            role={role}
            title={title}
            address={address}
            phone={phone}
            mail={mail}
          />
          <Skills skills={datas} />
          <Skills skills={datas} />
          <ProjectsPage projects={projects} />
        </div>
      </div>
    </div>
  );
}
