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

// .sidebar {
//   background: $gray-alt;
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   z-index: 999;
//   display: grid;
//   place-items: center;
//   opacity: 0;
//   transition: $transition;
//   transform: translateX(-100%);

//   .close-btn {
//     position: absolute;
//     right: 4.75%;
//     top: 2.75%;
//     font-size: 2.5rem;
//     background: transparent;
//     border-color: transparent;
//     color: $dark-red;
//     cursor: pointer;
//   }
// }
// .show-sidebar {
//   opacity: 1;
//   transform: translateX(0);
// }
// .sidebar-links li {
//   // opacity: 0;
//   a {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     text-transform: capitalize;
//     color: $gray;
//     letter-spacing: $spacing;
//     margin-bottom: 0.5rem;
//     font-size: 1.5rem;
//     transition: $transition;
//     border-radius: $radius;

//     &:hover {
//       color: $primary-color;
//       font-size: 1.5rem;
//     }
//   }
// }

// /*
// ===============
// Sidebar Animation
// ===============
// */
// .sidebar-links li {
//   animation: slideRight 0.5s ease-in-out 0.3s forwards;
//   &:nth-of-type(1) {
//     animation-delay: 0.25s;
//   }
//   &:nth-of-type(2) {
//     animation-delay: 0.5s;
//   }
//   &:nth-of-type(3) {
//     animation-delay: 0.75s;
//   }
//   &:nth-of-type(4) {
//     animation-delay: 1s;
//   }
//   &:nth-of-type(5) {
//     animation-delay: 1.25s;
//   }
// }

// @keyframes slideRight {
//   0% {
//     transform: translateX(-200px);
//     opacity: 0;
//   }
//   100% {
//     transform: translateX(0);
//     opacity: 1;
//   }
// }
// .sidebar-icons li {
//   opacity: 0;
//   animation: slideUp 0.5s ease-in-out 0.3s forwards;
//   &:nth-of-type(1) {
//     animation-delay: 0.25s;
//   }
//   &:nth-of-type(2) {
//     animation-delay: 0.5s;
//   }
//   &:nth-of-type(3) {
//     animation-delay: 0.75s;
//   }
//   &:nth-of-type(4) {
//     animation-delay: 1s;
//   }
//   &:nth-of-type(5) {
//     animation-delay: 1.25s;
//   }
// }

// @keyframes slideUp {
//   0% {
//     transform: translateY(200px);
//     opacity: 0;
//   }
//   100% {
//     transform: translateY(0);
//     opacity: 1;
//   }
// }
