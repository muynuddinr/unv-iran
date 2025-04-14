import Hospital from "./hospital";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Hospital Security Solutions | Uniview',
    description: 'Comprehensive security solutions for hospitals including video surveillance, access control, and visitor management.',
}

export default function HospitalPage() {
    return (
        <>
            <Navbar />
            <Hospital />
            <Footer />
        </>
    )
}
