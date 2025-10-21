import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import clsx from 'clsx';
import { Menu, X } from 'lucide-react';

import PrayerScene from '../../components/PrayerScene';
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
];

const Position = () => {
  const param = useParams().position;
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const normalize = (str) => str.toLowerCase().replace(/\s+/g, '-');

  const foundPosition = positions.find(
    (pos) => normalize(pos) === param
  );

  const storedPosition = window.sessionStorage.getItem('position');
  const position = normalize(
    foundPosition || storedPosition || positions[0]
  );

  window.sessionStorage.setItem('position', position);

  const Aside = () => (
    <div className="h-full overflow-y-auto no-scrollbar">
      <aside className="p-3 bg-muted text-dark w-52 h-full">
        <div className="flex items-end justify-end md:hidden" onClick={() => setSidebarOpen(false)} title="Close menu">
            <X size={20} />
        </div>
        {positions.map((pos, index) => {
          const slug = normalize(pos);
          const isActive = slug === position;
          const number =index+1
          return (
            <Link to={`/positions/${slug}`} key={index} onClick={() => setSidebarOpen(false)}>
              <h4
                className={clsx(
                  'pl-3 rounded-full md:w-[80%] w-full flex gap-2 items-center p-2 my-2 transition-all duration-300 ease-in-out',
                  {
                    'bg-primary text-light font-medium pl-7': isActive,
                    'hover:bg-primaryHover hover:pl-5 hover:text-light hover:*:border-light': !isActive,
                  }
                )}
              >
                <span className={`${isActive ? 'border-light' : 'border-primary'} rounded-full border-1 border-dotted px-1.5 py-0.5`}>{number.toString().padStart(2, '0')}</span>
                <span>{pos}</span>
              </h4>
            </Link>
          );
        })}
      </aside>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex flex-1 overflow-hidden">

        {/* Desktop Sidebar */}
        <div className="hidden md:block w-52 bg-muted">
          <Aside />
        </div>

        {/* Mobile Sidebar */}
        {sidebarOpen && (
          <>
            <div
              className="fixed inset-0"
              onClick={() => setSidebarOpen(false)}
            />
            <div className="fixed top-10 left-0 h-full z-30 bg-muted p-4 shadow-lg animate-asideBar">
              <Aside />
            </div>
          </>
        )}


        <main className="flex-1 flex flex-col md:flex-row overflow-y-auto p-4 gap-4">
          <section className="w-full md:w-1/2 overflow-y-auto no-scrollbar">
            <div className="md:hidden mb-4">
              <button onClick={() => setSidebarOpen(true)} title="Open menu">
                <Menu size={20} />
              </button>
            </div>

            <h4 className="text-2xl font-semibold mb-4 capitalize">
              Position: {position.replace(/-/g, ' ')}
            </h4>

            <div className="space-y-4 text-base leading-relaxed">
              
            </div>
          </section>

          <section className="w-full md:w-1/2 h-full">
            <PrayerScene position={position} height="100vh" />
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Position;
