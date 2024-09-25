function timeTrip(date) {
    let dday = new Date();
    let diffdate = date - dday;
    diffdate = new Date(diffdate);
    let day = diffdate.getUTCDate()
    let hour = diffdate.getHours()
    let minutes = diffdate.getMinutes()
    if (minutes) {
        if (minutes != 1) {
            minutes = `${minutes} minutes`
        } else {
            minutes = `${minutes} minute`
        }
    }
    if (hour) {
        if (hour != 1) {
            hour = `${hour} heures`
        } else {
            hour = `${hour} heure`
        }
    }
    if (day) {
        if (day != 1) {
            day = `${day} jours`
        } else {
            day = `${day} jour`
        }
    }
    return (`Départ dans ${day}, ${hour} et ${minutes}`);
}

let testDate = new Date("2024-09-25T12:00:22.588Z")
console.log(timeTrip(testDate));

module.exports = { timeTrip };