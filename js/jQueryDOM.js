// Worning!!  you can only pick up to use jQuery for DOM or Mustache. Can't have both. Comment in HTML.

// function to create new tags and DOM the images to HTML
function insertImg(title, imgSrc, imgAlt, desc,keyword){
  let holder = $('<div></div>').addClass(keyword).addClass('photos');
  $('#gallery').append(holder);
  let imgTitle = $('<h2></h2>').addClass('titles').text(title);
  let img = $('<img></img>').addClass('imgs').attr('src',imgSrc).attr('alt',imgAlt);
  let info = $('<p></p>').addClass('desc').text(desc).hide();
  holder.append(img, imgTitle, info);
}


// this is the function to load all the img from JSON initially
function galleryLoad(file) {
  $.getJSON(file, function(item){
    //for each item in the JSON file, we will run a function to get the value of different property and DOM them to HTML;
    $.each(item, function(index){
      //for each JSON item let's DOM to HTML
      insertImg(item[index].title, item[index].image_url, item[index].keyword, item[index].description, item[index].keyword);
      //then add it to selection drop down menu
      setSelection(item[index].keyword);
      let newObj = new ImgObj(item[index].title,item[index].image_url,item[index].keyword,item[index].description, item[index].horns);
      //finally add to our local array for sort functioni later on
      photoArray.push(newObj);
    });
  });
}

// when documents is loaded, we will dump all the images to the gallery
$(document).ready(galleryLoad (page1));

// this is the function to sort by name
function sortByName(){
  $('#gallery').empty();
  photoArray.sort((a,b) => (a.title > b.title)? 1 : -1);
  photoArray.forEach(function(item){
    insertImg(item.title, item.image_url, item.keyword, item.description,item.keyword);
    setTimeout(function(){
      ($('.photos').click(zoomImg));
    }, 500);
  });
}

// this is the function to sort by number of horns
function sortByHorn(){
  $('#gallery').empty();
  photoArray.sort((a,b) => (a.horns > b.horns)? 1 : -1);
  photoArray.forEach(function(item){
    insertImg(item.title, item.image_url, item.keyword, item.description,item.keyword);
  });
  setTimeout(function(){
    ($('.photos').click(zoomImg));
  }, 500);
}

// this is the vent listner to handel the sort list change
$('#sort').change(()=> {
  let choosen = $('.sort:selected').val();
  if (choosen === 'name'){
    sortByName();
    selectImg();
  } else if (choosen === 'horns'){
    sortByHorn();
    selectImg();
  }
});

// event handler when you click next button
$('#next').click(() => {
  $('#sort').val('');
  $('#previous').show();
  $('#next').hide();
  $('#gallery').empty();
  $('#selection').empty();
  selection = [];
  photoArray = [];
  galleryLoad(page2);
  setTimeout(function(){
    ($('.photos').click(zoomImg));
  }, 500);
});

//event handler when you click on previous button
$('#previous').click(() =>{
  $('#sort').val('');
  $('#previous').hide();
  $('#next').show();
  $('#gallery').empty();
  $('#selection').empty();
  selection = [];
  photoArray = [];
  galleryLoad(page1);
  setTimeout(function(){
    ($('.photos').click(zoomImg));
  }, 500);
});
