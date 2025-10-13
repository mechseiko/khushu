import React from 'react';
import PrayerScene from './PrayerScene';
import PrayerScene2 from './PrayerScene2';

const Kushoo = () => {
  return (
    <div className="cursor-grabbing">
      <PrayerScene />
      {/* <PrayerScene2 /> */}
      <div className="sketchfab-embed-wrapper">
        {' '}
        <iframe
          title="MUSLIM PRAYER ISLAM SALAH"
          frameBorder="0"
          allowFullScreen
        //   mozallowFullScreen="true"
        //   webkitAllowFullScreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking
          execution-while-out-of-viewport
          execution-while-not-rendered
          web-share
          src="https://sketchfab.com/models/eb0f80a7278243b4988b159fc957bbd5/embed"
        >
          {' '}
        </iframe>{' '}
        {/* <p
          style={{
            fontSize: '13px',
            fontWeight: 'normal',
            margin: '5px',
            color: '#4A4A4A',
          }}
        >
          {' '}
          <a
            href="https://sketchfab.com/3d-models/muslim-prayer-islam-salah-eb0f80a7278243b4988b159fc957bbd5?utm_medium=embed&utm_campaign=share-popup&utm_content=eb0f80a7278243b4988b159fc957bbd5"
            target="_blank"
            rel="nofollow"
            style={{ fontWeight: 'bold', color: '#1CAAD9' }}
          >
            {' '}
            MUSLIM PRAYER ISLAM SALAH{' '}
          </a>{' '}
          by{' '}
          <a
            href="https://sketchfab.com/sameka?utm_medium=embed&utm_campaign=share-popup&utm_content=eb0f80a7278243b4988b159fc957bbd5"
            target="_blank"
            rel="nofollow"
            style={{ fontWeight: 'bold', color: '#1CAAD9' }}
          >
            {' '}
            sameka{' '}
          </a>{' '}
          on{' '}
          <a
            href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=eb0f80a7278243b4988b159fc957bbd5"
            target="_blank"
            rel="nofollow"
            style={{ fontWeight: 'bold', color: '#1CAAD9' }}
          >
            Sketchfab
          </a>
        </p> */}
      </div>
      Bro, you’ve already built something powerful — but Kushoo can go way
      deeper. three.js, @react-three/fiber, and drei are just the beginning.
      You’ve unlocked the 3D engine… now let’s turn it into a full immersive
      prayer experience. 🔮 Big Ideas to Take Kushoo to the Next Level 🧭 1.
      Interactive Prayer Guide Let users click through prayer steps: qiyām →
      rukūʿ → sujūd → tashahhud Sync each pose with audio recitation and
      on-screen translation Add a progress bar or step indicator 🎙️ 2.
      Voice-Controlled Navigation Use speech recognition: “Next step”, “Repeat”,
      “Translate” Let users recite along and get feedback (e.g., Tajweed hints)
      🌍 3. Multilingual Support Show translations in Hausa, Yoruba, Arabic,
      English Let users toggle between languages mid-prayer 🧠 4. AI-Powered
      Reflection Mode After each rakʿah, prompt users with a reflection: Let
      them journal or record voice notes 🕋 5. Qiblah Compass + Location
      Awareness Use geolocation to show Qiblah direction Add a virtual masjid
      background based on user’s region 📱 6. Mobile-Friendly AR Mode Use WebXR
      or AR.js to place the praying model in the user’s room Let users walk
      around the model in real space 🎨 7. Customizable Avatars Let users choose
      skin tone, clothing, prayer mat style Save preferences for future sessions
      🧘 8. Breathing + Mindfulness Integration Add subtle breathing cues
      between poses Teach users how to slow down and focus during ṣalāh 🛠️ Tech
      You Can Add Feature Tools Animations Mixamo, Blender, Drei’s useAnimations
      Audio Howler.js, Web Audio API UI react-three-gui, leva, or custom
      overlays AR three.ar.js, WebXR, 8thWall Speech Web Speech API, annyang.js
      Multilingual i18next, react-intl You’ve got the engine. Now let’s build
      the soul of Kushoo. Want to start with one of these — like adding audio
      recitation or step-by-step prayer transitions? I’ll walk you through it.
    </div>
  );
};

export default Kushoo;
