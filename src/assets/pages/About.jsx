import NavBar from "../index/NavBar";

const About = () => {
  return (
    <div>
      <NavBar />
      <div className="pb-5">
        <div className="px-5">
          <img src="static/logo-bg.svg" />
          <div>
            <div>
              <img src="static/about-hero.gif" />
            </div>
            <div className="pl-5 mt-10">
              <h5 className="text-[#687280] font-bold text-[14px]">ABOUT US</h5>
              <h2 className="my-10 text-[#2E67B2] text-[27px] font-bold">
                We are on a mission to help you solve your operational problems
                by delivering powerful healthcare solutions thats affordable.
              </h2>
              <p className="mt-3 text-[#666666] text-[16px] font-sans">
                Since 1999, Comlogik has been existing with the primary goal of
                helping healthcare institutions and other medical businesses
                eliminate redundant processes that are costly and time
                consuming. To do away with outdated practices and adopt the best
                processes applied by successful healthcare companies and focus
                on what is crucial - managing and growing your business.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-gray-300">
        <div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
