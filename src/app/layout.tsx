import "./globals.css";
import RefreshRedirect from '@/components/RefreshRedirect'
import { personalInfo } from "@/data/portfolioData";

export const metadata = {
  title: personalInfo.fullName,
  description: `Personal Portfolio of ${personalInfo.fullName} - AI & Machine Learning Student`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <RefreshRedirect />
        {children}
        </body>
    </html>
  );
}