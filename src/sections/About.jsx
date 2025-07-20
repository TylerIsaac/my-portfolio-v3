import React from 'react'

function About() {
  return (
    <div className="flex items-center justify-center px-4 py-30">
      <div className="max-w-3xl text-center">
        <img
          src="https://i.ibb.co/4Zc8B3yt/tyler-isaac-icon-header-green-background.png"
          alt="Tyler Isaac Icon"
          className="mx-auto mb-20 w-[200px] h-[200px] rounded-full object-cover"
          data-aos="zoom-in"
        />
        <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">
          Hi, I’m <span className="text-green-600">Tyler!</span>
        </h2>
        <p className="text-lg text-gray-700 mb-4" data-aos="fade-up">
          I'm a front-end web developer based in Pittsburgh, PA, focused on building fast, accessible, and user-friendly websites.
        </p>
        <p className="text-lg text-gray-700 mb-4" data-aos="fade-up">
          At #1 Cochran Automotive, I help enhance the digital experience across more than 30 dealership websites. I specialize in HTML, CSS, JavaScript, and React, and work with tools like Tailwind CSS, Vite, and Git to streamline development.
        </p>
        <p className="text-lg text-gray-700 mb-4" data-aos="fade-up">
          I enjoy designing responsive interfaces and crafting user experiences that feel seamless and intuitive.
        </p>
      </div>
    </div>
  )
}

export default About
