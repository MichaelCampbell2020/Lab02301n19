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
  (tempArray).forEach(value => {
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
/*
new HornInfo('http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
  'UniWhal', 'A unicorn and a narwhal nuzzling their horns', 'narwhal', 1);
new HornInfo('https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80', 'Rhino Family', 'Mother (or father) rhino with two babies', 'rhino', 2);
new HornInfo('https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg', 'Unicorn Head', 'Someone wearing a creepy unicorn head mask',
  'unicorn', 1);
new HornInfo('https://images.unsplash.com/photo-1518946222227-364f22132616?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4836a6fca62e7dce9324346bacfde085&auto=format&fit=crop&w=2534&q=80', 'UniLego', 'Lego figurine dressed in a unicorn outfit', 'unilego', 1);
new HornInfo('https://i.pinimg.com/736x/b4/61/06/b46106830b841017ea59870b27ec18dc--narwhals-a-unicorn.jpg', 'Basically a unicorn', 'A narwhal is basically a unicorn after all, right?', 'narwhal', 1);
new HornInfo('https://i.pinimg.com/originals/16/cf/2a/16cf2a0b3fd51b9bee08bb6296193b75.jpg', '#truth',
  'The truth behind narwhals', 'narwhal', 1);
new HornInfo('https://secure.img1-ag.wfcdn.com/im/17007094/resize-h800%5Ecompr-r85/3589/35892451/Baby+Rhino+Figurine.jpg', 'Baby Rhino', 'This is actually a figurine but it looks kinda real', 'rhino', 2);
new HornInfo('https://vignette.wikia.nocookie.net/landbeforetime/images/c/c3/Cera_infobox.png/revision/latest?cb=20180422005003', 'Cera', 'Three horns but still, horns. And who doesn\'t like The Land Before Time?', 'triceratops', 3);
new HornInfo('https://ae01.alicdn.com/kf/HTB18GwSQVXXXXaZaXXXq6xXFXXXh/Animal-Cosplay-Costume-Narwhal-Onesie-Mens-Womens-Cartoon-Whale-Pajamas.jpg', 'Narwhal costume', 'A woman wearing a blue narwhal costume', 'narwhal', 1);
new HornInfo('https://www.shopmascot.com/image/cache/mascotnew/new196-800x800.jpg', 'Rhino costume', 'Mascots have to get their costumes somewhere', 'rhino', 2);
new HornInfo('https://www.tinselbox.com/wp-content/uploads/2018/03/I-BELIEVE-IN-UNICORNS-FREE-PRINTABLE-WATERCOLOR-7-of-1.jpg', 'Believe', 'I believe in unicorns, do you?', 'unicorn', 1);
new HornInfo('https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Markhor_Schraubenziege_Capra_falconeri_Zoo_Augsburg-02.jpg/220px-Markhor_Schraubenziege_Capra_falconeri_Zoo_Augsburg-02.jpg', 'Markhor', 'These wild goats eat snakes, then secrete a foam that locals fight over for the antivemon properties -- how cool is that?', 'markhor', 2);
new HornInfo('http://www.zooborns.com/.a/6a010535647bf3970b0223c84d5959200c-800wi', 'Baby markhor', 'Even the babies are adorable', 'markhor', 2);
new HornInfo('https://images.unsplash.com/photo-1558560063-931ca9822a0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', 'Mouflon', 'Those horns though', 'mouflon', 2);
new HornInfo('https://images.unsplash.com/photo-1556890077-020ec300d5db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80', 'Addax', 'This guy is basically extinct but survives well in captivity, so they\'re frequently found in zoos', 'addax', 2);
new HornInfo('https://cbsnews3.cbsistatic.com/hub/i/r/2013/03/05/5b414225-a645-11e2-a3f0-029118418759/thumbnail/620x350/2d4cf24685b45c22912e64d2004fec8d/Baby_Mouflon_Wild_Sheep.jpg', 'Baby mouflon', 'The cuteness that is a baby mouflon asleep', 'mouflon', 2);
new HornInfo('https://images.unsplash.com/photo-1514036783265-fba9577fc473?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', 'Happy Jackson\'s Chameleon', 'These are really common in Hawaii', 'chameleon', 2);
new HornInfo('https://imgc.allpostersimages.com/img/print/posters/dlillc-jackson-s-chameleon_a-G-13448768-14258384.jpg', 'Serious Jackson\'s Chameleon', 'This one is very serious.', 'chameleon', 3);
new HornInfo('https://www.nps.gov/band/learn/nature/images/short-horned-lizard-open-mouth-18.jpg?maxwidth=650&autorotate=false', 'Horned Lizard', 'Fave food: ants', 'lizard', 100);
new HornInfo('https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Smaug_par_David_Demaret.jpg/290px-Smaug_par_David_Demaret.jpg', 'Smaug', 'Fan illustration of Smaug from \'The Hobbit\'', 'dragon', 100);

*/
