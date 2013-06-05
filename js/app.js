
var slidebox = document.getElementById('slidebox');
var detail = document.getElementById('detail');
var detailH1 = detail.querySelector('h1');
var detailContents = detail.querySelector('.contents');

var articles = document.querySelectorAll('#list article');
for(var i = 0; i < articles.length; i++) {
    var article = articles[i];
    article.addEventListener('click', showDetail, false);
}

document.querySelector('#detail button').addEventListener('click', function() {
    slidebox.slideTo(0);
}, false);

function showDetail(event) {
    var article = this;
    var h1 = article.querySelector('h1');
    var contents = article.querySelector('.contents');
    
    detailH1.innerHTML = h1.innerHTML;
    detailContents.innerHTML = contents.innerHTML;

    slidebox.slideTo(1);
}
