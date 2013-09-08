console.log("running nigel.js");
var nigels = ['http://i.imgur.com/6NuRluP.gif', 'http://i.imgur.com/wlQMlKx.gif', 'http://i.imgur.com/CN7HP2e.gif','http://i.imgur.com/rjy5m8v.gif','http://i.imgur.com/aGrVzLw.gif','http://i.imgur.com/WOnPFj4.gif','http://i.imgur.com/5Drmd3p.gif','http://i.imgur.com/Ldphyjk.gif','http://i.imgur.com/VQ3G2xM.gif','http://i.imgur.com/tu5qT93.gif','http://i.imgur.com/SuTMS0m.gif','http://i.imgur.com/gLaxv2Q.gif','http://i.imgur.com/7w7xLIO.gif','http://i.imgur.com/K4lZVwY.gif','http://i.imgur.com/MrDsmmr.gif','http://i.imgur.com/T19qgNA.gif','http://i.imgur.com/sj9wXVW.gif','http://i.imgur.com/tcdc6yF.gif',];
var images = $('img');
console.log("images count" + images.length);
for (i = 0; i < images.length; i++){
	var nigel = nigels[Math.floor(Math.random() * nigels.length)];
	var img = images[i];
	$(img).attr('src', nigel); 
}