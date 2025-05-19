import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const StudyTips = () => {
  return (
    <div className="study-tips-container">
      <div className="study-tips-header">
        <h2>Study Tips</h2>
      </div>

      <div className="row g-4">
        {/* Tip 1 - Planning */}
        <div className="col-md-6">
          <div className="study-tip-box d-flex justify-content-between align-items-start">
            <div>
              <div className="tip-number">01</div>
              <h5>Planning</h5>
              <p>
                Start your week by checking what assignments are due the coming 2 weeks. When you’ve established that –
                make a plan for how much time you have to spend on each assignment. Some people prefer writing it down
                on a physical weekly planner, whilst others prefer digital planners. Find what works best for you.
              </p>
            </div>
            <i className="bi bi-journal-bookmark-fill study-icon text-primary"></i>
          </div>
        </div>

        {/* Tip 2 - Study Techniques */}
        <div className="col-md-6">
          <div className="study-tip-box purple d-flex justify-content-between align-items-start">
            <div>
              <div className="tip-number">02</div>
              <h5>Study techniques</h5>
              <p>
                Secondly, you have to find study techniques that work for you, and the specific subject you’re doing.
                Some renowned techniques include the Leitner system, the Pomodoro technique and the SQ3R method.
                Research and try them out! Additionally, your teacher/professor may have tips for the specific
                assignment, so don’t hold back from asking.
              </p>
            </div>
            <i className="bi bi-search study-icon text-purple"></i>
          </div>
        </div>

        {/* Tip 3 - Execute */}
        <div className="col-md-6">
          <div className="study-tip-box d-flex justify-content-between align-items-start">
            <div>
              <div className="tip-number">03</div>
              <h5>Execute</h5>
              <p>
                Of course, actually executing your study plans is the most important part of studying. People get
                motivated in different ways. Some people like study groups, others silence and noise cancelling
                headphones. Motivation may include having a treat after each chapter or doing something fun with friends
                once you’ve finished studying.
              </p>
            </div>
            <i className="bi bi-calculator-fill study-icon text-info"></i>
          </div>
        </div>

        {/* Tip 4 - Rest */}
        <div className="col-md-6">
          <div className="study-tip-box teal d-flex justify-content-between align-items-start">
            <div>
              <div className="tip-number">04</div>
              <h5>Rest</h5>
              <p>
                If you’re researching how to study, you’ve probably stumbled across the importance of rest – both sleep
                and leisure. Whilst actually executing your study plans allows you to absorb information, rest will
                allow you to retain it. Hence, planning your down time is equally important to doing actual studying.
              </p>
            </div>
            <i className="bi bi-trophy-fill study-icon text-success"></i>
          </div>
        </div>
      </div>

      <div className="study-tips-footer">
        <p>Good Luck!</p>
      </div>
    </div>
  );
};

export default StudyTips;
