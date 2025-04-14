import ShoppingMall from "./shopping-mall";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Shopping Mall Security Solutions | Uniview',
    description: 'Comprehensive security solutions for shopping malls including video surveillance, access control, and customer analytics.',
}

export default function ShoppingMallPage() {
    return (
        <>
            <Navbar />
            <ShoppingMall />
            <Footer />
        </>
    )
}

