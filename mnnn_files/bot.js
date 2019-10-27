var faqbotIsMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (faqbotIsMobile.Android() || faqbotIsMobile.BlackBerry() || faqbotIsMobile.iOS() || faqbotIsMobile.Opera() || faqbotIsMobile.Windows());
    }
};

var faqbotJsonCode=null;
function faqBotGetJson(key)
{
	var jsonAddress = "https://json.faqprime.com" + "?key=" + key;
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function()
	{
		if (xhr.readyState === XMLHttpRequest.DONE) {
			if (xhr.status === 200) {
				faqbotJsonCode = JSON.parse(xhr.responseText);
				return true;
			} else {
				return false;
			}
		}
	};
	xhr.open("GET", jsonAddress, true);
	xhr.send();
}

if (typeof faqbotKey !== "undefined") {
	faqBotGetJson(faqbotKey);
}
else
{
		if (typeof faqbotCalendyCode == "undefined") {
			var faqbotCalendyCode = "";
		}

		if (typeof faqbotWhatsappChatCode == "undefined") {
			var faqbotWhatsappChatCode = "false";
		}

		if (typeof faqbotWhatsappNumber == "undefined") {
			var faqbotWhatsappNumber = "";
		}

		if (typeof faqbotContactusCode == "undefined") {
			var faqbotContactusCode = "";
		}

		if (typeof faqbotContactNumber == "undefined") {
			var faqbotContactNumber = "";
		}

		if (typeof faqbotStartTime == "undefined") {
			var faqbotStartTime = -1;
		}

		faqbotGetHtml("faq-bot-codestart-id", faqbotColorCode, faqbotCalendyCode, faqbotChatCode, faqbotWhatsappChatCode, faqbotWhatsappNumber, faqbotContactNumber, faqbotContactusCode);

	if (faqbotStartTime >= 0)
	{
		var faqbotNewStartTime = faqbotStartTime * 1000;
		faqbotStartTimeout.push(setTimeout(function(){
					faqbotStartBot(faqbotSrcURL);
					faqbotInitiateEvent(faqbotEventType.FAQBOT_TIMERSTART);
					}, faqbotNewStartTime));
	}
	var x = document.getElementById("faq-bot-button");
	if(typeof(x) !== "undefined") {
		if(x !== null) {
			x.onclick = function() {
				faqbotStartBot(faqbotSrcURL);
				faqbotInitiateEvent(faqbotEventType.FAQBOT_NORMALSTART);
			};
		}
	}
	var y = document.getElementById("faq-bot-bottom-livechat-container");
	if(typeof(y) !== "undefined") {
		if(y !== null) {
			y.onclick = function() {
				if (faqbotChatCode == "true")
					faqbotChatExecution();
				faqbotIdHide("faq-bot-container");
				document.getElementById("faq-bot-button").className = "faq-bot-button-right";
				faqbotIdShow("faq-bot-button");
				faqbotSetAttr("faq-bot-iframe", "src", "");
				faqbotSetAttr("faq-bot-iframe", "data-src", "");
			};
		}
	}

	faqbotTimerIntentUrlSegment();
	faqbotTimerIntentUrlMatch();
	faqbotDisableBotUrl();
	faqbotDisableBotUrlMatch();
}

// Initialize Variables 
if (typeof faqbotKey !== "undefined") {
	if (faqbotJsonCode === null)
	{
		window.faqbotInitiateVariableTimer = setInterval(faqbotInitiateVariable, 200);
	}
}

