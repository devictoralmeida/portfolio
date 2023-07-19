import "./page.scss";
import Header from "@/container/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import About from "@/container/About/About";
import Footer from "@/container/Footer/Footer";
import Skills from "@/container/Skills/Skills";
import Work from "@/container/Work/Work";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default async function Home() {
  return (
    <main className="app">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Work />
      <Footer />
      <ToastContainer />
    </main>
  );
}
