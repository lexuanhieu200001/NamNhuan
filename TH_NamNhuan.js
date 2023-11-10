let year = parseInt(prompt("Enter a Year"));
if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            alert(year + "Nam Nhuan");
        } else {
            alert(year + "Khong phai nam Nhuan");
        }
    } else {
        alert(year + "Nam Nhuan");
    }
} else {
    alert(year + "Khong phai nam Nhuan");
}