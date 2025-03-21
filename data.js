// Important date Timeline
export const EventDates = [
  { event: "Registration Begins", date: "17 Feb 2025" },
  { event: "Registration Deadline", date: "20 Mar 2025" },
  { event: "Delegation Assigning", date: "18 Mar 2025" },
  { event: "Orientation Session", date: "26 Mar 2025" },
  { event: "MUN Conference", date: "28 Mar 2025" },
  { event: "Award Ceremony", date: "29 Mar 2025" },

];

// Footer Data
import { Phone, Mail, Globe } from "lucide-react";
import { title } from "process";

export const FooterContactInfo = [
  {
    title: "Kushal Javkhedkar: ",
    url: "tel:+919359989485",
    value: "9359989485",
    icon: <Phone className="h-4 w-4 text-[#54250B]" />,
  },
  {
    title: "Yugandhara Jagtap: ",
    url: "tel:+919322035493",
    value: "9322035493",
    icon: <Phone className="h-4 w-4 text-[#54250B]" />,
  },
  {
    title: "Email: ",
    url: "mailto:yccexmun@gmail.com",
    value: "yccexmun@gmail.com",
    icon: <Mail className="h-4 w-4 text-[#54250B]" />,
  },
];

export const FooterLinkData = [
  { url: "/about", title: "About Us" },
  { url: "/#schedule", title: "Event Schedule" },
  { url: "/advisory-board", title: "Advisory Board" },
  { url: "/chairs", title: "Committees" },
  { url: "/teams", title: "Team" },
];

export const footerTechnicalTeamModalData = [
  {
    name: "Technical Team",
    members: [
      {
        name: "Om Mane",
        role: "USG Technical",
        image:
          "https://media.istockphoto.com/id/1344688156/photo/portrait-of-a-man-using-a-computer-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=xQsoWWZXJ1ydmmCGgnHyuVYUc7BILG1FauoHcloDnG4=",
        linkedinURL:
          "https://www.linkedin.com/in/om-mane-20479a25b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        githubURL: "https://www.github.com/spectropaws",
      },
      {
        name: "Rishabh Gokhe",
        role: "Frontend Developer",
        image:
          "https://media.licdn.com/dms/image/v2/D5603AQENv39NDiibWw/profile-displayphoto-shrink_400_400/B56ZTVi_EjGsAg-/0/1738749509576?e=1744243200&v=beta&t=WVCpt81Hfga7eOp3bZiD7p4Rra8UtOpJlGK5z_caHC4",
        linkedinURL: "https://www.linkedin.com/in/rishabh-gokhe",
        githubURL: "https://www.github.com/rishabhgokhe",
      },
      {
        name: "Atul Thakre",
        role: "Frontend Developer",
        image:
          "https://media.licdn.com/dms/image/v2/D5603AQFZ3aSXzI4F7A/profile-displayphoto-shrink_400_400/B56ZQ8K9lKHoAk-/0/1736176296675?e=1744243200&v=beta&t=SIJMVx2EhlC4sEUQOIpg39tlWzeEMxPDLfPKmuj6A00",
        linkedinURL:
          "https://www.linkedin.com/in/atul-thakre-logers?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        githubURL: "https://www.github.com/Atul-ThakreLO",
      },
      {
        name: "Akansha Sawant",
        role: "Frontend Developer",
        image:
          "https://media.istockphoto.com/id/960937636/photo/woman-hands-coding-html-and-programming-on-screen-laptop-web-developer.jpg?s=612x612&w=0&k=20&c=MSLlYt0QRwyRenwhZAhSerwvs-3qt9QjieJ0ta2MAuc=",
        linkedinURL:
          "https://www.linkedin.com/in/akanksha-sawant-2598a1305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        githubURL: "https://www.github.com/nastyax0",
      },
    ],
  },
];

// Navbar Links Data
export const NavbarLinksData = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About Us" },
  { url: "/chairs", title: "Committees" },
  { url: "/patrons", title: "Patrons"},
  { url: "/teams", title: "Team" },
  { url: "/advisory-board", title: "Advisory Board" },
  { url: "/#schedule", title: "Event Schedule" },
  { url: "/#footer", title: "Contact Us" },
];

//  Content Section
export const ContentSectionCardData = [
  {
    title: "Skill Development",
    description:
      "Enhance your public speaking, negotiation, and leadership abilities while refining research and critical thinking skills.",
  },
  {
    title: "Real-World Experience",
    description:
      "Gain hands-on exposure to global problem-solving and UN-style decision-making, preparing you for real diplomatic challenges.",
  },
  {
    title: "Networking Opportunities",
    description:
      "Connect with like-minded peers, professionals, and global leaders, expanding your horizons and career prospects.",
  },
];

