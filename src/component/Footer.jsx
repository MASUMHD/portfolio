const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center text-neutral-300   p-4">
        <aside>
          <p>
            Copyright © ${new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
