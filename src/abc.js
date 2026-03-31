jQuery.noConflict();
jQuery( document ).ready(function( $ ) {

let html = $('body').html();
html = html.replace(/（/gi, "<span class='note'>（");
html = html.replace(/）/gi, "）</span>");
$('body').html(html);
$('body').find('span.note:even').addClass('even');

});