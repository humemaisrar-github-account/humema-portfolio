import type { Metadata } from "next";
 
import "./globals.css";
 
export const metadata: Metadata = {
 title: "Humema Israr – Frontend Developer Portfolio",
  description:
    "Official portfolio of Humema Israr, a passionate frontend developer skilled in Next.js, Tailwind CSS, TypeScript, and UI/UX design. Built as part of the GIAIC AI program.",
  keywords: [
    "Humema Israr",
    "Frontend Developer",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "Python",
    "Next.js Developer",
    "UI/UX Designer",
  ],
  authors: [{ name: "Humema Israr", url: "https://www.linkedin.com/in/humema-israr-b184342b5" }],
  openGraph: {
    title: "Humema Israr – Frontend Developer Portfolio",
    description:
      "Explore the projects, skills, and creativity of Humema Israr, a frontend web developer building modern, responsive websites using cutting-edge tools.",
    url: "https://humema-portfolio.vercel.app", 
    siteName: "Humema Israr Portfolio",
    images: [
      {
        url: "/preview.png", 
        width: 1200,
        height: 630,
        alt: "Humema Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Humema Israr – Portfolio",
    description: "View the personal portfolio of Humema Israr.",
    creator: "@humemaI18190",  
    images: ["/preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        
      >
        {children}
      </body>
    </html>
  );
}
 