import Image from "next/image";

const Navbar = () => {
    return (
        <div className="bg-[#0A1E72] text-white w-full py-5 fixed top-0 left-0 flex items-center justify-between px-6 z-50">
            {/* Left Section: Logos and Text */}
            <div className="flex items-center space-x-4">
                <Image src="/icons/LARLogo.SVG" alt="LRA Logo" width={80} height={32} />
                <div className="text-center">
                    <span className="block text-sm">Republic of the Philippines</span>
                    <hr className="border-t border-white my-1" />
                    <span className="block text-sm">Department of Justice</span>
                    <span className="block text-lg font-bold">LAND REGISTRATION AUTHORITY</span>
                </div>
                <Image src="/icons/digital-philippines.png" alt="Digital Philippines Logo" width={80} height={32} />
            </div>

            {/* Right Section: Check Payment Status */}
            <div className="ml-auto mr-20 mt-4"> 
                <a href="#" className="text-white text-sm hover:underline">
                    Check Payment Status
                </a>
            </div>
        </div>
    );
}

export default Navbar;
