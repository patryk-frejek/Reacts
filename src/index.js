import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Footer from "./components/footer/Footer";
import Heading from "./components/heading/Heading";
import Gallery from "./components/gallery/Gallery";
import reportWebVitals from "./reportWebVitals";
const companyData = {
	email: "contact@example.com",
	city: "Warsaw",
	street: "Ujazdowskie",
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Heading
			companyData={companyData}
			headerTitle="Witamy na stronie"
			subTitle="prosimy jednak stąd wyjść."
		/>
		<Gallery />
		<Footer companyData={companyData} contactEmail="admin@example.com" />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
