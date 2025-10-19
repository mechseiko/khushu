import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Positions = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timeOut = setTimeout(() => {
      navigate(
        `/positions/${localStorage.getItem('position').toLowerCase().replace(/\s+/g, '-')}`
      );
    }, 0);
    return () => clearTimeout(timeOut);
  }, []);
};

export default Positions;
