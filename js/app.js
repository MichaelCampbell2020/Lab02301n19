'use strict';

const hornArrary = [];

$.ajax('../data/page-1.json').then(data => {
  console.log('data:  ', data);
  data.forEach(object => new HornInfo(object.image_url, object.title, object.description, object.keyword, object.horns));
  console.log(hornArrary);
  hornArrary.forEach($HornTemplate => {
    let $newHorn = document.createElement('img');
    let hornPath = $HornTemplate.imgUrl;
    let phototemplate = document.getElementById('photo_template');
    $newHorn.setAttribute('src', hornPath);
    //console.log($newHorn);
    phototemplate.append($newHorn);
  });
});


function HornInfo(image_url,title,description,keyword,horns) {
  console.log(title);
  this.imgUrl = image_url;
  this.title = title;
  this.description = description;
  this.keyword = keyword;
  this.horns = horns;
  hornArrary.push(this);
}

HornInfo.prototype.render = function () {
  //const template = $('#photo-template').html();
  const $newSection = $('section');
  $newSection.setAttribute('id', 'template');
  $newSection.find('h2').text(this.title);
  $newSection.find('p').text(` ${this.description}. Number of horns ${this.horns}`);
  $newSection.find('img').attr('src', this.imgUrl);
  $newSection.find('img').attr('title', this.title);
  $('main').append($newSection);
};


HornInfo.dropDown = () => {
  let tempArray = [];
  hornArrary.forEach((value) => tempArray.push(value.keyword));

  //removed (words)from in between temparry and closing parenthesis
  (tempArray()).forEach(value => {
    const $newOptionTag = $('option');
    $newOptionTag.setAttribute('value', 'images');
    $('select').append($newOptionTag);
  });



  $('select').on('change', handler);
  function handler(Event) {
    $('section').hide();
    hornArrary.forEach((object) => {
      if (Event.target.value === object.keyword) {
        $('#object.keyword').show();
      }
    });
  }

};
