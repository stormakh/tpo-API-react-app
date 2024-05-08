import { ReactNode } from "react";
import { Button } from "./ui/button";

interface DefaultButtonProps {
  text: string;
  icon_selected?: string;
  width?: string;
  height?: string;
}

export default function DefaultButton({
  text = "default",
  icon_selected,
  width = "52",
  height = "16",
}: DefaultButtonProps) {
  return (
    <Button
      className={`bg-black border-silk border-2 text-2xl text-white h-${height} w-${width}`}
    >
      <div className="pr-6">{text}</div>
    </Button>
  );
}
