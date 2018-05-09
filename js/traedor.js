traerInfo();

function traerInfo()
{
  var request = $.ajax({
    url: "http://apipdv.clubgournet.cl/api/v1/empresas/gournet",
    method: "GET"
  });
  request.done(function( msg ) {
    console.log(msg.Data);
  });
  request.fail(function( jqXHR, textStatus ) {
    alert( "Request failed: " + textStatus );
  });
}
