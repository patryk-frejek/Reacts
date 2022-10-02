import React from "react";
import "./footer.css";
import Copyright from "../copyright/Copyright";

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
				<Copyright  year="202X"/>
			</footer>
		</div>
	);
}
export default Footer;
