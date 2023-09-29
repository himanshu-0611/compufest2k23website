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
      date:  '📅 11 Oct-2023 ⌚ 09AM-11:30PM',
      image: 'https://img.playbook.com/9pHUu0mMMaIG2flkVVZo9NZbft9uvzjzOXs9GLhDrW0/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzFkMzIzOTY2/LTM3ZDQtNDBmNi04/YjI3LWQ5M2MxMTky/ZjMwZA',
      description: '🔥Are you ready for the ultimate coding challenge? The Coding Ninja Optimiser coding round is here to test your skills and push you to your limits.  Prepare to plunge into the world of optimization, where every line of code counts. It is designed to test your skills, knowledge, and ability to think on your feet. In this round, you will be given problems that require you to think critically and come up with the most efficient solutions. 🏆So gear up, sharpen your coding skills, and get ready to showcase your coding skills.',
      registerLink: 'https://forms.gle/jnbXHTnWav5GxW7dA', // Add the registration link
    },
    {
      id: 1,
      title: 'Event 02 - UI UX',
      date:  '📅 11 Oct-2023 ⌚ 11AM-01PM ',
      image: 'https://img.playbook.com/79Gus-hpj2F0O9AqQdAdsAD_dZVuiRSAk_xM4M2MxJA/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzcxYjhhMTcz/LWQzZWItNDkwNy1h/OWQ0LWFhYjBlMTg2/MjUwNA',
      description: '🎨Are you interested in designing? Do you have a passion for creating visually stunning and user-friendly interfaces? Look no further because the UI/UX Boot Camp is here to fulfill your dreams! 💫This exciting program is designed to provide you with the necessary skills and knowledge to excel in the field of UI/UX design. With the UI/UX Boot Camp, you will learn the latest industry trends and best practices, allowing you to create innovative and intuitive user experiences. Whether you are a beginner or an experienced designer, this boot camp is tailored to meet your needs and help you take your career to the next level.',
      registerLink: 'https://forms.gle/hHAaS2NWVu5Cg2un9', // Add the registration link
    },
    {
      id: 1,
      title: 'Event 03 - Versus Coding',
      date:  '📅 11 Oct-2023 ⌚ 01PM-02PM',
      image: 'https://img.playbook.com/PsicChvMIisPUyIkiVaqQXUMH5DypEDfvYcAv537uBo/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2UyYTMzZjFj/LWM4MDEtNGE1Yi1h/MmIzLWZlNjQ5N2Rj/MDczYQ',
      description: '🏆Are you ready for the ultimate coding showdown? Get your team together and gear up for the Versus Coding Challenge, where you will take on some of the best coders in the world. This competition is for all the techno-enthusiasts, and for those who thrive on challenges and love pushing their coding skills to the limits. With the Versus Coding Challenge, you have the opportunity to showcase your talent and prove that your team has what it takes to come out on top. So, gather your fellow coders, sharpen your skills, and get ready to compete against the best of the best',
      registerLink: 'https://forms.gle/oiXzejGV9M5p9iEq7', // Add the registration link
    },
    {
      id: 1,
      title: 'Event 04 - Webnetic',
      date:  '📅 11 Oct-2023 ⌚ 02PM-03PM ',
      image: 'https://img.playbook.com/TU3d7yqgpf25fTbntLrJwY0cT8EWr7RseCAFHuEmv3g/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2UyMjNhNDQ0/LWI1Y2UtNDc3NS1i/OTZhLWI2MmZmOWYy/MTIwYQ',
      description: '💻In the vast digital expanse of the web, where ideas come to life and creativity knows no bounds, the webnetic- is an event that sends waves of excitement through the tech community. This thrilling competition  invites all the best and brightest minds in the field of front-end development, challenging them to showcase their skills and push the boundaries of what is possible on the web. 🎖️This is not just a competition, but a platform for designers to showcase their skills and compete for the title of Front-End Champion. ',
      registerLink: 'https://forms.gle/baueCfcwBFumSE6V6', // Add the registration link
    },
    {
      id: 1,
      title: 'Event 12 - Scripted Secrets',
      date:  '📅 12 Oct-2023 ⌚ 12PM-02PM ',
      image: 'https://img.playbook.com/pFxgy_v3AU8T5de46xKtPz5t-OfjvPuZCXXwvrJITsA/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzQ5M2E1ZWUz/LTcxMDEtNDBkYS04/NjFiLTAzZjdhMzkz/ZWM2Zg',
      description: '🔐Get ready for an adventure like no other! Discover an exciting mystery in Scripted Secret! This thrilling game will test your wits and challenge your problem-solving skills. As you make your way through the game, youll encounter codes that need to be cracked, hidden clues that need to be found, and a treasure that needs to be uncovered. 🤝Gather your team of up to 4 people and embark on this exhilarating journey together. ',
      registerLink: 'https://forms.gle/BckpYFNVqMBiHx4L7', // Add the registration link
    },
    {
      id: 1,
      title: 'Event 06 - Adruino Workshop',
      date:  '📅 12 Oct-2023 ⌚ 02:15PM-04PM ',
      image: 'https://img.playbook.com/mWj-6t74UnIGJkvzBcRT6ntmgWEGh7-JqBzHFXLSfkE/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzBjZjZlMTY1/LTZjNjAtNDdjYy1i/MTFjLWI4MDU2YThk/NTVkNw',
      description: "🚀 Ready for an exciting journey into the world of coding and creativity? Join our Arduino workshop and prepare to be amazed!🚀 In this workshop, youll embark on an incredible coding adventure using Tinkercad and Wokwi simulations. These powerful tools will empower you to unleash your creativity like never before. Imagine the endless possibilities as you learn to bring your ideas to life through coding. But thats not all—the excitement doesnt stop there! 🌟",
      registerLink: 'https://forms.gle/eTsXzfZ1La7p6eeP7', // Add the registration link
    },
    {
      id: 1,
      title: 'Event 07 - Web 3 Workshop',
      date:  '📅 12 Oct-2023 ⌚ 06PM ',
      image: 'https://img.playbook.com/I6T1fXD70HDkW26xiqaB0xmCP8rkbSwklvBwSqralZk/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2I3YTA1Mjcx/LThmY2MtNGYzZi1h/NzRmLWYyOTAxZWRi/ZmQyZQ',
      description: 'Are you ready to start an exciting journey into the world of web development? Look no further than the web3 workshop🧑‍💻 where you will learn all the skills needed to build a successful career in the ever-evolving field of web development🤩 This workshop is designed to equip you with the knowledge and tools necessary to thrive in this digital age. With web3, you will not only learn how to create stunning websites but also gain a deep understanding of the latest technologies and trends shaping the web industry',
      registerLink: 'https://forms.gle/vTCAQmdK18hkH7gFA', // Add the registration link
    },
    {
      id: 1,
      title: 'Event 09 - Computing Tech',
      date:  '📅 13 Oct-2023 ⌚ 04PM',
      image: 'https://img.playbook.com/Gga0n6J6xkXaoYxSFqAs5mXGRgtvMNf0Z1EMJE4mnio/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2MwYTc4OTM0/LWYxMWItNDEyMy1h/OTI0LWM5MGQyZGZl/YzVmYw',
      description: 'Unlock the world of innovation with us! 🚀 Join our Microsoft workshop and engage with our live Microsoft Learn Student Ambassadors hailing from across the globe. Theyre here to share their wisdom on the latest tech trends and some incredible applications in the tech world. Dive into interactive, hands-on sessions and embrace a learning by doing approach. If youre eager to broaden your horizons and master the art of technology, this is your golden opportunity. Plus, a prestigious certificate from Microsoft awaits all attendees! 🌟🎓',
      registerLink: 'https://forms.gle/vRTtCxG2ghEN2ngP7', // Add the registration link
    },
    {
      id: 1,
      title: 'Event 10 - Power Bi',
      date:  '📅 13 Oct-2023 ⌚ 03PM-4:30PM ',
      image: 'https://img.playbook.com/AYbGSJdBOcivbhDsA_ENZNXEUFLO_7Gahs42qJL-O7E/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2Q5ZjYwZjdl/LTNiODMtNGNjNy1i/ODE5LWRlNTU5ODM2/NThhOQ',
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