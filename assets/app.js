(function(){
  // 移动端导航开关
  var t=document.querySelector('.nav-toggle');
  var n=document.querySelector('.nav-links');
  if(t&&n){t.addEventListener('click',function(){n.classList.toggle('open');});
    n.addEventListener('click',function(e){if(e.target.tagName==='A')n.classList.remove('open');});}
  // 页脚年份
  var y=document.querySelector('[data-year]');
  if(y)y.textContent=new Date().getFullYear();
})();
