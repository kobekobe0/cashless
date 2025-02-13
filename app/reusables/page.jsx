import AlternativeBtn from "@/components/reusables/buttons/alternative";
import PrimaryBtn from "@/components/reusables/buttons/primary";
import SecondaryBtn from "@/components/reusables/buttons/secondary";
import { PrimaryLabel } from "@/components/reusables/typography/Typography";
import FormExample from "./formsamples";
import SearchField from "@/components/reusables/search-field/searchField";
import ModalSample from "./modalsample";
import ToastSample from "./toastsample";

const Reusables = () => {
  return (
    <div className="w-full flex flex-col items-center gap-8 py-10">
        <div className="p-6 bg-white shadow-lg rounded-lg w-full max-w-2xl text-center">
            <h2 className="mb-6 font-semibold text-2xl text-gray-800">Tailwind Configuration</h2>
            
            <PrimaryLabel className="text-gray-600 text-sm mb-4">Add the following in <code>tailwind.config.mjs</code>:</PrimaryLabel>
            <pre className="bg-gray-100 p-4 rounded-lg text-left text-sm text-gray-800 overflow-auto">
                {`
                    theme: {
                        extend: {
                        fontFamily: {
                            poppins: ["Poppins", "sans-serif"],
                        },
                        colors: {
                            primary: "#100389",
                            secondary: "#292D35",
                            blueDark: "#1E325C",
                            deepBlue: "#3949AB",
                            lightBlue: "#C9E5EC",
                            yellowGold: "#FDD116",
                            lightRed: "#FF1717",
                        },
                        fontSize: {
                            "primary-title": ["32px", { fontWeight: "bold", lineHeight: "1.2" }],
                            "secondary-title": ["28px", { fontWeight: "bold", lineHeight: "1.2" }],
                            "primary-content": ["16px", { fontWeight: "500", lineHeight: "1.5" }],
                            "secondary-content": ["14px", { fontWeight: "400", lineHeight: "1.5" }],
                            "button": ["13px", { fontWeight: "500" }],
                            "action-link": ["16px", { fontWeight: "500", textTransform: "uppercase" }],
                            "content-link": ["14px", { fontWeight: "400", textDecoration: "underline" }],
                        },
                        },
                    }`
                }
            </pre>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg w-full max-w-2xl text-center">
            <h2 className="mb-6 font-semibold text-2xl text-gray-800">Reusable Buttons</h2>
            
            <PrimaryLabel className="text-gray-600 text-sm mb-4">Props to be passed:</PrimaryLabel>
            <ul className="text-gray-700 text-sm mb-6">
            <li><span className="font-semibold">text</span> - display text</li>
            <li><span className="font-semibold">onClick</span> - function to trigger</li>
            <li><span className="font-semibold">disabled</span> - boolean value</li>
            </ul>

            <div className="flex flex-wrap justify-center gap-6">
            <PrimaryBtn text="<PrimaryBtn/>" />
            <SecondaryBtn text="Secondary" />
            <AlternativeBtn text="Alternative" />
            <PrimaryBtn disabled={true} text="Disabled" />
            </div>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg w-full max-w-2xl text-center">
            <h2 className="mb-6 font-semibold text-2xl text-gray-800">Input w/ Labels</h2>
            
            <PrimaryLabel className="text-gray-600 text-sm mb-4">Props to be passed:</PrimaryLabel>
            <ul className="text-gray-700 text-sm mb-6 text-left w-full max-w-md mx-auto">
                <li className="mb-2"><span className="font-semibold">label</span>: Displays the label text above the input field.</li>
                <li className="mb-2"><span className="font-semibold">description</span>: Adds a short description under the label.</li>
                <li className="mb-2"><span className="font-semibold">placeholder</span>: Shows a hint inside the input field.</li>
                <li className="mb-2"><span className="font-semibold">type</span>: Defines the type of input (text, email, number, etc.).</li>
                <li className="mb-2"><span className="font-semibold">name</span>: Identifies the input field for forms.</li>
                <li className="mb-2"><span className="font-semibold">value</span>: Controls the input field value.</li>
                <li className="mb-2"><span className="font-semibold">onChange</span>: Handles value changes.</li>
                <li className="mb-2"><span className="font-semibold">required</span>: Marks the field as required.</li>
                <li className="mb-2"><span className="font-semibold">min/max</span>: Defines min/max values for number/date types.</li>
                <li className="mb-2"><span className="font-semibold">error</span>: Displays an error message if validation fails.</li>
                <li className="mb-2"><span className="font-semibold">disabled</span>: Disables the input field.</li>
            </ul>
            <FormExample />
        </div>

        <div className="p-6 bg-white shadow-lg rounded-lg w-full max-w-2xl text-center">
            <h2 className="mb-6 font-semibold text-2xl text-gray-800">Search Field</h2>
            
            <PrimaryLabel className="text-gray-600 text-sm mb-4">Props to be passed:</PrimaryLabel>
            <ul className="text-gray-700 text-sm mb-6">
            <li><span className="font-semibold">placeholder</span> - display text</li>
            <li><span className="font-semibold">value</span> - value state</li>
            <li><span className="font-semibold">onChange</span> - function to change value state</li>
            <li><span className="font-semibold">onSearch</span> - function to trigger search</li>
            </ul>

            <div className="flex flex-wrap justify-center gap-6">
                <SearchField placeholder="Search..." />
            </div>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg w-full max-w-2xl text-center">
            <h2 className="mb-6 font-semibold text-2xl text-gray-800">Modal Component</h2>
            
            <PrimaryLabel className="text-gray-600 text-sm mb-4">Props to be passed:</PrimaryLabel>
            <ul className="text-gray-700 text-sm mb-6">
                <li><span className="font-semibold">isOpen</span> - boolean to control modal visibility</li>
                <li><span className="font-semibold">onClose</span> - function to handle closing the modal</li>
                <li><span className="font-semibold">title</span> - string for the modal header title</li>
                <li><span className="font-semibold">children</span> - dynamic content for the modal body</li>
                <li><span className="font-semibold">footer</span> - optional JSX for modal buttons section</li>
            </ul>

            <div className="flex flex-wrap justify-center gap-6">
                <ModalSample/>
            </div>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-lg w-full max-w-2xl text-center">
            <h2 className="mb-6 font-semibold text-2xl text-gray-800">ToastContainer Component</h2>

            <PrimaryLabel className="text-gray-600 text-sm mb-4">How to use:</PrimaryLabel>
            <ul className="text-gray-700 text-sm mb-6 text-left">
                <li><span className="font-semibold">ToastContainer</span> - Wraps your app to enable toast notifications.</li>
                <li><span className="font-semibold">useToast()</span> - A hook to trigger success and error toasts.</li>
            </ul>

            <pre className="text-xs bg-gray-100 p-4 rounded-md text-left w-full max-w-xl overflow-x-auto">
                {`// 1. Wrap your app with ToastContainer
                import { ToastContainer } from "@/components/reusables/validation/toast";

                function App() {
                return (
                    <ToastContainer position="top-right">
                    {/* Other components */}
                    </ToastContainer>
                );
                }`}
            </pre>

            <pre className="text-xs bg-gray-100 p-4 rounded-md text-left w-full max-w-xl overflow-x-auto mt-4">
                {`// 2. Use the useToast hook in your components
                import { useToast } from "@/components/reusables/validation/toast";

                function MyComponent() {
                const showToast = useToast(); // Get toast function

                return (
                    <>
                    <button onClick={() => showToast("Success!", "success")}>
                        Show Success
                    </button>

                    <button onClick={() => showToast("Something went wrong!", "error")}>
                        Show Error
                    </button>
                    </>
                );
                }`}
            </pre>

            <div className="flex flex-wrap justify-center gap-6 mt-6">
                <ToastSample />
            </div>
        </div>

    </div>
  );
};

export default Reusables;
