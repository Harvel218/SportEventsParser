export const createEventName = (participants: [string, string], divider: string) => {
	return `${participants.at(0)}${divider}${participants.at(1)}`;
};
