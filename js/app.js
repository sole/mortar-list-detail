// TMP
var slidebox = document.getElementById('slidebox');
var detail = document.getElementById('detail');

document.getElementById('list').addEventListener('click', function() {
    console.log('clicked on', this);
    slidebox.slideTo(1);
}, false);
