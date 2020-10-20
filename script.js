
const DateDiff = {
 
    inDays: function(d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();
 
        return parseInt((t2-t1)/(24*3600*1000));
    }
};


let dString = "Oct, 21, 2020";
let d1 = new Date(dString);
let d2 = new Date();

let num = document.getElementsByTagName("span");
num[0].innerHTML= DateDiff.inDays(d1, d2);

for (let i=0; i<10; console.log(i)){
    i++;
}