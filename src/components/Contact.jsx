import SectionWrapper from '../Data/SectionWrapper';
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaLinkedin, FaGithub, FaResearchgate } from 'react-icons/fa';
import { useTheme } from '../Data/Theme';

const SocialIcon = ({ href, icon: Icon, label }) => {
  const { theme } = useTheme();
  const iconColor = theme === 'light' ? 'text-slate-800' : 'text-white';
  const hoverColor = theme === 'light' ? 'hover:text-blue-500' : 'hover:text-green-500';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative"
      aria-label={label}
    >
      <div className="transform transition-all duration-300 group-hover:scale-110">
        <Icon className={`w-8 h-8 ${iconColor} ${hoverColor} transition-colors duration-300`} />
      </div>
      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs whitespace-nowrap">
        {label}
      </span>
    </a>
  );
};

const Contact = () => {
  const { theme } = useTheme();
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.name || !form.email || !form.message) {
      setError('All fields are required.');
      setLoading(false);
      return;
    } else if (!emailRegex.test(form.email)) {
      setError('Please enter a valid email address.');
      setLoading(false);
      return;
    }

    setError('');

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Plamen',
          from_email: form.email,
          to_email: 'torbalansky@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible.');

          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert('Something went wrong. Please, try again.');
        }
      );
  };

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/srstathis",
      icon: FaLinkedin,
      label: "LinkedIn"
    },
    {
      href: "https://github.com/torbalansky",
      icon: FaGithub,
      label: "GitHub"
    },
    {
      href: "https://www.researchgate.net/profile/Silviya-Stateva",
      icon: FaResearchgate,
      label: "ResearchGate"
    }
  ];

  return (
    <SectionWrapper>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className='text-center text-2xl font-bold mt-16 mb-8' data-aos='zoom-in'>
          Get in Touch
        </h2>
        
        <div className="flex flex-col md:flex-row justify-center items-start gap-8" data-aos="zoom-in-left">
          <div className="flex flex-col w-full md:w-1/2 max-w-md">
            <div className='space-y-4 font-mono'>
              <p className="text-lg"><strong>Email:</strong><br />
                digilabsrs@gmail.com
              </p>
              <p className="text-lg"><strong>Phone:</strong><br />
                +351 937 702 515
              </p>
              <p className="text-lg"><strong>Address:</strong><br />
                Lisbon, Portugal
              </p>
            </div>

            <div className="flex justify-center md:justify-start gap-8 mt-8">
              {socialLinks.map((link, index) => (
                <SocialIcon key={index} {...link} />
              ))}
            </div>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className={`w-full md:w-1/2 max-w-md p-6 rounded-lg shadow-md ${
              theme === 'light' ? 'bg-white' : 'bg-slate-800'
            }`}
          >
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="w-full p-3 border bg-slate-400 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="E-mail"
                required
                className="w-full p-3 border bg-slate-400 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                required
                className="w-full p-3 border bg-slate-400 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows="4"
              />
              {error && <p className="text-red-500 font-mono">{error}</p>}
             <button
              type="submit"
              className="w-full py-2 font-bold text-white bg-gradient-to-r from-indigo-600 to-indigo-600 bg-[length:200%_100%] bg-left hover:bg-right hover:from-green-400 hover:to-blue-500 transition-all duration-500 ease-out"
              >
              {loading ? 'Sending...' : 'Send'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
