import Links from "../constants/links";
// import SocialLinks from "../constants/socialLinks";
import { FaTimes } from "react-icons/fa";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside
      className={`bg-gray-500 fixed top-0 left-0 z-50 opacity-0 ${
        isOpen ? "opacity-1" : ""
      }`}
    >
      <button className="close-btn" onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <div className="side-container">
        <Links styleClass={`${isOpen ? "sidebar-links" : ""}`} />
      </div>
    </aside>
  );
};

export default Sidebar;
