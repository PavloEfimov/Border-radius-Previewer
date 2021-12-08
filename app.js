let box = document.querySelector('#box');
let prevBtn = document.querySelector('#prevBtn');
let copyBtn = document.querySelector('#copyBtn');
let tlValue = document.querySelector('#tl input');
let trValue = document.querySelector('#tr input');
let blValue = document.querySelector('#bl input');
let brValue = document.querySelector('#br input');




prevBtn.addEventListener('click', preview);
copyBtn.addEventListener('click', copying);


function preview(){
     box.style.borderTopLeftRadius = tlValue.value + 'px';
     box.style.borderTopRightRadius = trValue.value + 'px';
     box.style.borderBottomLeftRadius = blValue.value + 'px';
     box.style.borderBottomRightRadius = brValue.value + 'px';
}
function copying(){
    navigator.clipboard.writeText(`
    border-top-left-radius:     ${box.style.borderTopLeftRadius};
    border-top-right-radius:    ${box.style.borderTopRightRadius};
    border-bottom-left-radius:  ${box.style.borderBottomLeftRadius};
    border-bottom-right-radius: ${box.style.borderBottomRightRadius};`);
}