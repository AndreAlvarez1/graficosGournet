
function sendAjax(verbohttp, url)
{
      var xhttp = new XMLHttpRequest();

      response = '';
      xhttp.onreadystatechange = function()
      {
        if (this.readyState == 4 && this.status == 200)
        {
           response = xhttp.responseText;
           return response;
        }

      };
      xhttp.open(verbohttp, url, true);
      xhttp.send();
}
