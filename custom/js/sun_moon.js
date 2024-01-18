function switchNightMode(mode) {
  document.querySelector('body').insertAdjacentHTML('beforeend', '<div class="Cuteen_DarkSky"><div class="Cuteen_DarkPlanet"><div id="sun"></div><div id="moon"></div></div></div>'),    setTimeout(function() {
      if (document.querySelector('body').classList.contains('darkmode--activated')) {
        document.querySelector('body').classList.add('DarkMode');
      }else{
        document.querySelector('body').classList.remove('DarkMode');
      }
      
      // document.querySelector('body').classList.contains('darkmode--activated') ? () : (document.querySelector('body').classList.add('DarkMode')),
        setTimeout(function() {
          document.getElementsByClassName('Cuteen_DarkSky')[0].style.transition = 'opacity 3s';
          document.getElementsByClassName('Cuteen_DarkSky')[0].style.opacity = '0';
          setTimeout(function() {
            document.getElementsByClassName('Cuteen_DarkSky')[0].remove();
          }, 1e3);
        }, 2e3)
    })
    
    if(mode==="light"){
        // 先设置太阳月亮透明度
        document.getElementById("sun").style.opacity = "1";
        document.getElementById("moon").style.opacity = "0";
        setTimeout(function () {
            document.getElementById("sun").style.opacity = "0";
            document.getElementById("moon").style.opacity = "1";
        }, 1000);
    }else{
        // 先设置太阳月亮透明度
        document.getElementById("sun").style.opacity = "0";
        document.getElementById("moon").style.opacity = "1";
        setTimeout(function () {
            document.getElementById("sun").style.opacity = "1";
            document.getElementById("moon").style.opacity = "0";
        }, 1000);
    }
}

if (document.querySelector('body').classList.contains('darkmode--activated')) {
  document.querySelector('body').classList.add('DarkMode');
}
const sunElement = document.createElement('div');
sunElement.id = 'sun'; // 设置元素的id为sun
const moonElement = document.createElement('div');
moonElement.id = 'moon'; // 设置元素的id为sun

var nightButton = document.querySelector('.darkmode-toggle.darkmode-toggle--white');
var dayButton = document.querySelector('.darkmode-toggle');

// 检查是否成功获取按钮元素
if (dayButton) {
  dayButton.addEventListener('click', function() {
      switchNightMode("light"); // 点击 dayButton 切换到 light 模式
  });
}

if (nightButton) {
  nightButton.addEventListener('click', function() {
      switchNightMode("dark"); // 点击 nightButton 切换到 dark 模式
  });
}