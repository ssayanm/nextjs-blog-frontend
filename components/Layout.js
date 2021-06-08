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

// <header className="text-gray-600 body-font">
//         <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//           <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//             <span className="ml-3 text-xl tracking-widest">
//               Sayan Mukherjee
//             </span>
//           </a>

//           <nav className="hidden md:ml-auto md:mr-auto md:flex flex-wrap items-center text-base justify-center">
//             <a className="mr-5 hover:text-gray-900">First Link</a>
//             <a className="mr-5 hover:text-gray-900">Second Link</a>
//             <a className="mr-5 hover:text-gray-900">Third Link</a>
//             <a className="mr-5 hover:text-gray-900">Fourth Link</a>
//           </nav>
//           <button className="hidden md:inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
//             Button
//             <svg
//               fill="none"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               className="w-4 h-4 ml-1"
//               viewBox="0 0 24 24"
//             >
//               <path d="M5 12h14M12 5l7 7-7 7"></path>
//             </svg>
//           </button>
//         </div>
//       </header>
