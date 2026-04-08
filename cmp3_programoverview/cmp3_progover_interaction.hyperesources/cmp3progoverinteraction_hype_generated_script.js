//	HYPE.documents["cmp3_progover_interaction"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "cmp3_progover_interaction.hyperesources";
	var documentName = "cmp3_progover_interaction";
	var documentLoaderFilename = "cmp3progoverinteraction_hype_generated_script.js";
	var mainContainerID = "cmp3progoverinteraction_hype_container";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// Legacy support
	if (typeof window.HYPE_DocumentsToLoad == "undefined") {
		window.HYPE_DocumentsToLoad = new Array();
	}
 
	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE_160 == "undefined") {
		if(typeof window.HYPE_160_DocumentsToLoad == "undefined") {
			window.HYPE_160_DocumentsToLoad = new Array();
			window.HYPE_160_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js?hype_version=160';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_160_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	// handle attempting to load multiple times
	if(HYPE.documents[documentName] != null) {
		var index = 1;
		var originalDocumentName = documentName;
		do {
			documentName = "" + originalDocumentName + "-" + (index++);
		} while(HYPE.documents[documentName] != null);
		
		var allDivs = document.getElementsByTagName("div");
		var foundEligibleContainer = false;
		for(var i = 0; i < allDivs.length; i++) {
			if(allDivs[i].id == mainContainerID && allDivs[i].getAttribute("HYPE_documentName") == null) {
				var index = 1;
				var originalMainContainerID = mainContainerID;
				do {
					mainContainerID = "" + originalMainContainerID + "-" + (index++);
				} while(document.getElementById(mainContainerID) != null);
				
				allDivs[i].id = mainContainerID;
				foundEligibleContainer = true;
				break;
			}
		}
		
		if(foundEligibleContainer == false) {
			return;
		}
	}
	
	var hypeDoc = new HYPE_160();
	
	var attributeTransformerMapping = {b:"i",c:"i",bC:"i",d:"i",aS:"i",M:"i",e:"f",aT:"i",N:"i",f:"d",O:"i",g:"c",aU:"i",P:"i",Q:"i",aV:"i",R:"c",bG:"f",aW:"f",aI:"i",S:"i",bH:"d",l:"d",aX:"i",T:"i",m:"c",bI:"f",aJ:"i",n:"c",aK:"i",bJ:"f",X:"i",aL:"i",A:"c",aZ:"i",Y:"bM",B:"c",bK:"f",bL:"f",C:"c",D:"c",t:"i",E:"i",G:"c",bA:"c",a:"i",bB:"i"};
	
	var resources = {"3":{n:"teacherplace.mp4"},"4":{n:"studentplace.mp4"},"0":{n:"close.png",p:1},"5":{n:"teachability.mp4"},"1":{n:"button.png",p:1},"6":{n:"CMP3_OnlinePOTemplate-1.png",p:1},"2":{n:"mathxl.mp4"}};
	
	var scenes = [{x:0,p:"600px",c:"#FFFFFF",v:{"10":{b:157,z:"7",K:"None",c:116,L:"None",d:175,aS:0,M:0,bD:"none",N:0,aT:0,O:0,aU:0,aG:"Teachability",P:0,h:"1",aV:0,j:"absolute",k:"div",aX:0,p:"no-repeat",A:"#A0A0A0",Y:"0px",q:"100% 100%",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",aM:"10_hover",s:"Arial,Helvetica,Sans-Serif",D:"#A0A0A0",t:18,aA:[{type:1,transition:1,sceneOid:"14"}],F:"left",v:"normal",G:"#000000",aP:"pointer",w:"<div><br></div>",x:"visible",I:"None",a:362,y:"preserve",J:"None"},"45":{o:"content-box",w:"",h:"6",p:"no-repeat",a:0,x:"visible",q:"100% 100%",b:-1,j:"absolute",r:"inline",c:720,k:"div",z:"2",d:405},"6":{b:149,z:"4",K:"None",c:116,L:"None",d:175,aS:0,M:0,bD:"none",N:0,aT:0,O:0,aU:0,aG:"Teacher Place",P:0,h:"1",aV:0,j:"absolute",k:"div",aX:0,p:"no-repeat",A:"#A0A0A0",Y:"normal",q:"100% 100%",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",aM:"6_hover",s:"Arial,Helvetica,Sans-Serif",D:"#A0A0A0",t:18,aA:[{type:1,transition:1,sceneOid:"3"}],F:"left",v:"normal",G:"#000000",aP:"pointer",w:"<div><br></div>",x:"visible",I:"None",a:47,y:"preserve",J:"None"},"9":{b:149,z:"6",K:"None",c:124,L:"None",d:177,aS:0,M:0,bD:"none",N:0,aT:0,O:0,aU:0,aG:"Student Place",P:0,h:"1",aV:0,j:"absolute",k:"div",aX:0,p:"no-repeat",A:"#A0A0A0",Y:"normal",q:"100% 100%",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",aM:"9_hover",s:"Arial,Helvetica,Sans-Serif",D:"#A0A0A0",t:18,E:0,aA:[{type:1,transition:1,sceneOid:"13"}],F:"left",v:"normal",G:"#000000",aP:"pointer",w:"<div><br></div>",x:"visible",I:"None",a:204,y:"preserve",J:"None"},"11":{b:166,z:"8",K:"None",c:162,L:"None",d:158,aS:0,M:0,bD:"none",N:0,aT:0,O:0,aU:0,aG:"MathXL",P:0,h:"1",aV:0,j:"absolute",k:"div",aX:0,p:"no-repeat",A:"#A0A0A0",Y:"normal",q:"100% 100%",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",aM:"11_hover",s:"Arial,Helvetica,Sans-Serif",D:"#A0A0A0",t:18,aA:[{type:1,transition:1,sceneOid:"15"}],F:"left",v:"normal",G:"#000000",aP:"pointer",w:"<div><div class=\"HYPE_InnerHTML_Div\" contenteditable=\"true\" style=\"width: 259px; height: 52px; outline-style: none; outline-width: initial; outline-color: initial; display: inline !important; \">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div></div><div><br></div>",x:"visible",I:"None",a:512,y:"preserve",J:"None"},"44":{b:340,z:"10",K:"None",c:142,L:"None",d:48,aS:0,M:0,bD:"none",N:0,aT:0,O:0,aU:0,aG:"Next",P:0,h:"1",aV:0,j:"absolute",k:"div",p:"no-repeat",A:"#A0A0A0",q:"100% 100%",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{goToURL:"index.html#chp5",type:5,openInNewWindow:false}],F:"center",G:"#000000",aP:"pointer",w:"",x:"visible",I:"None",a:556,y:"preserve",J:"None"}},n:"Home",T:{"10_hover":{d:1,i:"10_hover",n:"10_hover",a:[{f:"2",t:0,d:1,i:"G",e:"#266DC4",s:"#000000",o:"10"},{f:"2",t:0,d:1,i:"v",e:"normal",s:"normal",o:"10"}],f:30},"9_hover":{d:1,i:"9_hover",n:"9_hover",a:[{f:"2",t:0,d:1,i:"G",e:"#266DC4",s:"#000000",o:"9"},{f:"2",t:0,d:1,i:"v",e:"normal",s:"normal",o:"9"}],f:30},"43_pressed":{d:0,i:"43_pressed",n:"43_pressed",a:[],f:30},kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30},"6_hover":{d:1,i:"6_hover",n:"6_hover",a:[{f:"2",t:0,d:1,i:"v",e:"normal",s:"normal",o:"6"},{f:"2",t:0,d:1,i:"G",e:"#266DC4",s:"#000000",o:"6"}],f:30},"11_hover":{d:1,i:"11_hover",n:"11_hover",a:[{f:"2",t:0,d:1,i:"G",e:"#266DC4",s:"#000000",o:"11"},{f:"2",t:0,d:1,i:"v",e:"normal",s:"normal",o:"11"}],f:30},"12_pressed":{d:0,i:"12_pressed",n:"12_pressed",a:[],f:30}},o:"1"},{x:1,p:"600px",c:"#000000",v:{"23":{o:"content-box",h:"0",a:610,x:"visible",q:"100% 100%",b:14,j:"absolute",r:"inline",aA:[{type:1,transition:1,sceneOid:"1"}],k:"div",c:33,d:33,z:"3",aP:"pointer"},"51":{aR:"0",x:"visible",bE:[{type:"video/mp4",filename:"3"}],a:110,b:14,j:"absolute",c:500,k:"video",z:"4",d:376,aO:"1",aQ:"0",aH:"1"}},n:"Teacher Place",T:{kTimelineDefaultIdentifier:{d:27.25,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{t:0,p:1,i:"Video Track",d:27.25,o:"51",f:"2"}],f:30}},o:"3"},{x:2,p:"600px",c:"#000000",v:{"52":{aR:"0",x:"visible",bE:[{type:"video/mp4",filename:"4"}],a:110,b:14,j:"absolute",c:500,k:"video",z:"4",d:376,aO:"1",aQ:"0",aH:"1"},"33":{o:"content-box",h:"0",a:610,x:"visible",q:"100% 100%",b:14,j:"absolute",r:"inline",aA:[{type:1,transition:1,sceneOid:"1"}],k:"div",c:33,d:33,z:"3",aP:"pointer"}},n:"Student Place",T:{kTimelineDefaultIdentifier:{d:47.01,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{t:0,p:1,i:"Video Track",d:47.01,o:"52",f:"2"}],f:30}},o:"13"},{x:3,p:"600px",c:"#000000",v:{"53":{aR:"0",x:"visible",bE:[{type:"video/mp4",filename:"5"}],a:110,b:38,j:"absolute",c:500,k:"video",z:"4",d:328,aO:"1",aQ:"0",aH:"1"},"35":{o:"content-box",h:"0",a:610,x:"visible",q:"100% 100%",b:38,j:"absolute",r:"inline",aA:[{type:1,transition:1,sceneOid:"1"}],k:"div",c:33,d:33,z:"3",aP:"pointer"}},n:"Teachability",T:{kTimelineDefaultIdentifier:{d:28.28,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{t:0,p:1,i:"Video Track",d:28.28,o:"53",f:"2"}],f:30}},o:"14"},{x:4,p:"600px",c:"#000000",v:{"37":{o:"content-box",h:"0",a:610,x:"visible",q:"100% 100%",b:14,j:"absolute",r:"inline",aA:[{type:1,transition:1,sceneOid:"1"}],k:"div",c:33,d:33,z:"3",aP:"pointer"},"50":{aR:"0",x:"visible",bE:[{type:"video/mp4",filename:"2"}],a:110,b:14,j:"absolute",c:500,k:"video",z:"4",d:376,aO:"1",aQ:"0",aH:"1"}},n:"MathXL",T:{kTimelineDefaultIdentifier:{d:54.08,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{t:0,p:1,i:"Video Track",d:54.08,o:"50",f:"2"}],f:30}},o:"15"}];
	
	var javascripts = [];
	
	var functions = {};
	var javascriptMapping = {};
	for(var i = 0; i < javascripts.length; i++) {
		try {
			javascriptMapping[javascripts[i].identifier] = javascripts[i].name;
			eval("functions." + javascripts[i].name + " = " + javascripts[i].source);
		} catch (e) {
			hypeDoc.log(e);
			functions[javascripts[i].name] = (function () {});
		}
	}
	
	hypeDoc.setAttributeTransformerMapping(attributeTransformerMapping);
	hypeDoc.setResources(resources);
	hypeDoc.setScenes(scenes);
	hypeDoc.setJavascriptMapping(javascriptMapping);
	hypeDoc.functions = functions;
	hypeDoc.setCurrentSceneIndex(0);
	hypeDoc.setMainContentContainerID(mainContainerID);
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setGraphicsAcceleration(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;
	document.getElementById(mainContainerID).setAttribute("HYPE_documentName", documentName);

	hypeDoc.documentLoad(this.body);
}());

