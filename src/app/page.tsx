import { HeroSection } from "@/components/HeroSection";
import Skills from "@/components/Skills";
import React from "react";

interface Skill {
  name: String; // Assuming your objects have an "x" property
  exp: number; // Assuming your objects have an "x" property
  // (and potentially other properties)
  // ...other properties if needed
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
  let datas: String[] = [];
  skills.map((skill: Skill) => {
    datas.push(skill.name);
  });
  // console.log(mail);

  return (
    <div className="text-white min-h-[400vh] overflow-hidden">
      <div className="bg-grid-black/[0.2]">
        <div className="max-w-7xl mx-auto space-y-5">
          <HeroSection
            name={name}
            role={role}
            title={title}
            address={address}
            phone={phone}
            mail={mail}
          />
          <Skills skills={datas} />
        </div>
      </div>
    </div>
  );
}
