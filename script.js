var authKey = window.location.hash.substring(1);
document.cookie = "vkKey=" + authKey;

function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function soundslist() {
var HTMLDiv = document.createElement('div');
var list = '';

for (var i = 0; i < 9; i++) {
  list += '<div class="sound"> <div class="playButton"><i class="fa fa-play" aria-hidden="true"></i></div> <div class="infoBlock"> <div class="name">Author - Song name</div> </div> <div class="time">10:00</div> </div>';
}

HTMLDiv.innerHTML = list;
document.getElementById('playList').appendChild(HTMLDiv);

}

soundslist();