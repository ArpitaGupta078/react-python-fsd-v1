import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const tips = [
  {
    number: 1,
    emoji: "🖊",
    title: "Make studying cute, pretty, and aesthetic!",
    description:
      "Use fun pens, lovely notebooks, and adorable supplies. It doesn’t have to be expensive--just something that makes you excited to study.",
  },
  {
    number: 3,
    emoji: "⏸",
    title: "Take breaks when you need them",
    description:
      "Rest is productive too! Recharge your energy so you can come back even stronger.",
  },
  {
    number: 4,
    emoji: "🍰",
    title: "Build a consistent routine",
    description:
      "Create a study rhythm that works for you and stick with it. Consistency = progress.",
  },
  {
    number: 5,
    emoji: "📝",
    title: "Set small daily goals or to-do lists",
    description:
      "Break tasks into bite-sized pieces. Don’t overload yourself—progress is still progress!",
  },
  {
    number: 6,
    emoji: "📌",
    title: "Make a vision board",
    description:
      "Visualize what you want to achieve. Seeing your goals can keep you inspired and on track.",
  },
];

const MotivationTips = () => {
  return (
    <div className="motivation-wrapper">
      <div className="motivation-box container py-5 px-4">
        <h1 className="text-center title">HOW TO STAY MOTIVATED</h1>
       
        <div className="mt-4">
          {tips.map((tip) => (
            <div className="tip-box p-3 mb-3 d-flex align-items-start" key={tip.number}>
              <div className="emoji-box me-3">{tip.emoji}</div>
              <div>
                <h5 className="tip-title">
                  {tip.number}. {tip.title}
                </h5>
                <p className="tip-text mb-0">{tip.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MotivationTips;