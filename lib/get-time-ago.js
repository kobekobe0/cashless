export default function getTimeAgo(date) {
  const now = new Date();
  const diff = now - date;
  const seconds = diff / 1000;
  if (seconds < 60) {
    return `${Math.floor(seconds)}s`;
  }
  const minutes = seconds / 60;
  if (minutes < 60) {
    return `${Math.floor(minutes)}m`;
  }
  const hours = minutes / 60;
  if (hours < 24) {
    return `${Math.floor(hours)}h`;
  }
  const days = hours / 24;
  if (days < 30) {
    return `${Math.floor(days)}d`;
  }
  const months = days / 30;
  if (months < 12) {
    return `${Math.floor(months)}mo`;
  }
  const years = months / 12;
  return `${Math.floor(years)}y`;
}