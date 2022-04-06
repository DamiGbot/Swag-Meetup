import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

const MeetupList = (props) => {
	return (
		<ul className={classes.list}>
			{props.meetups.map((meetup) => (
				<MeetupItem />
			))}
		</ul>
	);
};

export default MeetupList;
