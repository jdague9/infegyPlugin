/**
 * Created by jordan on 4/23/15.
 */

function showTagButtons() {
    var button = $('<button class="btn btn-default">Tag</button>');
    console.warn($('.single-post-info').find());
    $('.single-post-info').append(button);
}

$(window).load(showTagButtons());