import Head from 'next/head';
import GenSec from "../../components/GenSec";

export const metadata = {
  title: "GenSec Message", 
  description: "Message from General Secretariat."
};



const GenSecPage = () => {
  console.log('Rendering GenSecPage');
  return (
    
      <div className="container mx-auto p-4">
        <GenSec /> 
      </div>
  );
};

export default GenSecPage;
