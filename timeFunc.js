function validTime(timeinput) {
    const time=timeinput.split(':');
    console.log(time);
    if (0<time[1]|| time[1]<24 && 0<time[2] ||time[2]<60) {
        return true;
    } else {
        return false;
    }
}
module.exports={validTime}