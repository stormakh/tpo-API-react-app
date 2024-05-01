import { Separator } from "./ui/separator";

interface HeaderProps{
    text: string;
    height?: string;
    width?: string;
}

export default function SectionTitle({text, height, width} : HeaderProps){
    return (
        <div className={` text-4xl font-medium flex justify-center h-${height} w-${width}`} >
            <div className="content-center text-nowrap pr-12">
                {text}
            </div>
            <div className="w-full flex flex-row justify-center items-center pt-3">
                <Separator className="bg-chiro-nopay w-full"></Separator>
            </div>
        </div> 
    );
}