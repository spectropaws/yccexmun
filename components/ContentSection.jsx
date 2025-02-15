import Image from "next/image";
import MUNImage from "../public/images/What-is-MUN.jpeg";
import { ContentSectionCardData } from "../data";

const ContentSection = () => {
  return (
    <section className="px-6 py-12 bg-[#EFE7E4] text-[#54250B] rounded-2xl mt-6 mx-3 md:mx-0 shadow-lg">
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
              <strong>Model United Nations (MUN)</strong> is an academic
              simulation of the United Nations, where students take on the role
              of delegates, representing different countries in various UN
              committees. Participants engage in structured debates, negotiate
              policies, and draft resolutions on pressing global issues, just as
              real-world UN representatives do.
            </p>
            <br />
            <p className="text-lg leading-relaxed text-[#6A3A2A]">
              Each delegate is assigned a country and a committee, where they
              research international policies, analyse current affairs, and
              collaborate with others to develop effective solutions.
            </p>
          </div>
        </div>

        <h3 className="text-3xl font-bold bg-gradient-to-t from-[#C2A597] to-[#54250B] bg-clip-text text-transparent text-center mb-8">
          Why Participate in MUN?
        </h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {ContentSectionCardData.map((feature, index) => (
            <div
              key={index}
              className="text-center cursor-default p-6 border border-[#D8C2A8] bg-white rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex items-center justify-center">
                <h3 className="text-2xl font-semibold text-[#54250B] mb-3">
                  {feature.title}
                </h3>
              </div>
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
