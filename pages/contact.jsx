import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import { DOMAIN } from "@/config";

const Contact = () => {

    const head = () => (
        <Head>
            <title>Contact</title>
            <meta name="robots" content="noindex, follow, noarchive, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
            <meta property="og:url" content={`${DOMAIN}/contact`} />
        </Head >
    );


    return (
        <>
            {head()}
            <Navbar />
            <div className="max-w-[1000px] mx-auto p-5">
                <h1 className="text-center font-bold text-3xl my-8">Contact</h1>


                <p className="my-8 leading-[2]">Thank you for reaching out to our manga website. We value your feedback and inquiries. Please use the following information to get in touch with us:</p>




                <h2 className="text-2xl font-bold my-5">General Inquiries</h2>
                <p className="my-8 leading-[2]"><b>Email:</b> divrawat2001@gmail.com</p>


                <h2 className="text-2xl font-bold my-5">Customer Support</h2>
                <p className="my-8 leading-[2]">For assistance with our products or services, please contact our customer support team:</p>
                <p className="my-8 leading-[2]"><b>Email:</b> divrawat2001@gmail.com</p>



                <h2 className="text-2xl font-bold my-5">Business Enquiry</h2>
                <p className="my-8 leading-[2]">For assistance with our products or services, please contact our customer support team:</p>
                <p className="my-8 leading-[2]"><b>Email:</b> divrawat2001@gmail.com</p>


            </div>
            <Footer />
        </>
    );
}

export default Contact;