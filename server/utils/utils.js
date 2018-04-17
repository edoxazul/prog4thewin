/**
 * Created by Tomás on 31-12-2017.
 */
'use strict';
function generarClave(lon=8){
    const chars = "0123456789abcdefghijkABCDEFGHIJK";
    let code = "";
    let x;
    let rand;

    for (x = 0; x < lon; x++){
        rand = Math.floor(Math.random()*chars.length);
        code += chars.substr(rand, 1);
    }
    return code;
}

function assign(obj, keyPath, value) {
    let lastKeyIndex = keyPath.length-1;
    for (let i = 0; i < lastKeyIndex; ++ i) {
        let key = keyPath[i];
        if (!(key in obj))
            obj[key] = {};
        obj = obj[key];
    }
    obj[keyPath[lastKeyIndex]] = value
}

module.exports = {
    generarClave,
    assign
};