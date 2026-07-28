const ExternalIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const PLATFORMS = {
  swiggy: {
    label: "Swiggy",
    cta: "Order Now",
    bg: "bg-[#ff5707]",
    logo: (
      <svg viewBox="0 0 60 60" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="60" height="60" rx="12" fill="white" />
        <text x="50%" y="56%" dominantBaseline="middle" textAnchor="middle" fontSize="11" fontWeight="800" fill="#ff5707" fontFamily="Arial, sans-serif">SWIGGY</text>
      </svg>
    ),
  },
  zomato: {
    label: "Zomato",
    cta: "Order Now",
    bg: "bg-[#ff3044]",
    logo: (
      <svg viewBox="0 0 60 60" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="60" height="60" rx="12" fill="white" />
        <text x="50%" y="56%" dominantBaseline="middle" textAnchor="middle" fontSize="10" fontWeight="800" fill="#ff3044" fontFamily="Arial, sans-serif">ZOMATO</text>
      </svg>
    ),
  },
  eazydiner: {
    label: "EazyDiner",
    cta: "Reserve Now",
    bg: "bg-[#c0392b]",
    logo: (
      <svg viewBox="0 0 60 60" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="60" height="60" rx="12" fill="white" />
        <text x="50%" y="56%" dominantBaseline="middle" textAnchor="middle" fontSize="8.5" fontWeight="800" fill="#c0392b" fontFamily="Arial, sans-serif">EAZYDINER</text>
      </svg>
    ),
  },
  district: {
    label: "District",
    cta: "Book Now",
    bg: "bg-[#1a1a2e]",
    logo: (
      <svg viewBox="0 0 60 60" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="60" height="60" rx="12" fill="white" />
        <text x="50%" y="56%" dominantBaseline="middle" textAnchor="middle" fontSize="10" fontWeight="800" fill="#1a1a2e" fontFamily="Arial, sans-serif">DISTRICT</text>
      </svg>
    ),
  },
} as const;

type PlatformKey = keyof typeof PLATFORMS;

interface OnlinePlatformCardProps {
  platform: PlatformKey;
  url: string;
}

const OnlinePlatformCard = ({ platform, url }: OnlinePlatformCardProps) => {
  const { label, cta, bg, logo } = PLATFORMS[platform];
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={`flex items-center justify-between p-4 ${bg} rounded-xl transition-all duration-300 shadow-md hover:shadow-lg group`}>
      <div className="flex items-center space-x-3">
        {logo}
        <div>
          <h3 className="text-lg font-bold text-white">{label}</h3>
          <p className="text-white/80 text-xs">{cta}</p>
        </div>
      </div>
      <span className="text-white text-xl group-hover:translate-x-1 transition-transform"><ExternalIcon /></span>
    </a>
  );
};

export default OnlinePlatformCard;
