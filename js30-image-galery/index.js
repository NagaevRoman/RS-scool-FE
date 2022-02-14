
const gallery = document.querySelector('.grid')

const form  = document.getElementsByTagName('form')
console.log(form);

const submit = document.querySelector('.searching')

function createImage(url) {
  let el = document.createElement('div')
  el.innerHTML = '<img src="' + url + '"/>'
  el.classList.add("img-container")
  gallery.appendChild(el)
}

let searchForm = document.forms[0];
let elem = searchForm.elements.text;
console.log(elem.value);
// console.log(elem.value);
// submit.addEventListener('click', function(){
//   console.log(`${document.form.inp.value}`)
// })
function complete(value) {
  document.onkeydown = null;
  search = value;
}
form.onsubmit = function() {
  let value = elem.value;
  console.log(value);
  if (value == '') return false; 

  complete(value);
  return false;
};


let search 
if (search === undefined) {
  search = 'winter'
}


async function getData() {
  const res = await fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&per_page=30&api_key=0ba8cb4d45c90acd73eeb53fa8ebb494&tags= + ${search} + &orientation=landscape&tag_mode=all&extras=url_m&format=json&nojsoncallback=1`);
  const data = await res.json();
  // console.log(data);
  for (let i = 0; i < data.photos.photo.length; i++) {
    let link = data.photos.photo[i].url_m
    // let title = data.photos.photo[0].title
    createImage(link)
    // createTitle(title)
  }
  // console.log(data.photos.getInfo.api_key);
}
getData();


// function createTitle(title) {
//   let val = document.createElement('div')
//   val.innerHTML = '<p>' + title + '</p>'
//   val.classList.add("text")
//   gallery.appendChild(val)
// }


// function addListItem(url) {
//   // gallery.insertBefore(createImage(url))
// 	gallery.appenChild(createImage(url))	
// }