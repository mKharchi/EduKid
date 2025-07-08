import React, { useState } from 'react';
import { ChevronDown, ChevronUp , MinusCircle } from 'lucide-react';

const questions = [
  {
    question: "What is happening to round out the weekend of celebrations?",
    answer:
      "To close the weekend in style, we're hosting a community picnic and live music event on Sunday evening. It's the perfect way to relax, enjoy good food, and celebrate together.",
  },
  {
    question: "What can attendees expect at the final event?",
    answer:
      "Expect live performances by local bands, food trucks offering a variety of delicious meals, games for all ages, and a fireworks display to end the evening.",
  },
  {
    question: "Who is invited to the celebration?",
    answer:
      "Everyone is welcome! Whether you're a local resident, a visitor, or part of the organizing team — this event is open to all members of the community.",
  },
  {
    question: "Where is the closing event taking place?",
    answer:
      "The event will be held at Riverside Park, starting at 5:00 PM on Sunday. Look for signs near the main stage area.",
  },
];

const QASection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      <div className="space-y-4 w-full">
        {questions.map((item, index) => (
          <div key={index} className="w-full rounded-lg">
            <button
              onClick={() => toggle(index)}
              className={`flex justify-between   rounded-xl  border-gray-200 items-center w-full ${ openIndex === index ? "bg-secondary p-6 text-white font-semibold   " : "p-5 border"} font-medium text-left`}
            >
              {item.question}
              {openIndex === index ? <MinusCircle /> : <ChevronDown />}
            </button>
            {openIndex === index && (
              <div className="p-4 mx-auto  pb-4 w-[96%] border border-gray-200 text-gray-700">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};


const FAQ = () => {
    return (
        <div className='w-full my-4 h-[60vh] flex flex-col xl:flex-row-reverse justify-start items-center p-4 py-5 bg-white gap-5 sm:px-20'>
            <div className='w-full hidden xl:flex justify-center items-center'>
                <img src="/faq.png" className='object-fill w-full h-full' width={512} height={512} alt="" />
            </div>
            <div className='w-full flex flex-col h-full justify-center items-start gap-6'>
                <h1 className='w-full text-left  font-bold text-3xl '>Know more about EduKid</h1>
                <QASection />
            </div>
        </div>
    )
}

export default FAQ
