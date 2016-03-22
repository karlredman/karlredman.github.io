/*
 *$(function() {
 *    alert( 'JavaScript Loaded!' );
 *});
 */


/*
 *if ($(window).width() < 960) {
 *    alert('Less than 960');
 *}
 *else {
 *    alert('More than 960');
 *}
 */

/* open all accordian items if large screen */
if ($(window).width() > 960 ) {
    $("input[type='checkbox']").attr("checked", true);

}

/* open about page accordians (doesn't work on android phone) */
var pathname = window.location.pathname;
if( pathname.indexOf('about') >= 0){
    $("input[type='checkbox']").attr("checked", true);
    //alert(pathname);
}
