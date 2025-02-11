import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <Link href={"/"}>
          <Image
            src="https://images.pexels.com/photos/20787/pexels-photo.jpg"
            alt="logo"
            width={100}
            height={100}
          />
        </Link>
      </div>
    </header>
  );
};
