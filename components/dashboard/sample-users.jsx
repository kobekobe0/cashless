"use client"
//sample useQuery usage
//sample app based routing
//using "use client" is not ideal but it is required for the tanstack to work, so, every component that uses tanstack should be separated from the rest of the components
//for example, i want to display data from an api in a table, i will create a new table component (separated) and use "use client" in it and inside the table component, i will use the useQuery hook to fetch data from the api
//and just import the table component in the main component, just like what i did here

import { useQuery } from "@tanstack/react-query";

export default function SampleUsers() {
    const fetchData = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        return res.json();
    };

    const { data, error, isLoading } = useQuery({
        queryKey: ["posts"],
        queryFn: fetchData,
    });
    
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading data</p>;

    return (
        <ul className="space-y-2 mt-4">
            {data.slice(0, 5).map((post) => (
                <li key={post.id} className="p-3 bg-gray-100 rounded-lg">
                    {post.title}
                </li>
            ))}
        </ul>
    );
}