function faqbotInitiateVariable()
{
	if (faqbotJsonCode !== null)
	{
		if (typeof faqbotSrcURL == "undefined") {
			window.faqbotSrcURL = faqbotJsonCode.variables.SrcURL;
		}
		if (typeof faqbotHelpText == "undefined") {
			window.faqbotHelpText = faqbotJsonCode.variables.HelpText;
		}
		if (typeof faqbotColorCode == "undefined") {
			window.faqbotColorCode = faqbotJsonCode.variables.ColorCode;
		}
		if (typeof faqbotCalendyCode == "undefined") {
			window.faqbotCalendyCode = faqbotJsonCode.variables.CalendyCode;
		}
		if (typeof faqbotContactusCode == "undefined") {
			window.faqbotContactusCode = faqbotJsonCode.variables.ContactusCode;
		}
		if (typeof faqbotContactNumber == "undefined") {
			window.faqbotContactNumber = faqbotJsonCode.variables.ContactNumber ;
		}
		if (typeof faqbotTopText == "undefined") {
			window.faqbotTopText = faqbotJsonCode.variables.TopText;
		}
		if (typeof faqbotCalendyText == "undefined") {
			window.faqbotCalendyText = faqbotJsonCode.variables.CalendyText;
		}
		if (typeof faqbotStartTime == "undefined") {
			window.faqbotStartTime = faqbotJsonCode.variables.StartTime;
		}
		if (typeof faqbotChatText == "undefined") {
			window.faqbotChatText = faqbotJsonCode.variables.ChatText;
		}
		if (typeof faqbotHelpText == "undefined") {
			window.faqbotHelpText = faqbotJsonCode.variables.HelpText;
		}
		if (typeof faqbotChatCode == "undefined") {
			window.faqbotChatCode = faqbotJsonCode.variables.ChatCode;
		}
		if (typeof faqbotWhatsappChatCode == "undefined") {
			window.faqbotWhatsappChatCode = faqbotJsonCode.variables.WhatsappChatCode;
		}
		if (typeof faqbotWhatsappNumber == "undefined") {
			window.faqbotWhatsappNumber = faqbotJsonCode.variables.WhatsappNumber;
		}
		if (typeof faqbotChatType == "undefined") {
			window.faqbotChatType = faqbotJsonCode.variables.ChatType;
		}
		if (typeof faqbotUrlTagMap == "undefined") {
			var lindex=0;
			for (var index = 0; index < faqbotJsonCode.contexts.length; ++index) {
				if (faqbotJsonCode.contexts[index].nature == "contains")
				{
					if (typeof faqbotUrlTagMap == "undefined") {
						window.faqbotUrlTagMap = [];
					}
					window.faqbotUrlTagMap[lindex] = faqbotJsonCode.contexts[index].url + ":" + faqbotJsonCode.contexts[index].tags;
					lindex++;
				}
			}
		}
		if (typeof faqbotUrlTagMapExactMatch == "undefined") {
			var lindex=0;
			for (var index = 0; index < faqbotJsonCode.contexts.length; ++index) {
				if (faqbotJsonCode.contexts[index].nature == "matches")
				{
					if (typeof faqbotUrlTagMapExactMatch == "undefined") {
						window.faqbotUrlTagMapExactMatch = [];
					}
					window.faqbotUrlTagMapExactMatch[lindex] = faqbotJsonCode.contexts[index].url + ":" + faqbotJsonCode.contexts[index].tags;
					lindex++;
				}
			}
		}
		if (typeof faqbotUrlTintentMap == "undefined") {
			var lindex=0;
			for (var index = 0; index < faqbotJsonCode.tintents.length; ++index) {
				if (faqbotJsonCode.tintents[index].nature == "contains")
				{
					if (typeof faqbotUrlTintentMap == "undefined") {
						window.faqbotUrlTintentMap = [];
					}
					window.faqbotUrlTintentMap[lindex] = faqbotJsonCode.tintents[index].url + ":" + faqbotJsonCode.tintents[index].qid + ":" + faqbotJsonCode.tintents[index].time;
					lindex++;
				}
			}
		}
		if (typeof faqbotUrlTintentMapExactMatch == "undefined") {
			var lindex=0;
			for (var index = 0; index < faqbotJsonCode.tintents.length; ++index) {
				if (faqbotJsonCode.tintents[index].nature == "matches")
				{
					if (typeof faqbotUrlTintentMapExactMatch == "undefined") {
						window.faqbotUrlTintentMapExactMatch = [];
					}
					window.faqbotUrlTintentMapExactMatch[lindex] = faqbotJsonCode.tintents[index].url + ":" + faqbotJsonCode.tintents[index].qid + ":" + faqbotJsonCode.tintents[index].time;
					lindex++;
				}
			}
		}
		if (typeof faqbotUrlHiddenMap == "undefined") {
			var lindex=0;
			for (var index = 0; index < faqbotJsonCode.disables.length; ++index) {
				if (faqbotJsonCode.disables[index].nature == "contains")
				{
					if (typeof faqbotUrlHiddenMap == "undefined") {
						window.faqbotUrlHiddenMap = [];
					}
					window.faqbotUrlHiddenMap[lindex] = faqbotJsonCode.disables[index].url;
					lindex++;
				}
			}
		}

		if (typeof faqbotUrlHiddenMapExactMatch == "undefined") {
			var lindex=0;
			for (var index = 0; index < faqbotJsonCode.disables.length; ++index) {
				if (faqbotJsonCode.disables[index].nature == "matches")
				{
					if (typeof faqbotUrlHiddenMapExactMatch == "undefined") {
						window.faqbotUrlHiddenMapExactMatch = [];
					}
					window.faqbotUrlHiddenMapExactMatch[lindex] = faqbotJsonCode.disables[index].url;
					lindex++;
				}
			}
		}

		faqbotGetHtml("faq-bot-codestart-id", faqbotColorCode, faqbotCalendyCode, faqbotChatCode, faqbotWhatsappChatCode, faqbotWhatsappNumber, faqbotContactNumber, faqbotContactusCode);

		if (faqbotStartTime >= 0)
		{
			var faqbotNewStartTime = faqbotStartTime * 1000;
			faqbotStartTimeout.push(setTimeout(function(){
						faqbotStartBot(faqbotSrcURL);
						faqbotInitiateEvent(faqbotEventType.FAQBOT_TIMERSTART);
						}, faqbotNewStartTime));
		}

		var x = document.getElementById("faq-bot-button");
		if(typeof(x) !== "undefined") {
			if(x !== null) {
				x.onclick = function() {
					faqbotStartBot(faqbotSrcURL);
					faqbotInitiateEvent(faqbotEventType.FAQBOT_NORMALSTART);
				};
			}
		}

		var y = document.getElementById("faq-bot-bottom-livechat-container");
		if(typeof(y) !== "undefined") {
			if(y !== null) {
				y.onclick = function() {
					faqbotIdHide("faq-bot-container");
					document.getElementById("faq-bot-button").className = "faq-bot-button-right";
					faqbotIdShow("faq-bot-button");
					faqbotSetAttr("faq-bot-iframe", "src", "");
					faqbotSetAttr("faq-bot-iframe", "data-src", "");
					if (faqbotChatCode == "true")
					{
						faqbotOpenChat();
						if (typeof faqbotChatExecution == 'function') {
							faqbotChatExecution();
						}
					}
				};
			}
		}

		clearInterval(window.faqbotInitiateVariableTimer);

		faqbotCloseChat();
		faqbotTimerIntentUrlSegment();
		faqbotTimerIntentUrlMatch();
		faqbotDisableBotUrl();
		faqbotDisableBotUrlMatch();
	}
}

