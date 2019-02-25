import makeImageTemplate from '../src/make-image-list.js';
import images from '../data/images.js';

const imageList = document.getElementById('image-list');
images.forEach(image => {
    const dom = makeImageTemplate(image);
    imageList.appendChild(dom);
});