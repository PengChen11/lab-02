'use strict';
// global veriable to hole the value of selections
var selection = [];

// function to create new tags and DOM the images to HTML
function insertImg(title, imgSrc, imgAlt, desc,keyword){
  let holder = $('<div></div>').addClass(keyword).addClass('photos');
  $('#gallery').append(holder);
  let imgTitle = $('<h2></h2>').addClass('titles').text(title);
  let img = $('<img></img>').addClass('imgs').css('width','200px').attr('src',imgSrc).attr('alt',imgAlt);
  let info = $('<p></p>').addClass('desc').text(desc);
  holder.append(img, imgTitle, info);
}

// function to create a selection list.
function setSelection(keyword){
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
$('#selection').change(selectImg);

var photoArray = [];
class ImgObj {
  constructor(title, url, keyword, description, horns) {
    this.name = title;
    this.url = url;
    this.keyword = keyword;
    this.description = description;
    this.horns = horns;
  }
}

// this is the function to load all the img from JSON initially
function initialLoad() {
  $.getJSON('data/page-1.json', function(item){
    //for each item in the JSON file, we will run a function to get the value of different property and DOM them to HTML;
    $.each(item, function(index){
      insertImg(item[index].title, item[index].image_url, item[index].keyword, item[index].description, item[index].keyword);
      setSelection(item[index].keyword);
      let newObj = new ImgObj(item[index].title,item[index].image_url,item[index].keyword,item[index].description, item[index].horns);
      photoArray.push(newObj);
    });
  });
}

// when documents is loaded, we will dump all the images to the gallery
$(document).ready(initialLoad ());

function sortByName(){
  $('#gallery').empty();
  photoArray.sort((a,b) => (a.name > b.name)? 1 : -1);
  photoArray.forEach(function(item){
    insertImg(item.name, item.url, item.keyword, item.description,item.keyword);
  });
}

function sortByHorn(){
  $('#gallery').empty();
  photoArray.sort((a,b) => (a.horns > b.horns)? 1 : -1);
  photoArray.forEach(function(item){
    insertImg(item.name, item.url, item.keyword, item.description,item.keyword);
  });

}

$('#sort').change(()=> {
  let choosen = $('.sort:selected').val();
  if (choosen === 'name'){
    sortByName();
  } else if (choosen === 'horns'){
    sortByHorn();
  } else {
    location.reload(true);
  }
});

