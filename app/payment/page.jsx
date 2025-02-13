'use client'

import Card from "@/components/reusables/cardContainer/card";
import Container from "@/components/reusables/cardContainer/container";
import PaddedContainer from "@/components/reusables/containers/paddedContainer";
import { ButtonText, PrimaryLabel, PrimaryTitle, SecondaryContent } from "@/components/reusables/typography/Typography";
import Table from "./ui/Table";
import PayorDetails from "./ui/payorDetails";
import RequestDetails from "./ui/requestDetails";
import Notes from "./ui/notes";
import PaymentCard from "./ui/paymentCard";
import SecondaryBtn from "@/components/reusables/buttons/secondary";
import PrimaryBtn from "@/components/reusables/buttons/primary";
import { useState } from "react";

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
    const [selectedPayment, setSelectedPayment] = useState(null);

    const paymentOptions = [
        {
          id: "card",
          icon: "https://placehold.co/200x100",
          label: "Debit/Credit",
          description: "A 1.5% processing fee will be added to your total fee.",
        },
        {
          id: "bank",
          icon: "https://placehold.co/200x100",
          label: "LandBank",
          description: "A 1.5% processing fee will be added to your total fee.",
        },
        {
          id: "ewallet",
          icon: "https://placehold.co/200x100",
          label: "E-Wallet",
          description: "A 1.5% processing fee will be added to your total fee.",
        },
    ];

    const handlePaymentSelect = (payment) => {
        setSelectedPayment(payment);
    };

    return (
        <PaddedContainer className="mt-8">
            <PrimaryLabel className='mt-24 text-2xl'>Payment Summary Page</PrimaryLabel>
            <Container className="grid-cols-7 grid mt-12" >
                <Container className="xl:col-span-2 col-span-7 space-y-4 mx-2">
                    <RequestDetails request={sample.reqDetail} />
                    <PayorDetails payor={sample.payorDetail} />
                    <Notes note={sample.note} />
                </Container>
                <Container className="xl:col-span-5 col-span-7 mx-2">
                    <Table transactions={sample.transactionDetail} />
                </Container>

                <Card className="bg-white my-4 mx-2 py-4 col-span-7 border-2 border-gray-200 shadow-xl mb-8 rounded-md mt-4 flex items-center justify-center flex-col w-full">
                    <PrimaryLabel className="font-semibold my-4">Select Payment Gateway</PrimaryLabel>
                    <hr className="h-1 w-1 bg-gray-400 border-t-2 dark:bg-gray-700" />
                    <Container className="flex flex-col w-full">
                        <Container className="grid grid-cols-3 px-8 gap-4 items-center">
                            {paymentOptions.map((option) => (
                                <PaymentCard
                                className='xl:col-span-1 col-span-3'
                                key={option.id}
                                icon={option.icon}
                                label={option.label}
                                description={option.description}
                                selected={selectedPayment === option.id}
                                onSelect={() => setSelectedPayment(option.id)}
                                />
                            ))}
                        </Container>
                        <Container className="flex gap-4 justify-center mt-16 mb-4">
                            <SecondaryBtn text="Cancel"/>
                            <PrimaryBtn text="Proceed"/>
                        </Container>
                    </Container>
                </Card>
            </Container>
            
            <SecondaryContent className="w-full text-center my-20">@ 2023 Land Registration Authority</SecondaryContent>
                
        </PaddedContainer>
    );
};

export default PaymentSummary;
