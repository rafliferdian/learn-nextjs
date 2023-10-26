import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex justify-between p-4 items-center text-color-primary">
      <h1 className="text-2xl font-bold">{title}</h1>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="text-sm underline hover:text-color-accent transition-all md:text-xl"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};
export default Header;