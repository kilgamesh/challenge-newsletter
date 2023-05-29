const liStyles = "flex items-center p";
const Header = () => {
	return (
	<header className="grid__md">
		<h1 className="h1">Stay updated!</h1>
		<p className="p">Join 60,000+ product managers receiving monthly updates on:</p>
		<ul role="list" className="grid__sm mt-3 mb-7">
			<li className={liStyles}>
				<svg className="icon icon__sm mr-7" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g fill="none"><circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155"/><path stroke="#FFF" strokeWidth="2" d="M6 11.381 8.735 14 15 8"/></g></svg>
				<p className="p">Product discovery and building what matters</p>
			</li>

			<li className={liStyles}>
				<svg className="icon icon__sm mr-7" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g fill="none"><circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155"/><path stroke="#FFF" strokeWidth="2" d="M6 11.381 8.735 14 15 8"/></g></svg>
				<p className="p">Measuring to ensure updates are a success</p>
			</li>

			<li className={liStyles}>
				<svg className="icon icon__sm mr-7" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g fill="none"><circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155"/><path stroke="#FFF" strokeWidth="2" d="M6 11.381 8.735 14 15 8"/></g></svg>
				<p className="p">And much more!</p>
			</li>
		</ul>
	</header>
	)
};
export default Header;