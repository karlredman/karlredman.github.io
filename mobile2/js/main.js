//$(function() {
    //alert( 'JavaScript Loaded!' );
//});

/*
 *(function($) {
 *    if ($(window).width() > 400 ) {
 *        alert( 'JavaScript Loaded!' );
 *        //$("input[type='checkbox']").attr("checked", true);
 *    }
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

if ($(window).width() > 400) {
    //alert('grater than 400');
    $("input[type='checkbox']").attr("checked", true);
}
