import Card from "@/components/reusables/cardContainer/card"
import { PrimaryLabel, SecondaryContent } from "@/components/reusables/typography/Typography"
import Container from "@/components/reusables/cardContainer/container"

const RequestDetails = ({request}) => {
    return (
        <Card className="bg-white gap-4 border-2 border-gray-200 shadow-xl rounded-md p-8 flex items-center justify-center flex-col w-full">
            <PrimaryLabel className="font-semibold">Request Details</PrimaryLabel>
            <hr />
            <Container className="flex flex-col w-full">
                <Container className="flex flex-col gap-4">
                    <PrimaryLabel className="font-semibold">Unique Reference Number</PrimaryLabel>
                    <SecondaryContent>{request.urn}</SecondaryContent>
                </Container>
            </Container>
        </Card>
    )
}

export default RequestDetails