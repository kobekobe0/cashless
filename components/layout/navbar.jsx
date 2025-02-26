import Image from "next/image";
import imageLoader from "@/lib/imageLoader"; // Adjust path if needed
import Container from "@/components/reusables/cardContainer/container";
import { PrimaryLabel, SecondaryTitle, ActionLink } from "@/components/reusables/typography/Typography";
import navbarConfig from "@/config/navbar/navbarConfig";

const Navbar = () => {
    
console.log("Navbar Config:", navbarConfig);

 
    return (
        <Container className="bg-primaryDark text-white w-full py-4 fixed top-0 left-0 grid grid-cols-[auto_1fr_auto] items-center px-10 z-50">
            {/* Left Section: Logos and Text */}
            <Container className="grid grid-cols-[auto_auto_auto] items-center gap-4">
                {/* Left Logo */}
                <Container className={navbarConfig.containerIcon.className}>
                    <Image 
                        src={navbarConfig.logos.left.src} 
                        alt={navbarConfig.logos.left.alt}
                        className={navbarConfig.logos.left.className} 
                        loader={imageLoader}  
                        unoptimized 
                        fill
                    />
                </Container>

                {/* Center Text */}
                <Container className="flex flex-col text-white text-center">
                    <PrimaryLabel className="!text-white">Republic of the Philippines</PrimaryLabel>
                    <hr className="border-t border-yellowAccent my-1 w-full" />
                    <PrimaryLabel className="!text-white">Department of Justice</PrimaryLabel>
                    <SecondaryTitle className="!text-white font-bold">LAND REGISTRATION AUTHORITY</SecondaryTitle>
                </Container>

                {/* Right Logo */}
                <Container className={navbarConfig.containerIcon.className}>
                    <Image 
                        src={navbarConfig.logos.right.src} 
                        alt={navbarConfig.logos.right.alt}
                        className={navbarConfig.logos.right.className} 
                        loader={imageLoader}  
                        unoptimized 
                        fill
                    />
                </Container>
            </Container>

            {/* Check Payment Status Button */}
            <Container className="justify-self-end">
                <ActionLink className="text-actionLink">Check Payment Status</ActionLink>
            </Container>
        </Container>
    );
};

export default Navbar;
