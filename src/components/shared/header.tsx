import { SearchIcon, ShoppingCartIcon, UserIcon } from "lucide-react";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="container mx-auto py-4 px-4 flex items-center justify-between gap-6">
      <div className="flex-shrink-0">
        <Link
          href="/"
          className="text-2xl font-bold whitespace-nowrap font-mono hover:text-primary transition-colors"
        >
          ECOMMERCE DEMO
        </Link>
      </div>
      <div className="hidden md:block flex-1 max-w-2xl">
        <div className="rounded-lg border border-input bg-background px-3 py-2 flex items-center gap-2">
          <SearchIcon className="size-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search products..."
            className="flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
          />
        </div>
      </div>
      <nav className="flex items-center gap-6">
        <Link
          href="/account"
          className="flex flex-col items-center gap-1 hover:text-primary transition-colors"
        >
          <UserIcon className="size-6" />
          <span className="text-sm">Account</span>
        </Link>
        <Link
          href="/cart"
          className="flex flex-col items-center gap-1 hover:text-primary transition-colors"
        >
          <ShoppingCartIcon className="size-6" />
          <span className="text-sm">Cart</span>
        </Link>
      </nav>
    </header>
  );
};
