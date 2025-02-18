import Image from "next/image";

export default function LetterPage() {
  const GenSecLetter = () => {
    const chunkedSlides = [
      {
        image: "/images/Kushal.jpg",
        name: "Kushal Javkhedkar",
      },
    ];

    return (
      <div className="container mx-auto p-4">
        <div className="gen-sec-letter-container shadow-md relative">
          <section className="gen-sec-letter flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-13">
            <div className="text-left w-full lg:w-2/3 pr-4 mb-8 lg:mb-0">
              <h2 className="text-2xl lg:text-3xl font-bold mt-8 mb-8">
                <span className="text-4xl lg:text-6xl font-bold">“</span>
                Message from the Secretary General
              </h2>
              <p className="mt-4 font-semibold text-justify hyphens-auto">
                Dear Delegates and Honored Guests,
              </p>
              <br />
              <p className="text-justify hyphens-auto">
                I take immense pride in welcoming you to the maiden edition of
                YCCE X MUN, an event launched in honor of the Ruby Jubilee
                Celebrations of Yeshwantrao Chavan College of Engineering. At
                this point where YCCE marks its 40 years of excellence, we set
                out on a journey beyond academics—diplomacy, leadership, and
                global awareness.
              </p>
              <br />
              <p className="text-justify hyphens-auto">
                Model United Nations is just a simulation that has much more to
                it: it is a stage where young leaders hone their critical
                thinking skills, learn negotiation techniques, and craft
                solutions in committee rooms that are still viable beyond those
                rooms. Words have power, challenges are presented to
                perceptions, and consensus is built here.
              </p>
              <br />
              <p className="text-justify hyphens-auto">
                It's not just about debating policies; it's embracing the ideals
                of cooperation, mutual respect, and global responsibility. It's
                the understanding that leadership is not authority but the
                impact one creates through dialogue and action.
              </p>
              <br />
              <p className="text-justify hyphens-auto">
                As you step into this conference, I urge you to do so with
                conviction, listen with an open mind, and debate with the intent
                of progress. Let this MUN be a reminder that the world is shaped
                by those who dare to question, who choose to engage, and who
                believe in the power of ideas.
              </p>
              <br />
              <p className="text-justify hyphens-auto">
                I extend my gratitude to all of you who have made this event
                possible. I hope that this edition of YCCE X MUN sets the
                foundation for a tradition of impactful discussions and
                visionary leadership.
              </p>
              <br />
              <p className="text-justify hyphens-auto">
                Wishing you all an inspiring and transformative experience.
              </p>
              <br />
              <h3 className="text-left font-heading right-0 bottom-3 mb-1">
                Secretary General,
              </h3>
              <h3 className="text-left font-bold right-0 bottom-3 mb-4">
                Kushal Javkhedkar
              </h3>
            </div>

            <div className="w-full lg:w-1/3 flex justify-center items-center mt-4 lg:my-auto min-h-[300px]">
              <Image
                src="/images/Kushal.jpg"
                alt="Kushal Javkhedkar"
                width={350}
                height={350}
                className="w-3/4 h-auto lg:w-full lg:h-auto rounded-lg lg:rounded-xl object-cover"
              />
            </div>
          </section>
        </div>
      </div>
    );
  };

  return <GenSecLetter />;
}