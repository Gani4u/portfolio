import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ganesh Chavan | Full Stack Developer | Java & Next.js Specialist",
  description: "Portfolio of Ganesh Chavan, a Full Stack Developer specializing in Java, Spring Boot, NestJS, Next.js, and AWS. Building high-performance, secure backend systems and minimal frontend experiences.",
  keywords: [
    "Ganesh Chavan",
    "Full Stack Developer",
    "Java Developer",
    "Spring Boot",
    "NestJS",
    "Next.js",
    "React",
    "Mysuru",
    "Bangalore",
    "AWS",
    "TypeScript",
    "eJTime",
    "Developer Portfolio"
  ],
  authors: [{ name: "Ganesh Chavan", url: "https://github.com/Gani4u" }],
  openGraph: {
    title: "Ganesh Chavan | Full Stack Developer",
    description: "Portfolio of Ganesh Chavan, specializing in Java, Spring Boot, NestJS, Next.js, and AWS.",
    url: "https://Gani4u.github.io/portfolio",
    siteName: "Ganesh Chavan Portfolio",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#030303",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ganesh Chavan",
    "jobTitle": "Full Stack Developer",
    "url": "https://Gani4u.github.io/portfolio",
    "sameAs": [
      "https://github.com/Gani4u",
      "https://www.linkedin.com/in/ganesh-chavan-a6b189288"
    ],
    "knowsAbout": [
      "Java",
      "Spring Boot",
      "NestJS",
      "Prisma ORM",
      "Next.js",
      "React",
      "MySQL",
      "PostgreSQL",
      "AWS",
      "TypeScript"
    ]
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#030303] text-neutral-100 selection:bg-neutral-850 selection:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
