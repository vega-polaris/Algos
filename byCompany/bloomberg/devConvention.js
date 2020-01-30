/* devs are coming from all over country to an event. Event has 2 locations: NY and SF. Devs are distributed between the locations equally (or one has one extra person). Given for each dev the price of bringing them to each of the locations, how to distribute them between the two locations?
 */

const attendees = [
    { name: 'Dan', nyPrice: 100, sfPrice: 50 },
    { name: 'Emma', nyPrice: 0, sfPrice: 700 },
    { name: 'Rose', nyPrice: 720, sfPrice: 0 },
    { name: 'Jane', nyPrice: 500, sfPrice: 500 },
    { name: 'Grace', nyPrice: 200, sfPrice: 100 },
]

const distributeDevs = attendees => {
    // how many should be in each place?
    const average = Math.round(attendees.length / 2)
    let nyDevs = []
    let sfDevs = []
    // loop through whole array and send people to their cheaper place
    attendees.forEach(attendee => {
        if (attendee.nyPrice < attendee.sfPrice) {
            attendee.difference = attendee.sfPrice - attendee.nyPrice
            nyDevs.push(attendee)
        } else {
            attendee.difference = attendee.nyPrice - attendee.sfPrice
            sfDevs.push(attendee)
        }
    })
    // if one town has too many...
    if (nyDevs.length > average) {
        // sort by the difference key and move the spare devs to the other location
        nyDevs = sort(nyDevs)
        // how many spares?
        const NumToMove = nyDevs.length - average
        sfDevs = [...sfDevs, ...nyDevs.splice(average - 1, NumToMove)]
    } else if (sfDevs.length > average) {
        sfDevs = sort(sfDevs)
        // how many spares?
        const NumToMove = sfDevs.length - average
        nyDevs = [...nyDevs, ...sfDevs.splice(average - 1, NumToMove)]
    }
}

function sort(values) {
    var origValues = values.slice()
    var length = origValues.length - 1
    do {
        var swapped = false
        for (var i = 0; i < length; ++i) {
            if (origValues[i].difference > origValues[i + 1].difference) {
                var temp = origValues[i]
                origValues[i] = origValues[i + 1]
                origValues[i + 1] = temp
                swapped = true
            }
        }
    } while (swapped === true)
    return origValues
}

distributeDevs(attendees)
