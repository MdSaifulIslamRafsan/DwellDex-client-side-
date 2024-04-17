import { useState } from "react";

const FAQ = () => {
  // add your array of object data
  const array = [
    {
      title: "Why should I refer to a MyHome salesperson?",
      description:
        "A MyHome salesperson is more than just a “sales person.” They act on your behalf as your agent, providing you with advice and guidance and doing a job – helping you buy or sell a home. While it is true they get paid for what they do, so do other professions that provide advice, guidance.",
    },
    {
      title: "Should I talk with a bank before looking at homes?",
      description:
        "The answer to the question is YES! There are tons of reasons why you should talk with a bank and get pre-approved before looking at homes. First and foremost, talking with a bank before looking at homes can help you understand exactly how much you can afford. There is no reason to look at homes that are listed for $250,000 if you can only afford up to $200,000.",
    },
    {
      title: "Should I buy or continue to rent?",
      description:
        "Buying a home can be a very solid investment. This being said, renting can also be a better option for some, depending on the circumstances. The current interest rates are incredible. A 30-year FHA mortgage can be locked in at a rate of around 3.5%. Since the interest rates are so low, it actually can be cheaper to pay a mortgage right now than paying rent.",
    },
    {
      title: "Can I find a rent-to-own property?",
      description:
        "Of course you can, but the probability isn’t very high. The same can be said about a rent-to-own property. A common question from home buyers is whether rent-to-owns exist or whether an owner would consider that option. They are out there, but there are somethings that you need to know before agreeing to a rent-to-own.",
    },
  ];

  // toggle state and function
  const [isOpen, setIsOpen] = useState(null);
  const handleToggle = (idx) =>
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
  return (
    <div className="mt-10 lg:mt-0 max-w-[1440px] mx-auto w-11/12 lg:w-10/12">
      <h3
        data-aos="fade-down"
        data-aos-duration="500"
        data-aos-easing="linear"
        className="text-xl text-center sm:text-4xl leading-normal font-extrabold tracking-tight "
      >
        Frequently Asked{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-400 font-black  gap-1">
          Questions
        </span>
      </h3>
      <p
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-easing="linear"
        className="lg:w-2/3 text-center mx-auto mt-5"
      >
        Find quick answers to common queries in our FAQ section. Simplify your
        experience by exploring our comprehensive list of frequently asked
        questions.
      </p>

      <div className="flex justify-center">
        <div className=" max-w-[550px] rounded-lg py-10 space-y-6 cursor-pointer">
          {/* maping each accordion  */}
          {array.map((arr, idx) => (
            <div
              key={idx}
              onClick={() => handleToggle(idx)}
              className="flex items-center"
            >
              {/* the index div  */}
              <div className="w-16 h-16 bg-[#355E72] flex justify-center items-center text-white text-2xl font-semibold rounded-xl font-sans">
                <span>0{idx + 1}</span>
              </div>
              <div className="w-10 h-[2px] bg-[#355E72] relative">
                <span className="w-3 h-3 bg-white absolute -left-2 -top-[5px] z-40 rounded-full border-2 border-[#355E72]"></span>
                <span className="bg-[#355E72] w-10 h-1"></span>
              </div>
              {/* main accordion div  */}
              <div>
                <div className="max-w-[450px] bg-sky-50 shadow-md border-t-[12px] p-3 border-[#355E72] relative">
                  <span className="h-0 w-0 border-b-[40px] border-b-transparent border-r-[40px] border-r-[#355E72] absolute top-0 right-0"></span>
                  <h1 className="text-[#355E72] text-xl text-center">
                    {arr?.title}
                  </h1>
                </div>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600  ${
                    isOpen === idx
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className=" max-w-[450px] rounded-br-xl rounded-bl-xl bg-[#355E72] text-white p-6 text-center text-sm">
                      {arr?.description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
