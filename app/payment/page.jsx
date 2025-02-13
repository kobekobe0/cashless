import Card from "@/components/reusables/cardContainer/card";
import Container from "@/components/reusables/cardContainer/container";
import PaddedContainer from "@/components/reusables/containers/paddedContainer";
import { ButtonText, PrimaryLabel, PrimaryTitle, SecondaryContent } from "@/components/reusables/typography/Typography";
import Table from "./ui/Table";
import PayorDetails from "./ui/payorDetails";
import RequestDetails from "./ui/requestDetails";
import Notes from "./ui/notes";

const sample = {
    reqDetail: {
        urn: 1231231231231
    },
    payorDetail: {
        name: 'Juan Dela Cruz',
        email: 'juan@gmail.com',
        phone: '09123456789',
        address: '1234 Sample St., Sample City'
    },
    note: 'This is a sample note.',
    transactionDetail: [
        {
            ID: '123123',
            registryOfDeeds: 'Marikina City',
            EPEBno: [
                12121212,
                12121212,
                12121212
            ],
            lraFee: 1000,
            itFee: 1402,
            totalAmount: 2402
        },
        {
            ID: '134',
            registryOfDeeds: 'Marikina City',
            EPEBno: [
                12121212,
                12121212,
                12121212
            ],
            lraFee: 1000,
            itFee: 1402,
            totalAmount: 2402
        },
        {
            ID: '23',
            registryOfDeeds: 'Marikina City',
            EPEBno: [
                12121212,
                12121212,
                12121212
            ],
            lraFee: 1000,
            itFee: 1402,
            totalAmount: 2402
        },
    ]
}

const PaymentSummary = () => {
    return (
        <PaddedContainer className="mt-8">
            <PrimaryLabel className='mt-24'>Payment Summary Page</PrimaryLabel>
            <Container className="grid-cols-7 grid mt-12 space-x-2" >
                <Container className="col-span-2 space-y-4">
                    <RequestDetails request={sample.reqDetail} />
                    <PayorDetails payor={sample.payorDetail} />
                    <Notes note={sample.note} />
                </Container>
                <Container className="col-span-5">
                    <Table transactions={sample.transactionDetail} />
                </Container>
            </Container>
        </PaddedContainer>
    );
};

export default PaymentSummary;
