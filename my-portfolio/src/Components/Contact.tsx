import React from 'react'
import { IoMailOpenOutline } from "react-icons/io5";
import { ImWhatsapp } from "react-icons/im";
function Contact() {
  return (
    <div id='contact' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
            <h2 className='text-5xl' data-aos="zoom-in-up"><b>Feel free to reach out</b></h2>
            <p className='text-gray-500 text-3xl md:text-2xl pt-2' data-aos="zoom-in-up">
            If you'd like to discuss a project, have any questions, or just want to connect, feel free to reach out. I'm always open to new opportunities and happy to chat.
            </p>
            <div className='flex gap-3 items-center' data-aos="zoom-in-up">
                <IoMailOpenOutline size={30}/> ibrahim.shahid3211@gmail.com
            </div>
            <div className='flex gap-3 items-center' data-aos="zoom-in-up">
            <ImWhatsapp size={26}/> +923075640220
            </div>
        </div>
        <div className='space-y-8'> 
            <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                <label htmlFor="name">Name</label>
                <input type="text" className='h-[40px] bg-transparent border border-accent' id='name'/>
            </div>
            <div className='flex flex-col gap-1'data-aos="zoom-in-up">
                <label htmlFor="email">Email</label>
                <input type="text" className='h-[40px] bg-transparent border border-accent' id='email'/>
            </div>
            <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                <label htmlFor="message">Message</label>
                <textarea className='bg-transparent border border-accent' rows={6} id='message'>
                </textarea>
            </div>
            <button className='bg-accent p-2 px-6' data-aos="zoom-in-up">Send</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
