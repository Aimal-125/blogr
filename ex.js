let mobileMenuBtn = document.querySelector(".mobile-menu-btn");
let span1 = document.querySelector(".span1");
let span2 = document.querySelector(".span2");
let span3 = document.querySelector(".span3");
let product = document.querySelector("#product");
let company = document.querySelector("#company");
let connect = document.querySelector("#connect");
let arrow1 = document.querySelector(".rotate1");
let arrow2 = document.querySelector(".rotate2");
let arrow3 = document.querySelector(".rotate3");
let mobileDropdownMenu = document.querySelector(".mobile-dropdown-menu");
let mobileNav = document.querySelector(".mobile-nav");
mobileMenuBtn.addEventListener("click", () => {
	if(span2.style.opacity === "0") {
		span2.style.opacity = "1";
		span1.style.transform = "rotate(0deg)";
		span3.style.transform = "rotate(0deg)";
		span1.style.webkitTransform = "rotate(0deg)";
		span3.style.webkitTransform = "rotate(0deg)";
		span1.style.width = "80%";
		span3.style.width = "80%";
	} else {
		span2.style.opacity = "0";
		span1.style.transform = "rotate(45deg)";
		span3.style.transform = "rotate(-45deg)";
		span1.style.webkitTransform = "rotate(45deg)";
		span3.style.webkitTransform = "rotate(-45deg)";
		span1.style.transformOrigin = "1px 1px";
		span3.style.transformOrigin = "1px 1px";
		span1.style.webkitTransformOrigin = "1px 1px";
		span3.style.webkitTransformOrigin = "1px 1px";
		span1.style.width = "100%";
		span3.style.width = "100%";
	}
	mobileNav.classList.toggle("mobile-nav-show");
});
product.addEventListener("click", () => {
	arrow1.classList.toggle("rotated");
});
company.addEventListener("click", () => {
	arrow2.classList.toggle("rotated");
});
connect.addEventListener("click", () => {
	arrow3.classList.toggle("rotated");
	mobileDropdownMenu.classList.toggle("mobile-menu-show");
});