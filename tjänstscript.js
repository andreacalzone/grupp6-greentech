const modalbutton= getelementById('toastbutton');
const toast=document.querySelector('.toast');
const closebutton= getelementById('closetoastbutton')

modalbutton.onclick= function(){
    toast.style.display="block"
}
closebutton.onclick=function(){
    toast.style.display="none"
}