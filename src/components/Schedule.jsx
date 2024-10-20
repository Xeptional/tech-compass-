import React from 'react';
import '../component.css';

const Schedule = () => {
  const scheduleData = [
    { 
      time: '10:00 AM - 10:50 AM', 
      activity: 'Registration - Meet and Greet', 
      description: ''
    },
    { 
      time: '10:50 AM', 
      activity: 'All participants seated', 
      description: ''
    },
    { 
      time: '11:00 AM - 12:00 PM', 
      activity: 'Initiative Unveiling', 
      anchor: "Dr. K.T Ladoja", 
      description: 'This initiative creates opportunities for computer science students to engage with top industry professionals and showcase their skills while positioning sponsors and partners as leaders in fostering tech talent.'
    },
    { 
      time: '12:00 PM - 12:45 PM', 
      activity: 'Software Costing', 
      anchor: 'Mr Olorunfemi Oluwaniran', 
      description: 'Learn how top companies balance innovation with cost control while delivering high-quality products. Get ready to rethink how you approach software development!'
    },
    { 
      time: '12:45 PM - 1:30 PM', 
      activity: 'Resume Workshop', 
      anchor: 'Oluwatosin Adesua', 
      description: 'Learn how to craft standout resumes that captures the attention of top tech recruiters, highlighting your skills, experience, and projects in a way that sets you apart from the competition.'
    },
    { 
      time: '1:30 PM - 1:40 PM', 
      activity: 'break', 
      description: ''
    },
    { 
      time: '1:40 PM - 4:00 PM', 
      activity: 'Professional headshots', 
      description: 'Get professional headshots that make a lasting impression for LinkedIn, portfolios, or company profiles!'
    },
    { 
      time: '1:40 PM - 4:00 PM', 
      activity: 'Career Fair', 
      description: 'To be held at the Institute of African Studies\' foyer.'
    },
  ];

  return (
    <section className="schedule" id="schedule">
      <div className="container">
        <h2>Schedule</h2>
        <table className="schedule-table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Activity</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {scheduleData.map((item, index) => (
              <tr key={index} className={`row-${index % 2}`}>
                <td>{item.time}</td>
                <td>
                  {item.activity}
                  {item.anchor && <p className="anchor">{item.anchor}</p>}
                </td>
                <td>{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Schedule;
