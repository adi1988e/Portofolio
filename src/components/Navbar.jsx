import { links } from "../assets/data";

const Navbar = () => {
  return (
    <nav className="bg-rose-100 sticky top-0 z-50">
      <div className="align-element py-4 flex flex-col sm:flex-row sm:gap-x-24 sm:items-center sm:py-8">
        <h2 className="text-3xl font-bold">
          Web<span className="text-rose-500">Dev</span>
        </h2>
        <div className="flex gap-x-6">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="capitalize text-lg -tracking-wide hover:text-rose-500 duration-300"
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
