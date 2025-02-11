import Image from "next/image";

const Navbar = () => {
    return (
        <div className="bg-blue-900 text-white w-full py-5 fixed top-0 left-0 flex items-center px-6 z-50">
            <div className="flex items-center space-x-4">
                <Image src="/icons/LARLogo.SVG" alt="Left Icon" width={80} height={32} />
                <div className="text-center">
                    <span className="block text-sm">Republic of the Philippines</span>
                    <hr className="border-t border-white my-1" />
                    <span className="block text-sm">Department of Justice</span>
                    <span className="block text-lg font-bold">LAND REGISTRATION AUTHORITY</span>
                </div>
                <Image src="/icons/LARLogo.SVG" alt="Right Icon" width={80} height={32} />
            </div>
        </div>
    );
}


export default Navbar;
