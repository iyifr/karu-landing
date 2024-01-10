'use client'
import ModalVideo from '@/components/modal-video'
import Balancer from 'react-wrap-balancer'
import Modal from 'react-modal'
import { useState } from 'react'

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <section className="relative">

      {/* Illustration behind hero content */}
      {/* <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1300 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div> */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-36 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl font-block md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">
              <Balancer>
                It's time to build your restaurant's <span className="bg-clip-text text-transparent bg-gradient-to-bl from-orange-400 to-yellow-300">tribe</span>
              </Balancer>
            </h1>
            <div className="max-w-3xl mx-auto md:mt-12">
              <p className="text-xl text-gray-600 my-6" data-aos="zoom-y-out" data-aos-delay="150">
                <Balancer>
                  Get your customers to buy <span className='text-orange-500 font-semibold'>more</span>, buy <span className='text-orange-500 font-semibold'>more often</span>, then sit back & watch your business grow🚀
                </Balancer>
              </p>
              <div className="max-w-xs md:mt-8 mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a className="btn bg-gradient-to-br from-orange-400 to-yellow-400 text-black hover:bg-orange-500/90 w-full mb-4 sm:w-auto sm:mb-0 rounded-lg" href="#pay">Pre-order now</a>
                </div>
                <div>
                  <a onClick={() => setIsModalOpen(true)} className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4 rounded-lg" href="#0">Try out demo for free</a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          {/* <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080} /> */}

        </div>

        <ContactModal isTrue={isModalOpen} closeModal={() => setIsModalOpen(false)} />
      </div>
    </section>
  )
}

const ContactModal = ({ isTrue, closeModal }: { isTrue: boolean, closeModal: () => void }) => {
  return <Modal isOpen={isTrue} style={{
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: 12
    },
  }}>
    <div className='flex flex-col gap-4'>
      <a className='underline underline-offset-2 text-green-400' href='https://wa.me/+2347042143357?text=Hi, I have a few questions about your software offering, Karu Vault' target='_blank'>Reach me on whatsapp</a>
      <a href='mailto:iyimide@skiff.com' className='underline underline-offset-2'>Reach me by email</a>

      <button onClick={closeModal} className='py-3 rounded-full bg-black text-white'>Dismiss</button>
    </div>
  </Modal>
}