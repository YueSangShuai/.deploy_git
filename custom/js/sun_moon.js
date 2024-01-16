function switchNightMode(mode) {
  document.querySelector('body').insertAdjacentHTML('beforeend', '<div class="Cuteen_DarkSky"><div class="Cuteen_DarkPlanet"></div></div>'),
    setTimeout(function() {
      if (mode==="dark" ) {
        document.querySelector('body').classList.remove('DarkMode')
      }else{
        document.querySelector('body').classList.add('DarkMode')
      }
      // document.querySelector('body').classList.contains('DarkMode') ? () : (document.querySelector('body').classList.add('DarkMode')),
        setTimeout(function() {
          document.getElementsByClassName('Cuteen_DarkSky')[0].style.transition = 'opacity 3s';
          document.getElementsByClassName('Cuteen_DarkSky')[0].style.opacity = '0';
          setTimeout(function() {
            document.getElementsByClassName('Cuteen_DarkSky')[0].remove();
          }, 1e3);
        }, 2e3)
    })
 
}

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