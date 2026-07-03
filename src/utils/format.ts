export const formatGuestName = (value: string | undefined) => {
  if (!value) return 'Dear Guest';
  const guest = value.replace(/[-_]/g, ' ').trim();
  return `Dear, ${guest
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')}`;
};

export const getCountdown = (date: string) => {
  const target = new Date(date).getTime();
  const now = Date.now();
  const diff = Math.max(target - now, 0);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
};
