import Footer from "./Footer";
import Header from "./Header";
import Meta from "./Meta";

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-100  text-gray-800 font-sans antialiased ">
      <Meta />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
