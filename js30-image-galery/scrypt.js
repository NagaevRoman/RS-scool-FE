
const gallery = document.querySelector('.grid')

const textSearch = document.getElementById('inp')

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

function setFocus(){
  document.getElementById('inp').focus();
}

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
