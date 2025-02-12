// components/Navbar.jsx
import Image from "next/image";
import Container from "@/components/reusables/cardContainer/container";
import { PrimaryLabel, SecondaryTitle, ActionLink } from "@/components/reusables/typography/Typography";
import styles from "@/components/reusables/typography/Typography.module.css";

const Navbar = () => {
    return (
        <Container className="bg-primaryDark text-white w-full py-4 fixed top-0 left-0 flex items-center justify-between px-10 z-50">
            {/* Left Section: Logos and Text */}
            <Container className="flex items-center gap-4">
                <Image src="/icons/LARLogo.SVG" alt="LRA Logo" width={60} height={60} />
                
                <Container className={styles.whiteText}>
                    <PrimaryLabel>Republic of the Philippines</PrimaryLabel>
                    <hr className="border-t border-white my-1 w-full" />
                    <PrimaryLabel>Department of Justice</PrimaryLabel>
                    <SecondaryTitle className="font-bold">LAND REGISTRATION AUTHORITY</SecondaryTitle>
                </Container>

                <Image src="/icons/digital-philippines.png" alt="Digital Philippines Logo" width={60} height={60} />
            </Container>

            {/* Check Payment Status Button */}
            <Container className="ml-auto">
                <ActionLink className="text-actionLink">Check Payment Status</ActionLink>
            </Container>
        </Container>
    );
};

export default Navbar;

