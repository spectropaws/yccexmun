import Image from "next/image";
import MUNImage from "../../public/demo-mun.png";
import RubyJubileeImg from "../../public/images/ruby-jubliee.jpg";
import CseDepImg from "../../public/images/cse-department.png"
import YCCE from "../../public/images/ycce.png";
import DepartmentImage from "../../public/images/Department_Image.png";

export default function Page() {
  return (
    <div className="min-h-screen py-12 px-6 md:px-20 bg-white text-gray-900">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* INTRODUCTION */}
        <section className="text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-t from-[#C2A597] to-[#54250B] bg-clip-text text-transparent mb-6">
            ABOUT US
          </h1>
          <Image
            src={YCCE}
            alt="YCCE X MUN"
            className="w-full max-h-96 object-cover rounded-lg shadow-lg mb-6"
          />

          <p className="text-lg font-semibold">
            YCCE X MUN – A Ruby Jubilee Celebration{" "}
          </p>
          <p className="text-gray-700 mt-4">
            On the momentous occasion of YCCE’s Ruby Jubilee, the Department of
            CSE proudly presents YCCE X MUN (Model United Nations)—a platform
            that brings together young minds to discuss global issues,
            diplomacy, and leadership. This event signifies our commitment to
            fostering critical thinking, collaboration, and a global perspective
            among students.
          </p>
        </section>

        {/* ABOUT RUBY JUBILEE */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl text-center md:text-left font-semibold text-[#54250B] mb-4">
              ABOUT RUBY JUBILEE
            </h2>
            <p className="text-gray-700">
              Marking 40 years of excellence, YCCE’s Ruby Jubilee celebrates its
              legacy of engineering education, research, and innovation. Since
              its establishment in 1984, YCCE has been a pioneer in shaping
              engineers and leaders, continuously evolving to meet the demands
              of the modern world.
            </p>
            <p className="text-gray-700 mt-4">
              This milestone reflects not only our four-decade-long journey but
              also a renewed vision for the future. Through a series of events,
              academic discussions, and alumni engagements, we honor our
              institution’s contributions to society and engineering
              advancements.
            </p>
          </div>
          <Image
            src={RubyJubileeImg}
            alt="Ruby Jubilee"
            className="w-full max-h-80 object-cover rounded-lg shadow-lg"
          />
        </section>

        {/* ABOUT DEPARTMENT */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <Image
            src={DepartmentImage}
            alt="Department of CSE"
            className="w-full max-h-80 object-cover rounded-lg shadow-lg hidden md:block"
          />
          <div>
            <h2 className="text-3xl text-center md:text-left font-semibold text-[#54250B] mb-4">
              ABOUT DEPARTMENT
            </h2>
            <p className="text-gray-700">
              The Department of Computer Science and Engineering at Yeshwantrao
              Chavan College of Engineering (YCCE) stands as a hub of
              technological excellence and innovation. Led by the esteemed Head
              of the Department, Dr. Lalit Damahe, the department is committed
              to imparting quality education, fostering research, and preparing
              students for the dynamic world of computing.
            </p>
            <p className="text-gray-700 mt-4">
              With a curriculum that blends core computing principles with
              emerging technologies, we ensure that students gain hands-on
              experience through advanced laboratories, industry collaborations,
              and technical projects.
            </p>
          </div>
          <Image
            src={MUNImage}
            alt="Department of CSE"
            className="w-full max-h-80 object-cover rounded-lg shadow-lg block md:hidden"
          />
        </section>
      </div>
    </div>
  );
}
