"use client"
import React, { useState } from 'react';
import './preregister.css'; // Import your CSS file here
import NavbarAvatarPreview from '../components/navbar';
import Particles from '../components/particles';

// Define a type for event objects
type Event = {
  id: number;
  title: string;
  date: string;
  image: string;
  description: string;
  registerLink: string; 
};

function EventsPage() {
  // Technical events
  const techEvents: Event[] = [
    {
      id: 1,
      title: 'Event 01 - Optimiser',
      date:  '📅 11 Oct-2023 ⌚ 09AM-11:30AM',
      image: 'https://img.playbook.com/jekhArTgevxPu2qopO9EDfyuYeTWh49AvN3qIhVLDDk/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2NhYmRhYTc1/LTZjODgtNDNiMS1h/ODI3LWE4MjZiNGM1/MWUyYQ',
      description: '🔥Are you ready for the ultimate coding challenge? The Coding Ninja Optimiser coding round is here to test your skills and push you to your limits.  Prepare to plunge into the world of optimization, where every line of code counts. It is designed to test your skills, knowledge, and ability to think on your feet. In this round, you will be given problems that require you to think critically and come up with the most efficient solutions. 🏆So gear up, sharpen your coding skills, and get ready to showcase your coding skills.',
      registerLink: 'https://forms.gle/jnbXHTnWav5GxW7dA', // Add the registration link
    },
    {
      id: 1,
      title: 'Event 02 - UI UX',
      date:  '📅 11 Oct-2023 ⌚ 11AM-01PM ',
      image: 'https://img.playbook.com/-p32_7wyMHCkNy9OlhRvHD1gwSPeJb4VLidF7NrtLq4/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzQxYjExM2Ey/LTVmMWYtNDcwOS05/MDA5LTE4MjkwMmUw/ZjU5NQ',
      description: '🎨Are you interested in designing? Do you have a passion for creating visually stunning and user-friendly interfaces? Look no further because the UI/UX Boot Camp is here to fulfill your dreams! 💫This exciting program is designed to provide you with the necessary skills and knowledge to excel in the field of UI/UX design. With the UI/UX Boot Camp, you will learn the latest industry trends and best practices, allowing you to create innovative and intuitive user experiences. Whether you are a beginner or an experienced designer, this boot camp is tailored to meet your needs and help you take your career to the next level.',
      registerLink: 'https://forms.gle/hHAaS2NWVu5Cg2un9', // Add the registration link
    },
    {
      id: 1,
      title: 'Event 03 - Versus Coding',
      date:  '📅 11 Oct-2023 ⌚ 01PM-02PM',
      image: 'https://img.playbook.com/LXMe_56gSitSUAdPahSvA8lh-xoGvG0xVrSYt4UCdoA/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzUzNzMyYzky/LTQzNTAtNGE5OC1h/MzA2LTRkNjg4Yzkz/MGNhOQ',
      description: '🏆Are you ready for the ultimate coding showdown? Get your team together and gear up for the Versus Coding Challenge, where you will take on some of the best coders in the world. This competition is for all the techno-enthusiasts, and for those who thrive on challenges and love pushing their coding skills to the limits. With the Versus Coding Challenge, you have the opportunity to showcase your talent and prove that your team has what it takes to come out on top. So, gather your fellow coders, sharpen your skills, and get ready to compete against the best of the best',
      registerLink: 'https://forms.gle/oiXzejGV9M5p9iEq7', // Add the registration link
    },
    {
      id: 1,
      title: 'Event 04 - Webnetic',
      date:  '📅 11 Oct-2023 ⌚ 02PM-03PM ',
      image: 'https://img.playbook.com/gGx0aTOo7FeHaJQdHA7oZKcoPDVevmwHbfrsdRoXUJE/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2IxZmQyN2Zm/LTZlZDUtNDUzNC1h/NDM0LTljMmJmOTYy/YWVhZg',
      description: '💻In the vast digital expanse of the web, where ideas come to life and creativity knows no bounds, the webnetic- is an event that sends waves of excitement through the tech community. This thrilling competition  invites all the best and brightest minds in the field of front-end development, challenging them to showcase their skills and push the boundaries of what is possible on the web. 🎖This is not just a competition, but a platform for designers to showcase their skills and compete for the title of Front-End Champion. ',
      registerLink: 'https://forms.gle/baueCfcwBFumSE6V6', // Add the registration link
    },
    {
      id: 1,
      title: 'Event 05 - Scripted Secrets',
      date:  '📅 12 Oct-2023 ⌚ 12PM-02PM ',
      image: 'https://img.playbook.com/Gk7c57XpPwVomXWp-lKDClYFOjlgFENsjAuTPezXr44/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2ZmMzNiM2M2/LTc3OWYtNDA2NC05/ZTZhLTBhMDljOWYz/ODgxOA',
      description: '🔐Get ready for an adventure like no other! Discover an exciting mystery in Scripted Secret! This thrilling game will test your wits and challenge your problem-solving skills. As you make your way through the game, youll encounter codes that need to be cracked, hidden clues that need to be found, and a treasure that needs to be uncovered. 🤝Gather your team of up to 4 people and embark on this exhilarating journey together. ',
      registerLink: 'https://forms.gle/BckpYFNVqMBiHx4L7', // Add the registration link
    },
    {
      id: 1,
      title: 'Event 06 - Adruino Workshop',
      date:  '📅 12 Oct-2023 ⌚ 02:15PM-04PM ',
      image: 'https://img.playbook.com/zGZzbthb2sp-O1RTfGkUthswZFSujb9JsRcXXLYMbDw/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2IxYmFjY2U1/LWM3MGEtNGRhMC1i/YjIzLTMxNmFlMmJk/NDk3NA',
      description: "🚀 Ready for an exciting journey into the world of coding and creativity? Join our Arduino workshop and prepare to be amazed!🚀 In this workshop, youll embark on an incredible coding adventure using Tinkercad and Wokwi simulations. These powerful tools will empower you to unleash your creativity like never before. Imagine the endless possibilities as you learn to bring your ideas to life through coding. But thats not all—the excitement doesnt stop there! 🌟",
      registerLink: 'https://forms.gle/eTsXzfZ1La7p6eeP7', // Add the registration link
    },
    {
      id: 1,
      title: 'Event 07 - Web 3 Workshop',
      date:  '📅 12 Oct-2023 ⌚ 06PM ',
      image: 'https://img.playbook.com/X8V4xizPkzWC3_x9KWLQSZeZG9ZW3VYpQdULqna7J0Q/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzhjNTk2MDhm/LTYxYWUtNDI1OS05/MTkwLTU4NjQ5YzEz/MThmZA',
      description: 'Are you ready to start an exciting journey into the world of web development? Look no further than the web3 workshop🧑‍💻 where you will learn all the skills needed to build a successful career in the ever-evolving field of web development🤩 This workshop is designed to equip you with the knowledge and tools necessary to thrive in this digital age. With web3, you will not only learn how to create stunning websites but also gain a deep understanding of the latest technologies and trends shaping the web industry',
      registerLink: 'https://forms.gle/vTCAQmdK18hkH7gFA', // Add the registration link
    },
    {
      id: 1,
      title: 'Event 08 - Computing Tech',
      date:  '📅 13 Oct-2023 ⌚ 04PM',
      image: 'https://img.playbook.com/fiqV6CLFh8sFoiAbqgKS18ij7aY7wAGwd0GQB7Hi9lM/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2RjMDI3NGYw/LWFiYmItNDBlYi1h/NWE1LWZlZWMzZmNj/ZTM3Yg',
      description: 'Unlock the world of innovation with us! 🚀 Join our Microsoft workshop and engage with our live Microsoft Learn Student Ambassadors hailing from across the globe. Theyre here to share their wisdom on the latest tech trends and some incredible applications in the tech world. Dive into interactive, hands-on sessions and embrace a learning by doing approach. If youre eager to broaden your horizons and master the art of technology, this is your golden opportunity. Plus, a prestigious certificate from Microsoft awaits all attendees! 🌟🎓',
      registerLink: 'https://forms.gle/vRTtCxG2ghEN2ngP7', // Add the registration link
    },
    {
      id: 1,
      title: 'Event 09 - Power Bi',
      date:  '📅 13 Oct-2023 ⌚ 03PM-4:30PM ',
      image: 'https://img.playbook.com/9AUDUzGMmu-UgIBexOhs6pG64OtNSWSzNO9_RhGOB6k/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2Y0NGJkNTE5/LWEzZGItNDA5OS1i/ZGRjLTE1MjM1ODM2/ZGRiOA',
      description: 'Unleash the potential of data visualisation with our immersive Power BI workshop. ⚙ Discover the power of Power BI and take your data visualisation skills to the next level. Dive deeper into connecting and analysing various data sources. Unravel your creativity with eye-catching visualisations and construct interactive dashboards that will captivate your audience. 📊 From advanced data modelling techniques to compelling storytelling, this program will equip you with the skills to analyse data, gain valuable insights, and effectively communicate your findings.',
      registerLink: 'https://forms.gle/3bzLjQv7RhqNkKEy5', // Add the registration link
    },
    {
        id: 1,
        title: 'Event 10 - React kickstart',
        date:  '📅 13 Oct-2023 ⌚ 12PM-2PM ',
        image: 'https://img.playbook.com/pPwCOc63DrcH5zBrrWve3OVr75gbjMaRy5uXRRs_my8/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2Q2ZjIzMzU5/LTFjOWYtNDBhMS05/MWI4LWFjOTlmYWM0/Y2FlOQ',
        description: 'Are you eager to explore the world of React development and build dynamic web applications? Look no further! Join our ReactKickstart Workshop at Compufest 2023.🪄 This immersive event offers hands-on learning, interactive sessions with seasoned instructors, practical examples, and a Q&A session to clear your doubts. So come up and join to the ReactKickStart Workshop!!',
        registerLink: 'https://forms.gle/t5ZfBiJ2rkLSWNqy5', // Add the registration link
    },
    {
        id: 1,
        title: 'Event 11 - Cloud Skill Challenge',
        date:  '📅 13 Oct-2023 ⌚ 2PM-3PM ',
        image: 'https://img.playbook.com/nB8xnT1AeerrAk1V_GiZ1v0YGf_f1Vo3QZ9TGfR3OJA/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2YxZjFiYTll/LTdkY2EtNDllMC1h/NjU2LTMxMDZhNjYw/NTYzNg',
        description:"Are you ready to conquer the clouds? The Cloud Skill Challenge is your chance to shine! 💡 It's the ultimate test of your cloud computing expertise. In this thrilling competition, participants tackle real-world cloud tasks, showcasing their skills and innovation. Join us and compete against the best in the cloud arena. 🏆 Elevate your career, solve complex challenges, and emerge as a cloud champion. 🌟 It's time to soar above the rest - are you ready for the Cloud Skill Challenge? ☁",
        registerLink: 'https://forms.gle/3qdRJ72S6oF7jQ8d7',
    },
    {
        id: 1,
        title: 'Event 12 - CyberSafe',
        date:  '📅 11 Oct-2023 ⌚ 12PM Onwards',
        image: 'https://img.playbook.com/wDlgLX7giyjmhIau_X8hjDZn6z_zJomXTNZY3p-cuNE/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzg1MjE4NWM1/LWE2ODEtNDQxYS1h/MTIzLWUzMDJjYjNl/MmY5Ng',
        description: "Join our 'Cyber Safe' Cyber Security Workshop! Learn to protect yourself online, defend against cyber threats, and safeguard your digital assets. Gain practical skills, expert insights, and network with like-minded individuals. Register now for a safer digital future! Gain valuable insights into the dynamic world of cybersecurity and explore potential career opportunities in this high-demand field.🚀✨",
        registerLink: 'https://forms.gle/Z3nPMdSQME5eNyEw6',
    } 
  ];

   // Non-Technical events
  const nontechEvents: Event[] = [
    {
      id: 1,
      title: 'Event 01 - Chess',
      date:  '📅 11 Oct-2023 ⌚ 10AM-12PM',
      image: 'https://img.playbook.com/kruaRnkNYJrWr7HpgMkc95WiWoIgD1ATrVaxW9BY_CE/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2IyMzk3YmEz/LTFiN2ItNDMyYS1i/M2JmLTQ1YTNmMDFm/NjQyOA',
      description: "",
      registerLink: 'https://forms.gle/SKK6s7bFAaAwZUV38', // Add the registration link
    },
    {
    id: 1,
    title: 'Event 02 - Power Rumble',
    date:  '📅 11 Oct-2023 ⌚ 12PM onwards',
    image: 'https://img.playbook.com/tGg17paNPBerCEe5tGU08ZkFI7jgx72nMqF22jjF95g/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2YzN2M1NTQ0/LTJiNTItNGM3My1h/ZmQxLThkN2IyZWIz/OWRhYw',
    description: "",
    registerLink: 'https://forms.gle/E6DBbHq8BGLLfSNA8', // Add the registration link
    },
    {
    id: 1,
    title: 'Event 03 - Box Cricket',
    date:  '📅 11 Oct-2023 ⌚ 12PM onwards',
    image: 'https://img.playbook.com/CkATd1PuDVHJdLZUEgZY9h8hqy5s3ikcUCUuWuyJNLk/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2JhMTdhZjFk/LTdjNzktNGM2YS05/MDEyLTVhNTVhNDg5/YjliMQ',
    description: "",
    registerLink: 'https://forms.gle/r8cvzREMkbXX72Cv8', // Add the registration link
    },
    {
    id: 1,
    title: 'Event 04 - Lens Crafter',
    date:  '📅 11 Oct-2023 ⌚Complete day',
    image: 'https://img.playbook.com/vj9ZIyJSm5FHPHK8Srdk4IUiFKOQu8WyEJes5o6YPH8/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2E3NDUxZDJj/LWJiMjYtNGViNi05/YWYxLTRmYzJjNzU5/NWVkNA',
    description: "",
    registerLink: 'https://forms.gle/RcPCWYXwe47Rwfvn9', // Add the registration link
    },
    {
    id: 1,
    title: 'Event 05 - BGMI',
    date:  '📅 11 & 12 Oct-2023 ⌚11 am onwards',
    image: 'https://img.playbook.com/Y5xgrsrDwZHw3asTB6O1hpsIQYoErNyNlG2E56CapPM/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzA4MzU1MTA1/LWY3NDYtNGJiYi1i/NjkzLWQ2Yzk0YmRk/NmQ3NA',
    description: "",
    registerLink: 'https://forms.gle/npr4RwkY4ywtSCmY7', // Add the registration link
    },
    {
    id: 1,
    title: 'Event 06 - Valorant',
    date:  '📅 11 Oct-2023 ⌚6 pm onwards',
    image: 'https://img.playbook.com/YMrbK3mII6s-ybKHayQvYSrOLZcvyPrDM8mkUm_ttyo/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2MzZTExYjUy/LTQyMDMtNDUzYy05/Njc5LTBmZmU3NjFh/MzU4NA',
    description: "",
    registerLink: 'https://forms.gle/XSqStySzzXC8VaX49', // Add the registration link
    },  
    {
    id: 1,
    title: 'Event 07 - Futsal',
    date:  '📅 12 Oct-2023 ⌚12 pm onwards',
    image: 'https://img.playbook.com/Q5ANF_09_2RJpbKWA3gc9k8vpT1NQXSCszzmW7rmA5E/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzkyNzk3NGVj/LTE3YjItNDhjMi1i/Y2M3LWNkZTUwZDUz/YWMyYw',
    description: "",
    registerLink: 'https://forms.gle/PHw6pR9fYQxTZt1w7', // Add the registration link
    },
    {
    id: 1,
    title: 'Event 08 - Rhythmn Encore',
    date:  '📅 12 Oct-2023 ⌚4 pm onwards',
    image: 'https://img.playbook.com/tHgSlCWyNlf5iJaKIVShkspGlZBQ5Rx17fXCwH4QSxs/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2M4OWFiMTY4/LWE5ZGYtNGMwMy1h/OWZmLTE4NTI5MWM3/ZTlmYg',
    description: "",
    registerLink: 'https://forms.gle/xvWAYsfeRoXdG2j26', // Add the registration link
    },                      
  ];

  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const handleEventHover = (event: Event) => {
    setSelectedEvent(event);
  };

  const handleEventLeave = () => {
    setSelectedEvent(null);
  };

  return (
    
    <div className="events-page">
      <NavbarAvatarPreview />
      <Particles
              className="absolute inset-0 -z-10 animate-fade-in"
              quantity={200}
            />
            <div className='w-full flex justify-center'><h1 className='text-white text-5xl font-sans'>Tech</h1></div>
      <div className="event-grid">  
        {techEvents.map((event) => (
          <div
            key={event.id}
            className="event-card"
            onMouseEnter={() => handleEventHover(event)}
            onMouseLeave={handleEventLeave}
          >
            <img src={event.image} alt={event.title} />
            
          </div>
        ))}
      </div>
     
      {selectedEvent && (
  <div className="popup" onMouseEnter={() => handleEventHover(selectedEvent)} onMouseLeave={handleEventLeave}>
    <div className="popup-content">
      <img src={selectedEvent.image} alt={selectedEvent.title} />
      <div className='description'>
        <h2>{selectedEvent.title}</h2>
        <p>{selectedEvent.date}</p>
        <p>{selectedEvent.description}</p>
        <a href={selectedEvent.registerLink} className="register-button" target="_blank" rel="noopener noreferrer">Register Now</a>
        <button className="bg-yellow back-button" onClick={handleEventLeave} rel="noopener noreferrer">Back</button>
      </div>
    </div>
  </div>


  
  
 
)}

<div className='w-full flex justify-center'><h1 className='text-white text-5xl font-sans'>Non-Tech</h1></div>
<div className="event-grid">  
        {nontechEvents.map((event) => (
          <div
            key={event.id}
            className="event-card"
            onMouseEnter={() => handleEventHover(event)}
            onMouseLeave={handleEventLeave}
          >
            <img src={event.image} alt={event.title} />
            
          </div>
        ))}
      </div>
      {selectedEvent && (
  <div className="popup" onMouseEnter={() => handleEventHover(selectedEvent)} onMouseLeave={handleEventLeave}>
    <div className="popup-content">
      <img src={selectedEvent.image} alt={selectedEvent.title} />
      <div className='description'>
        <h2>{selectedEvent.title}</h2>
        <p>{selectedEvent.date}</p>
        <p>{selectedEvent.description}</p>
        <a href={selectedEvent.registerLink} className="register-button" target="_blank" rel="noopener noreferrer">Register Now</a>
        <button className="bg-yellow back-button" onClick={handleEventLeave} rel="noopener noreferrer">Back</button>
      </div>
    </div>
  </div>
)}
 </div>
   
  );
}

export default EventsPage;
