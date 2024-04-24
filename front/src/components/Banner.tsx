type BannerProps = {
  text: string;
};

export default function Banner({ text }: BannerProps) {
  return (
    <div>
      <div className="relative h-56">
        <img
          src="src/assets/Banner.svg"
          alt="Banner"
          className="w-full h-full object-cover"
        />
        <a className="absolute top-1/2 left-1/2 text-white text-7xl transform -translate-x-1/2 -translate-y-1/2 font-roboto font-semibold italic">
          {text}
        </a>
      </div>
    </div>
  );
}
