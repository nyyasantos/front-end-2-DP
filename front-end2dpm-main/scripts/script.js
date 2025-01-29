function menu(pagina) {
  $('#conteudo').fadeOut(500,()=>{
    $("#conteudo").load("../components/" + pagina + ".html",()=>{
      $('#conteudo').fadeIn(500);
    });
  });
}
