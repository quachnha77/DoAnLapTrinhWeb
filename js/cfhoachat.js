var savedDataJSON = localStorage.getItem('Blog');

if (savedDataJSON) {
    var savedData = JSON.parse(savedDataJSON);

    // tiêu đề
    var tieude = document.getElementById('tieude')
    tieude.textContent = savedData[1].tieude;

    var lines = savedData[1].noidung.split('\n');
    
    // nội dung
    var pElements = document.getElementById('main_content').getElementsByTagName('p');
    
    for (var i = 0; i < lines.length; i++) {
        if (i < pElements.length) {
            pElements[i].textContent = lines[i];
        }
    }
}