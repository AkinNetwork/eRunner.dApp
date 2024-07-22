/* 
@component Akin Network Logo
@author: Margareta.Sandor@akin.network
Powered by @AkinTechLab
*/

import AkinNetworkLogo from "./../svg/AkinNetworkLogo";

const copyright = "©Powered by Akin Network <br/> 2022-2025";

function Copyright() {
  return (
    <div className="copyright">
      <p className="footnote" dangerouslySetInnerHTML={{ __html: copyright }} />
      <AkinNetworkLogo />
    </div>
  );
}

export default Copyright;
