class Utils {

static generateRandomString(length) {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let randString= '';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        randString += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return randString;
  }

static generateRandomNumbers(length) {
    const characters ='0123456789';
    let randString= '';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        randString += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return randString;
}


}

module.exports.Utils = Utils;