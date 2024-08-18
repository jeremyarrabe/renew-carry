"use client";

import { useState } from "react";

const FAQList = () => {
  const [open, isOpen] = useState(0);

  const faq = [
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

  return <div className="container">test</div>;
};

export default FAQList;
