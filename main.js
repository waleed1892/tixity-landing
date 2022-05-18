import Alpine from 'alpinejs';
import SvgInject from "@iconfu/svg-inject";
import collapse from '@alpinejs/collapse'
 
// register plugins
Alpine.plugin(collapse)

window.Alpine = Alpine
Alpine.start()

// turn svg images into inline svg elements
SvgInject(document.querySelectorAll('img.injectable'))

