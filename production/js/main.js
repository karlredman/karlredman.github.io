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

/* open all accordian items if large screen 
Note: probably should use classes instead */
if ($(window).width() > 960 ) {
    //alert('grater than 400');
    $("input[type='checkbox']").attr("checked", true);
}
