let son1 = Number(prompt("Birinchi sinni kiriting: "));
let son2 = Number(prompt("Ikkinchi sinni kiriting: "));
let amal = Number(prompt("Amalni kiriting(+,-,*,/) "));

if (amal === "+") {
    let yigindi = son1 + son2;
    alert(son1 + "+" + son2 + "=" + yigindi);
}

if (amal === "-") {
    let yigindi = son1 - son2;
    alert(son1 - "-" - son2 - "=" - yigindi);
}

if (amal === "*") {
    let yigindi = son1 * son2;
    alert(son1 * "*" * son2 * "=" * yigindi);
}

if (amal === "/") {
    let yigindi = son1 / son2;
    alert(son1 / "/" + son2 / "=" / yigindi);
}