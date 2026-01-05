import React, { useState, useRef, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const VideoPlayer = ({ videoUrl, title, onProgressUpdate }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [showSpeedMenu, setShowSpeedMenu] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const speedOptions = [0.5, 0.75, 1, 1.25, 1.5, 2];

  useEffect(() => {
    const video = videoRef?.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      setCurrentTime(video?.currentTime);
      if (onProgressUpdate) {
        const progress = (video?.currentTime / video?.duration) * 100;
        onProgressUpdate(progress);
      }
    };

    const handleLoadedMetadata = () => {
      setDuration(video?.duration);
    };

    video?.addEventListener('timeupdate', handleTimeUpdate);
    video?.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      video?.removeEventListener('timeupdate', handleTimeUpdate);
      video?.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, [onProgressUpdate]);

  const togglePlay = () => {
    const video = videoRef?.current;
    if (video?.paused) {
      video?.play();
      setIsPlaying(true);
    } else {
      video?.pause();
      setIsPlaying(false);
    }
  };

  const handleSeek = (e) => {
    const video = videoRef?.current;
    const rect = e?.currentTarget?.getBoundingClientRect();
    const pos = (e?.clientX - rect?.left) / rect?.width;
    video.currentTime = pos * video?.duration;
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e?.target?.value);
    setVolume(newVolume);
    videoRef.current.volume = newVolume;
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    const video = videoRef?.current;
    if (isMuted) {
      video.volume = volume;
      setIsMuted(false);
    } else {
      video.volume = 0;
      setIsMuted(true);
    }
  };

  const changePlaybackSpeed = (speed) => {
    videoRef.current.playbackRate = speed;
    setPlaybackSpeed(speed);
    setShowSpeedMenu(false);
  };

  const toggleFullscreen = () => {
    const container = containerRef?.current;
    if (!document.fullscreenElement) {
      container?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const skipTime = (seconds) => {
    videoRef.current.currentTime += seconds;
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds?.toString()?.padStart(2, '0')}`;
  };

  return (
    <div ref={containerRef} className="relative bg-black rounded-lg overflow-hidden group">
      <video
        ref={videoRef}
        src={videoUrl}
        className="w-full aspect-video"
        onClick={togglePlay}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 flex items-center justify-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={togglePlay}
            className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-white/20 hover:bg-white/30 rounded-full"
          >
            <Icon name={isPlaying ? 'Pause' : 'Play'} size={32} color="#FFFFFF" />
          </Button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
          <div className="mb-3 md:mb-4">
            <div
              className="h-1 md:h-1.5 bg-white/30 rounded-full cursor-pointer"
              onClick={handleSeek}
            >
              <div
                className="h-full bg-primary rounded-full relative"
                style={{ width: `${(currentTime / duration) * 100}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 md:w-4 md:h-4 bg-white rounded-full shadow-lg" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-2 md:gap-4">
            <div className="flex items-center gap-2 md:gap-3">
              <Button
                variant="ghost"
                size="icon"
                onClick={togglePlay}
                className="w-8 h-8 md:w-10 md:h-10"
              >
                <Icon name={isPlaying ? 'Pause' : 'Play'} size={20} color="#FFFFFF" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => skipTime(-10)}
                className="w-8 h-8 md:w-10 md:h-10"
              >
                <Icon name="RotateCcw" size={18} color="#FFFFFF" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => skipTime(10)}
                className="w-8 h-8 md:w-10 md:h-10"
              >
                <Icon name="RotateCw" size={18} color="#FFFFFF" />
              </Button>

              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleMute}
                  className="w-8 h-8 md:w-10 md:h-10"
                >
                  <Icon
                    name={isMuted ? 'VolumeX' : volume > 0.5 ? 'Volume2' : 'Volume1'}
                    size={18}
                    color="#FFFFFF"
                  />
                </Button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-16 md:w-20 hidden md:block"
                />
              </div>

              <span className="text-white text-xs md:text-sm font-medium whitespace-nowrap">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>

            <div className="flex items-center gap-2 md:gap-3">
              <div className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowSpeedMenu(!showSpeedMenu)}
                  className="text-white text-xs md:text-sm"
                >
                  {playbackSpeed}x
                </Button>
                {showSpeedMenu && (
                  <div className="absolute bottom-full right-0 mb-2 bg-card rounded-lg shadow-lg p-2 min-w-[80px]">
                    {speedOptions?.map((speed) => (
                      <button
                        key={speed}
                        onClick={() => changePlaybackSpeed(speed)}
                        className={`w-full px-3 py-2 text-sm rounded hover:bg-muted transition-colors ${
                          playbackSpeed === speed ? 'bg-primary text-primary-foreground' : ''
                        }`}
                      >
                        {speed}x
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={toggleFullscreen}
                className="w-8 h-8 md:w-10 md:h-10"
              >
                <Icon name={isFullscreen ? 'Minimize' : 'Maximize'} size={18} color="#FFFFFF" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;