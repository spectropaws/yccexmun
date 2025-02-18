import Image from "next/image";
import Link from "next/link";

const GenSecLetter = () => {
  const chunkedSlides = [
    {
      image: "/images/Kushal1.jpg",
      name: "Kushal Javkhedkar",
    },
  ];

  return (
    <div className="gen-sec-letter-container shadow-lg">
      <section className="gen-sec-letter">
        <div className="flex flex-col lg:flex-row items-start justify-start gap-10 lg:gap-20">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mt-8 mb-8">
              {" "}
              <span className="text-6xl font-bold">“</span>Message from the
              Secretary General
            </h2>
            <p>
              <span className="font-semibold">
                Dear Delegates and Honored Guests,
              </span>
              <br />
              I take immense pride in welcoming you to the maiden edition of
              YCCE X MUN, an event launched in honor of the Ruby Jubilee
              Celebrations of Yeshwantrao Chavan College of Engineering.
              <br />
              <br />
              At this point where YCCE marks its 40 years of excellence, we set
              out on a journey beyond academics—diplomacy, leadership, and
              global awareness ....
              <Link href="/gensecletter">
                {" "}
                <button className="read-more-btn font-semibold">
                  Read More
                </button>
              </Link>
            </p>
          </div>
          <div className="flex-1 w-full max-w-[350px] mx-auto">
            {chunkedSlides.map((chunk, index) => (
              <div
                key={index}
                className="w-full h-full bg-white p-1 border border-[#D8C2A8] rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative flex flex-col justify-between"
                style={{ height: "auto" }}
              >
                <Image
                  src={chunk.image}
                  alt={chunk.name}
                  width={350}
                  height={200}
                  className="w-full h-auto rounded-md object-cover"
                  style={{ maxHeight: "200px", objectFit: "cover" }}
                />
                <div className="p-2 flex flex-col justify-between h-full">
                  <h3 className="text-base font-semibold text-center">
                    {chunk.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GenSecLetter;
