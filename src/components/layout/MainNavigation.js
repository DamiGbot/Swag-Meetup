import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../../store/favorites-content";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
	const favoriteCtx = useContext(FavoritesContext);

	return (
		<header className={classes.header}>
			<div className={classes.logo}>Swag Meetups</div>
			<nav>
				<ul>
					<li>
						<Link to={"/"}>All Meetups</Link>
					</li>

					<li>
						<Link to={"/new-meetup"}>Add New Meetup</Link>
					</li>

					<li>
						<Link to={"/favorites"}>Favorites</Link>
						<span className={classes.badge}>{favoriteCtx.totalFavorites}</span>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainNavigation;
