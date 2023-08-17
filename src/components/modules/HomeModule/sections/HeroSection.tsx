export const HeroSection: React.FC = () => (
  <div className="px-5 sm:px-10 pt-16 sm:pt-20 w-full h-[70vh]">
    <div className="flex flex-col sm:flex-row h-[70vh] sm:mt-6">
      <div className="flex flex-col sm:flex-row justify-between gap-5 sm:gap-10 m-4">
        <div className="flex flex-col gap-5 sm:gap-10 sm:ml-10 w-full sm:w-[60%]">
          <span className="tracking-[0.5em] text-3xl sm:text-5xl font-bold font-Sarmandy glow-text">
            WHAT IS ICEE
          </span>
          <p className="text-base sm:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <img src="/herologo.svg" className="w-80 h-40 sm:h-60 md:mt-24" alt="Logo" />
      </div>
    </div>
  </div>
);
