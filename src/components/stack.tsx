import reactLogo from '../assets/react.png'
import tsLogo from '../assets/typescript.png'
import tailwindLogo from '../assets/tailwind.png'
import nodeLogo from '../assets/nodejs.png'
import htmlLogo from '../assets/html.png'
import mongoLogo from '../assets/mongodb.png'

export default function Stack () {
    return(
        <div className='flex flex-col justify-center align-start lg:-mt-20' id='stack'>
            <p className='self-start mx-auto -mt-2 text-white lg:self-center lg:mx-0'>my stack</p>
            <div className='flex flex-wrap justify-center gap-4 p-10 sm:flex-row'>
                <img className="w-10 h-9" src={ reactLogo }></img>
                <img className="w-12 h-9" src={ tsLogo }></img>
                <img className="w-10 h-9" src={ tailwindLogo }></img>
                <img className="w-10 h-9" src={ nodeLogo }></img>
                {/* <img className="w-auto h-10" src={ mongoLogo }></img> */}
                <img className="w-10 h-9" src={ htmlLogo }></img>
            </div>
        </div>
    )
}