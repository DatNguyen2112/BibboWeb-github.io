import FooterBotLogo from "./footerbottom/footerbotlogo";
import Privacy from "./footerbottom/footerprivacy";
import FooterAvistor from "./footertop/footeradvistor";
import FooterCompany from "./footertop/footercompany";
import FooterConnect from "./footertop/footerconnect";
import FooterPrivacy from "./footertop/footerprivacy";

function Footer() {
   return (
     <div className="Footer">
       <div className="Footer-top">
         <FooterCompany />
         <FooterPrivacy />
         <FooterAvistor />
         <FooterConnect />
       </div>
       <div className="border-bottom"></div>
       <div className="Footer-bottom">
         <FooterBotLogo />
         <Privacy />
       </div>
     </div>
   );
}

export default Footer