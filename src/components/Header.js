
import './header.css';

function Header({handleClickModal}) {
	return (
		<header className="header">
			<div className="info">
				<button className="info__button" onClick={handleClickModal}>i</button>
			</div>
			<h1 className="header__title">ppomodoro</h1>
			<div className="setting">
				{/* <div className="sfx">
					<input type="checkbox" id="sfx__button" name="sfx" value="1" checked />
					<label htmlFor="sfx__button">
						<i className="fa-solid fa-music"></i>
					</label>
				</div> */}
			</div>
		</header>
	)
}

export default Header