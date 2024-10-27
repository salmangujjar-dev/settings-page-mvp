import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Link
        href="settings"
        className="uppercase font-semibold shadow-sm border border-gray-300 rounded-md py-4 px-6 hover:bg-gray-300 hover:scale-125 ease-in-out transition-all"
      >
        Settings
      </Link>
    </div>
  );
}
