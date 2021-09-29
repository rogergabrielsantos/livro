		var cont= 1;//controle das paginas
		var controls = true;//controle do icone do som
		var contbal = false;//controle do balao
		
		function mudaPagina(){
	
		if (cont<15){
			cont= cont +1;
			document.getElementById("principal").src = "pagina"+cont+".png";
			document.getElementById("ini").src = "inicio.png";
			document.getElementById("volta").src = "esq.png";
			document.getElementById("cara").src = cont+"p.png";
			document.getElementById("balao").style.display = "none";
		    contbal=false;
		document.getElementById("velhoSom").pause();
			}
			if (cont==15){
			document.getElementById("vai").src = "1p.png";	
			}
		
		}
		
		function voltaPagina(){
		if (cont>1){
			cont= cont -1;
			document.getElementById("principal").src = "pagina"+cont+".png";
			document.getElementById("vai").src = "direi.png";
		}
		if(cont==1){
		
			document.getElementById("ini").src = "1p.png";
			document.getElementById("volta").src = "1p.png";
		}
		
		document.getElementById("cara").src = cont+"p.png";
		document.getElementById("balao").style.display = "none";
		document.getElementById("velhoSom").pause();
		}
		function inicio(){
		
			cont= 1;
			document.getElementById("principal").src = "pagina"+cont+".png";
			document.getElementById("ini").src = "1p.png";
			document.getElementById("volta").src = "1p.png";
			document.getElementById("cara").src = cont+"p.png";
			document.getElementById("balao").style.display = "none";
			document.getElementById("velhoSom").pause();
			document.getElementById("vai").src = "direi.png";
		}
		function som(){
		if (controls==true){
		
			document.getElementById("cSom").src = "som2.png";
			document.getElementById("aud").pause();
		
			controls = false;
		}else{
		document.getElementById("cSom").src = "som1.png";
		document.getElementById("aud").play();	
		controls = true;
		}
		}
		function conto(){
			document.getElementById("velhoSom").src = "audios/"+cont+".mp3";
			document.getElementById("velhoSom").play();
			
		
		}
		
		function balCara(){
			
		if(contbal==false && cont!=1){
			document.getElementById("bal").src = "bal"+cont+".png";
			document.getElementById("balao").style.display = "block";
			document.getElementById("faceSom").src = "audios/f"+cont+".mp3";
			document.getElementById("faceSom").play();
			contbal=true;
		}else{
		document.getElementById("balao").style.display = "none";
		contbal=false;
		}
			
			
		
		}
		
		
		