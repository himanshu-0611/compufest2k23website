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
  // Sample event data
  const events: Event[] = [
    {
      id: 1,
      title: 'Event 01 - Optimiser',
      date:  '📅 05 Oct-2023 ⌚ 09AM-11:30PM',
      image: 'https://img.playbook.com/geeiPI5FlewPXFqKHHgvDD5IPA0DFF-MfSWuFuPpFdA/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzkyNWY0ZmYy/LTM3ODEtNDkxZi1i/NzJhLWM2NGNlZmUx/NDU4Zg',
      description: '🔥Are you ready for the ultimate coding challenge? The Coding Ninja Optimiser coding round is here to test your skills and push you to your limits.  Prepare to plunge into the world of optimization, where every line of code counts. It is designed to test your skills, knowledge, and ability to think on your feet. In this round, you will be given problems that require you to think critically and come up with the most efficient solutions. 🏆So gear up, sharpen your coding skills, and get ready to showcase your coding skills.',
      registerLink: 'https://forms.gle/jnbXHTnWav5GxW7dA', // Add the registration link
    },
    {
      id: 1,
      title: 'Event 02 - UI UX',
      date:  '📅 05 Oct-2023 ⌚ 11AM-01PM ',
      image: 'https://img.playbook.com/Kfza5QRqG-OYQsZ7JdF2lriUeV-aWSWZF8H2i7G8OcM/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzk3YjZlOWE2/LTUzYTQtNDhmZC1h/OGIzLTAwNjhjNDE4/NGRmZg',
      description: '🎨Are you interested in designing? Do you have a passion for creating visually stunning and user-friendly interfaces? Look no further because the UI/UX Boot Camp is here to fulfill your dreams! 💫This exciting program is designed to provide you with the necessary skills and knowledge to excel in the field of UI/UX design. With the UI/UX Boot Camp, you will learn the latest industry trends and best practices, allowing you to create innovative and intuitive user experiences. Whether you are a beginner or an experienced designer, this boot camp is tailored to meet your needs and help you take your career to the next level.',
      registerLink: 'https://forms.gle/hHAaS2NWVu5Cg2un9', // Add the registration link
    },
    {
      id: 1,
      title: 'Event 03 - Versus Coding',
      date:  '📅 05 Oct-2023 ⌚ 01:00PM',
      image: 'https://img.playbook.com/9HBXGUrEcaPt5d7ZEwFOC7JkIU23b_Kq30C-vL6SpuM/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzVjMDYxNjIw/LTRkZmEtNDI3ZC05/MGJhLTRmY2FiOTA3/NDVlMQ',
      description: '🏆Are you ready for the ultimate coding showdown? Get your team together and gear up for the Versus Coding Challenge, where you will take on some of the best coders in the world. This competition is for all the techno-enthusiasts, and for those who thrive on challenges and love pushing their coding skills to the limits. With the Versus Coding Challenge, you have the opportunity to showcase your talent and prove that your team has what it takes to come out on top. So, gather your fellow coders, sharpen your skills, and get ready to compete against the best of the best',
      registerLink: 'https://forms.gle/oiXzejGV9M5p9iEq7', // Add the registration link
    },
    {
      id: 1,
      title: 'Event 04 - Webnetic',
      date:  '📅 05 Oct-2023 ⌚ 02PM-03PM ',
      image: 'https://img.playbook.com/zpkO29RQVOwvhMrofZ_UQlxncRfXpjigbH4hXwaH0Vc/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2VlOTlhOWU0/LWMzOTMtNGRhOC04/MjdlLTVjN2VhNDhh/NDUwMw',
      description: '💻In the vast digital expanse of the web, where ideas come to life and creativity knows no bounds, the webnetic- is an event that sends waves of excitement through the tech community. This thrilling competition  invites all the best and brightest minds in the field of front-end development, challenging them to showcase their skills and push the boundaries of what is possible on the web. 🎖️This is not just a competition, but a platform for designers to showcase their skills and compete for the title of Front-End Champion. ',
      registerLink: 'https://forms.gle/baueCfcwBFumSE6V6', // Add the registration link
    },
    {
      id: 1,
      title: 'Event 05 - Scripted Secrets',
      date:  '📅 06 Oct-2023 ⌚ 12PM-02PM ',
      image: 'https://img.playbook.com/6Zyf418NXP9e6Zb1H_SVQkyNDf_D3k2-2iiY5QfVihU/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzFmOWViN2Q5/LWUyNmYtNDI2YS04/MGU2LTBjZDA1ZjVk/YTY4Yg',
      description: '🔐Get ready for an adventure like no other! Discover an exciting mystery in Scripted Secret! This thrilling game will test your wits and challenge your problem-solving skills. As you make your way through the game, youll encounter codes that need to be cracked, hidden clues that need to be found, and a treasure that needs to be uncovered. 🤝Gather your team of up to 4 people and embark on this exhilarating journey together. ',
      registerLink: 'https://forms.gle/BckpYFNVqMBiHx4L7', // Add the registration link
    },
    {
      id: 1,
      title: 'Event 06 - Adruino Workshop',
      date:  '📅 06 Oct-2023 ⌚ 02:15PM-04PM ',
      image: 'https://img.playbook.com/HgJLr8bTzDkE3OIN3gz5lHZT-ZeGdLHKDtrTz-A_dVg/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2JmYTk4ODg2/LTAzNmItNDk4OC1h/ZDc2LTAwMzQ5ZGFj/MzA4NQ',
      description: "🚀 Ready for an exciting journey into the world of coding and creativity? Join our Arduino workshop and prepare to be amazed!🚀 In this workshop, youll embark on an incredible coding adventure using Tinkercad and Wokwi simulations. These powerful tools will empower you to unleash your creativity like never before. Imagine the endless possibilities as you learn to bring your ideas to life through coding. But thats not all—the excitement doesnt stop there! 🌟",
      registerLink: 'https://forms.gle/eTsXzfZ1La7p6eeP7', // Add the registration link
    },
    {
      id: 1,
      title: 'Event 07 - Web 3 Workshop',
      date:  '📅 06 Oct-2023 ⌚ 06PM ',
      image: 'https://img.playbook.com/S3CzYS4eDYZ585WsQ7dPeLzazLrZpjrVrjpfeQlb8i0/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2Q1MGVlN2E0/LTI3ZTQtNDEzNi1h/MDc1LWY3OGJiODIy/MTZlYg',
      description: 'Are you ready to start an exciting journey into the world of web development? Look no further than the web3 workshop🧑‍💻 where you will learn all the skills needed to build a successful career in the ever-evolving field of web development🤩 This workshop is designed to equip you with the knowledge and tools necessary to thrive in this digital age. With web3, you will not only learn how to create stunning websites but also gain a deep understanding of the latest technologies and trends shaping the web industry',
      registerLink: 'https://forms.gle/vTCAQmdK18hkH7gFA', // Add the registration link
    },
   
    
    {
      id: 1,
      title: 'Event 08 - Git and Github',
      date:  '📅 07 Oct-2023 ⌚ 11AM-01PM ',
      image: 'https://img.playbook.com/FtO00noBz6WjyaUcz1MeHHajifaDoJVf9J3cVyZFQTs/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzQwMzM2NDM1/LTA4OWMtNDg1YS1h/ZjYxLWRlYzg3MDBj/N2RiZA',
      description: 'Are you ready to take your coding journey to the next level? Get ready to supercharge your skills with the Git and GitHub Workshop! 🚀 It is designed to equip you with the knowledge and tools you need to become a master at version control and collaboration. Whether youre a beginner or an experienced developer, this workshop will provide you with valuable insights and hands-on experience. With Git and GitHub, youll be able to easily manage your code, track changes, and collaborate with others seamlessly.',
      registerLink: 'https://forms.gle/eEE7Y4LLBYyYsF3T8', // Add the registration link
    },
   
    {
      id: 1,
      title: 'Event 09 - Computing Tech',
      date:  '📅 07 Oct-2023 ⌚ 04PM',
      image: 'https://img.playbook.com/LwgYR8r9C8ZgumhQX_0VDH2ElLi7L2GDYesGOnKw9lw/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzg2YWIwNGQ4/LTFiMWYtNGVmOC05/YjJlLWUxMGIyODI4/MmE3Mw',
      description: 'Unlock the world of innovation with us! 🚀 Join our Microsoft workshop and engage with our live Microsoft Learn Student Ambassadors hailing from across the globe. Theyre here to share their wisdom on the latest tech trends and some incredible applications in the tech world. Dive into interactive, hands-on sessions and embrace a learning by doing approach. If youre eager to broaden your horizons and master the art of technology, this is your golden opportunity. Plus, a prestigious certificate from Microsoft awaits all attendees! 🌟🎓',
      registerLink: 'https://forms.gle/vRTtCxG2ghEN2ngP7', // Add the registration link
    },
    {
      id: 1,
      title: 'Event 10 - Power Bi',
      date:  '📅 07 Oct-2023 ⌚ 03PM-4:30PM ',
      image: 'https://img.playbook.com/xoPayzgWqrXupBPkAIO8-46jLU46AbJZCdSDWrcV9VY/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2Y5OTdmMjdl/LWQ5MGUtNDY1ZC05/MDVhLWMyMzI5OWIx/NjRiNw',
      description: 'Unleash the potential of data visualisation with our immersive Power BI workshop. ⚙️ Discover the power of Power BI and take your data visualisation skills to the next level. Dive deeper into connecting and analysing various data sources. Unravel your creativity with eye-catching visualisations and construct interactive dashboards that will captivate your audience. 📊 From advanced data modelling techniques to compelling storytelling, this program will equip you with the skills to analyse data, gain valuable insights, and effectively communicate your findings.',
      registerLink: 'https://forms.gle/3bzLjQv7RhqNkKEy5', // Add the registration link
    },
   
    
    
    // Add more event objects here
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
      <div className="event-grid">  
        {events.map((event) => (
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