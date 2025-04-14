import Smart from "./smart-Intrusion-Prevention"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Smart Intrusion Prevention | Uniview',
    description: 'Smart intrusion prevention solutions for your home and business.',
}

export default function SmartIntrusionPreventionPage() {
    return (
        <>
            <Navbar />
            <Smart/>
            <Footer />
        </>
    )
}


