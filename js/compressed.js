var link=document.querySelector(".search-head"),popup=document.querySelector(".search-form"),form=popup.querySelector("form"),date_in=popup.querySelector("[name=date-in]"),date_out=popup.querySelector("[name=date-out]"),old=popup.querySelector("[name=old]"),yung=popup.querySelector("[name=yung]");popup.classList.add("modal-show"),link.addEventListener("click",function(e){e.preventDefault(),popup.classList.toggle("show-modal"),popup.classList.remove("modal-error"),date_in.focus()}),form.addEventListener("submit",function(e){date_in.value&&date_out.value&&old.value&&yung.value||(e.preventDefault(),popup.classList.remove("modal-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("modal-error"))});