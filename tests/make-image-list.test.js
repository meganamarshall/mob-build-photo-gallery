import images from '../data/images.js';
import makeImageTemplate from '../src/make-image-list.js';
const test = QUnit.test;


test('call template function that generates the html template', assert => {
    //arrange
    const image = images[0];


    
    //act
    const result = makeImageTemplate(image);
    const expected =
    `<li>
            <h2>
                UniWhal
            </h2>
            <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg">
        </li>`;
    
    //assert
    assert.htmlEqual(result, expected);
});