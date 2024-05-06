import React from 'react';

const ContactForm = () => {
  return (
    <div className="flex  min-h-screen">
      <div className="container mx-auto">
        <div className="max-w-lg mx-auto my-2 p-5 rounded-md shadow-sm">
          <div className="text-center">
            <h1 className="my-3 text-3xl font-semibold text-gray-200 dark:text-gray-200">
              Contact Me
            </h1>
            <p className="text-gray-400 dark:text-gray-400">
              Fill up the form below to send me a message.
            </p>
          </div>
          <div className="m-7">
            <form action="https://api.web3forms.com/submit" method="POST" id="form">
              <input type="hidden" name="access_key" value="28513026-3d5e-4f05-856e-cb5ed29bb619" />
              <input type="hidden" name="subject" value="New Submission from Web3Forms" />
              <input type="checkbox" name="botcheck" id="" style={{display: 'none'}} />

              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-sm text-gray-200 dark:text-gray-400">Full Name</label>
                <input type="text" name="name" id="name" placeholder="John Doe" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm text-gray-200 dark:text-gray-400">Email Address</label>
                <input type="email" name="email" id="email" placeholder="you@company.com" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
              </div>
              <div className="mb-6">
                <label htmlFor="phone" className="block mb-2 text-sm text-gray-200 dark:text-gray-400">Phone Number</label>
                <input type="text" name="phone" id="phone" placeholder="" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm text-gray-200 dark:text-gray-400">Your Message</label>
                <textarea rows="5" name="message" id="message" placeholder="Your Message" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" required></textarea>
              </div>
              <div className="mb-6">
                <button type="submit" className="w-full px-3 py-4 text-white bg-secondary rounded-md focus:bg-indigo-600 focus:outline-none">
                  Send Message
                </button>
              </div>
              <p className="text-base text-center text-gray-400" id="result"></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
