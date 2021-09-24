import React, { useState } from 'react';
import './faq.css';
import faqimg from './faqimg/faq.png'
import professor from './faqimg/professor.png'
import hide_professor from './faqimg/hide_professor.jpeg'
import show_professor from './faqimg/show_professor.jpeg'
const bgCirclePos = [
  ["10%", "30%"],
  ["80%", "20%"],
  ["60%", "20%"],
  ["80%", "20%"],
  ["20%", "40%"],
  ["40%", "40%"],
  ["90%", "40%"],
  ["47.5%", "14%"],
  ["80%", "50%"],
  ["25%", "60%"],
  ["40%", "50%"],
  ["80%", "70%"],
  ["29%", "80%"],
  ["60%", "70%"],
  ["57%", "80%"],
  ["90%", "85%"],
  ["10%", "70%"],
  ["5%", "80%"]
]
const faqQns = [
  {
    id: 1,
    q: "How to install remove.bg for Windows/Mac/Linux",
    a: ["Remove.bg for Windows/Mac/Linux brings bulk image background removal right to your desktop.", "To install it, follow these steps :", "Windows Installation Instructions", "Download and run remove.bg for Windows.", " After a few seconds remove.bg for Windows will be installed and automatically started.", " The installation also adds shortcuts to your Desktop and Start Menu.", " To set up your API key and use remove.bg for Windows, follow the instructions in the application.", "Mac Installation Instructions", " Download and run remove.bg for Mac.", "In the Installation window, drag the remove.bg icon to your Applications folder.", "To complete the setup, follow the instructions shown in the installation window.", "To set up your API key and use remove.bg for Mac, follow the instructions in the application."]
  },
  {
    id: 2,
    q: "How to install remove.bg for Windows/Mac/Linux",
    q: "How to install remove.bg for Windows/Mac/Linux",
    a: ["Remove.bg for Windows/Mac/Linux brings bulk image background removal right to your desktop.", "To install it, follow these steps : Windows Installation Instructions Download and run remove.bg for Windows.", " After a few seconds remove.bg for Windows will be installed and automatically started.", " The installation also adds shortcuts to your Desktop and Start Menu.", " To set up your API key and use remove.bg for Windows, follow the instructions in the application."]
  },
  {
    id: 2,
    q: "How to install remove.bg for Windows/Mac/Linux",
    q: "How to install remove.bg for Windows/Mac/Linux",
    a: ["Remove.bg for Windows/Mac/Linux brings bulk image background removal right to your desktop.", "To install it, follow these steps : Windows Installation Instructions Download and run remove.bg for Windows.", " After a few seconds remove.bg for Windows will be installed and automatically started.", " The installation also adds shortcuts to your Desktop and Start Menu.", " To set up your API key and use remove.bg for Windows, follow the instructions in the application."]
  },
  {
    id: 3,
    q: "How to install remove.bg for Windows/Mac/Linux",
    q: "How to install remove.bg for Windows/Mac/Linux",
    a: ["Remove.bg for Windows/Mac/Linux brings bulk image background removal right to your desktop.", "To install it, follow these steps : Windows Installation Instructions Download and run remove.bg for Windows.", " After a few seconds remove.bg for Windows will be installed and automatically started.", " The installation also adds shortcuts to your Desktop and Start Menu.", " To set up your API key and use remove.bg for Windows, follow the instructions in the application."]
  },
  {
    id: 4,
    q: "How to install remove.bg for Windows/Mac/Linux",
    q: "How to install remove.bg for Windows/Mac/Linux",
    a: ["Remove.bg for Windows/Mac/Linux brings bulk image background removal right to your desktop.", "To install it, follow these steps : Windows Installation Instructions Download and run remove.bg for Windows.", " After a few seconds remove.bg for Windows will be installed and automatically started.", " The installation also adds shortcuts to your Desktop and Start Menu.", " To set up your API key and use remove.bg for Windows, follow the instructions in the application."]
  },
  {
    id: 5,
    q: "How to install remove.bg for Windows/Mac/Linux",
    q: "How to install remove.bg for Windows/Mac/Linux",
    a: ["Remove.bg for Windows/Mac/Linux brings bulk image background removal right to your desktop.", "To install it, follow these steps : Windows Installation Instructions Download and run remove.bg for Windows.", " After a few seconds remove.bg for Windows will be installed and automatically started.", " The installation also adds shortcuts to your Desktop and Start Menu.", " To set up your API key and use remove.bg for Windows, follow the instructions in the application."]
  },
  {
    id: 6,
    q: "How to install remove.bg for Windows/Mac/Linux",
    q: "How to install remove.bg for Windows/Mac/Linux",
    a: ["Remove.bg for Windows/Mac/Linux brings bulk image background removal right to your desktop.", "To install it, follow these steps : Windows Installation Instructions Download and run remove.bg for Windows.", " After a few seconds remove.bg for Windows will be installed and automatically started.", " The installation also adds shortcuts to your Desktop and Start Menu.", " To set up your API key and use remove.bg for Windows, follow the instructions in the application."]
  },
  {
    id: 7,
    q: "How to install remove.bg for Windows/Mac/Linux",
    q: "How to install remove.bg for Windows/Mac/Linux",
    a: ["Remove.bg for Windows/Mac/Linux brings bulk image background removal right to your desktop.", "To install it, follow these steps : Windows Installation Instructions Download and run remove.bg for Windows.", " After a few seconds remove.bg for Windows will be installed and automatically started.", " The installation also adds shortcuts to your Desktop and Start Menu.", " To set up your API key and use remove.bg for Windows, follow the instructions in the application."]
  },
]
const Faq = () => {

  const [qid, setQid] = useState(0);
  const [ansFlag, setAnsFlag] = useState(true);
  const [proFlag, setProFlag] = useState(true);
  return (
    <div className="faq_parent">
      {bgCirclePos.map((obj, i) => {
        return (
          <div className="faq_bg_circle" style={{ left: obj[0], top: obj[1] }}></div>
        )
      })}
      <div className="faq_blur_bg"></div>
      <div className="faq_me">
        <div className="faq_heading">
          <h1> FAQs </h1>
        </div>
        <div className="faq_container">
          <div className="faq_qns">
            {faqQns.map((obj, i) => {
              return (
                <div className="faq_q" onClick={() => { setQid(i); setAnsFlag(true) }}>
                  {obj.q}
                </div>
              )
            })}
          </div>
          <div className="faq_not_qns">
            <img src={faqimg} alt="" />
          </div>
        </div>
      </div>
      <div className="faq_ans_screen" style={ansFlag ? { transform: "translateX(0%)", opacity: 1 } : { transform: "translateX(100%)", opacity: 0 }}>
        <div className="faq_asn_screen_close" onClick={() => { setAnsFlag(false) }} style={{ color: "#df4040", fontSize: "45px", cursor: "pointer", position: "absolute", top: "10px", right: "20px", zIndex: "111" }}> &times; </div>
        <div className="faq_ans_board">
          <div className="board_question">
            {faqQns[qid].q + " ?"}
          </div>
          <div className="board_answer">
            {faqQns[qid].a.map((ans, i) => {
              return (<p>{ans}</p>)
            })}
          </div>
        </div>
        <div className="faq_ans_professor">
          <img src={professor} alt="professor" style={proFlag ? { opacity: 1 } : { opacity: 0 }} />
          <img src={proFlag ? hide_professor : show_professor} alt=""
            onClick={() => { setProFlag(!proFlag) }}
            title={proFlag ? "Hide Professor" : "Show professor"}
            className="professor_toggle"
            style={{ position: "absolute", width: "30px", height: "250px" }}
          />

        </div>
      </div>
    </div>
  );
}

export default Faq;