import React from "react";
import Heading from "../components/Heading";
import { MdSchool } from "../components/Icons";
import education from "../data/education.json";

const Education = () => {
  return (
    <section id="education">
      <Heading icon={MdSchool} title="Education" />

      <div className="flex">
        <div className="w-1 bg-gray-500 rounded-full ml-6 opacity-25" />
        <div className="-ml-2">
          {education.map(x => (
            <div key={x.title} className="py-4 flex">
              <div
                className="relative mt-3 w-3 h-3 rounded-full bg-white shadow-xl z-2"
                data-tip={`(${x.period})`}
              />
              <div className="ml-8">
                <img className="w-8 h-8" src={x.icon} alt={x.title} />
                <h5 className="mt-3 font-semibold">{x.title}</h5>
                <h6 className="text-sm">{x.subtitle}</h6>
                <h6 className="mt-2 text-xs">({x.period})</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
