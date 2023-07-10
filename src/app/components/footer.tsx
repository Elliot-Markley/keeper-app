const date = new Date().getFullYear();

function Footer() {
  return (
    <div className="absolute bottom-0 w-full h-10">
      <p className="text-center text-[#ccc]">Copyright &copy; {date}</p>
    </div>
  );
}

export default Footer;
