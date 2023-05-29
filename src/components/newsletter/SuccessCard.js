import { NewsletterContext } from "@/utils";
import { useContext } from "react";

const SuccessCard = () => {
	const { email, resetStates } = useContext(NewsletterContext);

	return (
	<section className="wrapper success" id="success">
		<div className="content grid__md">
			<svg className="icon icon__lg mb-10" 
				width="64" height="64" 
				viewBox="0 0 64 64">
					<defs><linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%"><stop offset="0%" stopColor="#FF6A3A"/><stop offset="100%" stopColor="#FF527B"/></linearGradient></defs><g fill="none"><circle cx="32" cy="32" r="32" fill="url(#a)"/><path stroke="#FFF" strokeWidth="4" d="m18.286 34.686 8.334 7.98 19.094-18.285"/></g>
			</svg>
			<h1 className="h1">Thanks for subscribing!</h1>
			<p className="p my-7">A confirmation email has been sent to <span className="font-bold">{email}</span>. 
			Please open it and click the button inside your subscription to 
			your subscription.</p>

			<button className="btn" onClick={resetStates}>Dismiss Message</button>
		</div>
	</section>
	)
};
export default SuccessCard;