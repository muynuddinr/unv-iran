import Stadium from "./stadium";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Stadium Security Solutions | Uniview',
    description: 'Comprehensive security solutions for stadiums including video surveillance, access control, and customer analytics.',
}

export default function StadiumPage() {
    return (
        <>
            <Navbar />
            <Stadium />
            <Footer />
        </>
    )
}


