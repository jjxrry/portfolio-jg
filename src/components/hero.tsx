import heroSplash from '../assets/Dot.png'

export default function Hero() {

  return (
    <div className="h-400" id='home'>
      <div className="relative px-6 pt-2 lg:px-8">
        <div className="mx-auto max-w-5xl py-32 sm:py-48 lg:py-56">
            <div className="flex flex-col">
                {/* <img className="w-full md:w-1/2 h-auto transform -translate-y-8" src={ heroSplash }></img> */}
                <p className="md:ml-6 mt-7 text-xl leading-9 text-gray-50 hero-wrap">
                Hello! My name is Jerry and I am learning to become a software engineer and web developer.
                I take pleasure in solving problems and getting the visuals just right.
                <br></br>
                I most recently helped with development of Apple's homepage as an intern of thier 2024 cohort!
                <br></br>
                I am currently pursuing my Master of Science in Computer Science at Northeastern University. I am always on the look out for SWE opportunities and would love to show you my work.
                </p>
            </div>
            <div className="mt-10 flex items-center justify-end gap-x-6">
              <a 
                href="#projects" 
                className="text-sm leading-6 text-white hover:underline"
                onClick={(event) => {
                  event.preventDefault();
                  const element = document.querySelector("#stack");
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                }}
              >
                projects <span aria-hidden="true">↓</span>
              </a>
            </div>
        </div>
      </div>
    </div>
  )
}