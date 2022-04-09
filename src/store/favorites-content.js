import React, { useState } from "react";

const FavoritesContext = React.createContext({
	favorites: [],
	totalFavorites: 0,
	addFavorite: (favoriteMeetup) => {},
	removeFavorite: (meetupId) => {},
	itemIsFavorite: (meetupId) => {},
});

export const FavoritesContextProvider = (props) => {
	const [userFavorites, setUserFavorites] = useState([]);

	const addFavoriteHandler = (favoriteMeetup) => {
		const result = [...userFavorites, favoriteMeetup];
		setUserFavorites(result);
	};

	const removeFavoriteHandler = (meetupId) => {
		const result = userFavorites.filter((meetup) => meetup.id !== meetupId);
		setUserFavorites(result);
	};

	const itemIsFavoriteHandler = (meetupId) => {
		return userFavorites.some((meetup) => meetup.id === meetupId);
	};

	const context = {
		favorites: userFavorites,
		totalFavorites: userFavorites.length,
		addFavorite: addFavoriteHandler,
		removeFavorite: removeFavoriteHandler,
		itemIsFavorite: itemIsFavoriteHandler,
	};

	return (
		<FavoritesContext.Provider value={context}>
			{props.children}
		</FavoritesContext.Provider>
	);
};

export default FavoritesContext;
