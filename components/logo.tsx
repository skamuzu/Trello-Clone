import Image from "next/image";
import Link from "next/link";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/" className="md:flex hidden items-center space-x-2">
      <Image
        src="/logo.png"
        alt="TrelloClone Logo"
        width={60}
        height={60}
        className={className}
      />
      <span className="font-bold text-2xl">TrelloClone</span>
    </Link>
  );
}