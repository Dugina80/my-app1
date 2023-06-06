import "../../assets/styles/elements/Header.scss"

import Button from "../../elements/Button"
import Logo from "../../elements/Logo/Logo"


function Header() {
	return (
		<header className="header">
			<div className="container">
				<div className="header-block">
					<div className="header-logo">
						<Logo/>
					</div>
					<p className="header-text">Blog name</p>
				<div className='header-button-content'>
					<Button>
						
					</Button>
					<Button>

					</Button>
					<Button>

					</Button>
					<Button>

					</Button>
					<Button>

					</Button>
				</div>
				</div>
			</div>
		</header>
	)
}

export default Header