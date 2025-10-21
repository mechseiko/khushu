import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { positions } from '../Position/Position';

const Positions = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timeOut = setTimeout(() => {
      navigate(
        `/positions/${(window.sessionStorage.getItem('position') || positions[0]).toLowerCase().replace(/\s+/g, '-')}`
      );
    }, 0);
    return () => clearTimeout(timeOut);
  }, []);
};

export default Positions;
