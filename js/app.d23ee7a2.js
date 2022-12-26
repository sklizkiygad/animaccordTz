(function(){var t={5549:function(t,o,A){"use strict";A.r(o)},315:function(t,o,A){"use strict";var e=A(9242),n=A(3396);const i={class:"main-wrapper"},s={class:"classic-buttons-wrapper"},r=(0,n._)("h1",null,"CLASSIC BUTTONS",-1),u={class:"button-timer-wrapper"},f=(0,n._)("h1",null,"BUTTON TIMER",-1),c={class:"button-timer-wrapper"},a=(0,n._)("h1",null,"BUTTON MULTI SIZED",-1),p={class:"button-timer-wrapper"},m=(0,n._)("h1",null,"BUTTON LINK",-1);function l(t,o,A,e,l,g){const b=(0,n.up)("ButtonComponent");return(0,n.wg)(),(0,n.iD)("div",i,[(0,n._)("div",s,[r,(0,n.Wm)(b,{"type-of-button":"classic","text-of-button":"отправить письмо","color-type-of-button":"primary"}),(0,n.Wm)(b,{"type-of-button":"classic","text-of-button":"отправить письмо","color-type-of-button":"secondary"}),(0,n.Wm)(b,{"type-of-button":"classic","text-of-button":"отправить письмо","color-type-of-button":"warning"}),(0,n.Wm)(b,{"type-of-button":"classic","text-of-button":"отправить письмо","color-type-of-button":"disabled"}),(0,n.Wm)(b,{"type-of-button":"classic","text-of-button":"отправить письмо","color-type-of-button":"info"}),(0,n.Wm)(b,{"type-of-button":"classic","text-of-button":"отправить письмо","color-type-of-button":"danger"}),(0,n.Wm)(b,{"type-of-button":"classic","text-of-button":"отправить письмо","color-type-of-button":"action"})]),(0,n._)("div",u,[f,(0,n.Wm)(b,{"type-of-button":"timer","text-of-button":"повторное письмо","timer-of-button":"300"})]),(0,n._)("div",c,[a,(0,n.Wm)(b,{"type-of-button":"multi-sized","text-of-button":"/img/pic1.png","color-type-of-button":"primary"}),(0,n.Wm)(b,{"type-of-button":"multi-sized","text-of-button":"/img/pic2.png","color-type-of-button":"secondary"}),(0,n.Wm)(b,{"type-of-button":"multi-sized","text-of-button":"/img/pic3.png","color-type-of-button":"primary"}),(0,n.Wm)(b,{"type-of-button":"multi-sized","text-of-button":"/img/pic4.png","color-type-of-button":"warning"}),(0,n.Wm)(b,{"type-of-button":"multi-sized","text-of-button":"/img/pic5.png","color-type-of-button":"info"}),(0,n.Wm)(b,{"type-of-button":"multi-sized","text-of-button":"/img/pic6.png","color-type-of-button":"danger"}),(0,n.Wm)(b,{"type-of-button":"multi-sized","text-of-button":"/img/pic7.png","color-type-of-button":"action"}),(0,n.Wm)(b,{"type-of-button":"multi-sized","text-of-button":"/img/pic8.png","color-type-of-button":"primary"})]),(0,n._)("div",p,[m,(0,n.Wm)(b,{"type-of-button":"link-button","text-of-button":"Напомнить pin-код","link-address":"https://youtu.be/dQw4w9WgXcQ"})])])}var g=A(7139);const b={class:"main-button"},d={key:1,class:"button-timer"},h={class:"button-timer__timer"},B=["src","alt"],I=["href"];function w(t,o,A,e,i,s){return(0,n.wg)(),(0,n.iD)("div",b,["classic"===A.typeOfButton?((0,n.wg)(),(0,n.iD)("button",{key:0,class:(0,g.C_)(["classic-button",A.colorTypeOfButton])},(0,g.zw)(A.textOfButton),3)):(0,n.kq)("",!0),"timer"===A.typeOfButton?((0,n.wg)(),(0,n.iD)("button",d,[(0,n.Uk)((0,g.zw)(A.textOfButton)+" ",1),(0,n._)("div",h,(0,g.zw)(s.showTimer()),1)])):(0,n.kq)("",!0),"multi-sized"===A.typeOfButton?((0,n.wg)(),(0,n.iD)("button",{key:2,class:(0,g.C_)(["button-multi-sized",A.colorTypeOfButton])},[(0,n._)("img",{src:s.showImage(),alt:A.textOfButton},null,8,B)],2)):(0,n.kq)("",!0),"link-button"===A.typeOfButton?((0,n.wg)(),(0,n.iD)("a",{key:3,class:"button-link",href:A.linkAddress,target:"_blank"},(0,g.zw)(A.textOfButton),9,I)):(0,n.kq)("",!0)])}var y={name:"ButtonComponent",data(){return{currentTime:0,timer:null}},props:{typeOfButton:{type:String,default:"classic"},textOfButton:{type:String,default:"Отправить письмо"},colorTypeOfButton:{type:String,default:"primary"},timerOfButton:{type:Number,default:0},linkAddress:{type:String,default:""}},methods:{startTimer(){this.timer=setInterval((()=>{this.currentTime--}),1e3)},stopTimer(){clearTimeout(this.timer)},setCurrentTimeVar(){this.timerOfButton&&(this.currentTime=this.timerOfButton)},showTimer(){let t=(Math.floor(this.currentTime/60)<10?"0"+Math.floor(this.currentTime/60):Math.floor(this.currentTime/60))+":"+(this.currentTime%60<10?"0"+Math.floor(this.currentTime%60):Math.floor(this.currentTime%60));return t},showImage(){return A(7148)("./assets"+this.textOfButton)}},watch:{currentTime(t){0==t&&this.stopTimer()}},mounted(){this.setCurrentTimeVar(),this.startTimer()},destroyed(){this.stopTimer()}},E=A(89);const U=(0,E.Z)(y,[["render",w]]);var x=U,C={name:"App",components:{ButtonComponent:x}};const N=(0,E.Z)(C,[["render",l]]);var T=N;(0,e.ri)(T).mount("#app")},7148:function(t,o,A){var e={"./assets/css/style.css":5549,"./assets/fonts/Nunito/Nunito-Regular.eot":5283,"./assets/fonts/Nunito/Nunito-Regular.otf":2729,"./assets/fonts/Nunito/Nunito-Regular.ttf":6001,"./assets/fonts/Nunito/Nunito-Regular.woff":9508,"./assets/fonts/Phosphate/Phosphate_Fixed_Solid.eot":2413,"./assets/fonts/Phosphate/Phosphate_Fixed_Solid.otf":2067,"./assets/fonts/Phosphate/Phosphate_Fixed_Solid.ttf":7055,"./assets/fonts/Phosphate/Phosphate_Fixed_Solid.woff":9509,"./assets/img/pic1.png":6825,"./assets/img/pic2.png":7351,"./assets/img/pic3.png":8192,"./assets/img/pic4.png":8785,"./assets/img/pic5.png":5884,"./assets/img/pic6.png":9465,"./assets/img/pic7.png":3665,"./assets/img/pic8.png":5014};function n(t){var o=i(t);return A(o)}function i(t){if(!A.o(e,t)){var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}return e[t]}n.keys=function(){return Object.keys(e)},n.resolve=i,t.exports=n,n.id=7148},5283:function(t,o,A){"use strict";t.exports=A.p+"fonts/Nunito-Regular.0440f93f.eot"},2729:function(t,o,A){"use strict";t.exports=A.p+"fonts/Nunito-Regular.a1ef3e0e.otf"},6001:function(t,o,A){"use strict";t.exports=A.p+"fonts/Nunito-Regular.96de7146.ttf"},9508:function(t,o,A){"use strict";t.exports=A.p+"fonts/Nunito-Regular.56f4e9b9.woff"},2413:function(t,o,A){"use strict";t.exports=A.p+"fonts/Phosphate_Fixed_Solid.eab997a8.eot"},2067:function(t,o,A){"use strict";t.exports=A.p+"fonts/Phosphate_Fixed_Solid.94ab274b.otf"},7055:function(t,o,A){"use strict";t.exports=A.p+"animaccordTz/fonts/Phosphate_Fixed_Solid.e269fd43.ttf"},9509:function(t,o,A){"use strict";t.exports=A.p+"../fonts/Phosphate_Fixed_Solid.e236bbbb.woff"},6825:function(t){"use strict";t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADNSURBVHgB7ZThDcIgEIUfTuAIdQNHcJQ6gW6gm+AG6gSOUDcAJ9AN8JFoTBAoscAf+ZLLJVzTr+ReCjQaf48xZsc6sjrUgjJpPqgqckf65oQfmaU8ZKVsvWekUYrXTn1cUIqIdGDNMQERk7LtA2O72wfGubEOQgiNFChdmXx4AygCYsXWIQ+aN164h0mpnoh3JSHxGvk4+w5j4erZpGdkb2A/7Pr1stQQjWHlgcDcWUuUJCJXpvS/OiKXKE1AvkUNHPmAmthQsTZoNBoOT8ZJWwZMTyN5AAAAAElFTkSuQmCC"},7351:function(t){"use strict";t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACZSURBVHgB7dVhCYAwEIbhDxMYwQhGMIINNIIRjGADoxhlEbTBeeJAHVNEuNsP74H7I8jLDXGAMb9GRCXPwFNAC8dqOjiVOEdyH6MgXkKSD8fMGvEuZby3eCReQNJDfHrzfobv3M3zBVJ4q+ZmWyd21A/ROVVU5oum6786VEPCdoR+q5gWUmi/DnWjp3ivHj3FW56Rp4IxJrACozm6PKJbjTcAAAAASUVORK5CYII="},8192:function(t){"use strict";t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGmSURBVHgBrZaBlcIgDIZTJ+gI3AbeBrqBN4FuYDfQEdxAN3CE3gaOgBvUDf5LrtzTowGh8L2X19fyk0AhAaIMAKzYzmwWT25sV7YN1YadGrYe77GipRqwoyXbgHREu6QS3ExtZHY2EtzQXLjzRXF6Ymu9wWm6nubgHPocI/qTom8pF+60URyZiL7FdC/sQvpFJLY/2nvTNPeQmNse/HhQIgtKp034dX77QLkE1riL6A85S/MueK84Oyi6vaK70VwwlkgN6wZ1Rbi4FBeRDvkcqQbsaIdwlXpFZt9RTTBuNpn9TQloZZaYUzC8IHIw9C7IVmlv3UCMFgzjZrOuf/paY/pb5X0bm5EbzArTTLCavgk4kcQv+21PpOJ9+B9DlWstHahCULavnA5/m+mEeQzFm80NQNLpinhKDU6zR+nuDgykV4Jml8ec0+k3zfhhlCaD0hIZCbpC/NInbXWvuBhzOJU6JRP6OSucoV/yhAOVEAnavWi6qsExppCPrONO0YbWfxvyn7Or5SK35vJ38Rv42zc/PqlOtft3V5ZTxiToDZ7H5iWm/QHX/Ijd9tDsUgAAAABJRU5ErkJggg=="},8785:function(t){"use strict";t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEHSURBVHgB7ZZdEcIwDIBzKEDCJEwCEpCABCTgAByAA3AwCUiohEkIzV1223FbE9q0D1y+u7xsTftdf9ICOI7j/BGIuKeAH4k5fU6epuMrzjxjdIockgmcM8Y4gxVfQhMhJcZC40reAUrhJdsirIklhIi7NOYOZFJ7oYsxLMVIiL4JeeXEgQZME0hMmCHkfx1YwEv4RllMEurBEqVYO6FCsXpCmWL1hTLEjtAKlE/ZRECr02Yk1EYsQ6iuWIFQHTHUVeoD6gqszfWD8/NjS6jndppTeYFSeJZEoUV7SSxAKTzIqBFSir3AgtjRSSskiAU03uy0kekZfNN2zGIPlhuwRSF1HMdpwAdulGnUHEQpPAAAAABJRU5ErkJggg=="},5884:function(t){"use strict";t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFrSURBVHgB7ZbdcYMwDIBFJmg3IBtkBFboBKEbsEGzQdMJyAYZgWxANoBOAJ1AlRJx+IQCHHbyxHen82HLEvrBBmBl5ZUgYkzyRVJiT0NSkOx5HUJDRr9xmookgxCQoTcV4Rx24Iuk0aKRCBs1X4IveK+nlc5E6XHtTyRnzhD4IMYqHY234d4228qsxdSINIYAcMbEZqHXNiR7NXeIoqiGJxNx09DopnWrHUsGEnmMnSXe+0fSklxoXyu6uaPXjbWMP6R3BN3BYEDzR5wmFd3dhN6Z9TbKRws2sxuNornS8E6yJfmU6Ys8czY/Ose1sy9+0M1XmKZxnLdSrtqZq90SasdMqi1yTSKFROHyC0MeZfBWk8z4nEZTi/fjtZrqDdFNTHtiZHAcjjmntVzp57AEI+ou8sR4+8LQjWEpOH5JlDjMSscBfMBl1+IJQsERzHDI0Yf5EVDO+Xvm06rAPsXdrw+/mPfNtbLyNP4BwBbvSfEsh18AAAAASUVORK5CYII="},9465:function(t){"use strict";t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFUSURBVHgB7ZfhbcIwEIVPnYANmhE8QjZoNkhHYAPYoGyQbpAROkJGyAh0g9c7cVGCObuRkDj/8CdZAQ6Rz+HslxBVKpXKvwA4UMmIII8BN45UIio54Z6WXsTbni+xUMOHiUeISu9UCiLJY8Yjn1q76ERcJQOPayQo79toArOrrNGTIhS09mPUfHYDPnEXiTSLjP71MZO37KiS/VaIx9mQHcgT4woO+rkl+0Ve8MmPKSE+fhu1E3mRE8Lj4nKXnQwhudqHRK0nD1RotoSQDodAHiSEJAhCptaQBzkh2Ik2e8omhXCLWZQk2yWEpJfN9CIvYO+xufTye0JAJk43te2C68gLZOIU6/1r0NbwawEVstJruTVssS6+K3mD+4RaerU3JtCQJ1jjdNTXJ9h8UClkJIXz3t/Z9RT6JNKfv5laWehCukT9O1PJ6DYl29VIlUqlUnkJf6wJ/cQ34tdXAAAAAElFTkSuQmCC"},3665:function(t){"use strict";t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD8SURBVHgB3ZaBDYIwEEU/TsAIjMAIbqAb6AayAW4gTiCbMAJsUEdgg/MINSIJbcE7THjJhUDJvTYpnwJ/IsJMiCjlS2pvW1tNFEUtNGBhwlXRNDVX3r0HSTzSMQ+xCdB8jIjcNlpfzg1S+sgNhU+kggbceM9VeuR7aMHNjw5xNn5/BzmejrEYiuKDY8xAGvIHS0cCKbhZzHUjPwWksKs0AdIuRmNIESgtpKVnh6ziuogKB+JKfXWB4gxrQP3Gqq30ik1CfQ7Xg0/kBG1oOvxzaELuOFy8k0N+EunCsZ/FrmNrA0XxfeJ5qXaWfkN9TBr6jkbdpBpNIFlVuCleVVjKTUQio+kAAAAASUVORK5CYII="},5014:function(t){"use strict";t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAExSURBVHgB7ZPh0YIwDIaDEzAC3wbfCIzABjiCGxg3cAPdBJwAN6gb4AaxOeodp0lJBf94PHc97uibvEnaAqys/BxE5OidXaK+VrSFoi83fj8XYvZaIv8phK0/kEFFD2x8Ff7nXBXMIBQpTeKWZVnLxhcltoJ51Mp/hFBZTjI9740jwplJoKBzgs49NRvf9t1/W6EyNlUv2QQI8tkivFRYWrq2dBzRnMaefMbAhw0LdE3DhWqU7YMWpHVNIWGsmyMNd6WjiYlo5o0S2AXTf2W/D0vCgWFUWuI5NGCBhrEtzd5izGflaHnqb4y89avy6zyhKy3mO7KDoziM6PgCFhZzTDUOcduItgMLIUmfYmwoGq3m/IbPqYlIfyE9pEDDpeNk3WgKzq8qEiOZ2972ysonPADC+mQvPW6dKwAAAABJRU5ErkJggg=="}},o={};function A(e){var n=o[e];if(void 0!==n)return n.exports;var i=o[e]={exports:{}};return t[e](i,i.exports,A),i.exports}A.m=t,function(){var t=[];A.O=function(o,e,n,i){if(!e){var s=1/0;for(c=0;c<t.length;c++){e=t[c][0],n=t[c][1],i=t[c][2];for(var r=!0,u=0;u<e.length;u++)(!1&i||s>=i)&&Object.keys(A.O).every((function(t){return A.O[t](e[u])}))?e.splice(u--,1):(r=!1,i<s&&(s=i));if(r){t.splice(c--,1);var f=n();void 0!==f&&(o=f)}}return o}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[e,n,i]}}(),function(){A.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return A.d(o,{a:o}),o}}(),function(){A.d=function(t,o){for(var e in o)A.o(o,e)&&!A.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:o[e]})}}(),function(){A.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){A.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)}}(),function(){A.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){A.p="/"}(),function(){var t={143:0};A.O.j=function(o){return 0===t[o]};var o=function(o,e){var n,i,s=e[0],r=e[1],u=e[2],f=0;if(s.some((function(o){return 0!==t[o]}))){for(n in r)A.o(r,n)&&(A.m[n]=r[n]);if(u)var c=u(A)}for(o&&o(e);f<s.length;f++)i=s[f],A.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return A.O(c)},e=self["webpackChunkanimaccord"]=self["webpackChunkanimaccord"]||[];e.forEach(o.bind(null,0)),e.push=o.bind(null,e.push.bind(e))}();var e=A.O(void 0,[998],(function(){return A(315)}));e=A.O(e)})();
//# sourceMappingURL=app.d23ee7a2.js.map
