import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import ProjectSection from "./components/projectSection"; // Import your project section
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Sidebar />
      <Header />
      <ProjectSection />
      <Footer/>
    </div>
  );
}
