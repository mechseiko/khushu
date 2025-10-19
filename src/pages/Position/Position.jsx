import { useLocation, useParams } from 'react-router-dom';
import PrayerScene from '../Lander/PrayerScene';
export const positions = [
  'Takbir',
  'Qiyam',
  'Ruku',
  "I'tidal",
  'Sujud',
  'Jalsa',
  '2nd Sujud',
  '2nd Qiyam',
  'Tashahhud',
  'Taslim',
  'rakah',
];

const Position = () => {
  const pathname = useLocation();
  console.log('pathname:', new Set(location.href.split('/')));
  console.log(
    'last pathname:',
    location.href.split('/')[location.href.split('/').length - 1]
  );
  const oldparams = useParams();
  console.log('oldparams:', oldparams);
  const params =
    positions
      .find(
        (position) =>
          position.toLowerCase().replace(/\s+/g, '-') ===
          oldparams.position.toLowerCase().replace(/\s+/g, '-')
      )
      .toLowerCase()
      .replace(/\s+/g, '-') || positions[0].toLowerCase().replace(/\s+/g, '-');
  console.log('params:', params);
  const position = params;

  return (
    <div title={position}>
      {position}
      <PrayerScene position={position} />
    </div>
  );
};

export default Position;
