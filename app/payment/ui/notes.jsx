import Card from "@/components/reusables/cardContainer/card"
import Container from "@/components/reusables/cardContainer/container"
import { PrimaryLabel, SecondaryContent } from "@/components/reusables/typography/Typography"

const Notes = ({note}) => {
    return (
        
        <Card className="bg-white gap-4 border-2 border-gray-200 shadow-xl rounded-md p-8 flex items-center justify-center flex-col w-full">
            <PrimaryLabel className="font-semibold">Notes</PrimaryLabel>
            <hr className="h-1 bg-gray-400 border-t-2 dark:bg-gray-700" />
            <Container className="flex flex-col w-full">
                <Container className="flex flex-col gap-4 items-center">
                    <SecondaryContent>{note}</SecondaryContent>
                </Container>
            </Container>
        </Card>
    )
} 

export default Notes