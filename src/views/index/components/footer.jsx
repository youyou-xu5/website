import "@/styles/footer.scss";
import { FaMapMarkerAlt, FaPhoneAlt, FaLine, FaWhatsapp, FaFacebookF, FaWeixin } from "react-icons/fa";

export default function Footer() {
  return (
      <footer className="footer">
        <div className="address_box">
            <FaMapMarkerAlt className="icon" color="black"/>
            <span> 123 Sukhumvit Rd, Bangkok, Thailand</span>
        </div>
        <div className="footer_list">
    
        <div className="footer_item">
            <FaPhoneAlt className="icon" color="black"/>
            <span> +66 1234 5678</span>
        </div>
        <div className="footer_item">
            <FaLine className="icon" color="black"/>
            <span> @yourlineid</span>
        </div>
        <div className="footer_item">
            <FaWhatsapp className="icon" color="black"/>
            <span>+66 9876 5432</span>
        </div>
        <div className="footer_item">
            <FaFacebookF className="icon" color="black"/>
            <span>yourfacebookid</span>
        </div>
        <div className="footer_item">
            <FaWeixin className="icon" color="black" />
            <span>yourwechatid</span>
        </div>
        </div>
    </footer>
  );
}