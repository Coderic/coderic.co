var webAuth = new auth0.WebAuth({
    clientID: 'ZEZjUDVOSfUoDIN1cKYLkohGybyyfiBE',
    domain: 'coderic.eu.auth0.com',
    audience: `https://coderic.eu.auth0.com/api/v2/`,
    scope: 'openid profile email',
    redirectUri: 'https://coderic.co/',
    responseType: 'token id_token'
});

$(document).ready(function() {
    webAuth.checkSession(
    {
        audience: 'https://coderic.eu.auth0.com/api/v2/',
        scope: 'openid profile email',
    },
    function(err, result) {
      console.dir(result);
      if (err || !result || !result.accessToken) {
        $(".guest").show();
        $(".authenticated").hide();
      } else {
        webAuth.client.userInfo(result.accessToken, function(err, user) {
          if (!err && user) {
            $("#username").text(user.name).show();
          }
        });
        $(".guest").hide();
        $(".authenticated").show();
      }
    });
  });

logout = () => webAuth.logout({
      returnTo: 'https://' +window.location.hostname + '/'
});
