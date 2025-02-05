import Link from "next/link";

const GenSecLetter = () => {
  const chunkedSlides = [
    {
      image: "images/image1.jpg",
      name: "Kushal Javkhedkar"
    }
  ];

  return (
    <div className="gen-sec-letter-container shadow-lg">
      <section className="gen-sec-letter">
        <div className="flex flex-col lg:flex-row items-start justify-start gap-10 lg:gap-20">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mt-8 mb-8"> <span className="text-6xl font-bold">“</span>Message  from the General Secretary</h2>
            <p>
              
              <span className="font-semibold">Dear members</span>, <br />
              Welcome to our organization. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              <br /><br />
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum....
            </p><Link href="/gensecletter">
              <button className="read-more-btn mt-4">Read More</button>
            </Link>
          </div>
          <div className="flex-1 w-full max-w-[350px] mx-auto">
            {chunkedSlides.map((chunk, index) => (
              <div
                key={index}
                className="w-full h-full bg-white p-6 border border-[#D8C2A8] rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative flex flex-col justify-between"
                style={{ height: 'auto' }}
              >
                <img
                  src={chunk.image}
                  alt={chunk.name}
                  className="w-full h-auto object-cover" 
                  style={{ maxHeight: '200px', objectFit: 'cover' }}
                />
                <div className="p-4 flex flex-col justify-between h-full">
                  <h3 className="text-xl font-semibold text-center">{chunk.name}</h3>
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
