import moment from 'moment';

class Util {
    static validateDate(timestring) {
        if (moment(timestring).format("YYYY-M-D") === "Invalid date") {
            return true;
        }
        return false;
    }

    /**
     * Nicest SO answer I could find
     * http://stackoverflow.com/a/10835227
     */
    static isPositiveInteger(n) {
        return n >>> 0 === parseFloat(n);
    }
}

export default Util;