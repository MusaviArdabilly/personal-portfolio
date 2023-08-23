import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'

const Experiences = () => {
  return (
    <section className='min-h-screen pt-20 flex items-center' id='experiences'>
      <div className='container mx-auto p-5'>
        <h1 className='text-center font-bold text-4xl mb-10'>Experiences</h1>
        <div className='flex justify-center'>
          <div className='grid gap-5 sm:w-screen md:w-3/6 border-l-2 border-black pl-4'>
            <div className='p-4 relative rounded shadow-lg shadow-gray-300 hover:shadow'>
              <div className='absolute top-1/2 transform-translate-y-1/2 -mx-10'>
                <div className="w-3 h-3 bg-black rounded-full"></div>
              </div>
              <div className='flex justify-between items-center'>
                <h1 className='text-md md:text-xl font-bold'>Full-stack Web Developer</h1>
                <h2 className='text-xs md:text-sm text-right'>Jombang, Indonesia</h2>
              </div>
              <h2 className='text-xs md:text-sm text-gray-600 mb-4'>PT. Trans Talia | Part-time</h2>
              <ul className='list-disc mulish text-xs md:text-sm font-semibold pl-5 mb-4'>
                <li>Created an enterprise resource planning web-based</li>
                <li>Develop feature for bus reservation</li>
                <li>Integration with Mapbox for counting the distance of pick-up location and destination location</li>
                <li>Integration with Mailtrap for handle send email to admin and customer</li>
              </ul>
              <div className='flex flex-wrap gap-2 mb-4'>
                <div className='flex justify-evenly items-center gap-2 p-1 shadow shadow-gray-400 rounded'>
                  <Image 
                    src="/image/tech/laravel.png"
                    alt='NextJS' 
                    width={16} height={16}
                  />
                  <h2 className='text-xs font-semibold inline'>Laravel</h2>
                </div>
                <div className='flex justify-evenly items-center gap-2 p-1 shadow shadow-gray-400 rounded'>
                  <Image 
                    src="/image/tech/bootstrap.png"
                    alt='NextJS' 
                    width={16} height={16}
                  />
                  <h2 className='text-xs font-semibold inline'>Bootstrap</h2>
                </div>
                <div className='flex justify-evenly items-center gap-2 p-1 shadow shadow-gray-400 rounded'>
                  <Image 
                    src="/image/tech/mysql.png"
                    alt='NextJS' 
                    width={16} height={16}
                  />
                  <h2 className='text-xs font-semibold inline'>MySQL</h2>
                </div>
                <div className='flex justify-evenly items-center gap-2 p-1 shadow shadow-gray-400 rounded'>
                  <Image 
                    src="/image/tech/mailtrap.png"
                    alt='NextJS' 
                    width={16} height={16}
                  />
                  <h2 className='text-xs font-semibold inline'>Mailtrap</h2>
                </div>
                <div className='flex justify-evenly items-center gap-2 p-1 shadow shadow-gray-400 rounded'>
                  <Image 
                    src="/image/tech/mapbox.png"
                    alt='NextJS' 
                    width={16} height={16}
                  />
                  <h2 className='text-xs font-semibold inline'>Mapbox</h2>
                </div>
              </div>
              <div className='flex justify-end items-center text-xs text-gray-400'>
                <FontAwesomeIcon icon={faCalendar} className=''/>
                <h3 className='inline ml-2'>March 2023 - July 2023</h3>
              </div>
            </div>
            <div className='p-4 relative rounded shadow-lg shadow-gray-300 hover:shadow'>
              <div className='absolute top-1/2 transform-translate-y-1/2 -mx-10'>
                <div className="w-3 h-3 bg-black rounded-full"></div>
              </div>
              <div className='flex justify-between items-center'>
                <h1 className='text-md md:text-xl font-bold'>Back End Web Developer</h1>
                <h2 className='text-xs md:text-sm text-right'>Malang, Indonesia</h2>
              </div>
              <h2 className='text-xs md:text-sm text-gray-600 mb-4'>PT. MyECO Teknologi Nusantara | Internship</h2>
              <ul className='list-disc mulish text-xs md:text-sm font-semibold pl-5 mb-4'>
                <li>Created auth service</li>
                <li>Created user level</li>
                <li>Created open API documentation</li>
              </ul>
              <div className='flex flex-wrap gap-2 mb-4'>
                <div className='flex justify-evenly items-center gap-2 p-1 shadow shadow-gray-400 rounded'>
                  <Image 
                    src="/image/tech/expressjs.png"
                    alt='ExpressJS' 
                    width={16} height={16}
                  />
                  <h2 className='text-xs font-semibold inline'>Express JS</h2>
                </div>
                <div className='flex justify-evenly items-center gap-2 p-1 shadow shadow-gray-400 rounded'>
                  <Image 
                    src="/image/tech/mongodb.png"
                    alt='MongoDB' 
                    width={16} height={16}
                  />
                  <h2 className='text-xs font-semibold inline'>MongoDB</h2>
                </div>
                <div className='flex justify-evenly items-center gap-2 p-1 shadow shadow-gray-400 rounded'>
                  <Image 
                    src="/image/tech/swagger.png"
                    alt='NextJS' 
                    width={16} height={16}
                  />
                  <h2 className='text-xs font-semibold inline'>Swagger</h2>
                </div>
              </div>
              <div className='flex justify-end items-center text-xs text-gray-400'>
                <FontAwesomeIcon icon={faCalendar} />
                <h3 className='inline ml-2'>
                  October 2022 - February 2023
                </h3>
              </div>
            </div>
            <div className='p-4 relative rounded shadow-lg shadow-gray-300 hover:shadow'>
              <div className='absolute top-1/2 transform-translate-y-1/2 -mx-10'>
                <div className="w-3 h-3 bg-black rounded-full"></div>
              </div>
              <div className='flex justify-between items-center'>
                <h1 className='text-md md:text-xl font-bold'>Front End Web Developer</h1>
                <h2 className='text-xs md:text-sm text-right'>Malang, Indonesia</h2>
              </div>
              <h2 className='text-xs md:text-sm text-gray-600 mb-4'>Codelaris Tech Lab | Freelance</h2>
              <ul className='list-disc mulish text-xs md:text-sm font-semibold pl-5 mb-4'>
                <li>Develop UI/UX of Trueve Website</li>
              </ul>
              <div className='flex flex-wrap gap-2 mb-4'>
                <div className='flex justify-evenly items-center gap-2 p-1 shadow shadow-gray-400 rounded'>
                  <Image 
                    src="/image/tech/bootstrap.png"
                    alt='NextJS' 
                    width={16} height={16}
                  />
                  <h2 className='text-xs font-semibold inline'>Bootstrap</h2>
                </div>
              </div>
              <div className='flex justify-end items-center text-xs text-gray-400'>
                <FontAwesomeIcon icon={faCalendar} />
                <h3 className='inline ml-2'>
                  April 2022 - May 2022
                </h3>
              </div>
            </div>
            <div className='p-4 relative rounded shadow-lg shadow-gray-300 hover:shadow'>
              <div className='absolute top-1/2 transform-translate-y-1/2 -mx-10'>
                <div className="w-3 h-3 bg-black rounded-full"></div>
              </div>
              <div className='flex justify-between items-center'>
                <h1 className='text-md md:text-xl font-bold'>QA Web Developer</h1>
                <h2 className='text-xs md:text-sm text-right'>Malang, Indonesia</h2>
              </div>
              <h2 className='text-xs md:text-sm text-gray-600 mb-4'>Brawijaya University | Internship</h2>
              <ul className='list-disc mulish text-xs md:text-sm font-semibold pl-5 mb-4'>
                <li>Functional tester for the official website of the information technnology departement</li>
                <li>Manage project and database for stage and production phase from cPanel</li>
              </ul>
              <div className='flex flex-wrap gap-2 mb-4'>
                <div className='flex justify-evenly items-center gap-2 p-1 shadow shadow-gray-400 rounded'>
                  <Image 
                    src="/image/tech/laravel.png"
                    alt='Laravel' 
                    width={16} height={16}
                  />
                  <h2 className='text-xs font-semibold inline'>Laravel</h2>
                </div>
                <div className='flex justify-evenly items-center gap-2 p-1 shadow shadow-gray-400 rounded'>
                  <Image 
                    src="/image/tech/bootstrap.png"
                    alt='Bootstrap' 
                    width={16} height={16}
                  />
                  <h2 className='text-xs font-semibold inline'>Bootstrap</h2>
                </div>
                <div className='flex justify-evenly items-center gap-2 p-1 shadow shadow-gray-400 rounded'>
                  <Image 
                    src="/image/tech/mysql.png"
                    alt='MySQL' 
                    width={16} height={16}
                  />
                  <h2 className='text-xs font-semibold inline'>MySQL</h2>
                </div>
              </div>
              <div className='flex justify-end items-center text-xs text-gray-400'>
                <FontAwesomeIcon icon={faCalendar} />
                <h3 className='inline ml-2'>
                  June 2021 - March 2022
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experiences