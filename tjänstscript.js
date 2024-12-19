const modalbutton=document.getElementById('toastbutton');
const toast=document.querySelector('.toast');
const closebutton=document.getElementById('closetoastbutton')
const toasttext=document.querySelector('.toasttext')
const inputformula=document.querySelector(".consult-form");
modalbutton.onclick= function(){
    toast.style.display="block"
};
closebutton.onclick=function(){
    toast.style.display="none"
};
inputformula.addEventListener("submit",(e)=>{
    e.preventDefault();
    const formtime=document.getElementById('time');
    if (Validtime(formtime.value)) {
        const textnode=document.createTextNode("Din konsultation är klockan"+ formtime.value);
        toasttext.appendChild(textnode);
    } else {
        throw('error');
    }
});
function validTime(timeinput) {
    const time=timeinput.split(':');
    if (0<time[1]|| time[1]<24 && 0<time[2] ||time[2]<60) {
        return true;
    } else {
        return false;
    }
}
//module.exports={validTime};