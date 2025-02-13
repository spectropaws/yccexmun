export default function LetterPage() {
  const GenSecLetter = () => {
    const chunkedSlides = [
      {
        image: "images/Kushal.jpg",
        name: "Kushal Javkhedkar"
      }
    ];

    return (
      <div className="container mx-auto p-4">
        <div className="gen-sec-letter-container shadow-md relative">
          <section className="gen-sec-letter flex flex-col md:flex-row items-start justify-between">
            <div className="text-left w-full md:w-1/2 pr-4 mb-4 md:mb-0">
            <h2 className="text-2xl font-bold mt-8 mb-8"> <span className="text-6xl font-bold">“</span>Message  from the General Secretary</h2>
            <p></p>
          
              <p className="mt-4 font-semibold">Dear Delegates and Honored Guests,</p>
              <br />
              <p>
                I take immense pride in welcoming you to the maiden edition of YCCE X MUN, an event launched in honor of the Ruby Jubilee Celebrations of Yeshwantrao Chavan College of Engineering. At this point where YCCE marks its 40 years of excellence, we set out on a journey beyond academics—diplomacy, leadership, and global awareness.
              </p>
              <br />
              <p>
                Model United Nations is just a simulation that has much more to it: it is a stage where young leaders hone their critical thinking skills, learn negotiation techniques, and craft solutions in committee rooms that are still viable beyond those rooms. Words have power, challenges are presented to perceptions, and consensus is built here.
              </p>
              <br />
              <p>
                It's not just about debating policies; it's embracing the ideals of cooperation, mutual respect, and global responsibility. It's the understanding that leadership is not authority but the impact one creates through dialogue and action.
              </p>
              <br />
              <p>
                As you step into this conference, I urge you to do so with conviction, listen with an open mind, and debate with the intent of progress. Let this MUN be a reminder that the world is shaped by those who dare to question, who choose to engage, and who believe in the power of ideas.
              </p>
              <br />
              <p>
                I extend my gratitude to all of you who have made this event possible. I hope that this edition of YCCE X MUN sets the foundation for a tradition of impactful discussions and visionary leadership.
              </p>
              <br />
              <p>Wishing you all an inspiring and transformative experience.</p>
              <br />
              <h3 className="text-right font-bold right-0 bottom-3 mb-4">Kushal Javkhedkar</h3>
            </div>
            
            <div className="w-full md:w-1/2 relative flex rounded-lg justify-center md:justify-end mt-4 md:mt-0">
              <img
                src="images/Kushal.jpg"
                alt="Kushal Javkhedkar"
                className="w-3/4 h-auto md:w-1/2 md:h-auto rounded-lg md:absolute md:top-40 md:right-40"
              />
            </div>
          </section>
        </div>
      </div>
    );
  };

  return <GenSecLetter />;
}
