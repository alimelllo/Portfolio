import Image from "next/image";
import rocket from '../../public/images/rocket.gif'

export default function Home() {

  return (

    
    <>
      <div className='h-screen relative '>
        <div className="container">
          <div className="sky">
            <div className="stars"></div>
            <div className="stars1"></div>
            <div className="stars2"></div>
            <div className="shooting-stars"></div>
            <div className="shooting-stars-2"></div>
            <div className="shooting-stars-3"></div>
          </div>
        </div>


        <div className="content ">
          <div className="planet ">
            <div className="ring"></div>
            <div className="cover-ring"></div>
            <div className="spots">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        <div className="absolute w-4/12 md:w-3/12 flex justify-center items-center right-[13%] md:right-[35%] top-[20%] md:top-[50%]">
          <Image className="initialRocketLand rotate-[-35deg]" width={200} height={300} src={rocket} alt={'rocket'} />
        </div>

        <div className='absolute font-[Orbit] z-[10] rounded-[5px] flex top-28 md:top-14 bottom-28 md:bottom-14 right-40 md:right-6 left-40 md:left-6 blure bg-gradient-to-tr from-[#02010883] to-[#12093084]'>

          <div className='flex flex-row md:flex-col w-full h-[100%] justify-between '>
            <div className='w-6/12 md:w-full h-[100%] flex flex-col pt-10 md:pt-5 pl-[5rem] md:pl-0'>
              <p className='text-[2.5rem] md:text-[2rem] md:pr-5 h-[15%] md:text-center'>Ali Maleki</p>
              <p className='text-[1.25rem] md:text-[1rem] md:pr-5 md:text-center h-[15%] tracking-wider text-[#a6a6a6cf] md:pl-8'>Front End Developer</p>
              <p className='text-[1rem] md:text-[0.7rem] md:p-5 h-[50%]items-start tracking-wider mt-[4rem] md:mt-0 flex flex-wrap text-justify text-[#cecece]'>
                I am 24 years old focusing on javascript & Front End development.
                I've got 3 years of experience collaborating with team work on-site and remotely.
                I like creating mangeable complex ui and large scale applications using React And its combination with TypeScript.
                I also have a basic knowledge of back end ( Node js , Express ).
              </p>
              <div className='text-[1.25rem] h-[20%] tracking-wider flex flex-row '>
                <p className='bg-gradient-to-r from-[#521ea6] hover:from-[#401881] to-[#282db1] hover:to-[#212592] transition-all duration-150 cursor-pointer hover:scale-105 rounded-lg boxShadowLight w-5/12 md:w-10/12 h-[3rem] md:hidden flex justify-center items-center'>Hire Me</p>
              </div>
            </div>

            <div className='w-6/12 md:w-full flex flex-col justify-center h-[100%] pt-10 items-center'>

              <div className='h-[70%] flex flex-row justify-around w-8/12 mx-auto'>
                

              </div>

              <div className='h-[30%] md:h-[50%] flex flex-row justify-around w-8/12 md:w-10/12 mx-auto'>
                <div className='flex flex-col w-3/12'>
                  <button className="btn-class-name outline outline-8 mx-auto outline-[#38156a] boxShadowLight">
                    <span className="back  bg-gradient-to-r from-[#36166a]  to-[#16196b]"></span>
                    <span className="front bg-gradient-to-r from-[#8647eb]  to-[#5d1995]"></span>
                  </button>
                  <p className='text-center text-[1rem] md:text-[0.8rem] mt-8 md:mt-5 tracking-wider'>Skills</p>
                </div>
                <div className='flex flex-col w-3/12'>
                  <button className="btn-class-name outline outline-8 mx-auto outline-[#15196a] boxShadowLight">
                    <span className="back  bg-gradient-to-r from-[#164d6a]  to-[#16456b]"></span>
                    <span className="front bg-gradient-to-r from-[#3795e3]  to-[#284ea7]"></span>
                  </button>
                  <p className='text-center text-[1rem] md:text-[0.8rem] mt-8 md:mt-5 tracking-wider'>Experience</p>
                </div>
                <div className='flex flex-col w-3/12'>
                  <button className="btn-class-name outline outline-8 mx-auto outline-[#156a5d] boxShadowLight">
                    <span className="back  bg-gradient-to-r from-[#164f46]  to-[#0e3e37]"></span>
                    <span className="front bg-gradient-to-r from-[#3bc2ae]  to-[#115e52]"></span>
                  </button>
                  <p className='text-center text-[1rem] md:text-[0.8rem] mt-8 md:mt-5 tracking-wider'>About Me</p>
                </div>
              </div>

            </div>

          </div>

          <div className="space">
            <div className="ship">
              <div className="ship-rotate">
                <div className="pod"></div>
                <div className="fuselage"></div>
              </div>
            </div>
            <div className="mars">
              <div className="flag">
              </div>
              <div className="planet">
                <div className="surface"></div>
                <div className="crater1"></div>
                <div className="crater2"></div>
                <div className="crater3"></div>
              </div>
            </div>
          </div>



          <div className="planet_wraper planet_shadow">
            <div className="planet-green">
              <div className="crater"></div>
              <div className="crater"></div>
              <div className="crater"></div>
              <div className="crater"></div>
              <div className="crater"></div>
            </div>
          </div>










        </div>
      </div>







      <div className='bg-transparent h-[50rem] w-full'>

      </div>



      {/* //////////// Footer //////////////*/}

      <div id="container">

      </div>
    </>
  )
}
