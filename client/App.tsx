import React from 'react';
import { ToastContainer } from "react-toastify";
import IndexPage from "./routes/IndexPage";
import "./globals.scss";

// eslint-disable-next-line prefer-arrow-callback
export default function App() {
  return (
    <>
      <IndexPage />
      <ToastContainer position="bottom-right" newestOnTop />
    </>
  );
}
