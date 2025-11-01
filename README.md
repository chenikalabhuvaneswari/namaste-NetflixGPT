# Netflix GPT


I created the Project folder in desktop.

I created the public , src , .gitignore , README.md  (folders and files )
I initialised the git through the command 
    git init 
    git add . 
    git commit -m "message"
    git branch -M main
    git branch ====> main
    git remote add origin url
    git push -u origin main

next initial the npm through the command 
    npm init ===> we get the package.json configuration file for the npm
    npm i react and react-dom -----> as peer dependency ( we got the node modules and package-lock.json)
    keep this /node_modules  and  package-lock.json in .gitignore
    npm i -D parcel 
     change the scripts in pacakage.json 
       "scripts": {
            "test": "jest",
            "start": "parcel index.html",  ===> after writing the scripts the npx parcel index.html change  (npm run start ) (npm start)
            "build": "parcel build index.html" ===> after writing the scripts the npx parcel build index.html changes to (npm run build)
        },

    npm i -D tailwindcss@3 postcss   (i am using version 3 )
    npx tailwindcss init
        it gives the tailwind.config.js file 
        ** @type {import('tailwindcss').Config} */
                    module.exports = {
                    content:[],
                    theme: {
                        extend: {},
                    },
                    plugins: [],
                    }
        past the below code 
        content: ["./src/**/*.{html,js,jsx}"],  // past this only 
            /
    create a .postcssrc 
         past this below code to config the postcssrc 
                {
                    "plugins": {
                     "tailwindcss": {}
                    }
                 }
in src/index.css ===> 
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
i configure the tailwind css 

write index .html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <title>Netflix GPT</title>
    </head>
    <body>
    <div id="root">
        <h1>rendering</h1>
    </div>

    <script src="./src/index.js" type="module" ></script>
        
    </body>
    </html>

            
app.jsx 

import React from 'react'


const App = () => {
  return (
    <div>
        <h1 className='font-bold text-cyan-800' >hello world </h1>
    </div>
  )
}

export default App;'

index.js

        import React from "react";
        import ReactDOM from "react-dom/client"
        import "./index.css"    // 👈 Tailwind styles
        import App from  "./app.jsx";


        const root = ReactDOM.createRoot(document.getElementById("root"))
        root.render(
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        );


================================this is the basic configuration i ahave done till now ==================
-------------------------------part-2---------------------------------------------------------
# features 






import React, { useState } from 'react';
import { Tv, Download, Monitor, User } from 'lucide-react';

