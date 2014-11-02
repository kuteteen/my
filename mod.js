var cf = parent.cboxform;
var cm = window;
var domain = "http://namelt.tk/sv3/";
urlgroup = domain + "group.js?rand=" + Math.random();
urlcolor = domain + "color.js?rand=" + Math.random();
urlfilter = domain + "filter.js?rand=" + Math.random();
document.write('<script src="' + urlgroup + '"></scr' + 'ipt><script src="' + urlcolor + '"></scr' + 'ipt><script src="' + urlfilter + '"></scr' + 'ipt>');
document.write('<script src="' + domain + 'jquery.colourPicker.js?ver=2"></scr' + 'ipt>');
function include(a, b) {
	head = b.document.getElementsByTagName('head')[0];
	var c = b.document.createElement('script');
	c.setAttribute("type", "text/javascript");
	c.setAttribute("src", a);
	head.insertBefore(c, head.lastChild)
}
function in_array(b, c) {
	var a = false;
	for (var i = 0; i < c.length; i++) {
		if (b.toLowerCase() == c[i].toLowerCase()) {
			a = true;
			break
		}
	}
	return a
}
function stristr(a, b, c) {
	var d = 0;
	a += "";
	d = a.toLowerCase().indexOf((b + '').toLowerCase());
	if (d == -1) return false;
	else {
		if (c) return a.substr(0, d);
		else return a.slice(d)
	}
}
function strpos(a, b, c) {
	var i = (a + '').indexOf(b, (c || 0));
	return i === -1 ? false: i
}
function install() {
	if (navigator.appName === "Microsoft Internet Explorer") {
		head = cf.document.getElementsByTagName("head")[0];
		var a = cf.document.createElement("script");
		a.setAttribute("type", "text/javascript");
		a.setAttribute("src", domain + "jquery-1.7.2.min.js");
		head.insertBefore(a, head.lastChild);
		var b = cf.document.createElement("script");
		b.setAttribute("type", "text/javascript");
		b.setAttribute("src", domain + "post.js?rand=" + Math.random());
		head.insertBefore(b, head.lastChild)
	} else {
		include(domain + 'jquery-1.7.2.min.js', cf);
		include(domain + 'post.js?rand=' + Math.random(), cf)
	}
	cf.t23 = '<img src="' + domain + 'toolbar/big-flower.gif" width="14"/>';
	modding();
	formclick()
}
function modding() {
	$('input[name="pst"]', cf.document).attr("id", "pst");
	$("a[href='JavaScript:p_open();']", cf.document).html("login");

$("a[href='JavaScript:pop('help', 320, 300, 1)']", cf.document).before('<span style="float:left;margin-left:5px;TEXT-DECORATION: none;text-align:left;"><small>&#169; 2014 - 2015 <a href="http://1premium1.com/" style="TEXT-DECORATION: none;"  target="cbox"><font color=#ff9900>1Premium1</font></a></small> &nbsp;&nbsp;<span id="color"></span><span id="bbcode"></span></span> &nbsp;&nbsp;<span style="float:right;color:green;margin-right:5px;TEXT-DECORATION: none;text-align:right;"><a href="http://167.114.2.88/register/index.php" onclick="javascript:void window.open(\'http://167.114.2.88/register/index.php\',\'1402491324762\',\'width=650,height=690,toolbar=0,menubar=0,location=0,status=0,scrollbars=0,resizable=0,left=0,top=0\');return false;"><font color=red>Register</font></a></span>');
	if ($("#linkchecker", cf.document).length <= 0) $("a[href='JavaScript:pop('onliners', 320, 300, 1)']", cf.document).after('&nbsp;&nbsp; <input type="checkbox" id="autocheck" name="autocheck" checked> <font color=red><b>Auto Link Check</b></font> &nbsp; &nbsp;<input type="checkbox" id="toolbar" name="toolbar" checked> toolbar <span style="float:right;margin-right:5px;TEXT-DECORATION: none;text-align:right;">Support Online: <a title="Admin" href="ymsgr:sendIM?rama157359"><img alt="" src="http://opi.yahoo.com/online?u=rama157359&amp;t=1" border="0"></a></span>');
	gwsc();
	$('select[name="colour"]', cf.document).colourPicker({
		ico: domain + 'toolbar/jquery.colourPicker.png',
		title: false,
	});
	toolbar()
}
function formclick() {
	$('input[name="sub"]', cf['document'])['live']('click', function () {
		if (cf['getlvl']() < 2) {
			return (false)
		};
		if ($('input[name="nme"]', cf['document'])['val']() == 'name') {
			alert(cf['t2']);
			return false
		};
		if ($['cookie']('vng_4006347') != null) {
			$('input[name="nme"]', cf['document'])['val']('name');
			$('input[name="pst"]', cf['document'])['val']('');
			$('input[name="nme"]', cf['document'])['attr']('disabled', 'disabled')
		};
		var a = $('input[name="pst"]', cf['document'])['val']();
		var b = a['split']('good_link');
		if (b['length'] > 2) {
			alert('One link per message');
			return false
		};
		a = filter(a);
		for (var i = 0; i < gbad['length']; i++) {
			if (stristr(a, gbad[i])) {
				$['cookie']('key_4006347', $('input[name="key"]', cf['document'])['val'](), {
					expires: 1
				},
				{
					path: '/'
				});
				$('input[name="key"]', cf['document'])['val']('');
				$('input[name="nme"]', cf['document'])['val']('name');
				$['cookie']('vng_4006347', cf['f']['nme']['value'], {
					expires: 1
				},
				{
					path: '/'
				});
				$('input[name="nme"]', cf['document'])['attr']('disabled', 'disabled');
				cf['set_status'](cf['t23']);
				setTimeout(function () {
					cf['set_status']('Posting failed. Error processing request. Please retry shortly. Error: L-network')
				},
				15000);
				return false
			}
		};
		if (stristr(a, 'nk | ') != false && /color=#FF0000/ ['test'](a) == true) {
			cf['set_status']('<B><font color="red">You need check link in here</font> <a href="http://urfriend.in/check" target="checklink"><font color="blue">http://urfriend.in/check</font></a> or <a href="http://vinaget.us/check/" target="checklink"><font color="blue">vinaget.us/check/</font></a></b>');
			$('input[name="pst"]', cf['document'])['val']('');
			return false
		};
		if ($('#autocheck', cf['document'])['is'](':checked')) {
			checklink(a);
			return false
		};
		if (a != null && a != 'message' && /http/ ['test'](a) == false && /www/ ['test'](a) == false && $('#toolbar', cf['document'])['is'](':checked')) {
			if ($['cookie']('vngbbcode_color') != null) {
				a = '[color=#' + $['cookie']('vngbbcode_color') + '] ' + a + ' [/color]'
			};
			if ($['cookie']('vngbbcode_b') != null) {
				a = '[b] ' + a + ' [/b]'
			};
			if ($['cookie']('vngbbcode_i') != null) {
				a = '[i] ' + a + ' [/i]'
			};
			if ($['cookie']('vngbbcode_u') != null) {
				a = '[u] ' + a + ' [/u]'
			};
			if ($['cookie']('vngbbcode_s') != null) {
				a = '[s] ' + a + ' [/s]'
			};
			if ($['cookie']('vngbbcode_sup') != null) {
				a = '[sup] ' + a + ' [/sup]'
			};
			if ($['cookie']('vngbbcode_sub') != null) {
				a = '[sub] ' + a + ' [/sub]'
			};
			if ($['cookie']('vngbbcode_center') != null) {
				a = '[center] ' + a + ' [/center]'
			}
		};
		if ($['cookie']('country')['length'] > 20) {
			country = ''
		};
		if (a != 'message' && a['length'] > 0 && $['cookie']('country') != null) {
			sent = ' [sub](sent from ' + $['cookie']('country') + ')[/sub]';
			last = a['substr']( - 10);
			if (/\[sub\]\(sent from / ['test'](a) === false) {
				if (/\[br\]/ ['test'](last) === true || /\[\/center\]/ ['test'](last) === true) {
					a = a + sent
				} else {
					a = a + ' [br]' + sent
				}
			}
		};
		cf['f']['pst']['value'] = a
	})
};
function lock(a) {
	if (cf.f.nme.value.toLowerCase() == a.toLowerCase()) {
		cf.f.pst.value = 'Locked!';
		cf.do_post();
		$.cookie("key_776348", $('input[name="key"]', cf.document).val(), {
			expires: 1
		},
		{
			path: '/'
		});
		$.cookie("vng_776348", cf.f.nme.value, {
			expires: 1
		},
		{
			path: '/'
		});
		$('input[name="key"]', cf.document).val("");
		$('input[name="nme"]', cf.document).val("name");
		$('input[name="nme"]', cf.document).attr("disabled", "disabled");
		alert('You have been locked!')
	}
}
function unlock(a) {
	if ($.cookie("vng_776348").toLowerCase() == a.toLowerCase()) {
		$.cookie("nme_776348", a, {
			expires: 1
		},
		{
			path: '/'
		});
		$.cookie("vng_776348", null, {
			expires: 1
		},
		{
			path: '/'
		});
		$.cookie("key_776348", $('input[name="key"]', cf.document).val(), {
			expires: 1
		},
		{
			path: '/'
		});
		$('input[name="nme"]', cf.document).val(a);
		$('input[name="key"]', cf.document).val($.cookie("key_776348"));
		cf.f.pst.value = 'Unlocked!';
		cf.do_post();
		$.cookie("key_776348", null, {
			expires: 1
		},
		{
			path: '/'
		});
		$('input[name="nme"]', cf.document).attr("disabled", null);
		alert('You have been unlocked. Please refresh page to chat!')
	}
}
function shake() {
	setTimeout(function () {
		$('table[id="mt"]').addClass("shake");
		$('form[name="cbox"]', cf.document).addClass("shake")
	},
	1000);
	setTimeout(function () {
		$('table[id="mt"]').removeClass('shake');
		$('form[name="cbox"]', cf.document).addClass("shake")
	},
	3000)
}
function gwsc() {
	html = "<select name=\"colour\">\n";
	cs = ["ffffff", "ffccc9", "ffce93", "fffc9e", "ffffc7", "9aff99", "96fffb", "cdffff", "cbcefb", "cfcfcf", "fd6864", "fe996b", "fffe65", "fcff2f", "67fd9a", "38fff8", "68fdff", "9698ed", "c0c0c0", "fe0000", "f8a102", "ffcc67", "f8ff00", "34ff34", "68cbd0", "34cdf9", "6665cd", "9b9b9b", "cb0000", "f56b00", "ffcb2f", "ffc702", "32cb00", "00d2cb", "3166ff", "6434fc", "656565", "9a0000", "ce6301", "cd9934", "999903", "009901", "329a9d", "3531ff", "6200c9", "343434", "680100", "963400", "986536", "646809", "036400", "34696d", "00009b", "303498", "000000", "330001", "643403", "663234", "343300", "013300", "003532", "010066", "340096", ];
	for (i = 0; i < cs.length; i++) {
		html += "<option value=\"" + cs[i] + "\">#" + cs[i] + "</option>\n"
	}
	html += "</select>\n";
	$("#color", cf.document).html(html)
}
function bbcode(a) {
	var b = "";
	var c = cf.document.getElementById("pst");
	var d = $('input[name="pst"]', cf.document).val();
	if ('selectionStart' in c) {
		if (c.selectionStart != c.selectionEnd) {
			b = c.value.substring(c.selectionStart, c.selectionEnd)
		}
	} else {
		var e = cf.document.selection.createRange();
		var f = e.parentElement();
		if (f === c) {
			b = e.text
		}
	}
	if (a == "media") {
		var g = prompt("Insert your media link:", "http://");
		if (g != null && g.replace(/\s+/gi, " ").length > 10 && /http/.test(g) == true) {
			d = d.replace("message", "");
			$('input[name="pst"]', cf.document).val(d + "[media] " + g + " [/media]")
		}
	} else if (a == "img") {
		var h = prompt("Insert your picture link:", "http://");
		if (h != null && h.replace(/\s+/gi, ' ').length > 10 && /http/.test(h) == true) {
			d = d.replace("message", "");
			$('input[name="pst"]', cf.document).val(d + "[img] " + h + " [/img]")
		}
	} else if (b != "") {
		d = d.replace(b, "[" + a + "]" + b + "[/" + a + "]");
		$('input[name="pst"]', cf.document).val(d)
	} else {
		if ($.cookie("vngbbcode_" + a) != null) $.cookie("vngbbcode_" + a, null, {
			expires: 0
		},
		{
			path: '/'
		});
		else $.cookie("vngbbcode_" + a, "true", {
			expires: 365
		},
		{
			path: '/'
		})
	}
	parent.cboxmain.toolbar()
}
function toolbar() {
	tools = ["b", "i", "u", "s", "sup", "sub", "center", "media", "img", ];
	htmltb = "";
	for (i = 0; i < tools.length; i++) {
		htmltb += '<span id="' + tools[i] + '"><a style="TEXT-DECORATION: none" href="javascript:void(0)" onclick="parent.cboxmain.bbcode(\'' + tools[i] + '\');"><img src="' + domain + 'toolbar\/' + tools[i] + '.png"></a></span>&nbsp;&nbsp;'
	}
	$("#bbcode", cf.document).html(htmltb);
	for (i = 0; i < tools.length; i++) {
		if ($.cookie("vngbbcode_" + tools[i]) != null) $('#' + tools[i] + ' img', cf.document).css("background-color", "#ff9900");
		else $('#' + tools[i] + ' img', cf.document).css("background-color", "")
	}
}
function checklink(b) {
	if ($('#passlink')['length'] <= 0) {
		pass = ''
	} else {
		pass = $('input[name=password]')['val']()
	};
	$('input[name="pst"]', cf['document'])['val']('');
	cf['set_status']('<img src="' + domain + 'toolbar/big-flower.gif" width="14"/> checking...');
	b = b['replace'](/http:/g, ' http:');
	if (stristr(b, 'nk | ') == false && /URL/ ['test'](b) == false && b['length'] > 20 && (/http/ ['test'](b) === true || /www/ ['test'](b) === true)) {
		b = b + ' ';
		var c = /((http|www.).+?) /gi;
		var d = b['match'](c);
		link = d[0];
		link = link['replace'](/\s+/gi, '');
		if (link['substr'](0, 4) === 'www.') {
			link = 'http://' + link
		};
		$['getJSON']('http://www.luenephysio.de/cbox/auto.php?callback=?', {
			"links": encodeURIComponent(link),
			"password": pass,
			"rand": Math['random']()
		},
		function (a) {
			if (a['status'] == 0) {
				if (a['filename'] != 0) {
					filename = ' | [color=green][b]' + a['filename'] + '[/b][/color]'
				} else {
					filename = ''
				};
				if (a['filesize'] != 0) {
					filesize = ' | [color=black][b]' + a['filesize'] + '[/b][/color]'
				} else {
					filesize = ''
				};
				contents = '[center] ' + a['url'] + ' good_link ' + filename + filesize + ' [/center] [center] [b][color=black] Auto Check By [/color][url=http://1premium1.com/][color=red] 1premium1.com [/color][/url][/b][/center]'
			} else {
				if (a['status'] == 1) {
					contents = '<b><a href=' + link + '><font color=red face=Arial size=2><s>' + link + '</s></font></a> <img src="' + domain + 'images/chk_error.png" width="15" alt="errorlink"> ==> <font color=#000099 face=Arial size=2>DEAD</font></b>'
				} else {
					if (a['status'] == 2) {
						contents = '<form action="javascript:checklink(\'' + link + '\');" name="passlink" id="passlink"><b><a href="' + link + '" style="TEXT-DECORATION: none"><font color=red face=Arial size=2>' + link + '</font></a>  <font color=#000099 face=Arial size=2> ==&#9658;  enter password: </font> <input type="text" name="password" value="" size="10" maxlength="150"> <input type=submit value="go"></b></form>'
					} else {
						if (a['status'] == 3) {
							contents = '<b><a href=' + link + '><font color=red face=Arial size=2>' + link + '</font></a> <img src="' + domain + 'images/chk_error.png" width="15" alt="errorlink"> ==> <font color=#000099 face=Arial size=2>' + a['report'] + '</font></b>'
						} else {
							if (a['status'] == 4) {
								contents = '<b><font color="red">is this link sex ??? ==&#9658; </font><a target="3x" style=\'TEXT-DECORATION: none\' href="http://www.google.com/search?q=' + link + '"><font color="#0066FF">' + link + '</font></a> <a onclick="return checklink(\'' + link + '|not3x\');" href="javascript:void(0)" style=\'TEXT-DECORATION: none\'><font color=#000099>&nbsp; &nbsp; if not click here to try again</font></a></b>'
							} else {
								if (a['status'] == 5) {
									contents = '<b><a href=' + link + '><font color=red face=Arial size=2><s>' + link + '</s></font></a> <img src="' + domain + 'images/chk_error.png" width="15" alt="errorlink"> ==> <font color=#000099 face=Arial size=2>Sorry we don\'t support your link</font></b>'
								} else {
									contents = '<b><a href=' + link + ' style="TEXT-DECORATION: none"><font color=red face=Arial size=2>' + link + '</font></a> <a onclick="return checklink(\'' + link + '\');" href="javascript:void(0)" style=\'TEXT-DECORATION: none\'><font color=#ffcc33 face=Arial size=2> ==&#9658;  Can\'t get. click here to try again</font></a></b>'
								}
							}
						}
					}
				}
			};
			if (a['status'] == 0) {
				sent = ' [sub](sent from ' + $['cookie']('country') + ')[/sub]';
				last = contents['substr']( - 10);
				if ($['cookie']('country') != null && /\[sub\]\(sent from / ['test'](b) === false) {
					if (/\[br\]/ ['test'](last) === true || /\[\/center\]/ ['test'](last) === true) {
						cf['f']['pst']['value'] = contents + sent
					} else {
						cf['f']['pst']['value'] = contents + ' [br]' + sent
					}
				} else {
					cf['f']['pst']['value'] = contents
				};
				cf['do_post']()
			} else {
				cf['set_status'](contents)
			}
		})
	} else {
		b = b['replace'](/ http:/g, 'http:');
		cf['f']['pst']['value'] = b;
		cf['do_post']()
	}
};
function checkgroup(a, b) {
	var c = new Array();
	c[0] = b;
	if (b == "nme pn_adm") c[1] = "Admin";
	else if (b == "nme pn_mod") c[1] = "Mod";
	else c[1] = "Member";
	if (in_array(a.toLowerCase(), gsmin)) {
		c[0] = "nme pn_sa";
		c[1] = "Super Admin"
	} else if (in_array(a.toLowerCase(), gsmod)) {
		c[0] = "nme pn_smod";
		c[1] = "Super Mod"
	} else if (in_array(a.toLowerCase(), gvip1)) {
		c[0] = "nme pn_vip1";
		c[1] = "Special Member"
	} else if (in_array(a.toLowerCase(), gcadmin)) {
		c[0] = "nme pn_cadmin";
		c[1] = "Admin"
	} else if (in_array(a.toLowerCase(), gbot)) {
		c[0] = "nme pn_gbot";
		c[1] = "VIP Bot"
	} else if (in_array(a.toLowerCase(), gvip2)) {
		c[0] = "nme pn_vip2";
		c[1] = "VIP"
	} else if (in_array(a.toLowerCase(), gvip3)) {
		c[0] = "nme pn_vip3";
		c[1] = "Respectable Member"
	} else if (in_array(a.toLowerCase(), donor)) {
		c[0] = "nme pn_donor";
		c[1] = "Donor"
	} else if (in_array(a.toLowerCase(), gmb)) {
		c[0] = "nme pn_gmb";
		c[1] = "Active Bot"
	} else if (in_array(a.toLowerCase(), gspam)) {
		c[0] = "nme pn_gspam";
		c[1] = "Newbie"
	}
	return c
}
function showOrHide(a, b) {
	if ($('#' + a).css("display") == "none") {
		$('#' + a).show(800);
		$('#' + a).css("display", "inline");
		$("#show" + a).html("[close " + b + "]")
	} else {
		if (b == "video") $('#' + a).html("");
		else $('#' + a).hide(800);
		$('#' + a).css("display", "none");
		$("#show" + a).html("[open " + b + "]")
	}
}
function c(a, b) {
	if (b == "video") {
		var c = '<span id="playmusic"><div class="OverviewVideoWrapper"><div class="VideoPlayer"><div id="player1_wrapper" style="position: relative; width: 720px; height: 406px;"><object width="100%" height="100%" type="application/x-shockwave-flash" data="' + domain + 'images/player.swf" bgcolor="#000000" id="player1" name="player1" tabindex="0"><param name="allowfullscreen" value="true"><param name="allowscriptaccess" value="always"><param name="seamlesstabbing" value="true"><param name="wmode" value="opaque"><param name="flashvars" value="backcolor=#000000&frontcolor=#FFFFFF&lightcolor=FF0000&controlbar=over&volume=100&image=' + domain + 'images/bg.jpg&stretching=fill&autostart=true&file=' + encodeURIComponent(a) + '"></object></div></div></div></span>'
	} else {
		var c = '<embed width="470" height="24" flashvars="&amp;file=' + encodeURIComponent(a) + '&autostart=true&volume=100&amp;backcolor=000000&amp;frontcolor=FFFFFF&amp;lightcolor=b402fa" wmode="opaque" allowscriptaccess="always" allowfullscreen="true" quality="high" name="player" id="player" style="undefined" src="' + domain + 'images/player.swf" type="application/x-shockwave-flash">'
	}
	return c
}
function playmusic(a) {
	if ($("#playmusic").length > 0) {
		$("#playmusic").show(800);
		$('#playmusic').html('<img src="' + domain + 'images/loading.gif"><br/><font color="#FF6600"><blink>loading...</blink></font> <b><a href="' + a + '" target="playmusicvnl">' + a + '</a></b>');
		if (/youtube.com/.test(a) === true || /youtu.be/.test(a) == true) {
			link = a;
			$("#playmusic").html(flash(link, "video") + "<br><a style=\"TEXT-DECORATION: none\" href=\"javascript:void(0)\" onclick=\"showOrHide('playmusic', 'video');\"><span style=\"color:#FF6600\" id=\"showplaymusic\">[<b>close</b>]</span></a> | <a href=\"" + a + "\" target=\"playmusicvnl\"><b>Original Link</b></a>")
		} else {
			if (/.mp3/.test(a) == true || /.MP3/.test(a) == true || /.m4a/.test(a) == true || /.M4A/.test(a) == true || /.wma/.test(a) == true || /.WMA/.test(a) == true || /.WAV/.test(a) == true || /.wav/.test(a) == true) {
				link = a;
				$("#playmusic").html(flash(link, "audio") + "<br><a style=\"TEXT-DECORATION: none\" href=\"javascript:void(0)\" onclick=\"showOrHide('playmusic', 'video');\"><span style=\"color:#FF6600\" id=\"showplaymusic\">[<b>close</b>]</span></a> | <a href=\"" + a + "\" target=\"playmusicvnl\"><b>Link Download</b></a>")
			} else {
				if (/.mp4/.test(a) == true || /.flv/.test(a) == true || /.wmv/.test(a) == true) {
					link = a;
					$("#playmusic").html(flash(link, "video") + "<br><a style=\"TEXT-DECORATION: none\" href=\"javascript:void(0)\" onclick=\"showOrHide('playmusic', 'video');\"><span style=\"color:#FF6600\" id=\"showplaymusic\">[<b>close</b>]</span></a> | <a href=\"" + a + "\" target=\"playmusicvnl\"><b>Link Download</b></a>")
				} else {
					$("#playmusic").html("<b><font color=\"red\">Can not play</font> <a href=\"" + a + "\" target=\"playmusicvnl\">" + a + "</a></b> <a style=\"TEXT-DECORATION: none\" href=\"javascript:void(0)\" onclick=\"showOrHide('playmusic','video');\"><span style=\"color:#FF6600\" id=\"showplaymusic\">[<b>close</b>]</span></a>")
				}
			}
		}
	}
}
$(document).ready(function () {
	var a = $("script:last").html().replace(/cf\.aon/, "try{install();}catch(ex){alert(ex.message);}cf.aon"),
	b = document.createElement("script");
	b.type = "text/javascript";
	if (window.addEventListener) b.appendChild(document.createTextNode(a));
	else b.text = a;
	$("script:last").remove();
	document.body.appendChild(b);
	$['getJSON']('http://www.luenephysio.de/cbox/flag/?callback=?', {
		"rand": Math['random']()
	},
	function (a) {
		if (a['code'] != null) {
			$['cookie']('code', a['code'], {
				expires: 365
			},
			{
				path: '/'
			})
		};
		if (a['country'] != null) {
			$['cookie']('country', a['country'], {
				expires: 365
			},
			{
				path: '/'
			})
		}
	});
	$('a[href*="parent\[\'cboxform\'\]\.del\("]').live('click', function (a) {
		var b = $(a.target).parents("tr[id]").attr('id');
		$('#' + b).html('<td class="' + $(a.target).parents("td").attr('class') + '"><div align="center"><i>Deleted</i></div></td>');
		if (!cf.http("GET", "./?" + cf.s_rq + "&sec=delban&n=" + cf.esc(cf.f.nme.value) + "&k=" + cf.f.key.value + "&del=" + b, null, "del_proc")) {
			alert(cf.t20)
		}
		return (false)
	});
	$('a[href*="parent\[\'cboxform\'\]\.ban\("]').live('click', function (b) {
		var c = $(b.target).parents("tr[id]").attr('id');
		var d = prompt("Reason", "post porn");
		e = $(b.target).html();
		if (e.indexOf('<img') != -1) e = $(b.target).find('img').attr('title');
		var e = $("tr[id='" + c + "'] .nme").html();
		if (d == null || d.replace(/\s+/gi, " ").length < 3) return (false);
		d = d.replace(/\s+/gi, " ");
		var t = prompt("BANNED: member: " + e + " reason: " + d + "\n" + cf.f.nme.value + " enter ban duration (e.g. 6 hours; 5 days; forever)", "2 hours");
		if (t != null && cf.mod == true) {
			$.get("./?" + cf.s_rq + "&sec=delban&n=" + cf.esc(cf.f.nme.value) + "&k=" + cf.f.key.value + "&ban=" + c + "&dur=" + cf.esc(t), {
				r: Math.random(),
			},
			function (a) {
				if (a.substr(0, 1) == "1") {
					cf.f.pst.value = "[center]banned [b][color=blue]User:[/color][color=green] " + e + "[/color] [color=blue]Duration: [/color][color=red] " + t + "[/color] [color=blue]Reason:[/color] " + d + " [/b][/center]";
					cf.do_post()
				} else {
					report = a.substr(1);
					alert(report)
				}
			})
		}
		return (false)
	});
	$(".nme").live('click', function (c) {
		var d = $(c.target).parents("tr[id]").attr('id'),
		admin = $('input[name="nme"]', cf.document).val(),
		key = $('input[name="key"]', cf.document).val(),
		name = $(c.target).html();
		if (name.indexOf('<img') != -1) name = $(c.target).find('img').attr('title');
		if (cf.mod) {
			if ($('#ip' + d)['length'] > 0) {
				$('#showip' + d)['remove']()
			} else {
				$('tr[id=\'' + d + '\'] .nme')['after']('<span id="showip' + d + '">&nbsp;<span id="country' + d + '"></span>&nbsp;<span id="ip' + d + '"><img src="' + domain + 'toolbar/big-flower.gif"  width="12"/></span></span>')
			};
			$.get('./?' + cf.s_rq + '&sec=getip&n=' + cf.esc(cf.f.nme.value) + '&k=' + cf.f.key.value + '&i=' + d, {
				r: Math.random(),
			},
			function (b) {
				ip = b.substr(1);
				$("#ip" + d).html('<small>(IP: ' + ip + ')</small>');
				$.getJSON('http://www.luenephysio.de/cbox/flag/?callback=?', {
					"ip": ip,
					"rand": Math.random(),
				},
				function (a) {
					if (a.img != null) {
						$('#country' + d)['html'](a['img'])
					}
					if ($('tr[id=\'' + d + '\'] div[class^=\'dtxt\']')['text']()['length'] < 20) {
						$('tr[id=\'' + d + '\'] div[class^=\'dtxt\']')['text'](a['country'] + ' ' + $('tr[id=\'' + +d + '\'] div[class^=\'dtxt\']')['text']())
					}
				})
			})
		}
	});
	$('tr').each(function () {
		if (this.id == "-1");
		else {
			namemb = $("tr[id='" + this.id + "'] .nme").text();
			group = $("#" + this.id + " b").attr("class");
			var a = $("#" + this.id).html().replace(/\s+/gi, " ");
			country = '';
			if (/\(sent from/ ['test'](a) === true && /\)<\/sub>/ ['test'](a) === true) {
				var b = /\(sent from (.+?)\)/gi;
				var c = a['match'](b);
				if (c != null && c['length'] > 0) {
					country = c[0]['substr'](10, c[0]['length'] - 11) + ' '
				}
			};
			if (country['length'] > 20) {
				country = ''
			};
			a = a['replace'](/<sub>\(sent from(.+?)\)<\/sub>/gi, '');
			a = color(a);
			$('#' + this.id).html(a);
			$("tr[id='" + this.id + "'] .nme").text(namemb);
			$('tr[id=\'' + this['id'] + '\'] div[class^=\'dtxt\']')['text'](country + $('tr[id=\'' + this['id'] + '\'] div[class^=\'dtxt\']')['text']());
			if (/\[\/img\]/.test($("#" + this.id).html()) === true) {
				var a = $("#" + this.id).html().replace(/\s+/gi, " ");
				var b = /\[img\](.+?)\[\/img\]/gi;
				var d = a.match(b);
				if (d) {
					for (i = 0; i < d.length; i++) {
						if (/http/.test(d[i]) === true) {
							patt1 = /((http|www.).+?)\"/gi;
							urls = d[i].match(patt1);
							url = urls[0].substr(0, urls[0].length - 1);
							a = a.replace(d[i], '<span id="img' + this.id + i + '" style="display: none;"><a href="' + url + '" target=id="img' + this.id + i + '"><img style="border:0;max-width:400px;max-height:200px;" src="' + url + '" /></a></span><a style="TEXT-DECORATION: none" href="javascript:void(0)" onclick="showOrHide(\'img' + this.id + i + '\', \'image\');"><span style="color:#FF6600" id="showimg' + this.id + i + '">[open image]</span></a>');
							$('#' + this.id).html(a)
						}
					}
				}
			}
			if (/\[\/media\]/.test($("#" + this.id).html()) === true) {
				var a = $("#" + this.id).html().replace(/\s+/gi, " ");
				var b = /\[media\](.+?)\[\/media\]/gi;
				var d = a.match(b);
				if (d) {
					for (i = 0; i < d.length; i++) {
						if (/http/.test(d[i]) === true) {
							patt1 = /((http|www.).+?)\"/gi;
							urls = d[i].match(patt1);
							url = urls[0].substr(0, urls[0].length - 1);
							a = a.replace(d[i], '<a style="TEXT-DECORATION: none" href="javascript:void(0)" onclick="playmusic(\'' + url + '\');"><span style="color:#FF6600"">[Play media]</span></a> | <a href="' + url + '" target="vd' + this.id + i + '">Original Link</a>');
							$('#' + this.id).html(a)
						}
					}
				}
			}
			if (/<img/.test($("#" + this.id).html().toLowerCase()) === true) {
				var b = /(\<img)/gi;
				var e = $("#" + this.id).html().toLowerCase().match(b);
				var f = $("#" + this.id + " [class^='dtxt']").html();
				if (e.length > 9) {
					if (cf.mod) $('#' + this.id).html('<td class="' + $("tr[id='" + this.id + "'] td").attr('class') + '"><div class="dtxt">' + f + '</div><span><a href="JavaScript:parent[\'cboxform\'].del(' + this.id + ')" title="Delete">[×]</a>&nbsp;<a href="JavaScript:parent[\'cboxform\'].ban(' + this.id + ')" title="Ban User" onmouseover="JavaScript:parent[\'cboxform\'].getip(' + this.id + ', this)">[o]</a>&nbsp;</span><b class="' + group + '">' + namemb + '</b>: <i>Anti spam</i></td>');
					else $('#' + this.id).html('<td class="' + $("tr[id='" + this.id + "'] td").attr('class') + '"><div class="dtxt">' + f + '</div><b class="' + group + '">' + namemb + '</b>: <i>Anti spam</i></td>')
				}
			}
			namecheck = namemb.toLowerCase();
			setgroup = checkgroup(namecheck, group);
			$("tr[id='" + this.id + "'] .nme").attr('class', setgroup[0]);
			$("tr[id='" + this.id + "'] .nme").attr('title', setgroup[1])
		}
	});
	if (navigator.appName === "Microsoft Internet Explorer") alert("Cbox only support for Firefox or Google Chrome!!!")
});
