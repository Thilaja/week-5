import {
    hello,
    other,
    funcs,

} from "./module2.js";
document.getElementById("app").innerHTML = hello;
document.getElementById("app2").innerHTML = other;
funcs.foo("Breakfast");
funcs.bar("Lunch");
funcs.din("Dinner");
