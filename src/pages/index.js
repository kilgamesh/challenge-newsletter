import { Newsletter, SuccessCard } from "@/components"
import { NewsletterContext } from "@/utils";
import Head from "next/head";
import { useState } from "react"

export default function Home() {
  const [ email, setEmail ] = useState('');
	const [ formSuccess, setFormSuccess ] = useState(false);
	const [ displayError, setDisplayError ] = useState(false);

	function resetStates() {
		setEmail('');
		setFormSuccess(false);
		setDisplayError(false);
	}
  return (
	<>
	<Head>
		<title>Newsletter Form Challenge by KRichmond</title>
		<meta property="og:title" content="Newsletter Form Challenge by KRichmond" key='title' />
		<meta property="og:description" content="FrontendMentor Newsletter challenge. Created with Nextjs and tailwindcss." />
	</Head>
	<main className="font-body">
		<NewsletterContext.Provider value={{
			email, setEmail, 
			formSuccess, setFormSuccess,
			displayError, setDisplayError, resetStates
		}}>
			{formSuccess
				? <SuccessCard />
				: <Newsletter />
			}
		</NewsletterContext.Provider>
	</main>
	</>
	)
}
