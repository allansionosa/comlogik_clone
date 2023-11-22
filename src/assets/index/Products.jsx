import { useState } from "react";
import { Container } from "../Container";

const products = [
  {
    id: 1,
    icons: "static/product-1.png",
    title: "Hospital Information & Management System",
    description:
      "HIMS™ is a comprehensive, fully integrated, yet easy to use hospital information system for all hospital levels. HIMS™ is the first DOH Validated System and PhilHealth Certified that can be customized and can adapt to various hospital setup.",
  },
  {
    id: 2,
    icons: "static/product-2.png",
    title: "Clinic Information & Management System",
    description:
      "CIMS™ is an all-in-one clinic information system that is both a turnkey and customizable solution for your clinic or diagnostic center. CIMS™ guarantees billing efficiency while storing real- time patient data resulting to a more improved patient and users experience.",
  },
  {
    id: 3,
    icons: "static/product-3.png",
    title: "Claims Assure™",
    description:
      "Claims Assure™ is a PhilHealth certified electronic claims transmittal software that enables any healthcare accredited institution to send paperless patient claims. It allows users to manage and track receivables while monitoring status of claims all in a single window.",
  },
  {
    id: 4,
    icons: "static/product-4.png",
    title: "Comlogik EMR™",
    description:
      "Comlogik EMR™ is the industry leading solution that meets the stringent requirements of the Department of Health and likewise holds the distinction of being the FIRST DOH VALIDATED SOFTWARE. Be compliant and get expert advice from our team of experts.",
  },
  {
    id: 5,
    icons: "static/product-5.png",
    title: "WorkBenchMD™",
    description:
      "WorkBenchMD™ is a revolutionary way of managing your clinic and gets you ready before your patient enters your door. From reception, it allows you to view patients records, history, medical images and results, appointments, create billing, SOAP and more.",
  },
  {
    id: 6,
    icons: "static/product-6.png",
    title: "Connect™",
    description:
      "Comlogik Connect™ is designed to run on a mobile device which remotely access key information from HIMS™. If you are a patient, doctor or owner of the hospital, Connect™ allows each one to do specific task without the hassle.",
  },
  {
    id: 7,
    icons: "static/product-7.png",
    title: "Paymanager™",
    description:
      "Paymanager™ is your go to application when you want an end to end payroll system. Paymanager™ lets you manage unlimited schedules with multi- scheduling function, accommodate leave requests or generate needed reports in compliance with all government requirements.",
  },
  {
    id: 8,
    icons: "static/product-8.png",
    title: "HRIS WorkForce™",
    description:
      "HRIS WorkForce™ provides you a modern way of managing your people, from the way you recruit, onboard and develop talent to the way you retain them. Be the employer you want to stay and grow with and foster a culture of high performance and career mobility through ongoing, consistent feedback, reviews, rewards and recognition.",
  },
  {
    id: 9,
    icons: "static/product-9.png",
    title: "AnywhereMed Telemedicine",
    description:
      "AnywhereMed is a fast and convenient way for patients to call and get in touch with a network of doctors affiliated to a hospital, explain your symptoms and get immediate medical advice before actually going to the hospital. This Telemedicine web-based application is developed to ensure that patient concerns are met especially in difficult situations such as inability to go to the hospital due to scheduling, distance, or critical conditions like the COVID-19 epidemic.",
  },
];

const Products = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const handleClick = (id) => {
    const selected = products.find((product) => product.id === id);
    setSelectedIcon(selected);
  };
  return (
    <div className="bg-mycolor px-5 py-10 ">
      <Container>
        <div className="grid md:grid-cols-2 p-5 gap-5">
          <div>
            <div>
              <h5 className="pt-10 text-[#6b7280] font-bold">PRODUCTS</h5>
              <h1 className="my-10 text-4xl font-bold text-[#2E67B2]">
                Software that really gets the job done
              </h1>
              <p className="my-10 font-serif text-[16px] text-[#666666]">
                Our well-thought-out software solutions give you the tools to
                get higher patient satisfaction and greater employee
                productivity, in a way that will keep drive profitability.
              </p>
            </div>
            <div>
              <ul className="grid grid-cols-2 gap-5">
                {products.map((product) => (
                  // eslint-disable-next-line react/jsx-key
                  <li className=" bg-white h-[70px] w-full p-2.5 rounded flex justify-items-center">
                    <img
                      key={product.id}
                      src={product.icons}
                      alt={`Product ${product.id}`}
                      onClick={() => handleClick(product.id)}
                      className="h-full w-full object-contain"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white mt-5 ">
            {selectedIcon ? null : (
              <div>
                <div className="flex justify-items-center">
                  <iframe
                    src="https://www.youtube.com/embed/EmaCoql7iWg"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    height="400"
                    width="100%"
                    allowFullScreen
                  />
                </div>
                <div className="px-5 py-10">
                  <p className="my-8 font-sans text-[#666666] text-[18px]">
                    Our comprehensive suite of solutions and services provides
                    your organization with the integrated clinical, financial
                    and operational tools you need to provide better outcomes
                    across your entire system
                  </p>
                  <div>
                    <a className="text-white bg-[#4983D0] font-sans text-[14px] py-4 px-10 rounded font-bold">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            )}

            {selectedIcon && (
              <ul>
                <li>
                  <div className="flex justify-items-center h-[300px]">
                    <img
                      className=" h-full w-full object-contain"
                      src={selectedIcon.icons}
                      alt={`Product ${selectedIcon.id}`}
                    />
                  </div>
                  <div className="px-5 py-10">
                    <h4 className="text-[#2E67B2] font-bold font-sans text-2xl">
                      {selectedIcon.title}
                    </h4>
                    <p className="my-8 font-sans text-[#666666] text-[18px]">
                      {selectedIcon.description}
                    </p>
                    <div>
                      <a className="text-white bg-[#4983D0] font-sans text-[14px] py-4 px-10 rounded font-bold">
                        Learn More
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Products;