// Teams Data
export const teamsData = [
  {
    name: "USG'S",
    members: [
      {
        name: "Kushal Javkhedkar",
        role: "Secretary General",
        image:
          "/USG/Kushal1.jpg",
      },
      {
        name: "Yugandhara Jagtap",
        role: "Director General",
        image:
          "/USG/Yugandhara.jpg",
      },
      {
        name: "Paras Kalbande",
        role: "Deputy Secretary General",
        image:
          "/USG/Paras Kalbande_DeputyGenSec.jpg",
      },
      {
        name: "Avanti Raut",
        role: "Deputy Secretary General",
        image:
          "/USG/AvantiRaut_DeputyGenSec.jpg",
      },
      {
        name: "Karan Kangali",
        role: "USG Logistics, EM, Finance",
        image:
          "/USG/Karan.jpg",
      },
      {
        name: "Dhruv Munghate",
        role: "USG Hospitality & Volunteer In-Charge",
        image: "/USG/DhruvMunghate_Hospitality& VolenteersIncharge.jpg",
      },
      {
        name: "Riddhi Nahate",
        role: "USG Hospitality & Volunteer In-Charge",
        image: "/USG/Riddhi.jpg",
      },
      {
        name: "Om Mane",
        role: "USG Technical",
        image:
          "/USG/Om_Mane_USG-Technical.jpg",
      },
      // {
      //   name: "Vinay Muraskar",
      //   role: "USG Design",
      //   image:
      //     "/USG/Vinay Muraskar_Design Head.jpg",
      // },
      {
        name: "Chitraksh Chavan",
        role: "USG Design",
        image: "/USG/Chitraksh Chavan _ Design Head.jpg",
      },
      {
        name: "Bhuvanesh Dorle",
        role: "USG Database",
        image:
          "/USG/Bhuvanesh Dorle_Database.jpg",

      },
      {
        name: "Aditya Rajankar",
        role: "USG Publicity",
        image: "/USG/Aditya R_PR.jpg",
      },
      {
        name: "Devki Parajiya",
        role: "USG Literature",
        image:
          "/USG/DevkiParajiya_Literature.jpg",
      },
      {
        name: "Sohum Weginwar",
        role: "USG Hall Management",
        image: "/USG/sohum Weginwar _HM.jpg",
      },
      {
        name: "Diya Choudhari",
        role: "USG Hall Management",
        image: "/USG/Diya Choudhari_ H M.jpg",
      },
      {
        name: "Ayush Sontakke",
        role: "USG Social Media",
        image: "/USG/AYUSH_SOCIAL_MEDIA.jpg",
      },
    ],
  },
];

// Advisory Board

export const advisoryBoard = [
  {
    imgSrc: "/Advisory/Piyush.jpg",
    name: "PIYUSH PARIWAKAM",
    position: "Position",
    description:
      "With years of experience in debate and diplomacy, Piyush Pariwakam joins the Advisory Board of YCCE X MUN, bringing invaluable expertise to the conference. His deep understanding of geopolitics, governance, and democratic values will provide crucial guidance to the organizing team, ensuring a high-caliber and impactful event. Piyush's strategic insights will shape an intellectually enriching MUN experience, elevating the discussions and fostering a meaningful debate for all participants.",
  },
  {
    imgSrc: "/Advisory/Sparshika_advisory.jpg",
    name: "SPARSHIKA HADKE",
    position: "Position",
    description:
      "Sparshika Hadke, a member of the Advisory Committee for YCCE X MUN, is an experienced leader with a strong background in community development and Model United Nations. Having served as the President and International Service Director of the Rotaract Club of Nagpur Downtown, she has spearheaded global service projects and youth empowerment initiatives. Her expertise in leadership, diplomacy, and organizing impactful events will offer valuable guidance to participants, ensuring a well-rounded and enriching MUN experience.",
  },
  {
    imgSrc: "/Advisory/DevanshGandhi_Advisory.JPG",
    name: "DEVANSH GANDHI",
    position: "Position",
    description:
      "Devansh Gandhi, a member of the Advisory Committee for YCCE X MUN, is a skilled leader with a passion for entrepreneurship and strategic decision-making. With a strong background in Model United Nations, having participated in over 20 conferences and won multiple awards, Devansh brings valuable experience in diplomacy, negotiation, and problem-solving. As a dynamic leader, he has excelled in managing teams and organizing events, showcasing his ability to foster collaboration and drive success. His expertise will inspire participants to develop critical thinking and leadership skills, ensuring a highly engaging and impactful MUN experience.",
  },
  {
    imgSrc: "/Advisory/Naincy Pande _advisory_1c.jpg",
    name: "NAINCY PANDE ",
    position: "Position",
    description:
      "Naincy Pande, an accomplished orator and public speaker, brings her expertise in parliamentary debates and declamation to the Advisory Board of YCCE X MUN. With accolades at state and district levels, along with a strong command of communication and leadership, she ensures a high-quality, intellectually stimulating conference. Her experience will guide participants in mastering diplomacy, structured argumentation, and impactful resolutions. Passionate about fostering meaningful discourse, she strives to create an environment where delegates can refine their perspectives and develop confidence in global affairs.",
  },
  {
    imgSrc: "/Advisory/Manuukraj.jpg",
    name: "MAANUKHRAJ SINGH ALAG",
    name: "MAANUKHRAJ SINGH ALAG",
    position: "Position",
    description:
      "Maanukhraj Singh Alag, a seasoned Model United Nations (MUN) expert, brings a wealth of experience to the Advisory Committee of YCCE X MUN. Having served as the Secretary General at Cosmopolitan Revolutionary Model United Nations, he has demonstrated exceptional leadership in organizing large-scale conferences. As a Best Delegate at Apex MUN and with participation in renowned international debate competitions, Maanukhraj's expertise in diplomacy, critical thinking, and negotiation will guide delegates in navigating complex global issues and crafting impactful resolutions. His strategic insights and experience will ensure a dynamic and engaging MUN experience.",
  },
];

