'use client'

import Card from "@/components/reusables/cardContainer/card"
import Container from "@/components/reusables/cardContainer/container"
import { PrimaryLabel, SecondaryContent } from "@/components/reusables/typography/Typography"
import { useState } from "react";

const PayorDetails = ({ payor }) => {
    return (
        <Card className="bg-white gap-4 border-2 border-gray-200 shadow-xl rounded-md p-8 flex items-center justify-center flex-col w-full">
            <PrimaryLabel className="font-semibold">Payor's Details</PrimaryLabel>
            <hr />
            <Container className="flex flex-col w-full">
                <Container className="grid grid-cols-3 gap-x-4 items-center space-y-2">
                    <SecondaryContent className="font-semibold col-span-1">Payor's Name</SecondaryContent>
                    <SecondaryContent className="col-span-2">{payor?.name}</SecondaryContent>
                    
                    {/* Email with Tooltip */}
                    <SecondaryContent className="font-semibold col-span-1 flex items-center relative">
                        Email Address
                    </SecondaryContent>
                    <SecondaryContent className="col-span-2">{payor?.email}</SecondaryContent>

                    <SecondaryContent className="font-semibold col-span-1">Mobile Number</SecondaryContent>
                    <SecondaryContent className="col-span-2">{payor?.phone}</SecondaryContent>

                    <SecondaryContent className="font-semibold col-span-1">Address</SecondaryContent>
                    <SecondaryContent className="col-span-2">{payor?.address}</SecondaryContent>
                </Container> 
            </Container>
        </Card>
    );
};

export default PayorDetails;
