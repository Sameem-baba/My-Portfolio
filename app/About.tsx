export default function About() {
  return (
    <div id="about" className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between w-full h-full py-24 px-8 gap-24">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold">
            Who Am{" "}
            <span className="relative whitespace-nowrap text-primary">I</span>?
          </h1>
          <p className="text-xl mt-1">
            Hello, Im Sameem. I am 16 years old, 3rd year high school student, I
            have been dealing with software for about 2 years. I started with
            Javascript, developed with Basic Games and made my biggest
            improvement with the latest NFT Project. Since then, software has
            been more of a hobby for me than a dream, I spent days developing my
            hobby, I tried to improve my software knowledge for at least 6 hours
            a day in 1 year, finally here I am.
            {/* <i className="fa fa-heart" /> */}
          </p>
        </div>
        <div className="relative flex-shrink-0 order-first md:order-last">
          <img
            src="/me.jpg"
            style={{ zIndex: 1 }}
            className="relative shadow-xl z-1 w-full lg:w-64 h-full lg:h-64 rounded-full lg:rounded-lg"
          />
          <div className="-right-3 top-3 absolute w-full h-full border-4 rounded-full lg:rounded-lg border-primary bg-gradient-to-t from-primary" />
        </div>
      </div>
    </div>
  );
}
