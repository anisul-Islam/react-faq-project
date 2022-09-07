import React from 'react';
import { faqsData } from './data';
import FAQ from './FAQ';
const FAQS = () => {
  return (
    <div className="container">
      <h2 className="title">FAQS</h2>
      <section className="faqs">
        {faqsData.map((faq) => (
          <FAQ key={faq.id} {...faq} />
        ))}
      </section>
    </div>
  );
};

export default FAQS;
