import Building from "./building";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Building Security Solutions | Uniview',
  description: 'Comprehensive security solutions for commercial and residential complexes including perimeter protection, access control, video surveillance, and visitor management.',
}

export default function BuildingPage() {
  return (
    <>
      <Navbar />
      <Building />
      <Footer />
    </>
  )
}
