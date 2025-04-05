import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "My Portfolio",
  description: "Showcasing my work and skills",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar /> {/* Navbar remains a client component */}
        {/* <CursorGlow /> */}
        {children}
      </body>
    </html>
  );
}
