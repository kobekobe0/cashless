import Image from "next/image";

const Navbar = () => {
    return (
        <div className="bg-primary text-white w-full py-4 fixed top-0 left-0 flex items-center px-6 shadow-md">
            {/* LRA Official Logo - Placeholder */}
            <Image 
                src="/icons/headerLogo.SVG" 
                alt="LRA Logo" 
                width={120} 
                height={120} 
                className="w-auto h-auto max-w-[100px] max-h-[100px]"
            />
        </div>
    );
}

export default Navbar;
