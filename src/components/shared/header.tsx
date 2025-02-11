import { SearchIcon, ShoppingCartIcon, UserIcon } from "lucide-react";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="py-4 flex items-center justify-between gap-10">
      <div className="">
        <Link
          href={"/"}
          className="text-2xl font-bold whitespace-nowrap font-mono"
        >
          ECOMMERCE DEMO
        </Link>
      </div>
      <div className="rounded-md border border-gray-300 p-2 flex items-center gap-2  w-full">
        <SearchIcon className="size-4" />
        <input
          type="text"
          placeholder="Search"
          className="outline-none rounded-3xl  w-full "
        />
      </div>
      <div className="flex items-center gap-4 ">
        <div className="flex flex-col items-center gap-1">
          <UserIcon className="size-6" />
          <p>Account</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <ShoppingCartIcon className="size-6" />
          <p>Cart</p>
        </div>
      </div>
    </header>
  );
};
