(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1:function(t,e,n){"use strict";n.d(e,"d",function(){return a}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return c}),n.d(e,"b",function(){return r});var i=n(2);function a(t=(()=>{})){$("#loading").css("display","block"),setTimeout(()=>t(),400)}function o(){$("#loading").css("display","none")}function c(t){o(),setTimeout(()=>Object(i.b)(t),100)}function r(t){o(),setTimeout(()=>Object(i.b)(t.responseJSON),100)}},11:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o});var i=n(6);const a=t=>(t.price=Number.parseInt(t.price,10),t.priceText=Object(i.a)(t.price),t.ceilPrice&&(t.ceilPrice=Number.parseInt(t.ceilPrice,10),t.ceilPriceText=Object(i.a)(t.ceilPrice)),t.galleryImages=JSON.parse(t.galleryImages),t.technicalInfo=JSON.parse(t.technicalInfo),t),o=t=>t.map(t=>a(t))},13:function(t,e,n){"use strict";var i=n(10),a=n.n(i),o=n(8),c=n.n(o),r=n(1),l=n(2);let s=!1;const u=()=>s;function d(){window.innerWidth>991&&s&&g()}function g(){$(".page_menu");var t=$(".page_menu_content");TweenMax.to(t,.3,{height:0}),s=!1}var m=n(7),f=n(5),p=n(4),h=n(9);$("#btn-modal-forgot").click(()=>{Object(r.d)(),setTimeout(()=>{Object(r.c)(),Object(l.c)("Đã gửi đường dẫn thay đổi mật khẩu tới địa chỉ email của bạn. Vui lòng kiểm tra email.",()=>{$("#js-modal-forgot").modal("hide")})},500)}),$("#btn-modal-login").click(()=>{const t=$("#loginEmail").val(),e=$("#loginPassword").val();if(!a.a.isEmail(t))return alert("Địa chỉ email không hợp lệ");const n=`${p.a.baseUrl}/api/auth/login.php`;Object(r.d)(()=>{$.post(n,c.a.stringify({email:t,password:e}),t=>{Object(r.c)(),console.log(t);const{issuedAt:e,token:n,tokenExpire:i,user:a}=t;Object(f.f)(a,n,i,e),window.location.reload()}).fail(t=>Object(r.a)(t.responseJSON))})}),$("#btn-modal-signup").click(()=>{const t=$("#signUpEmail").val().toLowerCase(),e=$("#signUpFirstName").val(),n=$("#signUpLastName").val(),i=$("#signUpTel").val(),o=$("#signUpAddress").val(),s=$("#signUpPassword").val(),u=$("#signUpConfirm").val();if([t,e,n,i,o,s].reduce((t,e)=>t||0==e.length,!1))return alert("Vui lòng điền đầy đủ thông tin.");if(!a.a.isEmail(t))return alert("Địa chỉ email không hợp lệ.");if(!Object(h.a)(s))return alert("Mật khẩu yêu cầu tối thiểu 8 ki tự, trong đó ít nhất 1 kí tự hoa, 1 kí tự thường, 1 số và 1 kí tự đặc biệt.");if(s!==u)return alert("Mật khẩu không khớp.");const d=`${p.a.baseUrl}/api/auth/signup.php`,g={email:t,firstName:e,lastName:n,tel:i,address:o,password:s};Object(r.d)(()=>{$.post(d,c.a.stringify(g),t=>{Object(r.c)(),console.log(t),Object(l.c)("Đăng kí tài khoản thành công.",()=>{$("#js-modal-signup").modal("hide")})}).fail(t=>Object(r.a)(t.responseJSON))})}),$("#headerLogout").find("a").click(()=>{Object(f.a)(),window.location.reload()}),Object(f.d)(t=>{if(t){console.log("Logined");const{user:e,token:n}=t;console.log(e),$("#headerLogin").hide(),$("#headerSignUp").hide()}else console.log("No login"),$("#headerProfile").hide(),$("#headerLogout").hide()}),d(),function(){var t,e;$(".custom_dropdown_placeholder").length&&$(".custom_list").length&&(t=$(".custom_dropdown_placeholder"),e=$(".custom_list")),t.on("click",t=>{e.hasClass("active")?e.removeClass("active"):e.addClass("active"),$(document).one("click",function t(n){$(n.target).hasClass("clc")?$(document).one("click",t):e.removeClass("active")})}),$(".custom_list a").on("click",function(n){n.preventDefault(),$(this).parent().index(),t.text($(this).text()).css("opacity","1"),e.hasClass("active")?e.removeClass("active"):e.addClass("active")}),$("select").on("change",function(e){t.text(this.value),$(this).animate({width:`${t.width()}px`})})}(),$(".page_menu").length&&$(".page_menu_content").length&&($(".page_menu"),$(".page_menu_content"),$(".menu_trigger").on("click",()=>{u()?g():function(){$(".page_menu");var t=$(".page_menu_content");TweenMax.set(t,{height:"auto"}),TweenMax.from(t,.3,{height:0}),s=!0}()}),$(".page_menu_item").length&&$(".page_menu_item").each(function(){var t=$(this);t.hasClass("has-children")&&t.on("click",e=>{e.preventDefault(),e.stopPropagation();var n=t.find("> ul");n.hasClass("active")?(n.toggleClass("active"),TweenMax.to(n,.3,{height:0})):(n.toggleClass("active"),TweenMax.set(n,{height:"auto"}),TweenMax.from(n,.3,{height:0}))})})),Object(m.c)(),Object(m.d)(),$(window).on("resize",()=>{d()})},14:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var i=n(11),a=n(4);const o=t=>`\n<div class="owl-item">\n<div class="viewed_item d-flex flex-column align-items-center justify-content-center text-center\n  ${t.ceilPriceText?"discount":`${t.hotNew?"is_new":""}`}">\n\n  <div class="viewed_image">\n    <img src="${t.thumbnail}" alt="${t.name}">\n  </div>\n\n  <div class="viewed_content text-center">\n    <div class="viewed_price">${t.priceText}\n    ${t.ceilPriceText?`<span>${t.ceilPriceText}</span>`:""}\n    </div>\n    <div class="viewed_name"><a href="product.html?id=${t.id}">${t.name}</a></div>\n  </div>\n  <ul class="item_marks">\n\n  ${t.ceilPriceText?`<li class="item_mark item_discount">\n          -${Math.ceil((t.ceilPrice-t.price)/t.ceilPrice*100)}%\n        </li>`:""}\n\n    ${t.hotNew?'<li class="item_mark item_new">new</li>':""}\n\n  </ul>\n</div>\n</div>\n`;let c=[];function r(){const t=$(".viewed_slider");$.get(`${a.a.baseUrl}/api/product/getHotDeal.php`,e=>{(c=Object(i.b)(e)).forEach(e=>{t.append(o(e))}),function(){if($(".viewed_slider").length){var t=$(".viewed_slider");if(t.owlCarousel({loop:!0,margin:30,autoplay:!0,autoplaySpeed:600,autoplayTimeout:1500,nav:!1,dots:!1,responsive:{0:{items:1},575:{items:2},768:{items:3},991:{items:4},1199:{items:6}}}),$(".viewed_prev").length){var e=$(".viewed_prev");e.on("click",()=>{t.trigger("prev.owl.carousel")})}if($(".viewed_next").length){var n=$(".viewed_next");n.on("click",()=>{t.trigger("next.owl.carousel")})}}}()}).fail(t=>console.log(t))}},15:function(t,e,n){"use strict";function i(){for(var t=document.getElementsByClassName("product_fav"),e=0;e<t.length;e++){t[e].addEventListener("click",t=>{t.target.classList.toggle("active")})}}n.d(e,"a",function(){return i})},2:function(t,e,n){"use strict";function i(t,e=(()=>{})){$.confirm({title:"Thông báo",icon:"fa fa-bell",type:"green",content:t,buttons:{ok:{text:"OK",btnClass:"btn-green",action(){e()}}}})}function a(t,e=(()=>{})){$.confirm({title:"Lỗi",icon:"fa fa-exclamation-triangle",type:"red",content:t,buttons:{ok:{text:"OK",btnClass:"btn-red",action(){e()}}}})}function o(t,e,n,i=(()=>{}),a=(()=>{})){$.confirm({title:"Thông báo",icon:"fa fa-bell",type:"green",content:t,buttons:{ok:{text:e,btnClass:"btn-green",action(){i()}},cancel:{text:n,action(){a()}}}})}function c(t,e,n,i=(()=>{}),a=(()=>{})){$.confirm({title:"Cảnh báo",icon:"fa fa-exclamation-triangle",type:"red",content:t,buttons:{ok:{text:e,btnClass:"btn-red",action(){i()}},cancel:{text:n,action(){a()}}}})}function r(t,e,n,i=(()=>{}),a=(()=>{})){$.confirm({title:"Thông báo",icon:"fa fa-question-circle",type:"orange",content:t,buttons:{ok:{text:e,btnClass:"btn-orange",action(){i()}},cancel:{text:n,action(){a()}}}})}n.d(e,"c",function(){return i}),n.d(e,"b",function(){return a}),n.d(e,"d",function(){return o}),n.d(e,"a",function(){return c}),n.d(e,"e",function(){return r})},255:function(t,e,n){},257:function(t,e,n){},265:function(t,e,n){"use strict";n.r(e);var i=n(8),a=n.n(i),o=(n(255),n(257),n(14)),c=n(15),r=n(7);var l=n(11),s=(n(13),n(2)),u=n(4);let d={};(()=>{Object(o.a)();const t=function(){for(var t,e=[],n=window.location.href.slice(window.location.href.indexOf("?")+1).split("&"),i=0;i<n.length;i++)t=n[i].split("="),e.push(t[0]),e[t[0]]=t[1];return e}();console.log(t);const e=t.id;e||(window.location.pathname="");const n=`/api/product/getOne.php?${a.a.stringify({id:e})}`;console.log(n),$.get(`${u.a.baseUrl}${n}`,t=>{d=Object(l.a)(t),console.log(d),d.quantity=1,function(){if($(".product_quantity").length){var t,e,n=$("#quantity_input"),i=$("#quantity_inc_button"),a=$("#quantity_dec_button");i.on("click",()=>{t=n.val(),e=parseFloat(t)+1,n.val(e),d.quantity++}),a.on("click",()=>{(t=n.val())>0&&(e=parseFloat(t)-1,n.val(e),d.quantity--)})}}(),d.galleryImages=[d.thumbnail,...d.galleryImages],d.galleryImages.forEach(t=>{$(".slider_image_selected").append(`\n        <div class="item">\n          <img src="${t}" alt="${d.name}">\n        </div>\n      `),$(".slider_image_list").append(`\n      <div class="item">\n        <img src="${t}" alt="${d.name}">\n      </div>\n    `)}),$(".slider_image_selected").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0,asNavFor:".slider_image_list"}),$(".slider_image_list").slick({slidesToShow:3,slidesToScroll:1,asNavFor:".slider_image_selected",dots:!1,centerMode:!0,focusOnSelect:!0}),$(".product_category").text(`${d.brandName} - ${d.modelName}`),$(".product_name").text(d.name),$(".product_text.status p").text(d.status),$(".product_text.warranty p").text(d.warranty),$(".product_price").text(d.priceText),function(){const t=$("#table-tech-info > tbody");d.technicalInfo.forEach(({name:e,value:n},i)=>{t.append(`\n        <tr class="${i>12?"more":""}">\n          <td width="30%">${e}</td>\n          <td>${n}</td>\n        </tr>\n      `)}),t.find("tr.more").each((t,e)=>$(e).hide());const e=$(".tech-info button");e.click(()=>{const n=e.attr("data-all");"1"==n?(e.text("Xem thêm"),e.attr("data-all","0"),t.find("tr.more").each((t,e)=>$(e).hide())):(e.text("Rút gọn"),e.attr("data-all","1"),t.find("tr.more").each((t,e)=>$(e).show()))})}(),$("#btn-add-cart").click(()=>{Object(r.a)(d,d.quantity);const t=`Sản phẩm <i>${d.name}</i> đã được thêm vào giỏ hàng. Bạn có muốn tiến hành thanh toán?`;Object(s.d)(t,"Đi đến giỏ hàng","Bỏ qua",()=>{window.location.href="cart.html"})}),Object(c.a)()}).fail(t=>console.log(t))})()},4:function(t,e,n){"use strict";n.d(e,"a",function(){return i});const i={baseUrl:"http://api.hands-free.epizy.com"}},5:function(t,e,n){"use strict";function i(t,e,n,i){localStorage.setItem("user",JSON.stringify(t)),localStorage.setItem("token",e),localStorage.setItem("tokenExpire",n),localStorage.setItem("issuedAt",i)}function a(){["user","token","tokenExpire","issuedAt"].forEach(t=>{localStorage.removeItem(t)})}function o(){return localStorage.getItem("token")}function c(){return JSON.parse(localStorage.getItem("user"))}function r(t){localStorage.setItem("user",JSON.stringify(t))}function l(t){const e=JSON.parse(localStorage.getItem("user")),n=localStorage.getItem("token"),i=localStorage.getItem("tokenExpire");if(!e||!e.email||!n||!i||1e3*i<Date.now())return a(),t();t({user:e,token:n})}function s(){const t=JSON.parse(localStorage.getItem("user")),e=localStorage.getItem("token"),n=localStorage.getItem("tokenExpire");return t&&t.email&&e&&n&&!(1e3*n<Date.now())?{user:t,token:e}:(a(),!1)}n.d(e,"f",function(){return i}),n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o}),n.d(e,"c",function(){return c}),n.d(e,"g",function(){return r}),n.d(e,"d",function(){return l}),n.d(e,"e",function(){return s})},6:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var i=n(12),a=n.n(i);function o(t){return`${a()(t).format("0,0")} đ`}},7:function(t,e,n){"use strict";n.d(e,"g",function(){return a}),n.d(e,"c",function(){return r}),n.d(e,"d",function(){return l}),n.d(e,"a",function(){return s}),n.d(e,"e",function(){return u}),n.d(e,"f",function(){return d}),n.d(e,"b",function(){return g});var i=n(6);const a=t=>t.reduce((t,e)=>t+Number.parseInt(e.price,10)*e.quantity,0),o=t=>Object(i.a)(a(t)),c=t=>t.reduce((t,e)=>t+e.quantity,0),r=()=>{const t=$(".cart_count span"),e=$(".cart_price"),n=JSON.parse(localStorage.getItem("cart")||"[]");t.text(c(n)),e.text(o(n))},l=()=>{const t=$(".wishlist_count"),e=JSON.parse(localStorage.getItem("wishlist")||"[]");t.text(e.length)},s=(t,e=1)=>{const n=$(".cart_count span"),i=$(".cart_price"),a=JSON.parse(localStorage.getItem("cart")||"[]");console.log("Add cart:",t);const{id:r,brandName:l,modelId:s,modelName:u,name:d,price:g,thumbnail:m}=t,f=a.findIndex(t=>t.id==r);f>-1?a[f].quantity+=e:a.push({quantity:e,id:r,brandName:l,modelId:s,modelName:u,name:d,price:g,thumbnail:m}),n.text(c(a)),i.text(o(a)),localStorage.setItem("cart",JSON.stringify(a))},u=t=>{const e=$(".cart_count span"),n=$(".cart_price"),i=JSON.parse(localStorage.getItem("cart")||"[]");console.log("Remove cart:",t);const{id:a,brandName:r,modelId:l,modelName:s,name:u,price:d,thumbnail:g}=t,m=i.findIndex(t=>t.id==a);m>-1?(i[m].quantity--,0==i[m].quantity&&i.splice(m,1)):console.log("Item not found"),e.text(c(i)),n.text(o(i)),localStorage.setItem("cart",JSON.stringify(i))},d=()=>JSON.parse(localStorage.getItem("cart")||"[]"),g=()=>{localStorage.removeItem("cart")}},9:function(t,e,n){"use strict";function i(t){return t&&/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(t)}function a(t){return t&&/^uploads\/.*$/.test(t)}n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})}},[[265,1,0]]]);