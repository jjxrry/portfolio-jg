import reactLogo from '../assets/react.png'
import tsLogo from '../assets/typescript.png'
import tailwindLogo from '../assets/tailwind.png'
import nodeLogo from '../assets/nodejs.png'
import htmlLogo from '../assets/html.png'
import mongoLogo from '../assets/mongodb.png'

export default function Stack () {
    return(
        <div className='flex flex-col lg:flex-row align-start justify-center lg:-mt-20' id='stack'>
            <p className='text-white -mt-2 self-start lg:self-center mx-auto lg:mx-0'>my stack</p>
            <div className='flex flex-wrap justify-center lg:justify-start lg:flex-row md:flex-col p-10 gap-4'>
                <img className="w-auto h-9" src={ reactLogo }></img>
                <img className="w-auto h-9" src={ tsLogo }></img>
                <img className="w-12 h-9" src={ tailwindLogo }></img>
                <img className="w-auto h-9" src={ nodeLogo }></img>
                {/* <img className="w-auto h-10" src={ mongoLogo }></img> */}
                <img className="w-auto h-9" src={ htmlLogo }></img>
            </div>
        </div>
    )
}