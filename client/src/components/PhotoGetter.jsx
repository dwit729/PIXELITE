import React from 'react'



const response = await fetch('YOUR_WEB_APP_URL');
const data = await response.json();
const list = data.data;

for (let i = 0; i < list.length; i++) {
  const urlSplit = list[i].book_url.split('/d/');
  const imageId = urlSplit[1].split('/view')[0];
  console.log(imageId);
}



function PhotoGetter() {
  return (
    <div>
      
    </div>
  )
}

export default PhotoGetter
