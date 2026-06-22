"use strict";
// typescript datatypes
// 1 string,number,boolean,any,never,unknown,
function makepayment(paymentmethod) {
    switch (paymentmethod) {
        case "UPI":
            console.log("paymentmethod choosen:UPI");
            break;
        case "creditcard":
            console.log("paymentmethod choosen:creditcard");
            break;
        case "paypalcard":
            console.log("paymentmethod choosen:paypalcard");
            break;
    }
}
makepayment("UPI");
makepayment("creditcard");
// enum type
var paymentmodes;
(function (paymentmodes) {
    paymentmodes[paymentmodes["UPI"] = 0] = "UPI";
    paymentmodes[paymentmodes["Creditcard"] = 1] = "Creditcard";
    paymentmodes[paymentmodes["PaypalCard"] = 2] = "PaypalCard";
})(paymentmodes || (paymentmodes = {}));
function makepayment2(method) {
    switch (method) {
        case paymentmodes.UPI:
            console.log("paymentmethod choosen:UPI");
            break;
        case paymentmodes.Creditcard:
            console.log("paymentmethod choosen:creditcard");
            break;
        case paymentmodes.PaypalCard:
            console.log("paymentmethod choosen:paypalcard");
            break;
    }
}
makepayment2(paymentmodes.UPI);
