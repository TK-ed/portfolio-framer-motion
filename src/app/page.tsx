import { ContactForm } from "@/components/contact-form";
import { HeroSection } from "@/components/HeroSection";
import ProjectsPage from "@/components/ProjectsPage";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import React from "react";
import { Project, Skill, Socials, Testimonial } from "@/interface";

interface ProjectType {
  title: string;
  desc: string;
  tech: string[];
  link: string;
  cover: string;
}

interface TestimonialType {
  name: string;
  quote: string;
  title: string;
}

export default async function page() {
  const data = await fetch(
    "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
  );
  const res = await data.json();

  let name = res.user.about.name;
  let role = res.user.about.title;
  let title = res.user.about.subTitle;
  let phone = res.user.about.phoneNumber;
  let skills = res.user.skills;
  let mail = res.user.email;
  let address = res.user.about.address;
  let project = res.user.projects;
  let testimonial = res.user.testimonials;
  let social_handles = res.user.social_handles;
  let testimonials: TestimonialType[] = [];
  let datas: string[] = [];
  let projects: ProjectType[] = [];
  let socials: string[] = [];
  social_handles.filter((element: Socials) => {
    if (!element.enabled) return;
    socials.push(element.platform);
  });
  skills.filter((skill: Skill) => {
    if (!project.enabled) return;
    datas.push(skill.name);
  });
  project.filter((project: Project) => {
    if (!project.enabled) return;
    projects.push({
      title: project.title,
      desc: project.description,
      link: project.liveurl,
      cover: project.image.url,
      tech: project.techStack,
    });
  });
  testimonial.filter((data: Testimonial) => {
    if (!data.enabled) return;
    testimonials.push({
      name: data.name,
      quote: data.review,
      title: data.position,
    });
  });

  // console.log(projects);

  return (
    <main className="text-white min-h-screen gap-16 overflow-hidden">
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
          <Skills />
          <ProjectsPage projects={projects} />
          <Testimonials testimonials={testimonials} />
          <ContactForm socials={socials} />
        </div>
      </div>
    </main>
  );
}
