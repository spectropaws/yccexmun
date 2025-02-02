import Image from "next/image";
import MUNImage from "../public/demo-mun.png";
import { ContentSectionCardData } from "../data";

const ContentSection = () => {
  return (
    <section className="px-6 py-12 bg-[#EFE7E4] text-[#54250B] rounded-2xl mt-6 shadow-xl">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold bg-gradient-to-t from-[#C2A597] to-[#54250B] bg-clip-text text-transparent text-center mb-8">
          What is MUN?
        </h2>

        <div className="mb-16 grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <Image
              src={MUNImage}
              alt="Model United Nations"
              className="w-4/5 max-w-lg rounded-2xl shadow-lg transition-transform duration-300 hover:-rotate-2 hover:scale-105 hover:shadow-[#54250B] hover:shadow-md"
              priority
            />
          </div>

          {/* MUN Description */}
          <div className="text-center md:text-left space-y-4">
            <p className="text-lg leading-relaxed text-[#6A3A2A]">
              The <strong>Model United Nations (MUN)</strong> is an engaging
              simulation of the United Nations, where students step into the
              roles of global delegates, representing different countries to
              tackle real-world issues.
            </p>
            <br />
            <p className="text-lg leading-relaxed text-[#6A3A2A]">
              At <strong>YCCE MUN</strong>, we cultivate a space where young
              minds refine their leadership, diplomatic, and problem-solving
              skills, preparing them for impactful roles in international
              affairs.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {ContentSectionCardData.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 border border-[#D8C2A8] bg-white rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl"
            >
              <h3 className="text-2xl font-semibold text-[#54250B] mb-3">
                {feature.title}
              </h3>
              <p className="text-md text-[#6A3A2A] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;