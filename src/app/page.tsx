import Navbar from "@/components/Navbar";
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
  let address = res.user.about.address
  let datas: String[] = [];
  skills.map((skill: Skill) => {
    datas.push(skill.name);
  });
  console.log(address);

  return (
    <div className="text-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <Navbar address={address} />
      </div>
    </div>
  );
}