export const carouselImages = [
  "/carousel/video1.mp4",
  "/carousel/img1.jpg",
  "/carousel/img2.jpg",
  "/carousel/img3.jpg",
  "/carousel/video3.mp4",
  "/carousel/img4.jpg",
  "/carousel/img5.jpg",
  "/carousel/img6.jpg",
  "/carousel/video4.mp4",
  "/carousel/img7.jpg",
  "/carousel/img8.png",
];

//Chairs Data
export const slides = [
  {
    name: "Piyush Pariwakam",
    image: "/images/Piyush.jpg",
    description:
      "Piyush Pariwakam, a seasoned debater with over five years of MUN experience, excels in all roles. He serves as Ambassador of the University Grants Commission, India, advocating Equality, Equity, and Democratic Principles. Get ready for an engaging and insightful AIPPM at YCCE X MUN!",
  },
  {
    name: "Varad Dorlikar",
    image: "/images/Varad.jpg",
    description:
      "Varad Dorlikar, a seasoned MUN veteran with 60+ conferences, excels in Indian committees, legal discourse, and parliamentary debates. With experience as Secretary General, President, and Chairperson, he ensures impactful debates and resolutions at YCCE X MUN.",
  },
  {
    name: "Swara Dalvi",
    image: "/images/Swara.jpg",
    description:
      "Swara Dalvi, with exceptional skills in diplomacy, legal reasoning, and international affairs, is a powerhouse in the MUN circuit. A distinguished orator and accomplished MUNer, she ensures balanced, thought-provoking debates and an intellectually charged experience at UNHRC.",
  },
  {
    name: "Swayam Kaushik",
    image: "/images/Swayam.jpg",
    description:
      "Swayam Kaushik, a seasoned debater and legal enthusiast, brings his expertise in law, diplomacy, and international affairs to UNHRC at YCCE X MUN. With extensive experience in moot courts and MUNs, he ensures rigorous, solution-driven debates and impactful resolutions.",
  },
  {
    name: "Sarthak Pandit",
    image: "/images/Sarthak.jpg",
    description:
      "Sarthak Pandit, Chair of the UNGC Committee at YCCE X MUN, is a seasoned diplomat with 120+ MUNs and experience at Harvard Kennedy and Stanford. As Founder of the Nagpur Diplomatic Summit, he ensures engaging, solution-driven debates fostering global cooperation.",
  },
  {
    name: "Garv Chawla",
    image: "/images/Garv.jpg",
    description:
      "Garv Chawla, Chair of the UNGC Committee at YCCE X MUN, is an experienced leader with 60+ conferences and multiple Best Delegate awards. Known for his strategic thinking and diplomatic expertise, he ensures an enriching MUN experience focused on diplomacy and global issues.",
  },
];

export const subheadings = ["AIPPM", "UNHRC", "UNGA"];
export const full = [
  "All India Political Parties Meet",
  "United Nations Human Rights Council",
  "United Nations General Assembly",
];