var faqbotStartTimeout = [];
var faqbotEventType = {FAQBOT_NORMALSTART: 1, FAQBOT_HOTSTART: 2, FAQBOT_TIMERINTENT: 3, FAQBOT_TIMERSTART: 4, FAQBOT_CALENDERSTART: 5};


function faqbotIdHide(id) {
  var x = document.getElementById(id);
  if(typeof(x) !== "undefined") {
	  if(x !== null) {
		  x.style.display = "none";
	  }
  }
}

function faqbotIdShow(id) {
  var x = document.getElementById(id);
  if(typeof(x) !== "undefined") {
	  if(x !== null) {
		  x.style.display = "block";
	  }
  }
}

function faqbotSetAttr(id, src, dst) {
  var x = document.getElementById(id);
  if(typeof(x) !== "undefined") {
	  if(x !== null) {
		  x.setAttribute(src,dst);
	  }
  }
}

function faqbotStartBot(url)
{
	if (url.length > 1)
	{
		faqbotIdShow("faq-bot-container");
		faqbotClearTimerIntent();
		faqbotIdHide("faq-bot-button");
		{
			if ((typeof faqbotUrlTagMap !== "undefined") || (typeof faqbotUrlTagMapExactMatch !== "undefined"))
			{
				faqbotRemoveMetaTag('faqbot-dynamic-tags');
				if (typeof faqbotUrlTagMap !== "undefined") {
					for(var i = 0; i < faqbotUrlTagMap.length; i++)
					{
						var urlTagMapArr = faqbotUrlTagMap[i].split(':');

						if (urlTagMapArr.length == 3)
						{
							faqbotUrlSegmentToMetaTag(urlTagMapArr[0] + ":" + urlTagMapArr[1], urlTagMapArr[2]);
						}
						else
						{
							faqbotUrlSegmentToMetaTag(urlTagMapArr[0], urlTagMapArr[1]);
						}
					}
				}
				if (typeof faqbotUrlTagMapExactMatch !== "undefined") {
					for(var i = 0; i < faqbotUrlTagMapExactMatch.length; i++)
					{
						var urlTagMapArr = faqbotUrlTagMapExactMatch[i].split(':');
						if (urlTagMapArr.length == 3)
						{
							faqbotUrlToMetaTag(urlTagMapArr[0] + ":" + urlTagMapArr[1], urlTagMapArr[2]);
						}
						else if (urlTagMapArr.length == 2)
						{
							faqbotUrlToMetaTag(urlTagMapArr[0], urlTagMapArr[1]);
						}
					}
				}
			}

			var metatags = faqbotGetMeta("faqbot-dynamic-tags");
			metatags = metatags + "," + faqbotGetMeta("faqbot-tags");
			var newUrl;
			if (metatags == '')
				newUrl = url + "?sort=hot&widget=iframe";
			else
				newUrl = url + "?sort=hot&tags=" + metatags + "&widget=iframe";

			faqbotSetAttr("faq-bot-iframe", "src", newUrl);
			faqbotSetAttr("faq-bot-iframe", "data-src", newUrl);
		}
	}
}

