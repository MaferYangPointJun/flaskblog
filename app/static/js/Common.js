/**
 * Mafer.Jun Function about some page effects
 */
;
(function(window) {
	var path="";
	// Scroll event
	function mouseUpAndDown() {
		this._Scroll();
	}
	;// event for mouse up and down to set the nav
	mouseUpAndDown.prototype._Scroll = function() {

		// position and set text visable
		var top = document.body.scrollTop;
		var navtext = document.querySelectorAll("li.nav-general");
		var textInfo = document.getElementById("textInfo");
		textInfo.style.opacity = ((100 - top / 4) / 100);
		if (top >= 370) {
			textInfo.style.zindex = 199;
		} else {
			textInfo.style.zindex = 201;
		}
		// set nactext selected 75 is the navbar height
		if (document.querySelector("div[role=plate]").offsetTop - 75 - top > 0
				|| document.querySelector("div[role=plate]").offsetWidth - 75
						- top < 0) {
			navtext[0].querySelector("a").className = "";
			navtext[1].querySelector("a").className = "";
			navtext[2].querySelector("a").className = "";
			navtext[3].querySelector("a").className = "";
		}
		if (document.querySelector("div[role=plate]").offsetTop - 75 - top < 0
				&& document.querySelector("div[role=plate]").offsetTop - top
						+ 75 > 0) {
			navtext[0].querySelector("a").className = "active";
			navtext[1].querySelector("a").className = "";
			navtext[2].querySelector("a").className = "";
			navtext[3].querySelector("a").className = "";
		}
		if (document.querySelector("div[role=popular]").offsetTop - 75 - top < 0
				&& document.querySelector("div[role=popular]").offsetTop - top
						+ 75 > 0) {
			navtext[0].querySelector("a").className = "";
			navtext[1].querySelector("a").className = "active";
			navtext[2].querySelector("a").className = "";
			navtext[3].querySelector("a").className = "";
		}
		if (document.querySelector("div[role=messager]").offsetTop - 75 - top < 0
				&& document.querySelector("div[role=messager]").offsetTop - top
						+ 75 > 0) {
			navtext[0].querySelector("a").className = "";
			navtext[1].querySelector("a").className = "";
			navtext[2].querySelector("a").className = "active";
			navtext[3].querySelector("a").className = "";
		}
		if (document.querySelector("div[role=link]").offsetTop - 75 - top < 0
				&& document.querySelector("div[role=link]").offsetTop - top
						+ 75 > 0) {
			navtext[0].querySelector("a").className = "";
			navtext[1].querySelector("a").className = "";
			navtext[2].querySelector("a").className = "";
			navtext[3].querySelector("a").className = "active";
		}
	};
	window.MouseUpAndDown = mouseUpAndDown;

	// JS cookie operate
	var JSCookie = function() {

	};
	JSCookie.prototype.AddCookie = function(name) {
		// Cookie default time is one week
		var days = 7;
		var date = new Date();
		date.setTime(date.getTime() + days * 3600 * 1000);
		document.cookie = "Username=" + name + ";expires=" + date.toGMTString();
	};
	JSCookie.prototype.DelCookie = function(name) {
		document.cookie = "Username=" + name + ";expires="
				+ (new Date(0)).toGMTString();
	};
	JSCookie.prototype.GetCookie = function() {
		var cookieArr = document.cookie.split(";");
		for (var i = 0; i < cookieArr.length; i++) {
			var arr = cookieArr[i].split("=");
			if (arr[0] == "Username") {
				return arr[1];
			}
		}
		return "";
	};
	window.JSCookie = JSCookie;

	// JS Ajax Helper
	var AjaxHelper = function() {
	};
	AjaxHelper.prototype._getInstrance = function() {
		var ajaxHttp;
		try {
			// firefox,oper8+,safari
			ajaxHttp = new XMLHttpRequest();
		} catch (e) {
			// IE
			try {
				ajaxHttp = new ActiveXObject("Msxml2.XMLHTTP");
			} catch (e) {
				try {
					ajaxHttp = new ActiveXObject("Microsoft.XMLHTTP");
				} catch (e) {
					console.log("this browser is nor support ajax");
					return null;
				}
			}
		}
		return ajaxHttp;
	};
	AjaxHelper.prototype._getData = function(url, data) {
		// default tranportway is post
		var httpRequest = this._getInstrance();
		if (httpRequest != null) {
			httpRequest.open("post", url, true);
			httpRequest.onreadystatechange = function() {
				if (httpRequest.readyState == 4) {
					if (httpRequest.status == 200) {
						document.getElementById("hidUserInfo").value = httpRequest.responseText;
					} else {
						return "Page error";
					}
				}

			};
			httpRequest.send(data);
		}
	};
	window.AjaxHelper = AjaxHelper;

	// user call back
	var UserCallBack = function () {
	    if (document.getElementById("UserLogin").className == "landing-cover-drop") {
	        document.getElementById("UserLogin").className = "landing-cover-drop none";
	    } else {
	        document.getElementById("UserLogin").className = "landing-cover-drop";
	    }
	};
	UserCallBack.prototype.User;
	window.UserCallBack = UserCallBack;

})(window);