import Footer from "./Footer";
import Navbar from "./Navbar";
import Meta from "./Meta";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Meta />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
