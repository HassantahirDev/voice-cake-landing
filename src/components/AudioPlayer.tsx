'use client';

import { useState, useRef } from 'react';

interface AudioSample {
  id: string;
  title: string;
  src: string;
  type: string;
}

const audioSamples: AudioSample[] = [
  {
    id: 'audio-1',
    title: 'Aspen - American',
    src: '/voices/Aspen - American.mp3',
    type: 'audio/mpeg'
  },
  {
    id: 'audio-2',
    title: 'Sam - American',
    src: '/voices/Sam - American.mp3',
    type: 'audio/mpeg'
  },
  {
    id: 'audio-3',
    title: 'American - Steve',
    src: '/voices/American - Steve.mp3',
    type: 'audio/mpeg'
  },
  {
    id: 'audio-4',
    title: 'Chloe',
    src: '/voices/Chloe.mp3',
    type: 'audio/mpeg'
  },
  {
    id: 'audio-5',
    title: 'American Women - Middle Age',
    src: '/voices/American-women-middleage.wav',
    type: 'audio/wav'
  },
  {
    id: 'audio-6',
    title: 'Chicago Bro',
    src: '/voices/Chicago-bro.wav',
    type: 'audio/wav'
  }
];

export default function AudioPlayer() {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement | null }>({});

  const handlePlay = (audioId: string) => {
    // Stop any currently playing audio
    if (playingId && playingId !== audioId) {
      const currentAudio = audioRefs.current[playingId];
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
    }

    const audio = audioRefs.current[audioId];
    if (audio) {
      if (playingId === audioId) {
        // If clicking the same audio, pause it
        audio.pause();
        audio.currentTime = 0;
        setPlayingId(null);
      } else {
        // Play the new audio
        audio.play();
        setPlayingId(audioId);
      }
    }
  };

  const handleAudioEnded = () => {
    setPlayingId(null);
  };

  const setAudioRef = (audioId: string) => (el: HTMLAudioElement | null) => {
    audioRefs.current[audioId] = el;
  };

  return (
    <section className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16 xl:px-10 py-8">
      <h3 className="text-[22px] font-bold heading-font">AI Voice Samples</h3>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-3">
        {audioSamples.map((sample) => (
          <div key={sample.id} className="audio-tile">
            <audio
              ref={setAudioRef(sample.id)}
              preload="none"
              onEnded={handleAudioEnded}
            >
              <source src={sample.src} type={sample.type} />
              Your browser does not support the audio element.
            </audio>
            <button
              className={`audio-btn ${playingId === sample.id ? 'playing' : ''}`}
              onClick={() => handlePlay(sample.id)}
              aria-label={`Play ${sample.title} Voice`}
            >
              {playingId === sample.id ? (
                <svg className="pause-icon size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" fill="white"/>
                </svg>
              ) : (
                <svg className="play-icon size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                  <path d="M7 4v16l13-8-13-8z" fill="white"/>
                </svg>
              )}
            </button>
            <h4 className="font-bold">{sample.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
