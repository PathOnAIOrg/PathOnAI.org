const Footer = () => {
    return (
      <footer className="relative px-4 py-6 bg-gray-100 dark:bg-gray-500 overflow-hidden">
        <div
          className="text-center text-sm text-gray-800 dark:text-gray-400"
          style={{
            marginTop: `1.3rem`,
            marginRight: `2.2rem`,
            paddingBottom: "0.3rem",
            float: "right",
          }}
        >
          © {new Date().getFullYear()}, Built by
          {` `}
          <a
            href="https://github.com/PathOnAI-org"
            className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600"
          >
            PathOnAI.org
          </a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  