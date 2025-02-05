"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (countdown === 0) {
      router.push("/");
      return;
    }

    const timer = setTimeout(() => setCountdown((prev) => prev - 1), 1000);
    return () => clearTimeout(timer);
  }, [countdown, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] bg-[#EFE7E4] text-[#54250B] text-center px-6">
      <h1 className="text-6xl font-bold">404</h1>
      <h2 className="text-2xl mt-4">Oops! Page Not Found</h2>
      <p className="mt-2 text-lg opacity-80">
        Redirecting to homepage in {countdown} seconds...
      </p>
      <button 
        onClick={() => router.push("/")}
        className="mt-6 px-6 py-3 text-lg font-semibold border-2 border-[#54250B] rounded-lg hover:bg-[#C2A597] hover:border-[#C2A597] transition-all duration-300"
      >
        Go to Home
      </button>
    </div>
  );
};

export default NotFound;
