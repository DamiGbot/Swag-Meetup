import { useHistory } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetups = () => {
	const history = useHistory();

	const addMeetupHandler = (meetup) => {
		fetch(
			"https://react-getting-started-e621a-default-rtdb.firebaseio.com/meetups.json",
			{
				method: "POST",
				body: JSON.stringify(meetup),
				headers: {
					"Content-Type": "application/json",
				},
			}
		).then(() => {
			history.replace("/");
		});
	};

	return (
		<section>
			<h1>Add New Meetup</h1>

			<NewMeetupForm onAddMeetup={addMeetupHandler} />
		</section>
	);
};

export default NewMeetups;
