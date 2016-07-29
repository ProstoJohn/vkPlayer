var authKey = window.location.hash.substring(14).split('&');
var userId = window.location.hash.substring(125).split('&');


if (authKey.length !== 1) {
  document.cookie = "vkAuth=" + authKey[0];
  document.cookie = "userId=" + userId;
  soundsList(2);
} else {
  if (getCookie('vkAuth') !== undefined) {
    soundsList(2);
  } else {
    alert('Авторизуйтесь!')
    document.location.href = 'https://oauth.vk.com/authorize?client_id=5558436&display=page&redirect_uri=http://player.dream-studio.org.ua&scope=audio&response_type=token&v=5.53';
  }
}



//Functions


//Cookie checker
function getCookie(cookieName) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + cookieName.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}





//GET SONGS LIST
function soundsList(amount) {


  var user = getCookie('userId')
  var token = getCookie('vkAuth')

  
    var uri = 'https://api.vk.com/method/audio.get?owner_id=' + user + '&need_user=0&count=20&offset=0&access_token=' + token;
  
    console.log(uri);
  
    var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
    var xhr = new XHR();
    xhr.open('GET', uri, true);
  
    xhr.onload = function () {
      console.log(this.responseText);
    }
    xhr.onerror = function () {
      alert('Ошибка ' + this.status);
    }
    xhr.send();


  //
  //  var HTMLDiv = document.createElement('div');
  //  var list = '';
  //  for (var i = 0; i < data.length; i++) {
  //    list += '<div class="sound"> <div class="playButton"><i class="fa fa-play" aria-hidden="true"></i></div> <div class="infoBlock"> <div class="name">' + data[i].artist + ' - ' +
  //      data[i].title + '</div> </div> <div class="time">' + data[i].duration + '</div> </div>';
  //  }
  //
  //  HTMLDiv.innerHTML = list;
  //  document.getElementById('playList').appendChild(HTMLDiv);

}
