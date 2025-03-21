import PatronsPage from "../../components/Patrons";


export const metadata = {
  title: "Patrons", 
  description: "Discover the esteemed patrons and advisors supporting YCCEXMUN. Their guidance ensures the success of our conference."
};

export default function Patrons() {
  return (
    <div className="container mx-auto">
      <PatronsPage />
    </div>
  );
}
