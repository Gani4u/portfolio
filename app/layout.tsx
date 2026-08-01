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
  title: "Ganesh Chavan | Backend & Full Stack Engineer | Java & Spring Specialist",
  description: "Professional portfolio of Ganesh Chavan, a Full Stack Developer specializing in Java backend architectures, Spring Boot ecosystems, NestJS modules, and Next.js interfaces. Engineering scalable software that solves real business problems.",
  keywords: [
    "Ganesh Chavan",
    "Full Stack Developer",
    "Java Developer",
    "Spring Boot Developer",
    "Backend Engineer",
    "NestJS Developer",
    "Next.js Developer",
    "React Engineer",
    "AWS Architect",
    "Mysuru",
    "Bangalore",
    "India",
    "Developer Portfolio",
    "Software Engineer Portfolio"
  ],
  authors: [{ name: "Ganesh Chavan", url: "https://github.com/Gani4u" }],
  openGraph: {
    title: "Ganesh Chavan | Backend & Full Stack Engineer",
    description: "Professional portfolio of Ganesh Chavan, specializing in Java backend architectures, Spring Boot, NestJS, and Next.js.",
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
  themeColor: "#000000",
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
      "https://www.linkedin.com/in/ganesh-chavan-35435526b"
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
      "TypeScript",
      "Tauri",
      "Rust"
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
      <body className="min-h-full flex flex-col bg-black text-neutral-100 selection:bg-neutral-850 selection:text-white">
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
