import {EventInterface, ParsedEventInterface} from '../interfaces';
import {createEventName} from '../utils';
export const basketballParser = (event: EventInterface): ParsedEventInterface => {
	if (!Array.isArray(event.score)) {
		throw new Error(`basketballParser: Wrong score has been provided, expected array but received: ${event.score}`);
	}
	const eventName = createEventName([event.participant1, event.participant2], ' - ');
	const eventScore = event.score.toString();
	return {name: eventName, score: eventScore};
};
