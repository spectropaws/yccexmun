"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { teamsData } from "../../data";
import Linkedin01Icon from "../../public/svg/Linkedin01Icon";
import Image from "next/image";

export default function Page() {
  const teamRefs = useRef([]);

  useGSAP(() => {
    gsap.fromTo(
      teamRefs.current,
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F3F0] py-12 px-5 md:px-20">
      <h1
        className="text-4xl bg-gradient-to-t from-[#C2A597] to-[#54250B] bg-clip-text text-transparent font-bold text-center mb-12 opacity-0"
        ref={(el) => (teamRefs.current[0] = el)}
      >
        Meet Our Teams
      </h1>

      <div className="space-y-10">
        {teamsData.map((team, index) => (
          <div
            key={index}
            className="rounded-md opacity-0"
            ref={(el) => (teamRefs.current[index + 1] = el)}
          >
            <h2 className="text-2xl text-center font-semibold mb-6 text-[#54250B]">
              {team.name}
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4 sm:gap-6 md:gap-8 lg:gap-10">
              {team.members.map((member, i) => (
                <MemberCard key={i} member={member} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MemberCard({ member }) {
  return (
    <div className="flex flex-col items-center justify-start w-4/5 sm:w-full max-w-xs mx-auto border p-2 rounded-lg border-gray-300">
      <Image
        width={500}
        height={500}
        src={member.image}
        alt={member.name}
        className="h-72 w-full object-cover object-center rounded-sm"
      />
      <div className="flex flex-row items-center px-1 py-3 w-full">
        <div className="text-left w-full">
          <h3 className="text-lg font-semibold text-black">
            {member.name}
            {/* {member.githubURL ? (
              <a
                href={member.githubURL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline underline-offset-2"
              >
                {member.name}
              </a>
            ) : (
              member.name
            )} */}
          </h3>
          <p className="text-sm text-gray-600">{member.role}</p>
        </div>
        {/* {member.linkedinURL && (
          <a
            href={member.linkedinURL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2"
          >
            <Linkedin01Icon />
          </a>
        )} */}
      </div>
    </div>
  );
}
