const FollowToggle = require('./follow_toggle.js');



$(() =>{
    // let ele = new FollowToggle('.follow-toggle');

    // $('button.follow-toggle')
    // => returns a list of all buttons with the "follow-toggle" class on the screen

    // btn is a HTML object
    $('.follow-toggle').each( (i, btn) => new FollowToggle(btn, {}) );
})