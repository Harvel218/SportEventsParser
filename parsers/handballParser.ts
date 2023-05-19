import {EventInterface, ParsedEventInterface} from '../interfaces';
import {createEventName} from '../utils';
export const handballParser = (event: EventInterface): ParsedEventInterface => {
	if (typeof event.score !== 'string') {
		throw new Error(
			`handballParser: Wrong score has been provided, expected string but received: ${event.score}`
		);
	}
	const eventName = createEventName([event.participant1, event.participant2], ' vs ');
	const eventScore = event.score;
	return {name: eventName, score: eventScore};
};
