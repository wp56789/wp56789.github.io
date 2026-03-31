jQuery.noConflict();
jQuery( document ).ready(function( $ ) {

let html = $('body').html();
html = html.replace(/（/gi, "<span class='note'>（").replace(/）/gi, "）</span>");
$('body').html(html);

});