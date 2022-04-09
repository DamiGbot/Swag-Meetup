import { useContext } from "react";

import FavoritesContext from "../../store/favorites-content";

import Card from "../UI/Card";
import classes from "./MeetupItem.module.css";

const MeetupItem = (props) => {
	const favoriteCtx = useContext(FavoritesContext);

	const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id);

	const toggleFavoriteStatusHandler = () => {
		if (itemIsFavorite) {
			favoriteCtx.removeFavorite(props.id);
		} else {
			favoriteCtx.addFavorite({
				id: props.id,
				title: props.title,
				description: props.description,
				image: props.image,
				address: props.address,
			});
		}
	};

	return (
		<li className={classes.item}>
			<Card>
				<div className={classes.image}>
					<img alt={props.title} src={props.image} />
				</div>

				<div className={classes.content}>
					<h3>{props.title}</h3>
					<address>{props.address}</address>
					<p>{props.description}</p>
				</div>

				<div className={classes.actions}>
					<button onClick={toggleFavoriteStatusHandler}>
						{itemIsFavorite ? "Remove from Favorites" : "To Favorites"}
					</button>
				</div>
			</Card>
		</li>
	);
};

export default MeetupItem;
