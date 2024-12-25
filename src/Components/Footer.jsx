import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-800 text-white px-5 relative z-50'>
        <section className='max-w-[12000px] mx-auto text-white'>
            <div className='grid md:grid-cols-3 py-5'>
                   <div className='py8 px-4'>
                    <h1 className='text-xl sm:text-3xl font-bold sm:text-left'>
                        Be Ready To Grow
                    </h1>
                    <p>Get Exclusive <span className='font-bold'> Update </span>Staraing to your inbox.</p><br />
                    <div className='flex items-center h-10'><input type="text" className='py-1 px-3 w-full h-[100%] inline-block focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky bg-gray-800 border-gray-200 border-2'
                    placeholder='Email'
                    /> <button className='primary-button'> Click </button>
                    </div>
                   </div>
                   <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                    <div>
                      <div className='py-8 px-4'>
                        <h1 className='text-xl font-bold md-3'>Quick Links</h1>
                        <ul className='flex flex-col gap-3'>
                          <li>
                            <a href="#">Home</a>
                          </li>
                          <li>
                            <a href="#">About</a>
                          </li>
                          <li>
                            <a href="#">Services</a>
                          </li>
                          <li>
                            <a href="#">Home</a>
                          </li>
                          <li>
                            <a href="#">Login</a>
                          </li>
                        </ul>

                      </div>
                    </div>
                    <div className='py-8 px-4'>
                        <h1 className='text-xl font-bold md-3'>Quick Links</h1>
                        <ul className='flex flex-col gap-3'>
                          <li>
                            <a href="#">Home</a>
                          </li>
                          <li>
                            <a href="#">About</a>
                          </li>
                          <li>
                            <a href="#">Services</a>
                          </li>
                          <li>
                            <a href="#">Home</a>
                          </li>
                          <li>
                            <a href="#">Login</a>
                          </li>
                        </ul>

                      </div>
                      <div className='py-8 px-4'>
                        <h1 className='text-xl font-bold md-3'>Contant US</h1>
                        
                        <div>
                          
                          <p>New Delhi , India</p>
                        </div>
                        <div>
                          
                          <p>Ev@Gmail.com</p>
                        </div>
                        <div>
                          
                          <p>+91 123456789</p>
                        </div>
                      </div>
                      <div>
                        
                      </div>
                   </div>
                   
            </div>
        </section>
      
    </div>
  )
}

export default Footer
