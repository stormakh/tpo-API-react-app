
interface ImageSlideProps {
    src: string
}


export default function ImageSlide({ src }: ImageSlideProps) {
    return (
      <div className="w-full h-full absolute ">
        <img src={src} alt="slide" className="object-cover w-full h-full absolute " />
      </div>
    )};