import React from "react";

function Faq() {
  return (
    <div className="faq">
      <div className="faq-container">
        <h1>FREQUENTLY ASKED QUESTIONS</h1>
        <p>
          Quick answers to questions you may have. Can't find what you're
          looking for?
        </p>
        <p className="blue-text">Check out our full documentation</p>
        <div className="faq-text">
          <div className="question">
            {" "}
            <h4>How much does it cost to set up a store?</h4>
          </div>
          <div className="plus">+</div>
        </div>
        <div className="faq-text">
          <div className="question">
            {" "}
            <h4>What kind of digital products can I sell?</h4>
          </div>
          <div className="plus">+</div>
        </div>
        <div className="faq-text-answer">
          <div className="faq-text-answer-con">
            <div className="question">
              <h4>Do I need technical skills to use the platform?</h4>
            </div>
            <div className="plus">-</div>
          </div>
          <hr />
          <div className="answer">
            No, not at all! Our platform is designed with user-friendliness in
            mind. You can easily navigate and set up your store without any
            technical expertose.Its as simple as a few clicks to get started.
          </div>
        </div>
        <div className="faq-text">
          <div className="question">
            {" "}
            <h4>Is there a limit to the number pf products I can list?</h4>
          </div>
          <div className="plus">+</div>
        </div>
        <div className="faq-text">
          <div className="question">
            <h4>How do I receive payments for my sales?</h4>
          </div>
          <div className="plus">+</div>
        </div>
        <div className="faq-text">
          <div className="question">
            <h4>Can I sell internationally on this market place?</h4>
          </div>
          <div className="plus">+</div>
        </div>
        <div className="faq-text">
          <div className="question">
            <h4>What support and resources are available for sellers?</h4>
          </div>
          <div className="plus">+</div>
        </div>
        <div className="faq-text">
          <div className="question">
            <h4>Is there a review process for uploaded products?</h4>
          </div>
          <div className="plus">+</div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
