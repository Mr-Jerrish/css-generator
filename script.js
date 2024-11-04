document.addEventListener("DOMContentLoaded",()=>{
  const btn=document.getElementById("btnCopy");
  const container=document.querySelector('.container');
  const allborder=document.getElementById('all');
  const borderElement=document.getElementById('border');
  let v1=document.getElementById("all_value");
  var allRadius=10;
  var border_style='solid';
  var border_size2px;
  let textArea=document.getElementById("code");
  let coding="Test";

function allborders(){
  allRadius=allborder.value;
  v1.innerHTML=allRadius+'px';
  coding=`border-radius:${allRadius}px;`;
  textArea.value=coding;
  container.style.cssText=coding;
}

allborder.addEventListener("mousemove",allborders);
allborder.addEventListener("change",allborders);
btn.addEventListener('click',()=>{
  document.querySelector('textarea').select();
  document.execCommand('copy');
  alert('copy')  });
allborders();
});
