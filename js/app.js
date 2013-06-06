
var slidebox = document.getElementById('slidebox');
var detail = document.getElementById('detail');
var detailH1 = detail.querySelector('h1');
var detailContents = detail.querySelector('.contents');

init();

// ---

function init() {

    // Set up event listeners for reacting to mouse / touch actions

    var articles = document.querySelectorAll('#list article');
    for(var i = 0; i < articles.length; i++) {
        var article = articles[i];
        article.addEventListener('click', showDetail, false);
    }

    // Also set up the behaviour for the `Back` button that is included
    // in the detail view
    // The slides in the slidebox are numbered with a zero-based index,
    // so the first one is at position 0, and the second one is at position 1.
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

// This is executed in the context of the clicked article
// Therefore, `this` is the article, and we use that reference to find the
// title (h1) and the contents (.contents) of the article, and copy it over
// to the detail title and contents elements that we already located in the
// `init` function.
// Once that's done, we'll just slide to the view slide (at position `1`)
function showDetail(ev) {
    var article = this;
    var h1 = article.querySelector('h1');
    var contents = article.querySelector('.contents');
    
    detailH1.innerHTML = h1.innerHTML;
    detailContents.innerHTML = contents.innerHTML;

    slidebox.slideTo(1);
}

