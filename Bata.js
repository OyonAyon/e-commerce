const searchIconId = document.getElementById('search-icon');
const searchDivId = document.getElementById('search-div');
let click = 0;
searchIconId.addEventListener('click',function(){
    if((click%2)==0){
        searchDivId.style.display = 'flex';
    }else{
        searchDivId.style.display = 'none';
    }
    click++;
});