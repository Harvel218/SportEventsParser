import eventsData from './eventsData'
import { sportsEnum } from '../enums'
import { isEventValid, areEventsValid } from '../guards'
import { EventInterface, ParsedEventInterface } from '../interfaces'
import { basketballParser, handballParser, volleyballParser,soccerParser, tennisParser } from '../parsers'

const validatedEventsData = (eventsData: any[]):EventInterface[] => {
  if (areEventsValid(eventsData)) return eventsData

  const validatedEvents = eventsData.filter(event => isEventValid(event));

  if (areEventsValid(validatedEvents)) {
    return validatedEvents
  }

  throw new Error('invalid data received')
} 

const assignEventParsers = (event: EventInterface):ParsedEventInterface => {
  switch (event.sport) {
    case sportsEnum.soccer:
      return soccerParser(event)
    case sportsEnum.tennis:
      return tennisParser(event)
    case sportsEnum.basketball:
      return basketballParser(event)
    case sportsEnum.handball:
      return handballParser(event)
    case sportsEnum.volleyball:
      return volleyballParser(event)
  }
}

const getParsedEvents = (events: EventInterface[]):ParsedEventInterface[] => {
  const parsedEvents = events.map((event) => {
    return assignEventParsers(event)
  })
  return parsedEvents
}


console.log(getParsedEvents(validatedEventsData(eventsData)))