function faqbotGetHtml(faqelement, colorcode, calendyCode, chatCode, whatsappChatCode, whatsappNumber, contactNumber, contactusCode)
{
	var calendyHtml = "";
	var chatHtml = "";
	var contactHtml = "";
	var contactusHtml = "";
	var completeHtml = "";
	var backButtonHtml = "";
	var bottomHeight = 90;
	var iframeHeight = "80vh";
	var iframestyle = "";
	var containerCount = 0;
	var secondaryClass = "";
	var botText = "";
	var topText = "";
	var appointmentText = "";
	var contactText = "";
	var chatText = "";

	if (typeof faqbotHelpText == "undefined") {
		botText = "Get Help";
	}
	else {
		botText = faqbotHelpText;
	}

	if (typeof faqbotTopText == "undefined") {
		topText = "Help";
	}
	else {
		topText = faqbotTopText;
	}

	if (typeof faqbotCalendyText == "undefined") {
		appointmentText = "Book an Appointment";
	}
	else {
		appointmentText = faqbotCalendyText; 
	}

	if (typeof faqbotContactText == "undefined") {
		contactText = "Contact us";
	}
	else {
		contactText = faqbotContactText; 
	}

	if (typeof faqbotChatText == "undefined") {
		chatText = "Live Chat";
	}
	else {
		chatText = faqbotChatText; 
	}

	if (calendyCode.length > 2)
	{
		containerCount++;
	}
	if (contactusCode.length > 2)
	{
		containerCount++;
	}
	if (chatCode == "true")
	{
		containerCount++;
	}

	if (containerCount == 2)
	{
		secondaryClass = " faq-bot-bottom-banner-half ";
	}
	if (containerCount == 3)
	{
		secondaryClass = " faq-bot-bottom-banner-third ";
	}

	if (calendyCode.length > 2)
	{
		calendyHtml = "<span class='faq-bot-bottom-calendy-container " + secondaryClass + "' id='faq-bot-bottom-calendy-container' onclick='faqbotStartBot(faqbotCalendyCode);'><img src='https://myfaqprime.appspot.com/bot/img/calendericon.png'><p>" + appointmentText + "</p></span>";
		bottomHeight = 90 + 42;
	}

	if (contactusCode.length > 2)
	{
		contactusHtml = "<a class='faq-bot-bottom-contactus-container " + secondaryClass + "' href='" + contactusCode + "' target='_blank' id='faq-bot-bottom-contactus-container'><img src='https://myfaqprime.appspot.com/bot/img/emailicon.png'><p>" + contactText + "</p></a>";
		bottomHeight = 90 + 42;
	}

	if (contactNumber.length > 2)
	{
		if (faqbotIsMobile.any()) 
			contactHtml = "<a class='faq-bot-top-banner-phone' href='tel:" + contactNumber + "' target='_blank'></a>";
	}

	if ((chatCode == "true") && (whatsappChatCode != "true"))
	{
		chatHtml = "<span class='faq-bot-bottom-livechat-container " + secondaryClass + "' id='faq-bot-bottom-livechat-container'><img src='https://myfaqprime.appspot.com/bot/img/callicon.png'><p>" + chatText + "</p></span>";
		bottomHeight = 90 + 42;
	}
	else if (whatsappChatCode == "true")
	{
		if (faqbotIsMobile.any()) 
			var whatsapplink = "https://api.whatsapp.com/send?phone=" + whatsappNumber;
		else
			var whatsapplink = "https://web.whatsapp.com/send?phone=" + whatsappNumber;

		chatHtml = "<a class='faq-bot-bottom-whatsapp-livechat-container " + secondaryClass + "' id='faq-bot-bottom-whatsapp-livechat-container' href='" + whatsapplink + "' target='_blank'><img src='https://myfaqprime.appspot.com/bot/img/whatsappicon.png'><p>" + chatText + "</p></a>";
		bottomHeight = 90 + 42;
	}

	completeHtml = chatHtml + calendyHtml + contactusHtml;

	iframeHeight = "calc(80vh - " + bottomHeight + "px)";
	iframestyle = "style='height:" + iframeHeight + ";max-height:" + iframeHeight + ";'";

	backButtonHtml = "<div class='faq-bot-back-button' onclick='faqbotStartBot(faqbotSrcURL);'></div>";

	document.getElementById(faqelement).innerHTML = "<div class='faq-bot-button' id='faq-bot-button' style='background:" + colorcode + ";'> <div class='faq-bot-button-icon'></div> <span class='faq-bot-button-text'>" + botText + "</span> </div> <div class='faq-bot-container' id='faq-bot-container' style='background:" + colorcode + ";'> <div class='faq-bot-top-banner'>" + backButtonHtml + contactHtml + "<span class='faq-bot-top-banner-text'><p onclick='faqbotStartBot(faqbotSrcURL);'>" + topText + "</p></span> <div class='faq-bot-top-banner-cross' onclick='faqbotCloseBot();'></div> </div> <div style='overflow:auto;-webkit-overflow-scrolling:touch;background-image:linear-gradient(to bottom, transparent , transparent 20%, #fafafa 20%, #fafafa 100%);background-image:-webkit-linear-gradient(top, transparent , transparent 20%, #fafafa 20%, #fafafa 100%);min-height:" +  iframeHeight + ";'><iframe class='faq-bot-iframe' id='faq-bot-iframe' data-src='' frameborder='0' scrolling='yes' width='400' webkitallowfullscreen='' mozallowfullscreen='' allowfullscreen='' " + iframestyle + "src=''></iframe></div> <div class='faq-bot-bottom-banner'> " + completeHtml + "<a href='https://www.faqprime.com/' class='faq-bot-bottom-banner-container' target='_blank' rel='dofollow'></a> </div> </div>";
}

