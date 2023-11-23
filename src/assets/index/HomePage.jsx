import NavBar from "./NavBar";
import Typed from "react-typed";

const advantages = [
  {
    icon: "static/advantage-1.svg",
    number: "1",
    title: "Over 20 years of providing quality healthcare software",
    description:
      "With more than 20 years of providing the best quality software for the healthcare industry.",
  },
  {
    icon: "static/advantage-2.svg",
    number: "2",
    title: "Widely used by 5000+ Doctors, Hospitals and Healthcare Facilities",
    description:
      "Used by more than 5000 Doctors and Medical Practitioners with hundreds of hospital and healthcare facilities installations nationwide and growing.",
  },
  {
    icon: "static/advantage-3.svg",
    number: "3",
    title: "DOH & PhilHealth Certified Provider",
    description:
      "Comlogik is the 1st Independent Software Provider to be validated by DOH and the most reliable eClaims Software Provider Certified by PhilHealth.",
  },
  {
    icon: "static/advantage-4.svg",
    number: "4",
    title: "24/7 Live Support",
    description:
      "By constantly staying in contact with our clients through our live support app, we can answer questions and address problems easily. Customer comes first in everything we do and offer the next level service to create a seamless and the best experience possible.",
  },
  {
    icon: "static/advantage-5.svg",
    number: "5",
    title: "Tailor-fitted Implementation",
    description:
      "Personalized implementation according to your own phasing and environment means a higher success of adaptability and a more relaxed way in learning a new system.",
  },
  {
    icon: "static/advantage-6.svg",
    number: "6",
    title: "Fast Transition",
    description:
      "With a well-developed implementation process combined with our highly trained implementation team that will help you navigate the complex process of transitioning to a new system swiftly and with ease.",
  },
  {
    icon: "static/advantage-7.svg",
    number: "7",
    title: "Money Back Guarantee",
    description:
      "We believe in our products that’s why we are very confident and we can back this up by offering a ‘Money Back Guarantee’ Agreement which no provider in the industry can match.",
  },
  {
    icon: "static/advantage-8.svg",
    number: "8",
    title: "Lifetime Software Warranty",
    description:
      "Lifetime Software Warranty enables you to use the software as long as you want and not worry of having to pay extra for maintenance or additional cost on support and after sales services. The longer you use our software the more it pays off.",
  },
  {
    icon: "static/advantage-9.svg",
    number: "9",
    title: "Backwards Compatibility",
    description:
      "By allowing you to make use of your existing computers and OS but still interoperable with the latest increases the value of your investment since you don’t need to purchase additional units and reconfigure everything just to run the new system.",
  },
];

