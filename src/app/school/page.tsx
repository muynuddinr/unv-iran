import School from "./school";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'School Security Solutions | Uniview',
    description: 'Comprehensive security solutions for schools including video surveillance, access control, and visitor management.',
}

export default function SchoolPage() {
    return (
        <>
            <Navbar />
            <School />
            <Footer />
        </>
    )
}

