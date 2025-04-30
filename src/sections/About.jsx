import React from 'react'

function About() {
  return (
    <div className="flex items-center justify-center px-4 py-30">
      <div className="max-w-3xl text-center">
        <img
          src="https://i.ibb.co/4Zc8B3yt/tyler-isaac-icon-header-green-background.png"
          alt="Tyler Isaac Icon"
          className="mx-auto mb-20 w-[200px] h-[200px] rounded-full object-cover"
        />
        <h2 className="text-4xl font-bold mb-4">
          Hi, I’m <span className="text-green-600">Tyler!</span>
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          I'm a frontend web developer based in Pittsburgh, PA, focused on building fast, accessible, and user-friendly websites. Right now, I’m helping #1 Cochran improve their digital presence across more than 30 dealership websites.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          I work with HTML, CSS, JavaScript, and React, along with tools like Tailwind CSS, Vite, and Git. I enjoy designing responsive interfaces and creating user experiences that feel natural and intuitive.
        </p>
      </div>
    </div>
  )
}

export default About
