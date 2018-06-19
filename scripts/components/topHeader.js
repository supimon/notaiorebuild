$(document).ready(function(){
  $('.sidenav').sidenav();
  setTimeout(function(){
    M.toast({html: 'ATTENZIONE: la sessione di lavoro scadra dopo 10 minuti di inattivita', classes: 'bem-toast'})
  }, 1000);
});
      