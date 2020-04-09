'use strict';
// global veriable to hold the value of selections
var selection = [];
// global veriable to hold the 1st page photo array
var photoArray = [];
//// global veriable to hold the src for JSON files
var page1 = 'data/page-1.json';
var page2 = 'data/page-2.json';


// function to create a selection list.
function setSelection(keyword){
  if($('#all').length === 0){
    let allEl = $('<option></option').addClass('selections').text('See All').attr({'value': 'all', 'id': 'all'});
    $('#selection').append(allEl);
  }
  if (!selection.includes(keyword)){
    selection.push(keyword);
    let optionEl = $('<option></option').addClass('selections').text(keyword).attr('value', keyword);
    $('#selection').append(optionEl);
  }
}

// function to show/hide elements
function selectImg(){
  let choosen = $('.selections:selected').val();
  if (choosen === 'all'){
    $('.photos').show();
  } else {
    $('.photos').hide();
    $('.' + choosen).show();
  }
}

// event listener to handle filter selections
$('#selection').change(selectImg);

//global variable for photo gallery and build up an constructor
class ImgObj {
  constructor(title, url, keyword, description, horns) {
    this.title = title;
    this.image_url = url;
    this.keyword = keyword;
    this.description = description;
    this.horns = horns;
  }
}

// This function will zoom the image in the img box
var zoomImg = function () {
  // Create image clone
  let clone = this.cloneNode(true);
  // by removing photos class and adding zoomBox, it will adjust how it will be displayed
  clone.classList.remove('photos');
  clone.classList.add('zoomBox');

  // Put clone into img box
  $('#img-box').empty().append(clone);
  $('#img-box .imgs').removeClass('imgs').addClass('zoomImgs');
  //show the hidden descriptions
  $('#img-box p').show();

  // Show img box
  $('#img-background').addClass('show');
};

// this is the function when click again to hide the zoomed img by removing it's show class.
$('#img-background').click(function(){
  $('#img-background').removeClass('show');
});

setTimeout(function(){
  ($('.photos').click(zoomImg));
}, 500);
