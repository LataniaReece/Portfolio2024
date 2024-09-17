import "./globals.css";
import Navbar from "./components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#FFFFFF] to-[#EBEBEB]">
          <Navbar />
          <div className="container">{children}</div>
        </div>
      </body>
    </html>
  );
}
