$(document).ready(function(){
  $('.sidenav').sidenav();
  var elems = document.querySelectorAll('.tooltipped');
  var instances = M.Tooltip.init(elems);
  //var instance = M.Tooltip.getInstance(elems[1]);
  setTimeout(function(){console.log(instances[0].el);}, 2000);
});
      