function faqbotUpdateHashParameter(uri, key) {
 if (uri)
 {
  var re = new RegExp("([#])" + key);
  var separator = "#";
  if (uri.match(re)) {
    return uri;
  }
  else {
    return uri + separator + key;
  }
 }
}

function faqbotCheckSRC(el)
{
  var elem = document.getElementById(el);
  if(elem.getAttribute('src') == "")
  {
    return 0;
  }
  else
  {
    return 1;
  }
}

function faqbotIsIdHidden(el) {
    var display = document.getElementByClassName(el).style.display;
    return (display === 'none')
}

function faqbotCloseBot()
{
	faqbotIdHide("faq-bot-container");
	faqbotIdShow("faq-bot-button");
	faqbotSetAttr("faq-bot-iframe", "src", "");
	faqbotSetAttr("faq-bot-iframe", "data-src", "");
}

function faqbotHotStart(url)
{
	var lurl;

	if (url === parseInt(url, 10))
	{
		lurl = faqbotSrcURL.replace(/\/+$/, "") + "/" + url;
	}
	else
	{
		lurl = url;
	}

	if (lurl.length >= 1)
	{
		var newUrl = lurl + "?sort=hot&widget=iframe&intent=hotstart";
		faqbotIdShow("faq-bot-container");
		faqbotClearTimerIntent();
		faqbotIdHide("faq-bot-button");
		faqbotSetAttr("faq-bot-iframe", "src", newUrl);
		faqbotSetAttr("faq-bot-iframe", "data-src", newUrl);
		faqbotInitiateEvent(faqbotEventType.FAQBOT_HOTSTART);
	}
}

function faqbotInitiateEvent(evt)
{
	if (typeof faqbotEventNotification == 'function') {
		faqbotEventNotification({"event" : evt, "url": faqbotGetCurrentUrl()});
	}
}

