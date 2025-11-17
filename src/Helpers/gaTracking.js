/**
 * Pushes an event to Google Analytics using the dataLayer.
 *
 * If an event and user are provided, the function will push the event
 * and user_id to the dataLayer. If either the event or user are not
 * provided, the function will do nothing.
 *
 * @param {Object} args - The arguments object.
 * @param {string} args.event - The name of the event to track.
 * @param {Object} [args.payload] - The payload to track with the event.
 * @param {Object} args.user - The user object. The user_id will be
 *     extracted from this object.
 */
export default function gaTracking(args) {
    const { event, payload } = args
    if (event) {
        window.dataLayer.push({
            event: event,

            ...payload,
        })
    } else {
        return
    }
}
