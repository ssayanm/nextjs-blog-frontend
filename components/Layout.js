import Footer from "./Footer";
import Header from "./Header";
import Meta from "./Meta";

const Layout = ({ children }) => {
  return (
    <div className="md:container md:mx-auto text-gray-800">
      <Meta />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
