import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

export default function RootLayouts({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
