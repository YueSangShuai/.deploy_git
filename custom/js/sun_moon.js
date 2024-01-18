function switchNightMode() {
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
    

    var iswhite = document.querySelector('.darkmode-toggle.darkmode-toggle--white');
    
    if(iswhite){
        document.getElementById("sun").style.opacity = "1";
        document.getElementById("moon").style.opacity = "0";
        setTimeout(function () {
            document.getElementById("sun").style.opacity = "0";
            document.getElementById("moon").style.opacity = "1";
        }, 1000);
        console.log("light");
    }else{
        // 先设置太阳月亮透明度
        document.getElementById("sun").style.opacity = "0";
        document.getElementById("moon").style.opacity = "1";
        setTimeout(function () {
            document.getElementById("sun").style.opacity = "1";
            document.getElementById("moon").style.opacity = "0";
        }, 1000);
        console.log("dark");
    }
}

if (document.querySelector('body').classList.contains('darkmode--activated')) {
  document.querySelector('body').classList.add('DarkMode');
}

var Button = document.querySelector('.darkmode-toggle');

// 检查是否成功获取按钮元素
if(Button){
  Button.addEventListener('click', function() {
    switchNightMode(); // 点击 nightButton 切换到 dark 模式
});
}
