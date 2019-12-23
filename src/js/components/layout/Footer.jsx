import React from 'react';

const Footer = () => {
  const footerStyles = {
    marginTop: 30,
  };

  return (
    <footer style={footerStyles}>
      <div className="row">
        <div className="row">
          <p>Copyright &copy; PerfectTodos.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
