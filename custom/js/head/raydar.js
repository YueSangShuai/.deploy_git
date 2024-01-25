function generateRandomColor() {
    var r = Math.floor(Math.random() * 256); // 随机生成0-255之间的红色分量
    var g = Math.floor(Math.random() * 256); // 随机生成0-255之间的绿色分量
    var b = Math.floor(Math.random() * 256); // 随机生成0-255之间的蓝色分量
    var a = 0.2; // 设置透明度
    return `rgba(${r}, ${g}, ${b}, ${a})`; // 返回生成的颜色字符串
}

document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('myRadarChart');
    if (canvas) {
        const ctx = canvas.getContext('2d');


        var items = document.querySelectorAll('.category-list-item');
    
        if (items.length == 0) {
            return;
        }
        var myColors = [];
        var mylabels = [];
        var mydata = [];
        var myLinks=[];
        items.forEach(function(item) {
            var link = item.querySelector('.category-list-link');
            var data = item.querySelector('.category-list-count');
            if (link) {
                mylabels.push(link.textContent.trim());
                mydata.push(Number(data.textContent.trim()));
                myColors.push(generateRandomColor());
                myLinks.push(link.href);
            }
        });
    
    
        const myRadarChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: mylabels,
                datasets: [{
                    label: 'myradar',
                    backgroundColor: myColors, // 使用颜色数组
                    borderColor: myColors.map(color => color.replace('0.2', '1')), // 边框颜色
                    pointBackgroundColor: myColors.map(color => color.replace('0.2', '1')), // 数据点颜色
                    data: mydata
                }]
            },
            options: {
                elements: {
                    line: {
                        borderWidth: 3
                    }
                },
                scales: {
                    r: {
                        angleLines: {
                            display: false
                        },
                        ticks: {
                            display: false
                        },
                        grid: {
                            display: false
                        },
                        pointLabels: {
                            display: true,
                            color: 'black',
                            font: {
                                size: 20 // 设置雷达图标签文字大小
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            font: {
                                size: 20 // 设置图例文字大小
                            }
                        },
                        position: 'top',
                        display:false
                    }
                }
            }
        });
    }
 
});
