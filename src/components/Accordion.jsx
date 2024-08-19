import FAQ from "./FAQ";

const QnA = [
  {
    id: 1,
    question: "What materials are your bags made from?",
    answer:
      "Our bags are crafted from eco-friendly materials such as organic cotton, recycled polyester, and plant-based leather alternatives.",
  },
  {
    id: 2,
    question: "How do I care for my eco-friendly bag?",
    answer:
      "We recommend spot cleaning with mild soap and water. Avoid using harsh chemicals to maintain the integrity of the sustainable materials.",
  },
  {
    id: 3,
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship worldwide! Shipping costs and delivery times vary based on your location.",
  },
  {
    id: 4,
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for unused items. If you're not satisfied, you can return your purchase for a full refund or exchange.",
  },
];

const Accordion = () => {
  return (
    <div className="container mt-16 flex flex-col gap-4">
      <h2 className="text-center font-lora-cyrillic text-4xl font-bold md:text-5xl">
        <span className="text-primary">Frequently</span> asked questions
      </h2>
      <p className="py-4 text-end">
        Want to know more?{" "}
        <span className="font-bold text-primary underline">
          Email us at renewcarry@gmail.com
        </span>
      </p>
      {QnA.map((qna) => (
        <FAQ key={qna.id} question={qna.question} answer={qna.answer} />
      ))}
    </div>
  );
};

export default Accordion;
