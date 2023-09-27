import React from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <footer className="flex items-center justify-center w-full" id="footer">
      <div className="relative bg-cyan-950 bg-opacity-75 w-full animate-pulse bg-gradient-to-r from-inherit-500 via-slate-800 to-inherit-500 ">
        <div className="container px-5 py-2 mx-auto flex items-center sm:flex-row flex-col ">
          <a
            onClick={scrollToTop}
            className="cursor-pointer flex title-font font-medium items-center md:justify-start justify-center text-white"
          >
            <img alt="logo" src="/assets/C1.png" className="h-10" />
            <span className="ml-3 text-3xl">Compufest</span>
          </a>

          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-2">
            <a
              href="https://acmycce.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="acm logo" src="/assets/acm.png" className="h-16" />
            </a>
            <img alt="CTSC logo" src="/assets/CTSC.png" className="h-16" />
            <a
              href="https://www.ycce.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="ycce logo" src="/assets/ycce.png" className="h-16" />
            </a>
          </span>
        </div>
        <div className="pt-2 flex justify-center border-t  ">
          <a
            href="mailto:technical.compufest@gmail.com"
            id="email"
            type="button"
            className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 64 64"
style={{fill:"#FFFFFF",}}>
<path d="M 13 6 C 9.1482075 6 6 9.1482075 6 13 L 6 51 C 6 54.851793 9.1482075 58 13 58 L 51 58 C 54.851793 58 58 54.851793 58 51 L 58 13 C 58 9.1482075 54.851793 6 51 6 L 13 6 z M 13 8 L 51 8 C 53.768207 8 56 10.231793 56 13 L 56 51 C 56 53.768207 53.768207 56 51 56 L 13 56 C 10.231793 56 8 53.768207 8 51 L 8 13 C 8 10.231793 10.231793 8 13 8 z M 16 17 C 14.35503 17 13 18.35503 13 20 L 13 38 C 13 39.64497 14.35503 41 16 41 L 48 41 C 49.64497 41 51 39.64497 51 38 L 51 20 C 51 18.35503 49.64497 17 48 17 L 16 17 z M 16.414062 19 L 47.585938 19 L 38.410156 28.175781 A 1.0001 1.0001 0 0 0 38.179688 28.40625 L 34.828125 31.757812 C 33.2571 33.328837 30.7429 33.328837 29.171875 31.757812 L 25.824219 28.410156 A 1.0001 1.0001 0 0 0 25.59375 28.179688 L 16.414062 19 z M 15 20.414062 L 23.585938 29 L 15 37.585938 L 15 20.414062 z M 49 20.414062 L 49 37.585938 L 40.414062 29 L 49 20.414062 z M 25 30.414062 L 27.757812 33.171875 C 30.092789 35.50685 33.907211 35.50685 36.242188 33.171875 L 39 30.414062 L 47.585938 39 L 16.414062 39 L 25 30.414062 z M 12 48 C 11.448 48 11 48.448 11 49 L 11 51 C 11 51.552 11.448 52 12 52 C 12.552 52 13 51.552 13 51 L 13 49 C 13 48.448 12.552 48 12 48 z M 17 48 C 16.448 48 16 48.448 16 49 L 16 51 C 16 51.552 16.448 52 17 52 C 17.552 52 18 51.552 18 51 L 18 49 C 18 48.448 17.552 48 17 48 z M 22 48 C 21.448 48 21 48.448 21 49 L 21 51 C 21 51.552 21.448 52 22 52 C 22.552 52 23 51.552 23 51 L 23 49 C 23 48.448 22.552 48 22 48 z M 27 48 C 26.448 48 26 48.448 26 49 L 26 51 C 26 51.552 26.448 52 27 52 C 27.552 52 28 51.552 28 51 L 28 49 C 28 48.448 27.552 48 27 48 z M 32 48 C 31.448 48 31 48.448 31 49 L 31 51 C 31 51.552 31.448 52 32 52 C 32.552 52 33 51.552 33 51 L 33 49 C 33 48.448 32.552 48 32 48 z M 37 48 C 36.448 48 36 48.448 36 49 L 36 51 C 36 51.552 36.448 52 37 52 C 37.552 52 38 51.552 38 51 L 38 49 C 38 48.448 37.552 48 37 48 z M 42 48 C 41.448 48 41 48.448 41 49 L 41 51 C 41 51.552 41.448 52 42 52 C 42.552 52 43 51.552 43 51 L 43 49 C 43 48.448 42.552 48 42 48 z M 47 48 C 46.448 48 46 48.448 46 49 L 46 51 C 46 51.552 46.448 52 47 52 C 47.552 52 48 51.552 48 51 L 48 49 C 48 48.448 47.552 48 47 48 z M 52 48 C 51.448 48 51 48.448 51 49 L 51 51 C 51 51.552 51.448 52 52 52 C 52.552 52 53 51.552 53 51 L 53 49 C 53 48.448 52.552 48 52 48 z"></path>
</svg>
          </a>
        </div>
        <div className="w-full pb-2 text-center">
          <p className="text-sm text-gray-300 sm:ml-6 sm:mt-0 mt-4 text-center">
            © 2023 Compufest — Developed by
            <a
              href="/team"
              className="text-gray-400 ml-2"
              rel="noopener noreferrer"
            >
              @Technical Team
            </a>{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
