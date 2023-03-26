import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import heroSplash from '../assets/jg-white.png'
import reactLogo from '../assets/react.png'
import tsLogo from '../assets/typescript.png'
import tailwindLogo from '../assets/tailwind.png'
import nodeLogo from '../assets/nodejs.png'
import htmlLogo from '../assets/html.png'
import mongoLogo from '../assets/mongodb.png'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="h-screen">
      <header className="absolute inset-x-0 top-0 z-50">
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-5xl py-32 sm:py-48 lg:py-56">
            <div className="flex flex-col md:flex-row">
                <img className="w-full md:w-1/2 h-auto" src={ heroSplash }></img>
                <p className="md:ml-6 mt-7 text-xl leading-9 text-gray-50">
                Hello! My name is Jerry Gao and I am a web developer, focused on front end design. 
                I work mainly in Typescript and with the React.js library to create cool things! 
                I am currently pursuing my Master of Science in Computer Science at Northeastern University. I am always on the look out for SWE opportunities and would love to show you my work.
                </p>
            </div>
            <div className="mt-10 flex items-center justify-end gap-x-6">
              <a href="#" className="text-sm leading-6 text-white hover:underline">
                projects <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className='flex lg:flex-row md:flex-col justify-center'>
                    <p className='text-white mt-10 self-start'>my stack</p>
                <div className='flex lg:flex-row md:flex-col p-10 gap-4'>
                    <img className="w-auto h-9" src={ reactLogo }></img>
                    <img className="w-auto h-9" src={ tsLogo }></img>
                    <img className="w-12 h-9" src={ tailwindLogo }></img>
                    <img className="w-auto h-9" src={ nodeLogo }></img>
                    <img className="w-auto h-10" src={ mongoLogo }></img>
                    <img className="w-auto h-9" src={ htmlLogo }></img>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}