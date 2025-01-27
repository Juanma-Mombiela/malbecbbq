import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    about: '',
    menu: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    alert(data.message);
  };

  return (
    <div id="contact" className="flex justify-center bg-neutral py-10 px-4">
      <div className="container max-w-7xl flex flex-col md:flex-row items-center md:items-start bg-neutral gap-12">
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h3 className="text-second text-4xl font-bold font-lucidity_condensed">
            Get in touch!!
          </h3>
          <p className="text-second text-sm font-nourd font-medium pt-4 md:pt-8">
            Ready to get started? Fill out our online form and our team will get back to you to answer your questions and make your plan a reality.
          </p>
          <p className="text-second text-sm font-nourd font-medium pt-4 md:pt-8">
            Shoot us an email and we will get back to you. For an immediate response or question, please call us at 248-9127356.
          </p>
          <p className="text-second text-sm font-nourd font-medium pt-4 md:pt-8">
          We look forward to hearing from you!!!
          </p>
        </div>
        <form
          className="w-full max-w-lg rounded-lg"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="w-full p-3 border rounded text-primary border-primary focus:border-primary bg-neutral"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-3 border rounded text-primary border-primary active:border-primary bg-neutral"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <select
              name="about"
              className="w-full p-3 border rounded text-primary border-primary active:border-primary bg-neutral"
              onChange={handleChange}
              required
            >
              <option value="">About your event</option>
              <option value="wedding">Wedding</option>
              <option value="party">Party</option>
              <option value="corporate">Corporate</option>
              <option value="others">Others</option>
            </select>
          </div>
          <div className="mb-4">
            <select
              name="menu"
              className="w-full p-3 border rounded text-primary border-primary active:border-primary bg-neutral"
              onChange={handleChange}
              required
            >
              <option value="">Choose your menu</option>
              <option value="standard">Standard</option>
              <option value="premium">Premium</option>
              <option value="custom">Custom</option>
            </select>
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              placeholder="Message"
              className="w-full p-3 border rounded text-primary active:border-primary bg-neutral"
              onChange={handleChange}
              rows={4}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-second text-white py-3 rounded hover:bg-red-800 transition duration-300"
          >
            Submit
          </button>
        </form>
        <div className="flex justify-center md:justify-start w-full md:w-1/2">
          <img
            src="/logo_aboutus.svg"
            alt="Malbec BBQ"
            className="h-64 w-64 object-contain"
          />
        </div>
      </div>
    </div>
  );
}
