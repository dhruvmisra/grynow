//Read more
let read = document.getElementById('read-more');
let content = document.getElementById('read-content');
content.style.display = 'none';
read.addEventListener('click', () => {
  console.log('clicked');
  if(content.style.display == 'none') {
    console.log('if');
    content.style.display = 'block';
    read.innerHTML = 'Read Less';
  } else {
    console.log('else');
    content.style.display = 'none';
    read.innerHTML = 'Read More';
  }
});