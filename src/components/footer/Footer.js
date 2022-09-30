import React from "react";
import "./footer.css";

function Footer(props) {
	return (
		<div>
			<footer>
				<ul>
					<li>Regulamin</li>
					<li>FAQ</li>
					<li>O Nas</li>
					<li>
					Kontakt: {props.companyData.email}, {props.companyData.city} 
					</li>
				</ul>
			</footer>
		</div>
	);
}
export default Footer;
