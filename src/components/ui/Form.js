import { NewsletterContext, checkIfEmail } from "@/utils";
import { useContext, useRef } from "react";

const Form = () => {
	const { 
		setEmail, setFormSuccess, setDisplayError, displayError
	} = useContext(NewsletterContext);

	const emailRef = useRef();

	function handleSubmit(e) {
		e.preventDefault();
		// Checks if email input is valid
		const validEmail = checkIfEmail(emailRef.current.value);
		console.log(validEmail)
		if(validEmail) {
			setEmail(emailRef.current.value);
			setFormSuccess(true);
		} else {
			setDisplayError(true);
		}	
	}

	return (
	<form className="grid__sm" id="form">
		<div className="grid__sm">
			<div className="flex justify-between items-center">
				<label className="small" htmlFor="email">Email Address</label>
				<p className={`${!displayError && 'hidden'} small error__msg`}><span>Valid email required</span></p>
			</div>
		</div>

		<input 
			className={`p`} type="email" 
			id="email" placeholder="email@company.com" 
			ref={emailRef}
			required aria-required 
		/>
		<button className="btn time__elastic mt-4" onClick={(e) => handleSubmit(e)}>Subscribe to monthly newsletter</button>
	</form>
	)
};
export default Form;