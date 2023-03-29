import { useState } from 'react';

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
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Contact Me</h2>
        <p className="mt-2 text-lg leading-8 text-white">
          I would love to hear about any opportunities for me to grow my skills.
        </p>
      </div>
      <div className="flex flex-row justify-center align-end gap-4 mt-3 text-white">
        <a className='hover:underline' href="https://twitter.com/golfcatt">Twitter</a>
        <a className='hover:underline' href='' onClick={handleEmailClick}>Email</a>
      </div>
        {isCopied && <div className='flex flex-row justify-center align-end gap-4 mt-3 text-green-600' aria-hidden="true">email copied!</div>}
    </div>
  );
}