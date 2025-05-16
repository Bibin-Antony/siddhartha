
/**
 * Helper function to replace a broken image with a fallback
 * 
 * @param event The error event from an image
 * @param fallbackSrc The fallback image URL to use
 */
export const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>, fallbackSrc: string) => {
  const target = event.currentTarget;
  target.src = fallbackSrc;
  target.onerror = null; // Prevent infinite loop if fallback also fails
};

/**
 * Fallback image sources by category
 */
export const fallbackImages = {
  hero: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070",
  campus: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2070",
  students: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2071",
  classroom: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070",
  doctor: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080",
  lab: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2070",
  generic: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1674",
  profile: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964",
  logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24' fill='none' stroke='%23047857' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 2L2 7l10 5 10-5-10-5z'/%3E%3Cpath d='M2 17l10 5 10-5'/%3E%3Cpath d='M2 12l10 5 10-5'/%3E%3C/svg%3E",
};
