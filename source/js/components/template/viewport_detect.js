import $ from 'jquery'
export var viewport
export function viewport_detect(a){a=a.width();viewport=680>a?"phone":680<a&&1024>=a?"tablet":"desktop"}$(window).on({resize:function(){viewport_detect($(this))}});viewport_detect($(window));