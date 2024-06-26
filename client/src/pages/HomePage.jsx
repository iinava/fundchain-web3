import React from "react";
import { EmblaCarousel } from "../components/Shared/EmblaCarousel";
import { Button } from "@nextui-org/react";
import ProjectCard from "../components/Shared/ProjectCard";
import { ProjectName, ProjectsCardData } from "../constants/data";

export default function HomePage() {
  return (
    <div className="w-full px-[3vw] flex flex-col  ">
      <div className="w-full flex  justify-between items-center flex-wrap-reverse gap-10 my-10">
        <div className="md:w-[45vw] space-y-3">
          <h1 className="text-4xl ">
            {ProjectName} empowers changemakers to accept crypto donations.
          </h1>
          <p>
            Join our community-driven movement to transform the way we fund
            nonprofits and social causes using innovative crypto fundraising
            strategies.
          </p>
          <br />
          <Button>Explore projects</Button>
        </div>
        <img
          src="https://clr.fund/assets/docking_w2160-d5efc4dc.png"
          width={350}
          alt=""
        />
      </div>
      <div className="flex justify-center sm:justify-start   flex-wrap items-center gap-5">
        {ProjectsCardData.length > 0 &&
          ProjectsCardData.map((project, index) => (
            <ProjectCard key={index} ProjectsCardData={project} />
          ))}
      </div>
    </div>
  );
}
