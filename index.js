'use strict';

$('.thumbnail').on('click', e => {
  console.log(e.target);
});

$('.thumbnail').on('click', e => {
  console.log(e.target);
});

'use strict';
function carousel() {
  $('.thumbnail').on('click', e => {

    // set selectedImg to img of current target
    const selectedImg = $('img', $(event.currentTarget));

    //set the src and alt of the .selected_img equal to the src and alt of the selected img.
    $('.selected_img').attr('src', selectedImg.attr('src'));
    $('.selected_img').attr('alt', selectedImg.attr('alt'));
  });
}

$(carousel);
