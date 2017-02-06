/**
 * Created by MUSSAT on 16/01/2017.
 */

import {Driver} from './driver'
import {Message} from './message'
export{
    Driver,
    Message
}
/*
*@class  classe nom : ajax  fonction : enfant de super classe driver contient les fonction de gestion de message par ajax
 * @function getMessage
 * @function addMessage
 * @function removemessgae
 * @functionupdatemessage
 */
export class Ajax extends Driver {

    /*
     *@constructor le constructeur de la class ajax
     */
    constructor() {
        super();
    }

    addMessage(message) {
        let data = JSON.stringify({
            id: message.id,
            email: message.email,
            titre: message.titre,
            objet: message.objet,
            date: message.date
        });
        console.log(data);
        let xhr;
        if (window.XMLHttpRequest) xhr = new XMLHttpRequest();
        else xhr = new ActiveXObject("Microsoft.XMLHTTP");
        var url = "https://projet1-bb086.firebaseio.com/messages.json";
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send(data);
    }

    removeMessage(idMess) {
        $.ajax({
            url: 'https://projet1-bb086.firebaseio.com/messages.json' + '?key=' + idMess,
            type: 'DELETE',
            success: function (result) {
                // Do something with the result
            }
        });
    }

    updateMessage(message) {

    }


}