function faqbotTimerIntentUrlSegment()
{
	if (typeof faqbotUrlTintentMap !== "undefined") {
		for(var i = 0; i < faqbotUrlTintentMap.length; i++)
		{
			var urlTagMapArr = faqbotUrlTintentMap[i].split(':');
			var urlsegment;
			var qid;
			var tid;

			if (urlTagMapArr.length == 4)
			{
				urlsegment = urlTagMapArr[0] + ":" + urlTagMapArr[1];
				qid = urlTagMapArr[2];
				tid = urlTagMapArr[3];
			}
			else
			{
				urlsegment = urlTagMapArr[0];
				qid = urlTagMapArr[1];
				tid = urlTagMapArr[2];
			}

			if (faqbotIsUrlSegment(urlsegment))
			{
				var lurl = faqbotSrcURL.replace(/\/+$/, "") + "/" + qid;
				faqbotTimerIntent(lurl, tid);
			}
		}
	}
}

function faqbotTimerIntentUrlMatch()
{
	if (typeof faqbotUrlTintentMapExactMatch !== "undefined") {
		for(var i = 0; i < faqbotUrlTintentMapExactMatch.length; i++)
		{
			var urlTagMapArr = faqbotUrlTintentMapExactMatch[i].split(':');
			var url;
			var qid;
			var tid;

			if (urlTagMapArr.length == 4)
			{
				url = urlTagMapArr[0] + ":" + urlTagMapArr[1];
				qid = urlTagMapArr[2];
				tid = urlTagMapArr[3];
			}
			else
			{
				url = urlTagMapArr[0];
				qid = urlTagMapArr[1];
				tid = urlTagMapArr[2];
			}

			if (faqbotIsUrl(url))
			{
				var lurl = faqbotSrcURL.replace(/\/+$/, "") + "/" + qid;
				faqbotTimerIntent(lurl, tid);
			}
		}
	}
}

function faqbotDisableBotUrl()
{
	if (typeof faqbotUrlHiddenMap !== "undefined") {
		for(var i = 0; i < faqbotUrlHiddenMap.length; i++)
		{
			var url = faqbotUrlHiddenMap[i];

			if (faqbotIsUrlSegment(url))
			{
				document.getElementById("faq-bot-button").style.display="none";
				document.getElementById("faq-bot-container").style.display="none";
			}
		}
	}
}

function faqbotDisableBotUrlMatch()
{
	if (typeof faqbotUrlHiddenMapExactMatch !== "undefined") {
		for(var i = 0; i < faqbotUrlHiddenMapExactMatch.length; i++)
		{
			var url = faqbotUrlHiddenMapExactMatch[i];

			if (faqbotIsUrl(url))
			{
				document.getElementById("faq-bot-button").style.display="none";
				document.getElementById("faq-bot-container").style.display="none";
			}
		}
	}
}

function faqbotTimerIntentStart(url)
{
	var lurl;

	if (url === parseInt(url, 10))
	{
		lurl = faqbotSrcURL.replace(/\/+$/, "") + "/" + url;
	}
	else
	{
		lurl = url;
	}

	if (lurl.length > 1)
        {
		if (faqbotGetSessionVariable("tintent", lurl.split("/")[3]) === false)
		{
			var newUrl = lurl + "?sort=hot&widget=iframe&intent=timerstart";
			faqbotIdShow("faq-bot-container");
			faqbotClearTimerIntent();
			faqbotIdHide("faq-bot-button");
			faqbotSetAttr("faq-bot-iframe", "src", newUrl);
			faqbotSetAttr("faq-bot-iframe", "data-src", newUrl);
			faqbotInitiateEvent(faqbotEventType.FAQBOT_TIMERINTENT);
			faqbotSetSessionVariable("tintent", lurl.split("/")[3]);
		}
        }
}

function faqbotClearTimerIntent()
{
	while(faqbotStartTimeout.length > 0) {
		clearTimeout(faqbotStartTimeout.pop());
	}
}

function faqbotGetMeta(metaName)
{
  const metas = document.getElementsByTagName('meta');

  for (var i = 0; i < metas.length; i++) {
    var metaAttribute = metas[i].getAttribute('name');
    if (metaAttribute != null)
    {
       if (metaAttribute.toLowerCase() === metaName) {
	 return metas[i].getAttribute('content');
       }
    }
  }

  return '';
}

function faqbotIsUrlSegment(segment)
{
//	var urlpath = window.location.pathname;
	var urlpath = faqbotGetCurrentUrl();

	if (urlpath.indexOf(segment.toLowerCase()) !== -1)
		return true;
	else
		return false;
}

function faqbotIsUrl(url)
{
	var currentUrl = faqbotGetCurrentUrl();
	if (currentUrl.toLowerCase() === url.replace(/\/+$/, "").toLowerCase())
		return true;
	else
		return false;
}

