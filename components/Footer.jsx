import { Instagram, Link, MapPinned, Phone, Mail, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#54250B] text-[#EFE7E4] py-6 mt-8 shadow-lg">
      <div className="container mx-auto px-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center md:text-left">
          {/* Location */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold">Location</h3>

            <div className="flex items-center space-x-1 mb-1">
              <MapPinned className="h-5 w-5 text-[#EFE7E4]" />
              <p className="text-base opacity-80 leading-relaxed">
                YCCE, Nagpur, Maharashtra, India - 441110
              </p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4362.229271227133!2d78.97599737588573!3d21.095191080570853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4952117eaac51%3A0x6d8277793eb63d6a!2sYeshwantrao%20Chavan%20College%20of%20Engineering%20(YCCE)%2C%20Nagpur!5e1!3m2!1sen!2sin!4v1738159019804!5m2!1sen!2sin"
              className="rounded-lg shadow-lg w-full h-[200px] md:w-[380px] mt-4"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold">Contact</h3>

            {[
              {
                title: "Phone: ",
                url: "tel:+919999999999",
                value: "9999999999",
                icon: <Phone className="h-4 w-4 text-[#EFE7E4]" />,
              },
              {
                title: "Email: ",
                url: "mailto:yccexmun@gmail.com",
                value: "yccexmun@gmail.com",
                icon: <Mail className="h-4 w-4 text-[#EFE7E4]" />,
              },
              {
                title: "Website: ",
                url: "https://www.yccexmun.com",
                value: "www.yccexmun.com",
                icon: <Globe className="h-4 w-4 text-[#EFE7E4]" />,
              },
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-2 mb-1">
                {item.icon}
                <p className="text-base opacity-80">
                  <span className="font-bold">{item.title}</span>
                  <a
                    href={item.url}
                    className="font-medium text-[#EFE7E4] hover:text-[#2563EB] hover:underline underline-offset-2 transition-colors duration-200"
                  >
                    {item.value}
                  </a>
                </p>
              </div>
            ))}

            <div className="flex justify-center mt-4">
              <a
                href="https://www.instagram.com/yccexmun?igsh=d2g1cHlvMXl3bnBi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Instagram profile"
                className="flex items-center space-x-2 border-2 border-[#54250B] rounded-lg px-4 py-2 hover:bg-[#C2A597] hover:border-[#C2A597] transition-all duration-300 group shadow-lg hover:shadow-xl"
              >
                <Instagram className="w-6 h-6 group-hover:text-white transition-all duration-300" />
                <span className="text-sm font-medium group-hover:text-white transition-all duration-300">
                  Follow us <span className="font-bold">@yccexmun</span>
                </span>
              </a>
            </div>
          </div>

          {/* Developers and Quick Links */}
          <div className="flex flex-col items-center md:items-start gap-y-2">

            <div className="w-full">
              <h3 className="text-xl font-bold text-center md:text-left">
                Designed & Developed by
              </h3>
              <p className="text-base opacity-80 mt-1">MUN Technical Team @CSE</p>
            </div>

            <div className="w-full">
              <h3 className="text-xl font-bold mb-1 text-center md:text-left">
                Quick Links
              </h3>
              <ul className="text-base opacity-80 space-y-2">
                {[
                  { href: "/", text: "About Us" },
                  { href: "/", text: "Event Schedule" },
                  { href: "/", text: "Committees" },
                  { href: "/", text: "Contact Us" },
                ].map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="hover:text-[#2563EB] transition flex items-center hover:scale-105 duration-300"
                    >
                      <Link className="w-4 h-4 mr-2" />
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-4xl border-t border-[#C2A597] text-center font-semibold text-[#EFE7E4] tracking-wider mt-6">
          <div className="text-center text-lg tracking-normal mt-2 font-normal">
            <p>&copy; 2025 YCCE X MUN. All Rights Reserved.</p>
          </div>
          <p className="pt-4 hover:scale-110 hover:text-[#C2A597] transition-all duration-300 ease-in-out cursor-pointer flex items-center justify-center">
            <span className="border-t border-[#C2A597] w-16 mr-2"></span>
            YCCE <span className="text-xl mx-2">X</span> MUN
            <span className="border-t border-[#C2A597] w-16 ml-2"></span>
          </p>
          {/* <p className="font-normal tracking-normal text-sm">Presented by Computer Science Department</p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;