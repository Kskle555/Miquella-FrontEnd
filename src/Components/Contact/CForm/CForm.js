import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
export default function CForm() {

  const [done, setDone] = useState(false)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_50ah7ai', 'template_69qe5jp', form.current, 'jyzCUJTAI3jdC7PmF')
      .then((result) => {
          console.log(result.text);
          setDone(true);
          form.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <form ref={form} onSubmit={sendEmail}>
    <div className='mt-20 bg-orange-900/75'>
        <div className='text-center pt-5'>
            <h1 className='text-white text-4xl'>Say hello</h1>
            <p className='text-white text-lg mt-5'>Lorem Ipsum is simply dummy text of the printing .</p>
        </div>
        <div className="max-w-md mx-auto mt-20">
   <div className="flex flex-wrap -mx-3 mb-6">
  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
    <label
      className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
      htmlFor="name">
      Name
    </label>
    <input
      className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
      id="name"
      type="text"
      name="user_name"
      placeholder="John Doe"/>
  </div>
  <div className="w-full md:w-1/2 px-3">
    <label
      className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
      htmlFor="phone">
      Phone
    </label>
    <input
      className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      id="phone"
      type="tel"
      name='phone'
      placeholder="(123) 456-7890"/>
  </div>
</div>

<div className="mb-6">
  <label
    className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
    htmlFor="email">
    Email
  </label>
  <input
    className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    id="email"
    type="email"
    name="user_email"
    placeholder="john.doe@example.com"/>
</div>

<div className="mb-6">
  <label
    className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
    htmlFor="message">
    Message
  </label>
  <textarea
    className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    id="message"
    placeholder="Enter your message here"
    name="message"
    rows="6"
  ></textarea>
</div>

<div className="flex justify-center">
<input type="submit" value="Send" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mb-3  px-4 rounded"/> 

</div>
<span className='text-white  mx-24 font-bold text-xl'>{done&& "Thanks for Contacting me"}</span>
  </div>
    </div>
    </form>
  )
}
