(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"816e":function(e,n,t){},"8c7b":function(e,n,t){"use strict";t.r(n);var i=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"q-pa-xl"},[t("h3",{staticClass:"q-mb-lg text-grey q-mt-lg"},[e._v("Animating Horizontal line on scroll. ")]),t("p",[e._v("Animating Timeline + popping block fading up from left and right.")]),t("p",[e._v("Javascript Library, CSS and functions used :")]),t("ul",[t("li",[e._v("Intersection Observer")]),t("li",[e._v("CSS Transitions")])]),t("p",[e._v("Custom animation function execution below")]),t("pre",[e._v("\r\n    "),t("code",[e._v("   \r\n    extendLine() {\r\n      const lines = document.querySelectorAll('.horizontal-line');\r\n\r\n      /* Use intersection observer to watch if the target is in the screen */\r\n\r\n        let observer = new IntersectionObserver((entries) => {\r\n          entries.forEach(entry => {\r\n\r\n            if (entry.intersectionRatio > 0) {\r\n              /* Add extended class if the target appears on screen */\r\n              entry.target.classList.add('extended');\r\n            } else {\r\n              /* Removes extended class when out of the screen */\r\n              entry.target.classList.remove('extende');\r\n            }\r\n\r\n          });\r\n\r\n        });\r\n\r\n        /* Get every element with line instance */\r\n        lines.forEach(lines => {\r\n          observer.observe(lines);\r\n        });\r\n      },\r\n    ")]),e._v("\r\n  ")]),t("h3",{staticClass:"q-mb-lg text-grey q-mt-lg"},[e._v("Output ")]),t("div",{staticClass:"start container",attrs:{id:"sentinel"}},[t("div",{staticClass:"line-container"},[t("div",{staticClass:"parent-line"}),t("div",{staticClass:"horizontal-line"},[t("div",{staticClass:"sibling-line"})])]),t("div",{staticClass:"q-py-xl"},[e._v("\r\n        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\r\n      ")]),t("div",{staticClass:"line-container"},[t("div",{staticClass:"parent-line"}),t("div",{staticClass:"horizontal-line"},[t("div",{staticClass:"sibling-line"})])]),t("div",{staticClass:"q-py-xl"},[e._v("\r\n        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\r\n      ")]),t("div",{staticClass:"line-container"},[t("div",{staticClass:"parent-line"}),t("div",{staticClass:"horizontal-line"},[t("div",{staticClass:"sibling-line"})])])]),t("h3",{staticClass:"q-my-xl"},[e._v("SCSS")]),t("pre",[e._v("\r\n      "),t("code",[e._v("\r\n        .container {\r\n          .line-container {\r\n            position: relative;\r\n            .parent-line {\r\n              height: 32px;width: 32px;\r\n              border-radius: 200px;\r\n              background: #3C3F55;\r\n              border: 8px solid #DCDCDC\r\n            }\r\n              .horizontal-line {\r\n                position: relative;\r\n                height: 2px;\r\n                width: 5%;\r\n                top: -16px;\r\n                z-index: -1;\r\n                background: #707070;\r\n                transition: width 0.2s ease-in-out;\r\n                &.extended {\r\n                  width: 100%;\r\n                  transition: width 1.5s ease-in-out;\r\n                  transition-delay: 0.2s;\r\n                }\r\n              .sibling-line {\r\n                position: absolute;\r\n                top: -7.5px;\r\n                right: -2px;\r\n                height: 16px;width: 16px;\r\n                border-radius: 200px;\r\n                background: #3C3F55;\r\n                border: 4px solid #DCDCDC\r\n              }\r\n            }  \r\n          }\r\n        }\r\n      ")]),e._v("\r\n    ")])])}],s=(t("4160"),t("159b"),{data:function(){return{}},mounted:function(){this.extendLine()},methods:{extendLine:function(){var e=document.querySelectorAll(".horizontal-line"),n=new IntersectionObserver((function(e){e.forEach((function(e){e.intersectionRatio>0?e.target.classList.add("extended"):e.target.classList.remove("extended")}))}));e.forEach((function(e){n.observe(e)}))},scrollDetect:function(){var e=0;window.addEventListener("scroll",(function(){document.body.getBoundingClientRect().top>e?console.log("up"):console.log("dwon"),e=document.body.getBoundingClientRect().top}))}}}),a=s,o=(t("9ad0"),t("2877")),l=Object(o["a"])(a,i,r,!1,null,"afb1dd08",null);n["default"]=l.exports},"9ad0":function(e,n,t){"use strict";var i=t("816e"),r=t.n(i);r.a}}]);