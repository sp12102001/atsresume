import Head from "next/head";

export default function Meta({ title, keywords, description }) {
    const homepage = "https://atsresume-five.vercel.app/";
    const logo = "https://atsresume-five.vercel.app/assets/logo.png";
    const fevicon = "https://atsresume-five.vercel.app/assets/favicon.ico";

    function isiteJsonLd() {
        return {
            __html: `{
                "@context": "https://schema.org",
                "@type": "Organization",
                "url": ${homepage},
                "logo": ${logo},
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+65 888888888",
                    "contactType": "customer service"
                },
                "image": ${logo},
                "description": ${description},
                "founder": "S",
                "foundingDate": "2023",
                "foundingLocation": "IN",
                "email": "xyz@gmail.com",
                "telephone": "+91 9999999999",
                "areaServed": "SG",
                "keywords": ${keywords},
                "mainEntityOfPage": ${homepage},
                "knowsAbout": ${keywords},
                "knowsLanguage": "English",
                "memberOf": "S",
                "owns": "S",
                "publishingPrinciples": ${homepage},
                "slogan": "ATS-optimized resumes made easier"
            }`
        }
    }


    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <meta charSet="utf-8" />
            <link rel="icon" href={fevicon} />
            <title>{title}</title>
            <meta type="copyright" content="ATSResume" />
            <meta type="author" content="Saurav Hathi" />
            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={homepage} />
            <meta property="og:title" content={title} />
            <meta
                property="og:description"
                content={description} />
            <meta property="og:image" content={logo} />
            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={homepage} />
            <meta property="twitter:title" content={title} />
            <meta
                property="twitter:description"
                content={description} />
            <meta property="twitter:image" content={logo} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={isiteJsonLd()}
                key="isiteJsonLd"
            />
        </Head>
    );
}
