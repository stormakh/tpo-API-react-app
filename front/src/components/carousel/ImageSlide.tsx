
export interface ImageSlideProps {
    src: string
}


export default function ImageSlide({ src }: ImageSlideProps) {
  console.log(src)
    return (
      <div className="w-full h-full absolute ">
        <img src={src} alt="slide" className="object-cover w-full h-full absolute "  onError={(e) => console.error("Image failed to load:", e.currentTarget.src)} />
      </div>
    )};