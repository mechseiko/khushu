import { useParams } from 'react-router-dom';
import PrayerScene from '../../components/PrayerScene';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { Menu, X } from 'lucide-react';
import Header from '../../layouts/PageLayout/Header';
import Footer from '../../layouts/PageLayout/Footer';

export const positions = [
  'Takbir',
  'Qiyam',
  'Ruku',
  'Itidal',
  'Sujud',
  'Jalsa',
  '2nd Sujud',
  '2nd Qiyam',
  'Tashahhud',
  'Taslim',
  'Rakah',
];

const Position = () => {
  const params = useParams().position;
  const [sidebarOpen, setSidebarOpen] = useState(false);

  let position;
  const foundPosition = positions.find(
    (position) => position.toLowerCase().replace(/\s+/g, '-') === params
  );

  const storedPosition = window.sessionStorage.getItem('position');

  if (foundPosition) {
    position = foundPosition.toLowerCase().replace(/\s+/g, '-');
  } else if (storedPosition && storedPosition.trim() !== '') {
    position = storedPosition;
  } else {
    position = positions[0].toLowerCase().replace(/\s+/g, '-');
  }

  window.sessionStorage.setItem('position', position);

  const Aside = () => {
    return (
      <div className="h-full overflow-y-auto">
        <aside className="p-3 bg-muted text-dark w-52">
          <div className="flex items-end justify-end">
            <span
              className="md:hidden my-1"
              title="Menu"
              onClick={() => setSidebarOpen(false)}
            >
              <X size={20} />
            </span>
          </div>
          {positions.map((element, index) => {
            const item = element.toLowerCase().replace(/\s+/g, '-');
            return (
              <div key={index}>
                <Link to={`/positions/${item}`}>
                  <h4
                    className={`pl-3 hover:text-white rounded-full md:w-[80%] p-2 my-2 ${position === item ? 'bg-primary text-white font-medium pl-7' : 'hover:bg-primaryHover hover:pl-7'} transition-all duration-300 ease-in-out`}
                  >
                    {element}
                  </h4>
                </Link>
              </div>
            );
          })}
        </aside>
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex flex-1">
        {/* Desktop Sidebar */}
        <aside className={clsx('md:block hidden h-full')}>
          <Aside />
        </aside>

        {/* Mobile Sidebar */}
        {sidebarOpen && (
          <>
            <div
              className="fixed inset-0 bg-black bg-opacity-30 z-20"
              onClick={() => setSidebarOpen(false)}
            />
            <aside
              className={clsx(
                'fixed md:hidden animate-asideBar top-0 left-0 h-full w-[75%] sm:w-80 p-5 z-30 transition-transform duration-300 ease-in-out bg-muted'
              )}
            >
              <Aside />
            </aside>
          </>
        )}

        <main className="md:flex flex-1 w-full px-5 py-5 overflow-y-auto">
          <section className="no-scrollbar w-full md:w-1/2">
            <span
              className="md:hidden"
              title="Menu"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={20} />
            </span>
            <h4 className="text-2xl">Position: {position}</h4>
            Kushoo can go way deeper. three.js, @react-three/fiber, and drei are
            just the beginning. You’ve unlocked the 3D engine… now let’s turn it
            into a full immersive prayer experience. 🔮 Big Ideas to Take Kushoo
            to the Next Level 🧭 1. Interactive Prayer Guide Let users click
            through prayer steps: qiyām → rukūʿ → sujūd → tashahhud Sync each
            pose with audio recitation and on-screen translation Add a progress
            bar or step indicator 🎙️ 2. Voice-Controlled Navigation Use speech
            recognition: “Next step”, “Repeat”, “Translate” Let users recite
            along and get feedback (e.g., Tajweed hints) 🌍 3. Multilingual
            Support Show translations in Hausa, Yoruba, Arabic, English Let
            users toggle between languages mid-prayer 🧠 4. AI-Powered
            Reflection Mode After each rakʿah, prompt users with a reflection:
            Let them journal or record voice notes 🕋 5. Qiblah Compass +
            Location Awareness Use geolocation to show Qiblah direction Add a
            virtual masjid background based on user’s region 📱 6.
            Mobile-Friendly AR Mode Use WebXR or AR.js to place the praying
            model in the user’s room Let users walk around the model in real
            space 🎨 7. Customizable Avatars Let users choose skin tone,
            clothing, prayer mat style Save preferences for future sessions 🧘
            8. Breathing + Mindfulness Integration Add subtle breathing cues
            between poses Teach users how to slow down and focus during ṣalāh 🛠️
            Tech You Can Add Feature Tools Animations Mixamo, Blender, Drei’s
            useAnimations Audio Howler.js, Web Audio API UI react-three-gui,
            leva, or custom overlays AR three.ar.js, WebXR, 8thWall Speech Web
            Speech API, annyang.js Multilingual i18next, react-intl You’ve got
            the engine. Now let’s build the soul of Kushoo. Want to start with
            one of these — like adding audio recitation or step-by-step prayer
            transitions? I’ll walk you through it.
          </section>
          <section className="w-full md:w-1/2">
            <PrayerScene position={position} height="100vh" />
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Position;
