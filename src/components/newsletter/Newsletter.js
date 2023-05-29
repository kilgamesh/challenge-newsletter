import Form from "../ui/Form";
import Header from "../ui/Header";

const Newsletter = () => {
	return (
	<section className="wrapper card" id="signup">
		<div className="content grid__md">
			<Header />
			<Form />
		</div>
		
		<img className="image__desktop" src="/illustration-sign-up-desktop.svg" alt="ui graphs" />
		<img className="image__mobile" src="/illustration-sign-up-mobile.svg" alt="ui graphs" />
	</section>)
	;
};
export default Newsletter;