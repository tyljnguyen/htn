/* eslint-disable @typescript-eslint/naming-convention */
import { ReactNode } from "react";
import { Metadata } from "next";
import { Flow_Circular, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "../index.css";
import GoogleAnalytics from "utils/GoogleAnalytics";

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

const flow_circular = Flow_Circular({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-flow-circular",
});

export const metadata: Metadata = {
  title: "Hack the Nest",
  // TODO
  description:
    "This September, join 300 hackers for the DMV area&apos;s largest high school hackathon. Hack the Nest is a 36-hour collaborative coding event/competition where participants (also called hackers) create cool new tech projects from scratch. Whether it&apos;s 2am-debugging with cookies or ping-pong without paddles, our ultimate goal is to host an unforgettable experience for an audience normally barred from hackathons.",
  openGraph: {
    type: "website",
    url: "https://www.hackthenest.org/",
    title: "Hack the Nest",
    description:
      "This September, join 300 hackers for the DMV area&apos;s largest high school hackathon. Hack the Nest is a 36-hour collaborative coding event/competition where participants (also called hackers) create cool new tech projects from scratch. Whether it&apos;s 2am-debugging with cookies or ping-pong without paddles, our ultimate goal is to host an unforgettable experience for an audience normally barred from hackathons.",
    siteName: "Hack the Nest",
    images: [{ url: "https://www.hackthenest.org/banner.png" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@hackthenest",
    creator: "@hackthenest",
    images: "https://www.hackthenest.org/banner.png",
  },
};

// TODO: SEO and sitemaps https://nextjs.org/learn/seo/crawling-and-indexing
// TODO: volunteer app
// TODO: admin table and qr check in
// TODO: content - modals, faq, etc.
// TODO: mobile schedule
// TODO: possibly aws bucket upload for waivers
// TODO: app submission confirmation status text at dashboard top green bg with param passed to router function onsubmit
// can maybe add client usesession like https://stackoverflow.com/questions/75404618/glitch-with-nextauth-session-nextjs-13 with separate client component for provider
// dont know if necessary tho
const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html
      className={`${mono.variable} ${sans.variable} ${flow_circular.variable} font-sans`}
      lang="en"
    >
      <GoogleAnalytics />
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
