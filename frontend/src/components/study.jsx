import React from "react";

const StudyTips = () => {
  const tips = [
    {
      title: "Schedule Study Time",
      icon: "📅",
      description:
        "Review your calendar and schedule time to study throughout the week. Schedule enough time to cover all classes. Stick to the schedule! If something urgent comes up, reschedule your study time.",
    },
    {
      title: "Use Subject Blocking",
      icon: "⏰",
      description:
        "When scheduling your study time, block subjects into smaller blocks. Instead of studying one subject for 3 hours straight, do 3 different subjects for 1 hour each. This will help keep your mind engaged. Repeat throughout the week.",
    },
    {
      title: "Switch It Up",
      icon: "📝",
      description:
        "Use different studying techniques to keep yourself interested. Read, watch videos, review notes, create and use flash cards, or find a study buddy to quiz and have them quiz you.",
    },
    {
      title: "Get Enough Sleep",
      icon: "😴",
      description:
        "To fully function, you need sleep. Your brain needs sleep to be sharp and focused. Sleep will help energize you and sleep helps you retain information.",
    },
    {
      title: "Silence Distractions",
      icon: "📵",
      description:
        "Put your phone on Airplane or Focus mode. Notify anyone you are expecting to contact you that you will be off-screen for a period of time. Turn off the TV. Turn on non-distracting instrumental music if you need.",
    },
  ];

  return (
    <div className="study-tips-wrapper">
      <div className="container py-5">
        <h2 className="text-center mb-4 section-title">
          <span className="header-top">LIVE, LOVE & LEARN</span>
          <br />
          STUDY TIPS
        </h2>
        <div className="row">
          {tips.map((tip, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="tip-card">
                <div className="tip-icon">{tip.icon}</div>
                <h4 className="tip-title">{tip.title}</h4>
                <p className="tip-text">{tip.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudyTips;