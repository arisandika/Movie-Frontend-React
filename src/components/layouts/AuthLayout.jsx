const AuthLayout = ({ title, children }) => (
  <section className="relative overflow-hidden">
    <img
      src="/assets/images/background/netflix.png"
      alt="Background"
      className="object-cover w-full min-h-screen brightness-50"
    />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100%] md:w-[32rem] px-4 text-white">
      <div className="w-full space-y-8">
        <div className="flex items-center justify-center w-full gap-2 mb-24 md:mb-10">
          <div className="w-8 h-8">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              className="w-8 h-8"
            >
              <path
                d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-2xl font-semibold text-white">Premiere</span>
        </div>
        <h1 className="text-2xl font-bold text-white">{title}</h1>
        {children}
      </div>
    </div>
  </section>
);

export default AuthLayout;
