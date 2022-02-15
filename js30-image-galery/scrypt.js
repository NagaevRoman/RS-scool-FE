
const gallery = document.querySelector('.grid')

const form  = document.getElementsByTagName('form')
// console.log(form);

const textSearch = document.getElementById('inp')

// console.log(textSearch);

const submit = document.querySelector('.searching')

function createImage(url) {
  let el = document.createElement('div')
  el.innerHTML = '<img src="' + url + '"/>'
  el.classList.add("img-container")
  gallery.appendChild(el)
}


function removeImg() {
  while (gallery.firstChild) {
    gallery.removeChild(gallery.firstChild)
  }
}

submit.addEventListener("click", () => searchOut(textSearch.value))


textSearch.addEventListener("keydown", (event) => {
  const keyName = event.key;
  if (keyName === 'Enter') {
    console.log(textSearch.value);
    searchOut(textSearch.value)
  }
})



let search = 'spring'
function searchOut(val) {
  if (val === undefined || val === '') {
    return search 
  } else {
    console.log(search);
    search = val
    removeImg()
    getData();
  }

let searchForm = document.forms[0];
let elem = searchForm.elements.text;


function complete(value) {
  document.onkeydown = null;
  search = value;
}
form.onsubmit = function() {

  let value = form[0].value;
  if (value == '') return false; 
  return false;
};


let search 
if (search === undefined) {

  search = 'spring'


}





async function getData() {
  const res = await fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&per_page=30&api_key=0ba8cb4d45c90acd73eeb53fa8ebb494&tags= + ${search} + &orientation=landscape&tag_mode=all&extras=url_m&format=json&nojsoncallback=1`);
  const data = await res.json();

  for (let i = 0; i < data.photos.photo.length; i++) {
    let link = data.photos.photo[i].url_m

    createImage(link)

  }

}
getData();


// let searchForm = document.forms[0];
// let elem = searchForm.elements.text;
// console.log(elem.value);


// console.log(elem.value);
// submit.addEventListener('click', function(){
//   console.log(`${document.form.inp.value}`)
// })
// function complete(value) {
//   document.onkeydown = null;
//   search = value;
// }
// form.onsubmit = function() {
//   let value = form[0].value;
//   console.log(value);
//   if (value == '') return false; 
//   return false;
// };




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