function faqbotUrlSegmentToMetaTag(segment, tag)
{
	var metatags = faqbotGetMeta("faqbot-dynamic-tags");

	if (faqbotIsUrlSegment(segment))
	{
		if (metatags == '')
		{
			faqbotAddMetaTag("faqbot-dynamic-tags", tag);
		}
		else
		{
			faqbotUpdateMetaTag("faqbot-dynamic-tags", tag);
		}
	}
}

function faqbotUrlToMetaTag(url, tag)
{
	var metatags = faqbotGetMeta("faqbot-dynamic-tags");
	if (faqbotIsUrl(url))
	{
		if (metatags == '')
		{
			faqbotAddMetaTag("faqbot-dynamic-tags", tag);
		}
		else
		{
			faqbotUpdateMetaTag("faqbot-dynamic-tags", tag);
		}
	}
}

function faqbotRemoveMetaTag(tagname)
{
        var metanames = document.getElementsByTagName('meta');

        for (var i = 0; i < metanames.length; i++) {
                var metaAttribute = metanames[i].getAttribute('name');
                if (metaAttribute != null)
                {
                        if (metaAttribute.toLowerCase() === tagname) {
                               metanames[i].remove();
                        }
                }
        }
}

function faqbotAddMetaTag(tagname, tag)
{
	var meta = document.createElement('meta');
	meta.setAttribute('name', tagname);
	meta.setAttribute('content', tag);
	document.getElementsByTagName('head')[0].appendChild(meta);
}

function faqbotUpdateMetaTag(tagname, tag)
{
	var updateMeta;
	var metanames = document.getElementsByTagName('meta');

	for (var i = 0; i < metanames.length; i++) {
		var metaAttribute = metanames[i].getAttribute('name');
		if (metaAttribute != null)
		{
			if (metaAttribute.toLowerCase() === tagname) {
				updateMeta = metanames[i].getAttribute('content') + "," + tag;
				metanames[i].setAttribute('content', updateMeta);
			}
		}
	}
}

function faqbotSetSessionVariable(type, subtype)
{
        var faqprime_session_variable  = "faqprime_session_" + type + subtype;

        window.sessionStorage.setItem(faqprime_session_variable, true);
}

function faqbotGetSessionVariable(type, subtype)
{
        var faqprime_session_variable  = "faqprime_session_" + type + subtype;
        var faqprime_session =  JSON.parse(window.sessionStorage.getItem(faqprime_session_variable));

        if (faqprime_session)
        {
                return true;
        }
        else
        {
                return false;
        }
}

function faqbotTimerIntent(url, secTime)
{
        var mTime = secTime * 1000;
        faqbotStartTimeout.push(setTimeout(function(){faqbotTimerIntentStart(url);}, mTime));
}

function faqbotScrollIntent(url, percent)
{
        var scrollHeight = percent * document.body.offsetHeight ;
        window.onscroll = function(ev) {
                if ((window.innerHeight + window.scrollY) >= scrollHeight) {
                        faqbotHotStart(url);
                }
        }
}

function faqbotDragElement(id, move) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  var elmnt = document.getElementById(id);
  if (move)
  {
	  elmnt.style.cursor = "move";
  }

  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = faqbotDragMouseDown;
  } else {
    elmnt.onmousedown = faqbotDragMouseDown;
  }

  function faqbotDragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = faqbotCloseDragElement;
    document.onmousemove = faqbotElementDrag;
  }

  function faqbotElementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.setProperty("top", (elmnt.offsetTop - pos2) + "px", "important");
    elmnt.style.setProperty("left", (elmnt.offsetLeft - pos1) + "px", "important");
    elmnt.style.setProperty("bottom", "auto", "important");
    elmnt.style.setProperty("right", "auto", "important");
  }

  function faqbotCloseDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function faqbotRGBToHex(rgb) {
  var hex = Number(rgb).toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
  return hex;
};

function faqbotFullColorHex(r, g, b) {
  var red = faqbotRGBToHex(r);
  var green = faqbotRGBToHex(g);
  var blue = faqbotRGBToHex(b);
  return "#" + red + green + blue;
};

function faqbotHexToRgb(hex) {
  if (hex.length == 4) {
          return {
           r: parseInt(hex[1] + hex[1], 16),
           g: parseInt(hex[2] + hex[2], 16),
           b: parseInt(hex[3] + hex[3], 16)
          };
  }
  else
  {
          var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
          return result ? {
           r: parseInt(result[1], 16),
           g: parseInt(result[2], 16),
           b: parseInt(result[3], 16)
          } : null;
  }
}

