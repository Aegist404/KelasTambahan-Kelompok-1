import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Navbar />
     <Footer/>
    </div>
  );
}
