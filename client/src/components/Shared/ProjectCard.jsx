import { Button, Link } from "@nextui-org/react";
import React from "react";

export default function ProjectCard({ProjectsCardData}) {


  return (
    <div className="w-[350px] md:w-[400px] h-[500px] rounded-2xl overflow-hidden">
      <img
        alt="Laptop"
        src={ProjectsCardData.image}
        className="h-[250px] w-full rounded-t-2xl object-cover hover:scale-110 transition-transform duration-300"
      />
      <div className="p-4 rounded-2xl bg-neutral-900 relative bottom-10">
        <h1 className="inline-flex items-center text-lg font-semibold">
          {ProjectsCardData.title}
        </h1>
        <p className="mt-3 text-sm">{ProjectsCardData.details}</p>
        {ProjectsCardData.tags.length > 0 && (
          <div className="mt-4 text-black">
            {ProjectsCardData.tags.map((item, index) => (
              <span
                key={index}
                className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold"
              >
                {item}
              </span>
            ))}
          </div>
        )}
        <Button   as={Link} href={ProjectsCardData.href} className="w-full mt-4">View</Button>
      </div>
    </div>
  );
}
