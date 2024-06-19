const Footer = () => {
  return (
    <div className="bg-rose-100 flex gap-x-6">
      <h5 className="mt-2 text-sm text-slate-500  tracking-wide align-element">
        &copy; {new Date().getFullYear()}
        <span> Adi Mars </span>
      </h5>
    </div>
  );
};

export default Footer;
