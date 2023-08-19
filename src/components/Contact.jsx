import React from 'react'
import Image from 'next/image'

const Contact = () => {
  return (
    <section className='min-h-screen pt-20 flex items-center mb-20 md:mb-0' id='contact'>
      <div className='container mx-auto p-5'>
        <h1 className='text-center font-bold text-4xl mb-10'>Contact</h1>
        <div className='flex flex-col justify-center'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mb-10'>
            <a href="https://wa.me/+6282233994239" target="_blank">
              <div className='grid grid-cols-4 gap-5 p-4 shadow-lg shadow-gray-300 rounded border-l-4 border-black hover:shadow-sm'>
                <div className='flex items-center justify-center'>
                  <Image 
                    src="/image/social-media/whatsapp.png"
                    alt="Whatsapp"
                    width={60} height={60}
                  />
                </div>
                <div className='col-span-3'>
                  <h1 className='text-sm md:text-base font-bold'>Whatsapp</h1>
                  <h2 className='text-xs md:text-xs text-gray-500 mb-2'>+6282233994239</h2>
                  <h3 className='text-xs md:text-sm font-bold text-gray-700'>Send Message</h3>
                </div>
              </div>
            </a>
            <a href="mailto:201musavi@gmail.com">
              <div className='grid grid-cols-4 gap-5 p-4 shadow-lg shadow-gray-300 rounded border-l-4 border-black hover:shadow-sm'>
                <div className='flex items-center justify-center'>
                  <Image 
                    src="/image/social-media/gmail.png"
                    alt="Whatsapp"
                    width={60} height={60}
                  />
                </div>
                <div className='col-span-3'>
                  <h1 className='text-sm md:text-base font-bold'>Instagram</h1>
                  <h2 className='text-xs md:text-xs text-gray-500 mb-2'>@msvbill</h2>
                  <h3 className='text-xs md:text-sm font-bold text-gray-700'>Send Message</h3>
                </div>
              </div>
            </a>
            <a href="https://discord.gg/7sptnZuq" target="_blank">
              <div className='grid grid-cols-4 gap-5 p-4 shadow-lg shadow-gray-300 rounded border-l-4 border-black hover:shadow-sm'>
                <div className='flex items-center justify-center'>
                  <Image 
                    src="/image/social-media/discord.png"
                    alt="Whatsapp"
                    width={60} height={60}
                  />
                </div>
                <div className='col-span-3'>
                  <h1 className='text-sm md:text-base font-bold'>Discord</h1>
                  <h2 className='text-xs md:text-xs text-gray-500 mb-2'>bevouliin</h2>
                  <h3 className='text-xs md:text-sm font-bold text-gray-700'>Send Message</h3>
                </div>
              </div>
            </a>
          </div>
          <h1 className='text-center font-bold text-4xl my-10'>Social</h1>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            <a href="https://github.com/MusaviArdabilly" target="_blank">
              <div className='grid grid-cols-4 gap-5 p-4 shadow-lg shadow-gray-300 rounded border-l-4 border-black hover:shadow-sm'>
                <div className='flex items-center justify-center'>
                  <Image 
                    src="/image/social-media/github.png"
                    alt="Whatsapp"
                    width={60} height={60}
                  />
                </div>
                <div className='col-span-3'>
                  <h1 className='text-sm md:text-base font-bold'>Github</h1>
                  <h2 className='text-xs md:text-xs text-gray-500 mb-2'>Musavi Ardabilly</h2>
                  <h3 className='text-xs md:text-sm font-bold text-gray-700'>Visit Profile</h3>
                </div>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/musaviardabilly/" target="_blank">
              <div className='grid grid-cols-4 gap-5 p-4 shadow-lg shadow-gray-300 rounded border-l-4 border-black hover:shadow-sm'>
                <div className='flex items-center justify-center'>
                  <Image 
                    src="/image/social-media/linkedin.png"
                    alt="Whatsapp"
                    width={60} height={60}
                  />
                </div>
                <div className='col-span-3'>
                  <h1 className='text-sm md:text-base font-bold'>Linked In</h1>
                  <h2 className='text-xs md:text-xs text-gray-500 mb-2'>Musavi Ardabilly</h2>
                  <h3 className='text-xs md:text-sm font-bold text-gray-700'>Visit Profile</h3>
                </div>
              </div>
            </a>
            <a href="https://www.instagram.com/msvbill/" target="_blank">
              <div className='grid grid-cols-4 gap-5 p-4 shadow-lg shadow-gray-300 rounded border-l-4 border-black hover:shadow-sm'>
                <div className='flex items-center justify-center'>
                  <Image 
                    src="/image/social-media/instagram.png"
                    alt="Whatsapp"
                    width={60} height={60}
                  />
                </div>
                <div className='col-span-3'>
                  <h1 className='text-sm md:text-base font-bold'>Instagram</h1>
                  <h2 className='text-xs md:text-xs text-gray-500 mb-2'>@msvbill</h2>
                  <h3 className='text-xs md:text-sm font-bold text-gray-700'>Visit Profile</h3>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact