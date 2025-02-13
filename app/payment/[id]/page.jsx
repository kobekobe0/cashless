"use client";

import { useParams } from "next/navigation";

const Test = () => {
    const { id } = useParams(); // Fetch route params properly

    return (
        <div className="mt-24 text-2xl font-roboto font-semibold mx-auto px-8">{id}</div>
    );
};

export default Test;
