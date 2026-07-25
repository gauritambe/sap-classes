import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const VideoIntroduction = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            A Personal Message From Your Instructor
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Discover my journey, teaching philosophy, and commitment to your success in this personal introduction
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
            {!isPlaying ?
            <>
                <Image
                src="https://img.rocket.new/generatedImages/rocket_gen_img_199c1cfb5-1763301835321.png"
                alt="Video thumbnail showing Dr. Rajesh Kumar in professional setting ready to share his teaching philosophy and career guidance approach with warm welcoming expression"
                className="w-full h-full object-cover" />

                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <button
                  onClick={() => setIsPlaying(true)}
                  className="w-20 h-20 md:w-24 md:h-24 bg-amber-500 hover:bg-amber-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-2xl"
                  aria-label="Play video introduction">

                    <Icon name="Play" size={40} color="#FFFFFF" fill="#FFFFFF" />
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 md:p-8">
                  <div className="flex items-center gap-3 text-white">
                    <Icon name="Video" size={24} />
                    <div>
                      <div className="font-semibold text-base md:text-lg">Welcome Message</div>
                      <div className="text-sm text-gray-300">5 minutes • Introduction & Philosophy</div>
                    </div>
                  </div>
                </div>
              </> :

            <div className="w-full h-full flex items-center justify-center bg-gray-800">
                <div className="text-center text-white p-8">
                  <Icon name="Video" size={64} className="mx-auto mb-4 opacity-50" />
                  <p className="text-lg">Video player would be integrated here</p>
                  <p className="text-sm text-gray-400 mt-2">Mock video introduction content</p>
                </div>
              </div>
            }
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-8">
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-md border border-gray-100">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Target" size={20} color="#1E3A8A" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">My Mission</h3>
                  <p className="text-sm text-gray-600">Empowering professionals with practical SAP skills for real-world success</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 md:p-6 shadow-md border border-gray-100">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Heart" size={20} color="#F59E0B" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Teaching Style</h3>
                  <p className="text-sm text-gray-600">Hands-on, project-based learning with personalized mentorship</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 md:p-6 shadow-md border border-gray-100">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Rocket" size={20} color="#10B981" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Your Success</h3>
                  <p className="text-sm text-gray-600">Committed to your career transformation and long-term growth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default VideoIntroduction;