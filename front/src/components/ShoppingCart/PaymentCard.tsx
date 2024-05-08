import paymentMethods from "@/mock/paymentMethods.json";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group";

export default function(){
    return (
        <ToggleGroup type="single" className="h-auto flex flex-col border-2 rounded-xl border-solid border-gray-300 mb-20 mt-20">
          {paymentMethods.map((method, index) => (
            <ToggleGroupItem key={index} value={method.title} aria-label={method.title} className="h-full w-full p-4 text-start">
              <div>
                <h3 className="text-2xl font-bold">{method.title}</h3>
                <p className="text-lg">{method.description}</p>
              </div>
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      )
}