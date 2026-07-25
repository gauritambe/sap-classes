import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const WelcomeCard = ({ user }) => {
  return (
    <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-xl p-6 md:p-8 lg:p-10 text-white shadow-lg">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="flex items-center gap-4 md:gap-6">
          <div className="relative">
            <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-4 border-white/30">
              <Image
                src={user?.avatar}
                alt={user?.avatarAlt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 md:w-10 md:h-10 bg-[var(--color-success)] rounded-full flex items-center justify-center border-4 border-white">
              <Icon name="Check" size={16} color="#FFFFFF" />
            </div>
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
              Welcome back, {user?.firstName}!
            </h1>
            <p className="text-white/90 text-sm md:text-base lg:text-lg">
              {user?.motivationalMessage}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 md:gap-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 md:px-6 py-3 md:py-4">
            <div className="flex items-center gap-2 mb-1">
              <Icon name="Award" size={20} color="#FFFFFF" />
              <span className="text-xs md:text-sm opacity-90">Certifications</span>
            </div>
            <p className="text-xl md:text-2xl lg:text-3xl font-bold">{user?.certificationsEarned}</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 md:px-6 py-3 md:py-4">
            <div className="flex items-center gap-2 mb-1">
              <Icon name="Flame" size={20} color="#FFFFFF" />
              <span className="text-xs md:text-sm opacity-90">Day Streak</span>
            </div>
            <p className="text-xl md:text-2xl lg:text-3xl font-bold">{user?.learningStreak}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeCard;