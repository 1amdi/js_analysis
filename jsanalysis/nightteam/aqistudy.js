var CryptoJS = require("crypto-js");
const aes_server_key = "tGFsbXNwewZlcg==";
const aes_server_iv = "w9VydmVswewexbQ==";
const aes_client_key = "WksdsdflFweFZ==";
const aes_client_iv = "klsfw9nsp=";
const des_key = "ssfefwksdjskdsj==";
const des_iv = "skzlkpoi=";
const aes_local_key = 'emhlbnFpcGFsbWtleQ==';
const aes_local_iv = 'emhlbnFpcGFsbWl2';
String.prototype.str_replace = function(findstrs, replacestrs) {
    var len = findstrs.length;
    var str = this.toString();
    for(var i = 0; i < len; i++) {
        var temp = findstrs[i];
        if(temp == "+" || temp == "=" || temp == "/")
            eval("var re = /\\" + temp + "/g;");
        else
            eval("var re = /" + temp + "/g;");
        str = str.replace(re, replacestrs[i]);
    }
    return str;
};
String.prototype.str_split = function(len) {
    var strlen = this.length;
    var str = this.toString();
    if(typeof len == "undefined" || len == 0 || len == 1) {
        return this.split("");
    }
    var count = Math.ceil(strlen / len);
    var reArray = [];
    for(var i = 0; i < count; i++) {
        reArray[i] = str.slice(i * len, i * len + len);
    }
    return reArray;
};
function Base64() {
    // private property
    _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

    // public method for encoding
    this.encode = function(input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;
        input = _utf8_encode(input);
        while(i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
            if(isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if(isNaN(chr3)) {
                enc4 = 64;
            }
            output = output +
                _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
                _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
        }
        return output;
    };
    // public method for decoding
    this.decode = function(input) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while(i < input.length) {
            enc1 = _keyStr.indexOf(input.charAt(i++));
            enc2 = _keyStr.indexOf(input.charAt(i++));
            enc3 = _keyStr.indexOf(input.charAt(i++));
            enc4 = _keyStr.indexOf(input.charAt(i++));
            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;
            output = output + String.fromCharCode(chr1);
            if(enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if(enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }
        }
        output = _utf8_decode(output);
        return output;
    }

    // private method for UTF-8 encoding
    _utf8_encode = function(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";
        for(var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if(c < 128) {
                utftext += String.fromCharCode(c);
            } else if((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            } else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }

        }
        return utftext;
    }

    // private method for UTF-8 decoding
    _utf8_decode = function(utftext) {
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;
        while(i < utftext.length) {
            c = utftext.charCodeAt(i);
            if(c < 128) {
                string += String.fromCharCode(c);
                i++;
            } else if((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i + 1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            } else {
                c2 = utftext.charCodeAt(i + 1);
                c3 = utftext.charCodeAt(i + 2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }
        }
        return string;
    }
}
var BASE64 = {
    encrypt: function(text) {
        var b = new Base64();
        return b.encode(text)
    },
    decrypt: function(text) {
        var b = new Base64();
        return b.decode(text)
    }
};
var DES = {
    encrypt: function(text, key, iv) {
        var secretkey = (CryptoJS.MD5(key).toString()).substr(0, 16);
        var secretiv = (CryptoJS.MD5(iv).toString()).substr(24, 8);
        secretkey = CryptoJS.enc.Utf8.parse(secretkey);
        secretiv = CryptoJS.enc.Utf8.parse(secretiv);
        var result = CryptoJS.DES.encrypt(text, secretkey, {
            iv: secretiv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return result.toString()
    },
    decrypt: function(text, key, iv) {
        var secretkey = (CryptoJS.MD5(key).toString()).substr(0, 16);
        var secretiv = (CryptoJS.MD5(iv).toString()).substr(24, 8);
        secretkey = CryptoJS.enc.Utf8.parse(secretkey);
        secretiv = CryptoJS.enc.Utf8.parse(secretiv);
        var result = CryptoJS.DES.decrypt(text, secretkey, {
            iv: secretiv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return result.toString(CryptoJS.enc.Utf8)
    }
};
var AES = {
    encrypt: function(text, key, iv) {
        var secretkey = (CryptoJS.MD5(key).toString()).substr(16, 16);
        var secretiv = (CryptoJS.MD5(iv).toString()).substr(0, 16);
        secretkey = CryptoJS.enc.Utf8.parse(secretkey);
        secretiv = CryptoJS.enc.Utf8.parse(secretiv);
        var result = CryptoJS.AES.encrypt(text, secretkey, {
            iv: secretiv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return result.toString()
    },
    decrypt: function(text, key, iv) {
        var secretkey = (CryptoJS.MD5(key).toString()).substr(16, 16);
        var secretiv = (CryptoJS.MD5(iv).toString()).substr(0, 16);
        secretkey = CryptoJS.enc.Utf8.parse(secretkey);
        secretiv = CryptoJS.enc.Utf8.parse(secretiv);
        var result = CryptoJS.AES.decrypt(text, secretkey, {
            iv: secretiv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return result.toString(CryptoJS.enc.Utf8)
    }
};

function ObjectSort(obj) {
    var newObject = {};
    Object.keys(obj).sort().map(function(key) {
        newObject[key] = obj[key]
    });
    return newObject
}

function decodeData(data) {
    data = AES.decrypt(data, aes_server_key, aes_server_iv);
    data = DES.decrypt(data, des_key, des_iv);
    data = BASE64.decrypt(data);
    return data
}


//method="GETDETAIL",object={city: "杭州", type: "HOUR", startTime: "2019-09-22 17:00:00", endTime: "2019-09-23 20:00:00"}
var getParama =function(method, obj) {
    var appId = '1a45f75b824b2dc628d5955356b5ef18';
    var clienttype = 'WEB';
    var timestamp = new Date().getTime();
    var param = {
        appId: appId,
        method: method,
        timestamp: timestamp,
        clienttype: clienttype,
        object: obj,
        secret: hex_md5(appId + method + timestamp + clienttype + JSON.stringify(ObjectSort(obj)))
    };
    param = BASE64.encrypt(JSON.stringify(param));
    return AES.encrypt(param, aes_client_key, aes_client_iv)
}

var test =
    "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"

console.log(decodeData(test))