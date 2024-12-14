import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    about: '',
    menu: '',
    message: '',
  });

  // Cambiamos el tipo de evento para manejar todos los tipos
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
    <div className="flex justify-center bg-gray-100 py-12">
      <form
        className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="w-full p-3 border rounded"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 border rounded"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <select
            name="about"
            className="w-full p-3 border rounded"
            onChange={handleChange}  // Aquí ya no da error
            required
          >
            <option value="">About your event</option>
            <option value="wedding">Wedding</option>
            <option value="party">Party</option>
            <option value="corporate">Corporate</option>
          </select>
        </div>
        <div className="mb-4">
          <select
            name="menu"
            className="w-full p-3 border rounded"
            onChange={handleChange}  // Aquí también
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
            className="w-full p-3 border rounded"
            onChange={handleChange}
            rows={4}  // Aquí el valor de "4" debe ser un número, no una cadena
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
    </div>
  );
}
