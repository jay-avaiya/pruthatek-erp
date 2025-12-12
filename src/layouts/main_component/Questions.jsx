import React from "react";

const Questions = () => {
  const questions = [
    {
      que: "What does Pruthatek do?",
      ans: "Pruthatek develops intelligent software solutions across healthcare, commerce, finance, and education sectors. We provide six specialized products designed to transform business operations and drive measurable growth for organizations of all sizes.",
    },
    {
      que: "What makes Pruthatek different?",
      ans: "Our solutions combine advanced technology with deep industry expertise, ensuring each product addresses specific sector challenges and regulatory requirements while delivering measurable operational improvements.",
    },
    {
      que: "How is pricing determined for your software solutions?",
      ans: "Pricing varies by product and is typically based on factors such as organizational size, feature requirements, number of users, and implementation complexity. We provide customized quotes following consultation to understand your specific needs.",
    },
    {
      que: "What is the typical implementation timeline?",
      ans: "Implementation timelines vary depending on the chosen solution and organizational complexity, typically ranging from a few weeks for standard implementations to several months for comprehensive multi-location deployments. We provide detailed project timelines during the planning phase.",
    },
  ];

  return (
    <div className="w-full h-fit font-inter text-[#333333] px-4 md:px-6 lg:px-12 xl:px-24">
      {/* title */}
      <div>
        <h3 className="text-2xl md:text-3xl lg:text-[40px] font-semibold">
          Frequently Asked Questions
        </h3>
      </div>

      {/* questions */}
      <div className="w-full max-w-[890px] mx-auto mt-24 flex flex-col gap-5 md:gap-8">
        {questions.map((que, index) => (
          <div key={index}>
            <h4 className="text-xl md:text-2xl font-semibold">{que.que}</h4>
            <p className="text-sm md:text-[16px] leading-[26px] mt-4">
              {que.ans}
            </p>
          </div>
        ))}

        <div className="flex flex-col items-center text-center gap-8 mt-16">
          <h3 className="text-xl md:text-[30px] font-bold text-[#282D30]">
            Are you looking For Paper less Solution for Hospital Records?
          </h3>
          <p className="text-[16px] md:text-lg font-medium leading-[30px] text-[#A1A3B2]">
            The illustration above is for a 1000-bedded hospital. Results and
            metrics may vary from hospital to hospital depending on their
            specific bed count, patient load, and operational processes.
          </p>

          <button className="w-[300px] bg-[#F19623] text-white py-3 px-12 rounded-[14px] text-[16px] font-bold cursor-pointer">
            Book a Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Questions;