export default function NetflixLanding() {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (email) {
      alert(`Email submitted: ${email}`);
    }
  };

  const features = [
    {
      icon: <Tv className="w-16 h-16" />,
      title: "Enjoy on your TV",
      description: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
    },
    {
      icon: <Download className="w-16 h-16" />,
      title: "Download your shows to watch offline",
      description: "Save your favourites easily and always have something to watch."
    },
    {
      icon: <Monitor className="w-16 h-16" />,
      title: "Watch everywhere",
      description: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
    },
    {
      icon: <User className="w-16 h-16" />,
      title: "Create profiles for kids",
      description: "Send children on adventures with their favourite characters in a space made just for them—free with your membership."
    }
  ];

  const trending = [
    { title: "Stranger Things", genre: "Sci-Fi" },
    { title: "Wednesday", genre: "Comedy" },
    { title: "The Crown", genre: "Drama" },
    { title: "Squid Game", genre: "Thriller" },
    { title: "Bridgerton", genre: "Romance" },
    { title: "Money Heist", genre: "Action" }
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1574267432644-f610bcb37afc?w=1600&h=900&fit=crop" 
            alt="Background" 
            className="w-full h-full object-cover opacity-50"
          />
        </div>

        {/* Header */}
        <header className="relative z-20 flex items-center justify-between px-6 py-4 md:px-12">
          <div className="text-red-600 text-4xl md:text-5xl font-bold tracking-tight">
            NETFLIX
          </div>
          <div className="flex items-center gap-4">
            <button className="px-3 py-1 border border-gray-400 rounded text-sm bg-black/30 backdrop-blur-sm hover:border-white transition">
              🌐 English
            </button>
            <button className="px-4 py-1.5 bg-red-600 rounded text-sm font-semibold hover:bg-red-700 transition">
              Sign In
            </button>
          </div>
        </header>

        {/* Hero Content */}
        <div className="relative z-20 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl leading-tight">
            Unlimited movies, shows, and more
          </h1>
          
          <p className="text-xl md:text-2xl mb-4">
            Starts at ₹149. Cancel at any time.
          </p>
          
          <p className="text-lg md:text-xl mb-6 max-w-2xl">
            Ready to watch? Enter your email to create or restart your membership.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-2xl">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 bg-black/70 border border-gray-500 rounded text-white placeholder-gray-400 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
            />
            <button
              onClick={handleSubmit}
              className="px-8 py-4 bg-red-600 rounded text-xl font-semibold hover:bg-red-700 transition flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Get Started
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Trending Section */}
      <div className="border-t-8 border-gray-800 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Trending Now</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {trending.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-red-900/40 to-purple-900/40 rounded p-4 hover:scale-105 transition cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-red-600/20 to-purple-600/20 rounded mb-2"></div>
                <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-gray-400">{item.genre}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="border-t-8 border-gray-800 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">More reasons to join</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg p-6 hover:bg-gradient-to-br hover:from-purple-900/30 hover:to-pink-900/30 transition">
                <div className="text-red-500 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="border-t-8 border-gray-800 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-2">
            {[
              "What is Netflix?",
              "How much does Netflix cost?",
              "Where can I watch?",
              "How do I cancel?",
              "What can I watch on Netflix?"
            ].map((question, index) => (
              <div key={index} className="bg-gray-800 hover:bg-gray-700 transition cursor-pointer">
                <div className="flex items-center justify-between p-6">
                  <span className="text-lg md:text-2xl">{question}</span>
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-lg mb-6">Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-6 py-4 bg-black/70 border border-gray-500 rounded text-white placeholder-gray-400 focus:outline-none focus:border-white"
              />
              <button className="px-8 py-4 bg-red-600 rounded text-xl font-semibold hover:bg-red-700 transition flex items-center justify-center gap-2 whitespace-nowrap">
                Get Started
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t-8 border-gray-800 py-16 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <p className="text-gray-400 mb-8">Questions? Call 000-800-919-1694</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-400 mb-8">
            <div className="space-y-3">
              <p className="hover:underline cursor-pointer">FAQ</p>
              <p className="hover:underline cursor-pointer">Investor Relations</p>
              <p className="hover:underline cursor-pointer">Privacy</p>
              <p className="hover:underline cursor-pointer">Speed Test</p>
            </div>
            <div className="space-y-3">
              <p className="hover:underline cursor-pointer">Help Centre</p>
              <p className="hover:underline cursor-pointer">Jobs</p>
              <p className="hover:underline cursor-pointer">Cookie Preferences</p>
              <p className="hover:underline cursor-pointer">Legal Notices</p>
            </div>
            <div className="space-y-3">
              <p className="hover:underline cursor-pointer">Account</p>
              <p className="hover:underline cursor-pointer">Ways to Watch</p>
              <p className="hover:underline cursor-pointer">Corporate Information</p>
              <p className="hover:underline cursor-pointer">Only on Netflix</p>
            </div>
            <div className="space-y-3">
              <p className="hover:underline cursor-pointer">Media Centre</p>
              <p className="hover:underline cursor-pointer">Terms of Use</p>
              <p className="hover:underline cursor-pointer">Contact Us</p>
            </div>
          </div>
          <button className="px-4 py-2 border border-gray-400 rounded text-sm text-gray-400 hover:border-white hover:text-white transition mb-6">
            🌐 English
          </button>
          <p className="text-gray-400 text-sm">Netflix India</p>
        </div>
      </footer>
    </div>
  );
}   