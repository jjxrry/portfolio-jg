import { useState } from 'react';
import resumePDF from '../assets/RESUME.pdf';

export default function Contact() {
  const [email, setEmail] = useState('jerryygao@gmail.com')
  const [isCopied, setIsCopied] = useState(false)


  function handleEmailClick() {
    event?.preventDefault()
    navigator.clipboard.writeText(email);
    console.log(`Email '${email}' copied to clipboard!`)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 4000)
  }

  return (
    <div className="isolate py-24 px-2 sm:py-32 lg:px-8 -mt-10">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6 underline underline-offset-8">Contact Me</h2>
        <p className="mt-2 text-lg leading-8 text-white max-w-xs mx-auto text-center mb-4">
          I would love to hear about any opportunities for me to grow my skills.
        </p>
      </div>
      <div className="flex flex-row justify-center align-end gap-4 mt-3 text-indigo-400">
        <a className='hover:underline' href='https://www.linkedin.com/in/jerryyga0/'>LinkedIn</a>
        <a className='hover:underline' href="https://twitter.com/dotslogs">Twitter</a>
        <a className='hover:underline' href='' onClick={handleEmailClick}>Email</a>
        <a className='hover:underline' href={resumePDF} download="Resume Jerry Gao.pdf">PDF Resume</a>
      </div>
        {isCopied && <div className='flex flex-row justify-center align-end gap-4 mt-3 text-green-600' aria-hidden="true">email copied ✓</div>}
    </div>
  );
}