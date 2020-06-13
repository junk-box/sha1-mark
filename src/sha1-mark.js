/*
 * sha1-mark v1.0
 *
 * Copyright (C) 2020 S.Ishigaki
 * Licensed under the MIT license
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Date: 2020-06-13
 */
(function() {
	var createMark = function (dom, hash) {
		var d00 = document.createElement("div");
		d00.classList.add("sha1-mark-dot1");
		d00.classList.add("p00");
		d00.style.backgroundColor = getColor(hash, 6);

		var d01 = document.createElement("div");
		d01.classList.add("sha1-mark-dot1");
		d01.classList.add("p01");
		d01.style.backgroundColor = getColor(hash, 8);

		var d02 = document.createElement("div");
		d02.classList.add("sha1-mark-dot3");
		d02.classList.add("p02");
		d02.style.backgroundColor = getColor(hash, 10);

		var d03 = document.createElement("div");
		d03.classList.add("sha1-mark-dot1");
		d03.classList.add("p03");
		d03.style.backgroundColor = getColor(hash, 12);

		var d04 = document.createElement("div");
		d04.classList.add("sha1-mark-dot1");
		d04.classList.add("p04");
		d04.style.backgroundColor = getColor(hash, 14);



		var d10 = document.createElement("div");
		d10.classList.add("sha1-mark-dot1");
		d10.classList.add("p10");
		d10.style.backgroundColor = getColor(hash, 16);

		var d11 = document.createElement("div");
		d11.classList.add("sha1-mark-dot1");
		d11.classList.add("p11");
		d11.style.backgroundColor = getColor(hash, 18);

		var d12 = document.createElement("div");
		d12.classList.add("sha1-mark-dot3");
		d12.classList.add("p12");
		d12.style.backgroundColor = getColor(hash, 20);

		var d13 = document.createElement("div");
		d13.classList.add("sha1-mark-dot1");
		d13.classList.add("p13");
		d13.style.backgroundColor = getColor(hash, 22);

		var d14 = document.createElement("div");
		d14.classList.add("sha1-mark-dot1");
		d14.classList.add("p14");
		d14.style.backgroundColor = getColor(hash, 24);



		var d20 = document.createElement("div");
		d20.classList.add("sha1-mark-dot2");
		d20.classList.add("p20");
		d20.style.backgroundColor = getColor(hash, 26);

		var d21 = document.createElement("div");
		d21.classList.add("sha1-mark-dot2");
		d21.classList.add("p21");
		d21.style.backgroundColor = getColor(hash, 28);

		var d22 = document.createElement("div");
		d22.classList.add("sha1-mark-dot4");
		d22.classList.add("p22");
		d22.style.backgroundColor = getColor(hash, 30);

		var d23 = document.createElement("div");
		d23.classList.add("sha1-mark-dot2");
		d23.classList.add("p23");
		d23.style.backgroundColor = getColor(hash, 32);

		var d24 = document.createElement("div");
		d24.classList.add("sha1-mark-dot2");
		d24.classList.add("p24");
		d24.style.backgroundColor = getColor(hash, 34);



		var d30 = document.createElement("div");
		d30.classList.add("sha1-mark-dot1");
		d30.classList.add("p30");
		d30.style.backgroundColor = getColor(hash, 16);

		var d31 = document.createElement("div");
		d31.classList.add("sha1-mark-dot1");
		d31.classList.add("p31");
		d31.style.backgroundColor = getColor(hash, 18);

		var d32 = document.createElement("div");
		d32.classList.add("sha1-mark-dot3");
		d32.classList.add("p32");
		d32.style.backgroundColor = getColor(hash, 20);

		var d33 = document.createElement("div");
		d33.classList.add("sha1-mark-dot1");
		d33.classList.add("p33");
		d33.style.backgroundColor = getColor(hash, 22);

		var d34 = document.createElement("div");
		d34.classList.add("sha1-mark-dot1");
		d34.classList.add("p34");
		d34.style.backgroundColor = getColor(hash, 24);



		var d40 = document.createElement("div");
		d40.classList.add("sha1-mark-dot1");
		d40.classList.add("p40");
		d40.style.backgroundColor = getColor(hash, 6);

		var d41 = document.createElement("div");
		d41.classList.add("sha1-mark-dot1");
		d41.classList.add("p41");
		d41.style.backgroundColor = getColor(hash, 8);

		var d42 = document.createElement("div");
		d42.classList.add("sha1-mark-dot3");
		d42.classList.add("p42");
		d42.style.backgroundColor = getColor(hash, 10);

		var d43 = document.createElement("div");
		d43.classList.add("sha1-mark-dot1");
		d43.classList.add("p43");
		d43.style.backgroundColor = getColor(hash, 12);

		var d44 = document.createElement("div");
		d44.classList.add("sha1-mark-dot1");
		d44.classList.add("p44");
		d44.style.backgroundColor = getColor(hash, 14);



		var inner = document.createElement("div");
		inner.classList.add("sha1-mark-inner");
		inner.appendChild(d00);
		inner.appendChild(d01);
		inner.appendChild(d02);
		inner.appendChild(d03);
		inner.appendChild(d04);

		inner.appendChild(d10);
		inner.appendChild(d11);
		inner.appendChild(d12);
		inner.appendChild(d13);
		inner.appendChild(d14);

		inner.appendChild(d20);
		inner.appendChild(d21);
		inner.appendChild(d22);
		inner.appendChild(d23);
		inner.appendChild(d24);

		inner.appendChild(d30);
		inner.appendChild(d31);
		inner.appendChild(d32);
		inner.appendChild(d33);
		inner.appendChild(d34);

		inner.appendChild(d40);
		inner.appendChild(d41);
		inner.appendChild(d42);
		inner.appendChild(d43);
		inner.appendChild(d44);

		var mark = document.createElement("div");
		mark.classList.add("sha1-mark");
		mark.appendChild(inner);

		dom.appendChild(mark);
	}

	var getColor = function (sha1, index) {
		return parseInt(sha1.substring(index, index + 2), 16) < 128 ? "f0f0f0" : sha1.substring(0, 6);
	}

	window.createMark = createMark;
})();
