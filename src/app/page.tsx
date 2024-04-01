import { HeroSection } from "@/components/HeroSection";
import ProjectsPage from "@/components/ProjectsPage";
import Skills from "@/components/Skills";
import Testimonials from "@/components/ui/Testimonials";
import React from "react";

interface ProjectProps {
  title: String;
  description: String;
  liveurl: String;
  githuburl: String;
  cover: String;
  techStack: String[];
  enabled?: boolean;
  image: {
    public_id: String;
    url: String;
  };
}

interface SkillsProps {
  name: String;
  enabled?: boolean;
}

interface TestimonialsProps {
  name: String;
  review: String;
  position: String;
  enabled?: boolean;
}

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
  let testimonial = res.user.testimonials;
  let testimonials: Object[] = [];
  let datas: String[] = [];
  let projects: Object[] = [];
  skills.map((skill: SkillsProps) => {
    if (!project.enabled) return;
    datas.push(skill.name);
  });
  project.map((project: ProjectProps) => {
    if (!project.enabled) return;
    projects.push({
      title: project.title,
      desc: project.description,
      link: project.liveurl,
      git: project.githuburl,
      cover: project.image.url,
      tech: project.techStack,
    });
  });
  testimonial.map((data: TestimonialsProps) => {
    if (!data.enabled) return;
    testimonials.push({
      name: data.name,
      quote: data.review,
      title: data.position,
    });
  });
  // console.log(testimonials);

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
          <ProjectsPage projects={projects} />
          <Testimonials testimonials={testimonials} />
        </div>
      </div>
    </div>
  );
}
