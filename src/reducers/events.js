import _ from 'lodash'
import { READ_EVENTS } from '../actions'


export default (events = {}, action) => {
	switch (action.type) {
		case READ_EVENTS:
			// [
			// 	{ "id": 1, "title": "Let's have an event 1!", "body": "This is the body for event 1." },
			// 	{ "id": 2, "title": "Let's have an event 2!", "body": "This is the body for event 2." }
			// ]
			console.log(action.response.data)
			return _.mapKeys(action.response.data, 'id')

		default:
			return events
	}
}