const HomePage = () => {
  return (
    <div className="">
      <div className=" bg-no-repeat bg-left-top bg-[url('/static/logo-bg.svg')]">
        <div className="flex py-15 h-auto bg-no-repeat bg-right-top bg-[url('/static/landing-bg.svg')]">
          <NavBar />

          <div className="grid md:grid-cols-2 justify-center  pt-52 pb-44 max-w-[1200px] m-auto px-5 gap-x-5">
            <div>
              <h1 className="text-4xl text-[#2E67B2] font-bold md:text-5xl">
                Beyond Just Information
              </h1>
              <p className="py-10 text-[#666666] font-serif">
                Comlogik is the single source solution provider to all your
                healthcare
                <span className="block"> information technology needs.</span>
              </p>
              <div className=" md:flex-col lg:flex-row gap-5 justify-center">
                <div>
                  <a className=" w-full h-12  bg-[#cc3396]  rounded-lg focus:shadow-outline hover:bg-[#d865b0] px-8 py-3">
                    <Typed
                      strings={[
                        "REQUEST A QUOTE",
                        "REQUEST A DEMO",
                        "REQUEST A BROCHURE",
                      ]}
                      typeSpeed={120}
                      backSpeed={140}
                      className="text-white"
                      loop
                    />
                  </a>
                </div>
                <div className="mt-10">
                  <a className="w-full h-12 text-[#cc3396] transition-colors duration-150 border border-[#cc3396]  rounded-lg focus:shadow-outline hover:bg-[#cc3396] hover:text-indigo-100 px-8 py-3">
                    COMLOGIK ECOSYSTEM
                  </a>
                </div>
              </div>
            </div>

            <img
              className=""
              src="static/landing-img-small.gif"
              alt="Comlogik image"
            />
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#89CFF0] to-mycolor flex justify-center py-20 text-center sm:text-center  px-5">
        <div className="px-16 ">
          <h2 className="text-[#2E67B2] font-bold text-[32px]">
            We’ve helped hundreds of healthcare institutions, thousands of
            physicians and medical workers accelerate their growth by providing
            them with the right tools and knowledge.
          </h2>
        </div>
      </div>
      <div className="flex justify-center py-10 flex-wrap gap-10">
        <div>
          <img src="static/clients/image6.png" alt="Comlogik image" />
        </div>
        <div>
          <img src="static/clients/image9.png" alt="Comlogik image" />
        </div>
        <div>
          <img src="static/clients/image7.png" alt="Comlogik image" />
        </div>
        <div>
          <img src="static/clients/image15.png" alt="Comlogik image" />
        </div>
        <div>
          <img src="static/clients/image13.png" alt="Comlogik image" />
        </div>
      </div>
      <div>
        <div className="flex justify-center py-10 gap-10 flex-wrap">
          <div>
            <img src="static/clients/image14.png" alt="Comlogik image" />
          </div>
          <div>
            <img src="static/clients/image17.jpg" alt="Comlogik image" />
          </div>
          <div>
            <img src="static/clients/image12.png" alt="Comlogik image" />
          </div>
          <div>
            <img src="static/clients/image10.png" alt="Comlogik image" />
          </div>
        </div>
      </div>
      <div className="flex justify-center py-10 mx-10 flex-wrap">
        <div className="">
          <img src="static/clients/image16.png" alt="Comlogik image" />
        </div>
      </div>
      <div className=" h-40 flex justify-center">
        <button className=" w-70 h-12 px-6 text-indigo-100 transition-colors duration-150 bg-blue-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
          REQUEST FOR CLIENTS LIST
        </button>
      </div>
      <div className="bg-mycolor flex justify-center pt-14 text-center sm:text-center pb-10">
        <div className="px-5">
          <h2 className="text-[#2E67B2] font-bold text-[27px] mb-7">
            Comlogik has the solutions to help you respond to COVID 19 and
            operate your healthcare facility safely and smartly.
          </h2>
          <div>
            <a className="text-white bg-[#4983D0] px-7 py-3 rounded">SEE HOW</a>
          </div>
        </div>
      </div>
      <div className="max-w-[1240px] m-auto py-28">
        <div className="text-center sm:text-center mb-20 px-3">
          <h5 className="text-[14px] text-[#6b7280] pb-5 font-bold">
            ADVANTAGES
          </h5>
          <h1 className="text-[36px] text-[#2E67B2] font-bold pb-10">
            9 reasons why we’re the right healthcare software provider for you
          </h1>
          <p className="text-[#666666] font-sans text-[16px]">
            Unbeatable advantages and value over any other provider
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5 px-5">
          {advantages.map((advantage, i) => (
            <div className="flex gap-5  items-start" key={i}>
              <img
                className="pl-10 w-max flex"
                src={advantage.icon}
                alt="Comlogik image"
              />

              <div className="relative">
                <span className="grid md:grid translate- h-48 absolute left-[30%]  text-red-100 text-[150px] -z-[1000] ">
                  {advantage.number}
                </span>
                <h3 className="text-3xl text-[#2E67B2] font-bold">
                  {advantage.title}
                </h3>
                <p className="mt-5 font-serif text-[16px] text-[#666666]">
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
