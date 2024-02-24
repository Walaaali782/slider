//get slider item array 
var sliderimage = Array.from(document.querySelectorAll('.slider-container img'))

// get number od slides
var sildercounter = sliderimage.length;

// set current
var curentslide = 1;

//slide n e s
var slidenumber = document.getElementById('slide-number');

var prev = document.getElementById('prev');
var next = document.getElementById('next');

next.onclick = nextslide;
prev.onclick = prevslide;


//creat main ul li 

var indicatorselement = document.createElement('ul');
indicatorselement.setAttribute('id','indicator-ul');

for (let index = 1; index <= sildercounter ; index++) {
    var indicatorsitem = document.createElement('li');

    indicatorsitem.setAttribute('data-index', index );

    indicatorsitem.appendChild(document.createTextNode(index));

    indicatorselement.appendChild(indicatorsitem);
}
document.getElementById('indicators').appendChild(indicatorselement);

// creat the new ul 
var  indicatorseul = document.getElementById('indicator-ul');


//get   indicators slider item ul  
var  indicatorspoltes = Array.from(document.querySelectorAll('#indicator-ul li'))

for (let index = 0; index < indicatorspoltes.length ; index++) {
    
    indicatorspoltes[index].onclick = function () {
        curentslide = parseInt(this.getAttribute('data-index'));
        check();
    }
}

check();

function nextslide(){

if(next.classList.contains('diabled')){
    return false

}else{
    curentslide++;

    check();
}
}
function prevslide(){
    if(prev.classList.contains('diabled')){
        return false
    
    }else{
        curentslide--;
    
        check();
    }
    
}
function check() {

    slidenumber.textContent = 'Slide #' + (curentslide) + ' OF ' + (sildercounter) ;

    removeallactice();

    //SET ACTIVE CLASS of image 
    sliderimage[curentslide - 1].classList.add('active')

     //SET ACTIVE CLASS of number 
     indicatorseul.children[curentslide - 1].classList.add('active');

// check currentslide 
if(curentslide == 1){
    prev.classList.add('diabled');
}else{
    prev.classList.remove('diabled');
}

if(curentslide == sildercounter){
    next.classList.add('diabled');
}else{
    next.classList.remove('diabled');
}
}

//remove all actice
function removeallactice(){
    sliderimage.forEach(function (img) {
        img.classList.remove('active');
    })
    indicatorspoltes.forEach(function (polt) {
        polt.classList.remove('active');
    })
}