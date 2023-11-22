import React from "react";

const AboutUs = () => {
  return (
    <div>
      <div className="py-14 px-4 grid grid-cols-1 lg:grid-cols-2">
        <div className="px-5">
          <img src="static/team-small.gif" />
        </div>
        <div className=" mt-7">
          <h5 className="text-[#6B7280] font-sans font-bold">ABOUT</h5>
          <h1 className="my-10 text-[#2E67B2] font-sans text-[36px] font-bold">
            Meet our awesome team
          </h1>
          <p className="my-10 text-[#666666] font-sans text-[18px]">
            Some say skill is the most important quality one has when joining a
            company, but in Comlogik, we consider character to be just as
            important. Put together superb talent and outstanding character and
            you’ve got a winner!
            <br></br>
            <br></br>
            Our values is the heart of Comlogik. From here stems the quality of
            our performance and work today, and in the future.
          </p>
          <div className="mt-5">
            <a className="text-white bg-[#4983D0] font-sans text-[14px] py-4 px-10 rounded font-bold">
              MEET OUR TEAM
            </a>
          </div>
        </div>
      </div>

      <div className=" py-16 bg-gradient-to-t from-cyan-500 to-blue-500">
        <div className="px-8 text-center">
          <div className="text-3xl font-sans text-white font-bold">
            Let's grab a coffee together
          </div>
          <div>
            <p className="mt-8 text-white font-sans text-[18px]">
              Whether you’re tired of looking for the right experts for the job
              or simply wanting to know more about our company and how we are
              helping companies like you grow.
            </p>
          </div>
          <div>
            <div className="grid md:grid-cols-2 gap-10 mt-10">
              <div>
                <a className="text-[#019CF8] bg-white rounded px-8 py-4 font-sans text-[14px] font-bold">
                  REQUEST FOR A DEMO
                </a>
              </div>
              <div>
                <a className="outline outline-2 text-white font-sans text-[14px] font-bold px-10 py-3 rounded hover:bg-white hover:text-[#019CF8]">
                  CONTACT US
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <iframe
          src="https://maps.google.com/maps?q=comlogik%20business%20systems%20inc.&t=&z=15&ie=UTF8&iwloc=&output=embed"
          name="myiFrame"
          height="400"
          width="100%"
        ></iframe>
      </div>
    </div>
  );
};

export default AboutUs;
