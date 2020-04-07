'use strict';
// global veriable to hole the value of selections
var selection = [];

// function to create new tags and DOM the images to HTML
function insertImg(title, imgSrc, imgAlt, desc,keyword){
  let holder = $('<div></div>').addClass('photos').addClass(keyword);
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

// when documents is loaded, we will dump all the images to the gallery
$(document).ready(function (){
  //this is the jQuery methord to read JSON file.
  $.getJSON('/data/page-1.json', function(item){
    //for each item in the JSON file, we will run a function to get the value of different property and DOM them to HTML;
    $.each(item, function(index){
      insertImg(item[index].title, item[index].image_url, item[index].keyword, item[index].description, item[index].keyword);
      setSelection(item[index].keyword);
    });
  });
});


