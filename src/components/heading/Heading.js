import React from "react";
import "./heading.css";

class Heading extends React.Component {
	constructor() {
		super();
		this.state = { link1: "link1" };
	}
	render() {
		return (
			<div>
				<nav>
					<h1>{this.props.headerTitle}</h1>
					<h2>{this.props.subTitle}</h2>
					<ul className="navigation">
						<li>Home</li>
						<li>Kontakt {this.props.companyData.email}</li>
						<li>Aktualności</li>
						<li>{this.state.link1}</li>
					</ul>
				</nav>
			</div>
		);
	}
}
export default Heading;
