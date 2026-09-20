export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="portfolio-footer">
      <div className="footer-inner">
        <div className="footer-content-centered">
          <h4 className="footer-name">Kyush Kumar</h4>
          <p className="footer-location">Patna, Bihar 📍</p>
          <span className="footer-copy">© {currentYear} Kyush Kumar. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
