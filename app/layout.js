"use client";
import Aos from "aos";
import { useEffect } from "react";
import { Inter } from "next/font/google";
import "../node_modules/react-modal-video/scss/modal-video.scss";
import "aos/dist/aos.css";
import "../public/scss/main.scss";
import ScrollToTop from "./components/common/ScrollTop";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

if (typeof window !== "undefined") {
  import("bootstrap");
}

const inter = Inter({ subsets: ["latin"] });

const Body = styled.body`
  font-family: ${inter.family};
  font-size: ${inter.fontSize};
  margin: 0;
  padding: 0;
`;

export default function RootLayout({ children }) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);

  return (
    <html lang="en">
      <Body $czShortcutListen="false">
        {children}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
          draggable
          theme="light"
        />
        <ScrollToTop />
      </Body>
    </html>
  );
}
