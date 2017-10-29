
const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export default (len) => {

    let text = '';

    for (let i = 0; i < len; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return text;

}
