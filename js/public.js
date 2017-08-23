/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2017 OA Wu Design
 * @license     http://creativecommons.org/licenses/by-nc/2.0/tw/
 */

$(function () {
  $('#menu > a').click (function () {
    $(this).toggleClass ('active');
  });
  $('#menu > .sub').each (function () {
    $(this).addClass ('n' + $(this).find ('> *').length);
  });
});