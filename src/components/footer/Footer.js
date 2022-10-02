import React from "react";
import "./footer.css";
import Copyright from "../copyright/Copyright";

const elements = ["TOS","About","contact"];
const items = [];


function Footer(props) {
	for(const [index,value] of elements.entries())
	{
		items.push(<li>{value}</li>)
	}
	return (
		<div>
			<footer>
				<ul>
					{items}
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
