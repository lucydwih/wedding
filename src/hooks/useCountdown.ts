import { useEffect, useState } from 'react';
import { getCountdown } from '../utils/format';

export function useCountdown(date: string) {
  const [countdown, setCountdown] = useState(() => getCountdown(date));

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountdown(getCountdown(date));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [date]);

  return countdown;
}
