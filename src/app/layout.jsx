import "@/app//globals.css";
import { Manrope } from "next/font/google";
import Navbar from "@/components/Navbar";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const manrope = Manrope({
  preload: true,
  adjustFontFallback: true,
  display: "swap",
  subsets: ["latin", "latin-ext"],
  style: ["normal"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
});

export const metadata = {
  title: "AnimeVibe",
  description: "Website Anime Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} bg-Black-8 px-5 py-2.5 md:py-12`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        {children}

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </body>
    </html>
  );
}
