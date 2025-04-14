import Hotel from "./hotel"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Hotel Security Solutions | Uniview',
    description: 'Comprehensive security solutions for hotels including video surveillance, access control, and customer analytics.',
}

export default function HotelPage() {
    return (
        <>
            <Navbar />
            <Hotel />
            <Footer />
        </>
    )
}


