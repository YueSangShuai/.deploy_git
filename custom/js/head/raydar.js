function generateRandomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var a = 0.2;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

function initializeChart() {
    const canvas = document.getElementById('myRadarChart');

    if (!canvas) {
        console.error('Canvas element not found');
        return;
    }

    const ctx = canvas.getContext('2d');
    var items = document.querySelectorAll('.category-list-item');

    if (items.length === 0) {
        console.error('No category list items found');
        return;
    }

    var myColors = [];
    var mylabels = [];
    var mydata = [];
    var myLinks = [];

    items.forEach(function(item) {
        var link = item.querySelector('.category-list-link');
        var data = item.querySelector('.category-list-count');
        if (link && data) {
            mylabels.push(link.textContent.trim());
            mydata.push(Number(data.textContent.trim()));
            myColors.push(generateRandomColor());
            myLinks.push(link.href);
        }
    });

    if (mylabels.length === 0 || mydata.length === 0) {
        console.error('No valid data found for chart');
        return;
    }

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: mylabels,
            datasets: [{
                label: 'myradar',
                backgroundColor: myColors,
                borderColor: myColors.map(color => color.replace('0.2', '1')),
                pointBackgroundColor: myColors.map(color => color.replace('0.2', '1')),
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
                            size: 20
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        font: {
                            size: 20
                        }
                    },
                    position: 'top',
                    display: false
                }
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    initializeChart();  // 初次加载时初始化图表

    // 监控页面变化，如果页面切换导致元素变化，重新初始化图表
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                initializeChart();
            }
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});
