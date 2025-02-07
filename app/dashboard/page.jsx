import SampleUsers from "@/components/dashboard/sample-users";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-5">
      <div className="flex items-center gap-4">
        <Link href="/">
          <button className="font-bold text-xl">{'<'}</button>
        </Link>
        <h1 className="text-2xl font-bold">Posts</h1>

      </div>
      <SampleUsers/>
    </div>
  );
}
