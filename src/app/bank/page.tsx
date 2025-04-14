import Bank from "./bank";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Bank Security Solutions | Uniview',
    description: 'Comprehensive security solutions for banks including video surveillance, access control, and customer analytics.',
}

export default function BankPage() {
    return (
        <>
            <Navbar />
            <Bank />
            <Footer />
        </>
    )
}
