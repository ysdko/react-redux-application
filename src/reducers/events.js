import _ from 'lodash'
import {
	CREATE_EVENT,
	READ_EVENT,
	READ_EVENTS,
	DELETE_EVENTS,
	UPDATE_EVENT
} from '../actions'


export default (events = {}, action) => {
	switch (action.type) {
		case READ_EVENT:
		case UPDATE_EVENT:
		case CREATE_EVENT:
			console.log("test")
			const data = action.response.data
			return {...events, [data.id]: data}
		case READ_EVENTS:

			return _.mapKeys(action.response.data, 'id')
		case DELETE_EVENTS:
			delete events[action.id]
			return {...events}//更新後のevents
		default:
			return events
	}
}

