/* 
@component Footer
@author: Margareta.Sandor@akin.network
Powered by @AkinTechLab
*/

import Copyright from "./primes/Copyright";
import "./../css/components/Footer.css";

function Footer() {
  return (
    <footer className="footer cpadding">
      <Copyright />
    </footer>
  );
}

export default Footer;
