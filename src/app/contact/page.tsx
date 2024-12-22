'use client'
import React, { FormEvent, useState } from 'react';
import { Meteors } from "@/components/ui/meteors";

function Page() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Submitted:', { email, message });
  };

  return (
    <div className="justify-center items-center flex h-screen bg-gray-900 pt-20">
      <div className="w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-700 rounded-lg p-6">
          <h1 className="text-2xl font-bold text-white mb-4">Contact Us</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-white mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-700 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                className="w-full p-2 border border-gray-700 rounded"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Submit</button>
          </form>
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}

export default Page;