export const paragraphs = [
  "AIPPM is a dynamic MUN committee that simulates high-level political discussions among India’s leading politicians. Delegates engage in heated debates, policy-making, and strategic negotiations on key national issues like governance, security, and economic reforms. This committee challenges participants to think critically, form alliances, and influence decisions, offering a thrilling experience of real-world Indian politics.",
  "The UNHRC in Model United Nations (MUN) focuses on addressing global human rights issues, ensuring justice, and promoting fundamental freedoms. Delegates represent countries to debate, draft resolutions, and develop policies on critical topics like discrimination, refugees, freedom of speech, and humanitarian crises. The committee encourages diplomatic negotiations, ethical policymaking, and collaborative solutions to uphold human rights worldwide.",
  "The UNGA in Model United Nations (MUN) is a platform for global dialogue, where all member states discuss and address key international issues. Delegates represent countries to debate, draft resolutions, and develop policies on topics like peace and security, human rights, sustainable development, and international law. The committee encourages diplomatic negotiations, consensus-building, and impactful decision-making to promote global cooperation and stability.",
];

export const agendas = [
  "Debate on Efficacy of Anti-Conversion Laws: Protecting Freedom of Religion vs Majoritarianism.",
  "Reassessing the Rights of Refugees in the Context of Global Refugee Crisis.",
  "United Nations Security Council Reforms: A Step Towards Democratizing Global Governance?",
];

export const patrons = [

  {
    name: "Hon.Shri. Datta Meghe",
    position: "Chairman, Nagar Yuvak Shikshan Sanstha",
    photo: "/images/Visionary.jpg",

  },
  {
    name: "Shri. Sameerji Meghe",
    position: "Treasurer, Nagar Yuvak Shikshan Sanstha",
    photo:"/images/Sameerji.jpg",
  },
  {
    name: "Shri. Raviji Meghe",
    position: "Secretary, Nagar Yuvak Shikshan Sanstha",
    photo:"/images/Raviji.jpg",
  },
  {
    name: "Smt. Vrindatai Meghe",
    position: "Cheif Advisor, Nagar Yuvak Shikshan Sanstha",
    photo:"/images/Vrindatai.jpg",
  },
  {
    name: "Dr. Hemant Thakare",
    position: "COO, Ceinsys Tech. Ltd. President, IEI India",
    photo:"/images/Hemant.jpg",
  },
  {
    name: "Dr. U. P. Waghe",
    position: "Principal YCCE, Nagpur",
    photo: "/images/Principal.jpg",
  },
  {
    name: "Dr. Manali M. Kshirsagar",
    position: "Technical Advisor MGI, Nagpur",
    photo: "/images/Manali.jpg",
  },
  {
    name: "Dr. Lalit B. Damahe",
    position: "Head of Department, CSE",
    photo: "/images/Lalit.jpg",
  },
  {
    name: "Dr. Nileshsingh V. Thakur",
    position: "Professor, CSE",
    munpos: "Overall Coordinator",
    photo: "/images/thakurSir.jpg",
  },
  {
    name: "Prof. Fazil Sheikh",
    position: "Assistant Professor, CSE",
    munpos: "Overall Coordinator",
    photo: "/images/Fazil.jpg",
  },
  {
    name: "Prof. Vaibhav R. Doifode",
    position: "Assistant Professor, Electrical",
    munpos: "Overall Coordinator",
    photo: "/images/Vaibhav.jpg",
  },
  {
    name: "Prof. Pratibha P. Waghale",
    position: "Assistant Professor, CSE",
    munpos: "Overall Coordinator",
    photo: "/images/Pratibha.jpg",
  },
  {
    name: "Prof. Nikita P. Giradkar",
    position: "Assistant Professor, CSE",
    munpos: "Coordinator",
    photo: "/images/Nikita.jpg",
  },
  {
    name: "Prof. Bharati A. Karare",
    position: "Assistant Professor, CSE",
    munpos: "Coordinator",
    photo: "/images/Bharati.jpg",
  },
  {
    name: "Prof. Jiwan N. Dehankar",
    position: "Assistant Professor, CSE",
    munpos: "Coordinator",
    photo: "/images/Jeevan.jpg",
  },
  {
    name: "Prof. Amruta T. Paul",
    position: "Assistant Professor, CSE",
    munpos: "Coordinator",
    photo: "/images/Amruta.jpg",
  },
  {
    name: "Prof. Chanchala A. Tripathi",
    position: "Assistant Professor, CSE",
    munpos: "Coordinator",
    photo: "/images/Chanchala.jpg",
  },
  {
    name: "Prof. Kavita A. Kathane",
    position: "Assistant Professor, CSE",
    munpos: "Coordinator",
    photo: "/images/Kavita.jpg",
  },
  {
    name: "Prof. Shraddha Vaidya",
    position: "Assistant Professor, CSE",
    munpos: "Coordinator",
    photo: "/images/Shraddha.jpg",
  },
];
