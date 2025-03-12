import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { About } from "./pages/About";
import Education from "./pages/Education";
import { Hero } from "./pages/Hero";
import { Portfolio } from "./pages/Portfolio";
import { Stack } from "./pages/Stack";

export default function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Education/>
      <Portfolio/>
      <Stack/>
      <Footer/>
    </>
  )
}