function faqbotGetCurrentUrl()
{
	var currentUrl = window.location.protocol + "//" + window.location.host + window.location.pathname.replace(/\/+$/, "");
	return currentUrl.toLowerCase();
}

function faqbotOpenChat()
{
	if (faqbotChatType === 'zendesk')
	{
		$zopim.livechat.window.show();
	}
	else if (faqbotChatType === 'crispchat')
	{
		$crisp.push(["do", "chat:open"]);
		$crisp.push(["do", "chat:show"]);
	}
	else if (faqbotChatType === 'zoho')
	{
		$zoho.salesiq.floatwindow.visible("show");
	}
	else if (faqbotChatType === 'tawkto')
	{
		Tawk_API.showWidget();
		Tawk_API.toggle();
	}
	else if (faqbotChatType === 'freshchat')
	{
		document.getElementById('fc_frame').style.display = 'block';
		window.fcWidget.open();
	}
	else if (faqbotChatType === 'kayako')
	{
		kayako.show();
		kayako.maximize();
	}
	else if (faqbotChatType === 'drift')
	{
		drift.api.openChat();
	}
	else if (faqbotChatType === 'gist')
	{
		gist.chat('openNewConversation');
	}
}

function faqbotCloseChat()
{
	var faqbotNativeChatClose = setInterval(faqbotNativeChatClose, 200);
	function faqbotNativeChatClose() {
		if (faqbotChatType === 'zendesk')
		{
			if (typeof $zopim !== 'undefined') {
				$zopim.livechat.hideAll();
				$zopim.livechat.window.onHide(faqbotZopimClose);
				clearInterval(faqbotNativeChatClose);
			}
		}
		else if (faqbotChatType === 'crispchat')
		{
			if (typeof $crisp !== 'undefined') {
				$crisp.push(["do", "chat:hide"]);
				$crisp.push(["on", "chat:closed", faqbotHideCrispIfClosed]);
				clearInterval(faqbotNativeChatClose);
			}
		}
		else if (faqbotChatType === 'zoho')
		{
			if (typeof $zoho !== 'undefined') {
				$zoho.salesiq.floatbutton.visible("hide");
				clearInterval(faqbotNativeChatClose);
			}
		}
		else if (faqbotChatType === 'tawkto')
		{
			if (typeof Tawk_API !== 'undefined') {
				Tawk_API.hideWidget();
				clearInterval(faqbotNativeChatClose);
			}
		}
		else if (faqbotChatType === 'freshchat')
		{
			if ((typeof fcWidget !== 'undefined') && (document.getElementById("fc_frame"))) {
				document.getElementById('fc_frame').style.display="none";
				for(var i = 200; i <= 2000; i=i+100)
				{
					setTimeout(function(){document.getElementById('fc_frame').style.display="none";}, i);
				}
				window.fcWidget.on("widget:closed", function() {
						document.getElementById('fc_frame').style.display = 'none';
						});
				clearInterval(faqbotNativeChatClose);
			}
		}
		else if (faqbotChatType === 'kayako')
		{
			if (typeof kayako !== 'undefined') {
				kayako.hide();
				kayako.on('chat_window_minimized', function () {
						kayako.hide();
						});
				clearInterval(faqbotNativeChatClose);
			}
		}
		else if (faqbotChatType === 'drift')
		{
			if (typeof drift !== 'undefined') {
				drift.on('ready',function(api){
						api.widget.hide()
						drift.on('sidebarClose',function(e){
							if(e.data.widgetVisible){
							api.widget.hide()
							}
							})
						});
				clearInterval(faqbotNativeChatClose);
			}
		}
		else if (faqbotChatType === 'gist')
		{
			if (typeof gist !== 'undefined') {
				gist.chat('hide');
				for(var i = 200; i <= 4000; i=i+100)
				{
					setTimeout(function(){gist.chat('hide');}, i);
				}
				clearInterval(faqbotNativeChatClose);
			}
		}
		else if (faqbotChatType === 'whatsapp')
		{
			clearInterval(faqbotNativeChatClose);
		}
		else if (faqbotChatType === 'false')
		{
			clearInterval(faqbotNativeChatClose);
		}
		else if (faqbotChatType === 'other')
		{
			clearInterval(faqbotNativeChatClose);
		}
	}

	function faqbotZopimClose()
	{
		$zopim.livechat.hideAll();
	}
	function faqbotHideCrispIfClosed()
	{
		$crisp.push(["do", "chat:hide"]);
	}
}
