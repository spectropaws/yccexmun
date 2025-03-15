import Head from 'next/head';
import GenSec from "../../components/GenSec";

export const metadata = {
  title: "GenSec Message", 
  description: "Read the inspiring message from the Secretary-General of YCCEXMUN, setting the vision for diplomacy, debate, and leadership."
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
