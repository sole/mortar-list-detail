
var slidebox = document.getElementById('slidebox');
var detail = document.getElementById('detail');
var detailH1 = detail.querySelector('h1');
var detailContents = detail.querySelector('.contents');

function init() {

    // Set up event listeners for reacting to mouse / touch actions

    var articles = document.querySelectorAll('#list article');
    for(var i = 0; i < articles.length; i++) {
        var article = articles[i];
        article.addEventListener('click', showDetail, false);
    }

    document.querySelector('#detail button').addEventListener('click', function() {
        slidebox.slideTo(0);
    }, false);


    // This code shows an install button if the apps platform is available
    // and this app isn't already installed.
    var installButton = document.getElementById('install-btn');

    installButton.style.display = 'none';

    if(navigator.mozApps) {

        installButton.addEventListener('click', function() {
            navigator.mozApps.install(location.href + 'manifest.webapp');
        }, false);

        var req = navigator.mozApps.getSelf();
        req.onsuccess = function() {
            if(!req.result) {
                installButton.style.display = 'block';
            }
        };

    }

}

function showDetail(event) {
    var article = this;
    var h1 = article.querySelector('h1');
    var contents = article.querySelector('.contents');
    
    detailH1.innerHTML = h1.innerHTML;
    detailContents.innerHTML = contents.innerHTML;

    slidebox.slideTo(1);
}

// ---

init();

