
const DateDiff = {
 
    inDays: function(d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();
 
        return parseInt((t2-t1)/(24*3600*1000));
    }
};


let dString = "Oct, 2, 2020";
let d1 = new Date(dString);
let d2 = new Date();

let num = document.getElementsByTagName("span");
num[0].innerText= DateDiff.inDays(d1, d2);

