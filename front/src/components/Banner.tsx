

interface BannerProps {
  text: string;
  size? : string;
}

export default function Banner({ text, size = '60px' }: BannerProps) {
  return (
    <>
      <div className="relative" style={{height : `${size}`}}>
        <img
          src="src/assets/Banner.svg"
          alt="Banner"
          className="w-full h-full object-cover"
        />
        <p className="absolute top-1/2 left-1/2 text-white text-6xl transform -translate-x-1/2 -translate-y-1/2 font-roboto font-semibold italic text-nowrap">
          {text}
        </p>
      </div>
    </>
  );
}
