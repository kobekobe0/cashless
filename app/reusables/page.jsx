import AlternativeBtn from "@/components/reusables/buttons/alternative";
import PrimaryBtn from "@/components/reusables/buttons/primary";
import SecondaryBtn from "@/components/reusables/buttons/secondary";
import { PrimaryLabel } from "@/components/reusables/typography/Typography";

const Reusables = () => {
  return (
    <div className="w-full flex flex-col items-center  py-10">
      <div className="p-6 bg-white shadow-lg rounded-lg w-full max-w-2xl text-center">
        <h2 className="mb-6 font-semibold text-2xl text-gray-800">Reusable Buttons</h2>
        
        <PrimaryLabel className="text-gray-600 text-sm mb-4">Props to be passed:</PrimaryLabel>
        <ul className="text-gray-700 text-sm mb-6">
          <li><span className="font-semibold">text</span> - display text</li>
          <li><span className="font-semibold">onClick</span> - function to trigger</li>
          <li><span className="font-semibold">disabled</span> - boolean value</li>
        </ul>

        <div className="flex flex-wrap justify-center gap-6">
          <PrimaryBtn text="Primary" />
          <SecondaryBtn text="Secondary" />
          <AlternativeBtn text="Alternative" />
          <PrimaryBtn disabled={true} text="Disabled" />
        </div>
      </div>

      <div>
        other components
      </div>
    </div>
  );
};

export default Reusables;
