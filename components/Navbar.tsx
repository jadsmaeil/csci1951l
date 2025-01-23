import { FC, useEffect, useRef, useState } from "react";
import useOnClickOutside from "../util/useOnClickOutside";

export interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMobileMenu = () => setMobileMenu(!mobileMenu);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scrolls to an element with a given ID
  function scrollToTarget(elem: string) {
    setMobileMenu(false);
    const element = document.getElementById(elem);
    const headerOffset = 90;
    const elementPosition = element!.getBoundingClientRect().top;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: "smooth",
    });
  }

  // Scrolls to the top of the page
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const mobileMenuRef = useRef(null);
  useOnClickOutside(mobileMenuRef, () => setMobileMenu(false));

  return (
    <nav>
      <div
        ref={mobileMenuRef}
        className={`bg-black text-white w-full px-6 py-4 backdrop-filter border-b transition-color duration-200 backdrop-blur-lg ${
          scrollPosition > 60 || mobileMenu
            ? "bg-opacity-60 border-gray-900"
            : "bg-opacity-0 border-transparent"
        }`}
      >
        <div className="flex justify-between items-center">
          <button
            onClick={scrollToTop}
            className="text-xl font-display hover-fade"
          >
            CS1951L
          </button>

          <div className="flex items-center">
            {/* mobile menu */}
            <button onClick={toggleMobileMenu} className="sm:hidden">
              {mobileMenu ? (
                <>
                  <span className="sr-only">Close menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {/* X icon */}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </>
              ) : (
                <>
                  <span className="sr-only">Open menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    {/* Menu icon */}
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </>
              )}
            </button>

            {/* desktop navbar */}
            <nav className="hidden md:flex items-center space-x-6 text-lg">
              <button
                onClick={() => scrollToTarget("course-info")}
                className="font-bold focus:underline hover-fade"
              >
                Course Info
              </button>
              <button
                onClick={() => scrollToTarget("assignments")}
                className="font-bold focus:underline hover-fade"
              >
                Assignments
              </button>
              <button
                onClick={() => scrollToTarget("lectures")}
                className="font-bold focus:underline hover-fade"
              >
                Lectures
              </button>
              <button
                onClick={() => scrollToTarget("calendar")}
                className="font-bold focus:underline hover-fade"
              >
                Calendar
              </button>
              <button
                onClick={() => scrollToTarget("staff")}
                className="font-bold focus:underline hover-fade"
              >
                Staff
              </button>
            </nav>
          </div>
        </div>
        <div>
          {mobileMenu && (
            <nav className="flex flex-col items-start text-lg space-y-4 mt-5 md:hidden">
              <button
                onClick={() => scrollToTarget("course-info")}
                className="font-bold focus:underline hover-fade w-full text-left"
              >
                Course Info
              </button>
              <button
                onClick={() => scrollToTarget("assignments")}
                className="font-bold focus:underline hover-fade w-full text-left"
              >
                Assignments
              </button>
              <button
                onClick={() => scrollToTarget("lectures")}
                className="font-bold focus:underline hover-fade w-full text-left"
              >
                Lectures
              </button>
              <button
                onClick={() => scrollToTarget("calendar")}
                className="font-bold focus:underline hover-fade w-full text-left"
              >
                Calendar
              </button>
              <button
                onClick={() => scrollToTarget("staff")}
                className="font-bold focus:underline hover-fade w-full text-left"
              >
                Staff
              </button>
            </nav>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
