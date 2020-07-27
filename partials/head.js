import Head from 'next/head';
import React from "react";

const Header = (props) => (
    <div>
        <Head>
            <title>Harris Beg{props.page_name ? ( ' | ' + props.page_name) : ('')}</title>
            <meta name="description" content="I'm a software developer and undergrad at Caltech, based in San Diego." />
            <link rel="apple-touch-icon" sizes="57x57" href="/seo/apple-icon-57x57.png" />
            <link rel="apple-touch-icon" sizes="60x60" href="/seo/apple-icon-60x60.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="/seo/apple-icon-72x72.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="/seo/apple-icon-76x76.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="/seo/apple-icon-114x114.png" />
            <link rel="apple-touch-icon" sizes="120x120" href="/seo/apple-icon-120x120.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="/seo/apple-icon-144x144.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="/seo/apple-icon-152x152.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/seo/apple-icon-180x180.png" />
            <link rel="icon" type="image/png" sizes="192x192"  href="/seo/android-icon-192x192.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/seo/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="/seo/favicon-96x96.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/seo/favicon-16x16.png" />
            <link rel="manifest" href="/seo/manifest.json" />
            <meta name="msapplication-TileColor" content="#FCEE21" />
            <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
            <meta name="theme-color" content="#FCEE21" />
            <meta property="og:image" content={"https://og-image.harrisbegca.now.sh/**harrisbeg**%2F"+props.page_name.toLowerCase()+".jpeg?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fhbgw.harrisbegca.now.sh%2Fhbg.svg"} />
            <meta property="og:image:type" content="image/jpeg" />
            <meta property="og:image:width" content="375" />
            <meta property="og:image:height" content="214" />
            <meta property="og:image:alt" content="harrisbeg/home" />
            <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossOrigin="anonymous"
            />

        </Head>
    </div>
);

export default Header;