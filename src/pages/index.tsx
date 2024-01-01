import Head from 'next/head'
import Image from 'next/image'
import Header from '@/Components/GeneralComponents/Header'
import wall from '../../public/images/wall.webp';
import SlideShow from '@/Components/GeneralComponents/SlideShow';


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

        <div className='absolute font-[Orbit] z-[10] rounded-[5px] flex top-28 bottom-28 right-40 left-40 blure bg-gradient-to-tr from-[#02010874] to-[#12093074]'>

          <div className='flex flex-row w-full h-[100%] justify-between '>
            <div className='w-6/12 h-[100%] flex flex-col pt-10 pl-[5rem]'>
              <p className='text-[2.5rem] h-[15%]'>Ali Maleki</p>
              <p className='text-[1.25rem] h-[15%] tracking-wider text-[#a6a6a6cf]'>Front End Developer</p>
              <p className='text-[1rem] h-[50%] items-start tracking-wider mt-[4rem] flex flex-wrap text-justify text-[#cecece]'>
                I am 24 years old focusing on javascript & Front End development.
                I've got 3 years of experience collaborating with team work on-site and remotely.
                I like creating mangeable complex ui and large scale applications using React And its combination with TypeScript.
                I also have a basic knowledge of back end ( Node js , Express ).
              </p>
              <div className='text-[1.25rem] h-[20%] tracking-wider flex flex-row '>
                <p className='bg-gradient-to-r from-[#521ea6] hover:from-[#401881] to-[#282db1] hover:to-[#212592] transition-all duration-150 cursor-pointer hover:scale-105 rounded-lg boxShadowLight w-5/12 h-[3rem] flex justify-center items-center'>Hire Me</p>
              </div>
            </div>

            <div className='w-6/12 flex justify-center pt-10 items-center'>
              <div className='bg-gradient-to-br from-[#1a1a80ca] to-[#31318bc8] rounded-lg boxShadowLight  h-[90%] mb-10 w-6/12'>

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



    </>
  )
}
