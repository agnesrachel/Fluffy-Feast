import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: "What is Food Therapy for pets?",
      answer: "Food Therapy is a holistic approach to pet nutrition that uses specific ingredients and formulations to support various health conditions. Our therapeutic diets are specially designed to help manage conditions like kidney disease, heart problems, and skin issues."
    },
    {
      question: "How do I choose the right therapeutic food for my pet?",
      answer: "We recommend consulting with your veterinarian to determine the best therapeutic diet for your pet's specific condition. They can help assess your pet's needs and recommend the appropriate food therapy option from our range."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we offer international shipping to select countries. Shipping rates and delivery times vary by location. Please check our shipping policy for more details."
    },
    {
      question: "What is your return policy?",
      answer: "We accept returns within 30 days of purchase for unopened products in their original packaging. For food safety reasons, we cannot accept returns on opened food products."
    },
    {
      question: "Are your products veterinarian-approved?",
      answer: "Yes, all our therapeutic food products are developed in consultation with veterinary nutritionists and are backed by scientific research."
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h1>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}