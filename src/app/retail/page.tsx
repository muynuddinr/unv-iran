import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Retail from "./retail";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Retail Security Solutions | راهکارهای امنیتی فروشگاهی',
    description: 'Comprehensive security solutions for retail stores including video surveillance, access control, and customer analytics | راهکارهای جامع امنیتی برای فروشگاه‌ها شامل نظارت تصویری، کنترل دسترسی و تحلیل رفتار مشتری',
}

export default function RetailPage() {
    return (
        <>
            <Navbar />
            <Retail />
            <Footer />
        </>
    )
}




