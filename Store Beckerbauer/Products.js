var focalFlowers = ["images/Anemone.jpg",
					"images/Dahlia.jpg",
					"images/Gerbera Daisy.jpg",
					"images/Lily.jpg",
					"images/Peony.jpg",
					"images/Rose.jpg"];

var fillerFlowers = ["images/Baby's Breath.jpg",
					"images/Carnation.jpg",
					"images/Larkspur.jpg",
					"images/Lily of the Incas.jpg",
					"images/Sea Lavender.jpg",
					"images/Snapdragon.jpg"];

var greenery = ["images/Bells of Ireland.jpg",
				"images/Dusty Miller.jpg",
				"images/Hops.jpg",
				"images/Lambs Ear.jpg",
				"images/Ruscus.jpg",
				"images/Seeded Eucalyptus.jpg"];

var lineFlowers = ["images/Foxglove.jpg",
					"images/Gladiolus.jpg",
					"images/Liatris.jpg",
					"images/Orchid.jpg",
					"images/Queen Anne's Lace.jpg",
					"images/Sunflower.jpg"];

var focalFlowersDescriptions = ["Anemone: Beautiful pink flowers that need partial shade for best flowers.", 
								"Dahlia: Lovely symmetrical warm hued flowers that need full sun.",
								"Gerbera Daisy: Wonderful sunset hued flowres that need partial shade.",
								"Lily: Pretty white flowers that can thrive in various levels of sunlight.",
								"Peony: Gorgeous pink flowers that need full sun for best flowers.",
								"Rose: Attractive red classic flowers that need partial shade."];

var fillerFlowersDescriptions = ["Baby's Breath: Lovely white flowers that need partial shade for best flowers. ",
								"Carnation: Beautiful pink flowers that need full sun for best flowers.",
								"Larkspur: Attractive purple flowers that need full sun to partial shade.",
								"Lily of the Incas: Gorgeous yellow flowers that need full sun for best flowers.",
								"Sea Lavender: Wonderful purple flowers that need full sun for best flowers.",
								"Snapdragon: Pretty white and pink flowers that need partial shade."];

var greeneryDescriptions = ["Bells of Ireland: Wonderful lime green flowers that need full sun for best flowers.",
							"Dusty Miller: Attractive white and green flowers that need full sun for best flowers.",
							"Hops: Gorgeous light green flowers that need full sun for best flowers.",
							"Lambs Ear: Pretty soft green flowers that need full sun to partial shade.",
							"Ruscus: Lovely dark green flowers that need partial shade for best flowers.",
							"Seeded Eucalyptus: Beautiful dulled green flowers that need full sun for best flowers."];

var lineFlowersDescriptions = ["Foxglove: Gorgeous magenta flowers that need full sun for best flowers.",
							"Gladiolus: Pretty warmed hued flowers that need full sun for best flowers.",
							"Liatris: Beautiful purple flowers that need full sun for best flowers.",
							"Orchid: Attractive pink flowers that need partial shade for best flowers.",
							"Queen Annes's Lace: Wonderful white flowers that need full sun for best flowers.",
							"Sunflower: Lovely yellow flowers that need full sun for best flowers."];

var focalFlowersPrices = ["22.00",
						"79.00",
						"20.00",
						"30.00",
						"67.00",
						"53.00"];

var fillerFlowersPrices = ["9.00",
							"7.00",
							"20.00",
							"11.00",
							"17.00",
							"14.00"];

var greeneryPrices = ["14.00",
					"38.00",
					"46.00",
					"24.00",
					"26.00",
					"15.00"];

var lineFlowersPrices = ["9.00",
						"19.00",
						"19.00",
						"55.00",
						"22.00",
						"28.00"];

var currentItem = "";

function swapImageAndCaption(whatPage, idTag){
	var stringId = idTag + ""; 
	if (whatPage == 'focalFlowers'){
		document.getElementsByClassName("mainImages")[0].src = focalFlowers[idTag];
		document.getElementsByClassName("text")[0].innerHTML = focalFlowersDescriptions[idTag];
		document.getElementsByClassName("prices")[0].innerHTML = focalFlowersPrices[idTag];
		currentItem = focalFlowers[idTag];
	}
	else if(whatPage == 'fillerFlowers'){
		document.getElementsByClassName("mainImages")[1].src = fillerFlowers[idTag];
		document.getElementsByClassName("text")[1].innerHTML = fillerFlowersDescriptions[idTag];
		document.getElementsByClassName("prices")[1].innerHTML = fillerFlowersPrices[idTag];
		currentItem = fillerFlowers[idTag];
	}
	else if(whatPage == 'greenery'){
		document.getElementsByClassName("mainImages")[2].src = greenery[idTag];
		document.getElementsByClassName("text")[2].innerHTML = greeneryDescriptions[idTag];
		document.getElementsByClassName("prices")[2].innerHTML = greeneryPrices[idTag];
		currentItem = greenery[idTag];
	}
	else if(whatPage == 'lineFlowers'){
		document.getElementsByClassName("mainImages")[3].src = lineFlowers[idTag];
		document.getElementsByClassName("text")[3].innerHTML = lineFlowersDescriptions[idTag];
		document.getElementsByClassName("prices")[3].innerHTML = lineFlowersPrices[idTag];
		currentItem = lineFlowers[idTag];
	}
}

function clearStuff(anId){
	var daDivs = document.getElementsByClassName("aPage");
	for(item of daDivs){
		item.style.display = "none";
	}
	document.getElementById(anId).style.display = "block"; 
}

var carte = 0;

class cart{
	constructor(){
		this.anemoneAmount = 0;
		this.babysBreathAmount = 0;
		this.bellsOfIrelandAmount = 0;
		this.carnationAmount = 0;
		this.dahliaAmount = 0;
		this.dustyMillerAmount = 0;
		this.foxgloveAmount = 0;
		this.gerberaDaisyAmount = 0;
		this.gladiolusAmount = 0;
		this.hopsAmount = 0;
		this.lambsEarAmount = 0;
		this.larkspurAmount = 0;
		this.liatrisAmount = 0;
		this.lilyOfTheIncasAmount = 0;
		this.lilyAmount = 0;
		this.orchidAmount = 0;
		this.peonyAmount = 0;
		this.queenAnnesLaceAmount = 0;
		this.roseAmount = 0;
		this.ruscusAmount = 0;
		this.seaLavenderAmount = 0;
		this.seededEucalyptusAmount = 0;
		this.snapdragonAmount = 0;
		this.sunflowerAmount = 0;
		this.amountInCart = [this.anemoneAmount, 
							this.babysBreathAmount, 
							this.bellsOfIrelandAmount,
							this.carnationAmount,
							this.dahliaAmount,
							this.dustyMillerAmount,
							this.foxgloveAmount,
							this.gerberaDaisyAmount,
							this.gladiolusAmount,
							this.hopsAmount,
							this.lambsEarAmount,
							this.larkspurAmount,
							this.liatrisAmount,
							this.lilyOfTheIncasAmount,
							this.lilyAmount,
							this.orchidAmount,
							this.peonyAmount,
							this.queenAnnesLaceAmount,
							this.roseAmount,
							this.ruscusAmount,
							this.seaLavenderAmount,
							this.seededEucalyptusAmount, 
							this.snapdragonAmount,
							this.sunflowerAmount];
		this.anemonePrice = 22;
		this.babysBreathPrice = 9;
		this.bellsOfIrelandPrice = 14;
		this.carnationPrice = 7;
		this.dahliaPrice = 79;
		this.dustyMillerPrice = 38;
		this.foxglovePrice = 9;
		this.gerberaDaisyPrice = 20;
		this.gladiolusPrice = 19;
		this.hopsPrice = 46;
		this.lambsEarPrice = 24;
		this.larkspurPrice = 20;
		this.liatrisPrice = 19;
		this.lilyOfTheIncasPrice = 11;
		this.lilyPrice = 30;
		this.orchidPrice = 55;
		this.peonyPrice = 67;
		this.queenAnnesLacePrice = 22;
		this.rosePrice = 53;
		this.ruscusPrice = 26;
		this.seaLavenderPrice = 17;
		this.seededEucalyptusPrice = 15;
		this.snapdragonPrice = 14;
		this.sunflowerPrice = 28;
		this.priceInCart = [this.anemonePrice,
							this.babysBreathPrice,
							this.bellsOfIrelandPrice,
							this.carnationPrice,
							this.dahliaPrice,
							this.dustyMillerPrice,
							this.foxglovePrice, 
							this.gerberaDaisyPrice,
							this.gladiolusPrice,
							this.hopsPrice,
							this.lambsEarPrice,
							this.larkspurPrice,
							this.liatrisPrice,
							this.lilyOfTheIncasPrice,
							this.lilyPrice, 
							this.orchidPrice,
							this.peonyPrice,
							this.queenAnnesLacePrice,
							this.rosePrice,
							this.ruscusPrice,
							this.seaLavenderPrice, 
							this.seededEucalyptusPrice,
							this.snapdragonPrice, 
							this.sunflowerPrice];
		this.anemonePriceForItem = 0;
		this.babysBreathPriceForItem = 0;
		this.bellsOfIrelandPriceForItem = 0;
		this.carnationPriceForItem = 0;
		this.dahliaPriceForItem = 0;
		this.dustyMillerPriceForItem = 0;
		this.foxglovePriceForItem = 0;
		this.gerberaDaisyPriceForItem = 0;
		this.gladiolusPriceForItem = 0;
		this.hopsPriceForItem = 0;
		this.lambsEarPriceForItem = 0;
		this.larkspurPriceForItem = 0;
		this.liatrisPriceForItem = 0;
		this.lilyOfTheIncasPriceForItem = 0;
		this.lilyPriceForItem = 0;
		this.orchidPriceForItem = 0;
		this.peonyPriceForItem = 0;
		this.queenAnnesLacePriceForItem = 0;
		this.rosePriceForItem = 0;
		this.ruscusPriceForItem = 0;
		this.seaLavenderPriceForItem = 0;
		this.seededEucalyptusPriceForItem = 0;
		this.snapdragonPriceForItem = 0;
		this.sunflowerPriceForItem = 0; 
		this.total = 0;
	}
	
}

var myCart = new cart();

function totalCart(){
	var ant = 0;
	var bat = 0;
	var cat = 0;
	var dog = 0;
	var ear = 0;
	var fox = 0;
	var goo = 0;
	var hat = 0;
	var ice = 0;
	var jar = 0;
	var kid = 0;
	var lid = 0;
	var moo = 0;
	var nod = 0;
	var oop = 0;
	var pop = 0;
	var que = 0;
	var ran = 0;
	var sat = 0;
	var toe = 0;
	var uwu = 0;
	var via = 0;
	var why = 0;
	var xis = 0;
	if(currentItem == "images/Anemone.jpg"){
		for(a = 0; a < this.myCart.amountInCart[0]; a++){
			this.myCart.anemonePriceForItem = this.myCart.anemonePriceForItem + this.myCart.anemonePrice;
			ant++;
			if(ant > 1){
				this.myCart.anemonePriceForItem = this.myCart.anemonePriceForItem - this.myCart.anemonePrice;
			}
		}
	}
	else if(currentItem == "images/Baby's Breath.jpg"){
		for(b = 0; b < this.myCart.amountInCart[1]; b++){
			this.myCart.babysBreathPriceForItem = this.myCart.babysBreathPriceForItem + this.myCart.babysBreathPrice;
			bat++;
			if(bat > 1){
				this.myCart.babysBreathPriceForItem = this.myCart.babysBreathPriceForItem - this.myCart.babysBreathPrice;
			}
		}
	}
	else if(currentItem == "images/Bells of Ireland.jpg"){
		for(c = 0; c < this.myCart.amountInCart[2]; c++){
			this.myCart.bellsOfIrelandPriceForItem = this.myCart.bellsOfIrelandPriceForItem + this.myCart.bellsOfIrelandPrice;
			cat++;
			if(cat > 1){
				this.myCart.bellsOfIrelandPriceForItem = this.myCart.bellsOfIrelandPriceForItem - this.myCart.bellsOfIreland;
			}
		}
	}
	else if(currentItem == "images/Carnation.jpg"){
		for(d = 0; d < this.myCart.amountInCart[3]; d++){
			this.myCart.carnationPriceForItem = this.myCart.carnationPriceForItem + this.myCart.carnationPrice;
			dog++;
			if(dog > 1){
				this.myCart.carnationPriceForItem = this.myCart.carnationPriceForItem - this.myCart.carnationPrice;
			}
		}
	}
	else if(currentItem == "images/Dahlia.jpg"){
		for(e = 0; e < this.myCart.amountInCart[4]; e++){
			this.myCart.dahliaPriceForItem = this.myCart.dahliaPriceForItem + this.myCart.dahliaPrice;
			ear++;
			if(ear > 1){
				this.myCart.dahliaPriceForItem = this.myCart.dahliaPriceForItem - this.myCart.dahliaPrice;
			}
		}
	}
	else if(currentItem == "images/Dusty Miller.jpg"){
		for(f = 0; f < this.myCart.amountInCart[5]; f++){
			this.myCart.dustyMillerPriceForItem = this.myCart.dustyMillerPriceForItem + this.myCart.dustyMillerPrice;
			fox++;
			if(fox > 1){
				this.myCart.dustyMillerPriceForItem = this.myCart.dustyMillerPriceForItem - this.myCart.dustyMillerPrice;
			}
		}
	}
	else if(currentItem == "images/Foxglove.jpg"){
		for(g = 0; g < this.myCart.amountInCart[6]; g++){
			this.myCart.foxglovePriceForItem = this.myCart.foxglovePriceForItem + this.myCart.foxglovePrice;
			goo++;
			if(goo > 1){
				this.myCart.foxglovePriceForItem = this.myCart.foxglovePriceForItem - this.myCart.foxglovePrice;
			}
		}
	}
	else if(currentItem == "images/Gerbera Daisy.jpg"){
		for(h = 0; h < this.myCart.amountInCart[7]; h++){
			this.myCart.gerberaDaisyPriceForItem = this.myCart.gerberaDaisyPriceForItem + this.myCart.gerberaDaisyPrice;
			hat++;
			if(hat > 1){
				this.myCart.gerberaDaisyPriceForItem = this.myCart.gerberaDaisyPriceForItem - this.myCart.gerberaDaisyPrice;
			}
		}
	}
	else if(currentItem == "images/Gladiolus.jpg"){
		for(i = 0; i < this.myCart.amountInCart[8]; i++){
			this.myCart.gladiolusPriceForItem = this.myCart.gladiolusPriceForItem + this.myCart.gladiolusPrice;
			ice++;
			if(ice > 1){
				this.myCart.gladiolusPriceForItem = this.myCart.gladiolusPriceForItem - this.myCart.gladiolusPrice;
			}
		}
	}
	else if(currentItem == "images/Hops.jpg"){
		for(j = 0; j < this.myCart.amountInCart[9]; j++){
			this.myCart.hopsPriceForItem = this.myCart.hopsPriceForItem + this.myCart.hopsPrice;
			jar++;
			if(jar > 1){
				this.myCart.hopsPriceForItem = this.myCart.hopsPriceForItem - this.myCart.hopsPrice;
			}
		}
	}
	else if(currentItem == "images/Lambs Ear.jpg"){
		for(k = 0; k < this.myCart.amountInCart[10]; k++){
			this.myCart.lambsEarPriceForItem = this.myCart.lambsEarPriceForItem + this.myCart.lambsEarPrice;
			kid++;
			if(kid > 1){
				this.myCart.lambsEarPriceForItem = this.myCart.lambsEarPriceForItem - this.myCart.lambsEarPrice;
			}
		}
	}
	else if(currentItem == "images/Larkspur.jpg"){
		for(l = 0; l < this.myCart.amountInCart[11]; l++){
			this.myCart.larkspurPriceForItem = this.myCart.larkspurPriceForItem + this.myCart.larkspurPrice;
			lid++;
			if(lid > 1){
				this.myCart.larkspurPriceForItem = this.myCart.larkspurPriceForItem - this.myCart.larkspurPrice;
			}
		}
	}
	else if(currentItem == "images/Liatris.jpg"){
		for(m = 0; m < this.myCart.amountInCart[12]; m++){
			this.myCart.liatrisPriceForItem = this.myCart.liatrisPriceForItem + this.myCart.liatrisPrice;
			moo++;
			if(moo > 1){
				this.myCart.liatrisPriceForItem = this.myCart.liatrisPriceForItem - this.myCart.liatrisPrice;
			}
		}
	}
	else if(currentItem == "images/Lily of the Incas.jpg"){
		for(n = 0; n < this.myCart.amountInCart[13]; n++){
			this.myCart.lilyOfTheIncasPriceForItem = this.myCart.lilyOfTheIncasPriceForItem + this.myCart.lilyOfTheIncasPrice;
			nod++;
			if(nod > 1){
				this.myCart.lilyOfTheIncasPriceForItem = this.myCart.lilyOfTheIncasPriceForItem - this.myCart.lilyOfTheIncasPrice;
			}
		}
	}
	else if(currentItem == "images/Lily.jpg"){
		for(o = 0; o < this.myCart.amountInCart[14]; o++){
			this.myCart.lilyPriceForItem = this.myCart.lilyPriceForItem + this.myCart.lilyPrice;
			oop++;
			if(oop > 1){
				this.myCart.lilyPriceForItem = this.myCart.lilyPriceForItem - this.myCart.lilyPrice;
			}
		}
	}
	else if(currentItem == "images/Orchid.jpg"){
		for(p = 0; p < this.myCart.amountInCart[15]; p++){
			this.myCart.orchidPriceForItem = this.myCart.orchidPriceForItem + this.myCart.orchidPrice;
			pop++;
			if(pop > 1){
				this.myCart.orchidPriceForItem = this.myCart.orchidPriceForItem - this.myCart.orchidPrice;
			}
		}
	}
	else if(currentItem == "images/Peony.jpg"){
		for(q = 0; q < this.myCart.amountInCart[16]; q++){
			this.myCart.peonyPriceForItem = this.myCart.peonyPriceForItem + this.myCart.peonyPrice;
			que++;
			if(que > 1){
				this.myCart.peonyPriceForItem = this.myCart.peonyPriceForItem - this.myCart.peonyPrice;
			}
		}
	}
	else if(currentItem == "images/Queen Anne's Lace.jpg"){
		for(r = 0; r < this.myCart.amountInCart[17]; r++){
			this.myCart.queenAnnesLacePriceForItem = this.myCart.queenAnnesLacePriceForItem + this.myCart.queenAnnesLacePrice;
			ran++;
			if(ran > 1){
				this.myCart.queenAnnesLacePriceForItem = this.myCart.queenAnnesLacePriceForItem - this.myCart.queenAnnesLacePrice;
			}
		}
	}
	else if(currentItem == "images/Rose.jpg"){
		for(s = 0; s < this.myCart.amountInCart[18]; s++){
			this.myCart.rosePriceForItem = this.myCart.rosePriceForItem + this.myCart.rosePrice;
			sat++;
			if(sat > 1){
				this.myCart.rosePriceForItem = this.myCart.rosePriceForItem - this.myCart.rosePrice;
			}
		}
	}
	else if(currentItem == "images/Ruscus.jpg"){
		for(t = 0; t < this.myCart.amountInCart[19]; t++){
			this.myCart.ruscusPriceForItem = this.myCart.ruscusPriceForItem + this.myCart.ruscusPrice;
			toe++;
			if(toe > 1){
				this.myCart.ruscusPriceForItem = this.myCart.ruscusPriceForItem - this.myCart.ruscusPrice;
			}
		}
	}
	else if(currentItem == "images/Sea Lavender.jpg"){
		for(u = 0; u < this.myCart.amountInCart[20]; u++){
			this.myCart.seaLavenderPriceForItem = this.myCart.seaLavenderPriceForItem + this.myCart.seaLavenderPrice;
			uwu++;
			if(uwu > 1){
				this.myCart.seaLavenderPriceForItem = this.myCart.seaLavenderPriceForItem - this.myCart.seaLavenderPrice;
			}
		}
	}
	else if(currentItem == "images/Seeded Eucalyptus.jpg"){
		for(v = 0; v < this.myCart.amountInCart[21]; v++){
			this.myCart.seededEucalyptusPriceForItem = this.myCart.seededEucalyptusPriceForItem + this.myCart.seededEucalyptusPrice;
			via++;
			if(via > 1){
				this.myCart.seededEucalyptusPriceForItem = this.myCart.seededEucalyptusPriceForItem - this.myCart.seededEucalyptusPrice;
			}
		}
	}
	else if(currentItem == "images/Snapdragon.jpg"){
		for(w = 0; w < this.myCart.amountInCart[22]; w++){
			this.myCart.snapdragonPriceForItem = this.myCart.snapdragonPriceForItem + this.myCart.snapdragonPrice;
			why++;
			if(why > 1){
				this.myCart.snapdragonPriceForItem = this.myCart.snapdragonPriceForItem - this.myCart.snapdragonPrice;
			}
		}
	}
	else if(currentItem == "images/Sunflower.jpg"){
		for(x = 0; x < this.myCart.amountInCart[23]; x++){
			this.myCart.sunflowerPriceForItem = this.myCart.sunflowerPriceForItem + this.myCart.sunflowerPrice;
			xis++;
			if(xis > 1){
				this.myCart.sunflowerPriceForItem = this.myCart.sunflowerPriceForItem - this.myCart.sunflowerPrice;
			}
		}
	}
	this.myCart.total = this.myCart.anemonePriceForItem + 
						this.myCart.babysBreathPriceForItem +
						this.myCart.bellsOfIrelandPriceForItem +
						this.myCart.carnationPriceForItem + 
						this.myCart.dahliaPriceForItem +
						this.myCart.dustyMillerPriceForItem +
						this.myCart.foxglovePriceForItem +
						this.myCart.gerberaDaisyPriceForItem +
						this.myCart.gladiolusPriceForItem +
						this.myCart.hopsPriceForItem + 
						this.myCart.lambsEarPriceForItem +
						this.myCart.larkspurPriceForItem + 
						this.myCart.liatrisPriceForItem + 
						this.myCart.lilyOfTheIncasPriceForItem + 
						this.myCart.lilyPriceForItem + 
						this.myCart.orchidPriceForItem + 
						this.myCart.peonyPriceForItem + 
						this.myCart.queenAnnesLacePriceForItem + 
						this.myCart.rosePriceForItem + 
						this.myCart.ruscusPriceForItem + 
						this.myCart.seaLavenderPriceForItem + 
						this.myCart.seededEucalyptusPriceForItem + 
						this.myCart.snapdragonPriceForItem + 
						this.myCart.sunflowerPriceForItem;
}

function totalRemoveCart(){
	var ant = 0;
	var bat = 0;
	var cat = 0;
	var dog = 0;
	var ear = 0;
	var fox = 0;
	var goo = 0;
	var hat = 0;
	var ice = 0;
	var jar = 0;
	var kid = 0;
	var lid = 0;
	var moo = 0;
	var nod = 0;
	var oop = 0;
	var pop = 0;
	var que = 0;
	var ran = 0;
	var sat = 0;
	var toe = 0;
	var uwu = 0;
	var via = 0;
	var why = 0;
	var xis = 0;
	if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Anemone.jpg"){
		for(a = 0; a < this.myCart.amountInCart[0]; a++){
			this.myCart.anemonePriceForItem = this.myCart.anemonePriceForItem - this.myCart.anemonePrice;
			ant++;
			if(ant > 1){
				this.myCart.anemonePriceForItem = this.myCart.anemonePriceForItem + this.myCart.anemonePrice;
			}
		}
	}
	else if(currentItem == "images/Baby's Breath.jpg"){
		for(b = 0; b < this.myCart.amountInCart[1]; b++){
			this.myCart.babysBreathPriceForItem = this.myCart.babysBreathPriceForItem - this.myCart.babysBreathPrice;
			bat++;
			if(bat > 1){
				this.myCart.babysBreathPriceForItem = this.myCart.babysBreathPriceForItem + this.myCart.babysBreathPrice;
			}
		}
	}
	else if(currentItem == "images/Bells of Ireland.jpg"){
		for(c = 0; c < this.myCart.amountInCart[2]; c++){
			this.myCart.bellsOfIrelandPriceForItem = this.myCart.bellsOfIrelandPriceForItem - this.myCart.bellsOfIrelandPrice;
			cat++;
			if(cat > 1){
				this.myCart.bellsOfIrelandPriceForItem = this.myCart.bellsOfIrelandPriceForItem + this.myCart.bellsOfIrelandPrice;
			}
		}
	}
	else if(currentItem == "images/Carnation.jpg"){
		for(d = 0; d < this.myCart.amountInCart[3]; d++){
			this.myCart.carnationPriceForItem = this.myCart.carnationPriceForItem - this.myCart.carnationPrice;
			dog++;
			if(dog > 1){
				this.myCart.carnationPriceForItem = this.myCart.carnationPriceForItem + this.myCart.carnationPrice;
			}
		}
	}
	else if(currentItem == "images/Dahlia.jpg"){
		for(e = 0; e < this.myCart.amountInCart[4]; e++){
			this.myCart.dahliaPriceForItem = this.myCart.dahliaPriceForItem - this.myCart.dahliaPrice;
			ear++;
			if(ear > 1){
				this.myCart.dahliaPriceForItem = this.myCart.dahliaPriceForItem + this.myCart.dahliaPrice;
			}
		}
	}
	else if(currentItem == "images/Dusty Miller.jpg"){
		for(f = 0; f < this.myCart.amountInCart[5]; f++){
			this.myCart.dustymillerPriceForItem = this.myCart.dustyMillerPriceForItem - this.myCart.dustyMillerPrice;
			fox++;
			if(fox > 1){
				this.myCart.dustyMillerPriceForItem = this.myCart.dustyMillerPriceForItem + this.myCart.dustyMillerPrice;
			}
		}
	}
	else if(currentItem == "images/Foxglove.jpg"){
		for(g = 0; g < this.myCart.amountInCart[6]; g++){
			this.myCart.foxglovePriceForItem = this.myCart.foxglovePriceForItem - this.myCart.foxglovePrice;
			goo++;
			if(goo > 1){
				this.myCart.foxglovePriceForItem = this.myCart.foxglovePriceForItem + this.myCart.foxglovePrice;
			}
		}
	}
	else if(currentItem == "images/Gerbera Daisy.jpg"){
		for(h = 0; h < this.myCart.amountInCart[7]; h++){
			this.myCart.gerberaDaisyPriceForItem = this.myCart.gerberaDaisyPriceForItem - this.myCart.gerberaDaisyPrice;
			hat++;
			if(hat > 1){
				this.myCart.gerberaDaisyPriceForItem = this.myCart.gerberaDaisyPriceForItem + this.myCart.gerberaDaisyPrice;
			}
		}
	}
	else if(currentItem == "images/Gladiolus.jpg"){
		for(i = 0; i < this.myCart.amountInCart[8]; i++){
			this.myCart.gladiolusPriceForItem = this.myCart.gladiolusPriceForItem - this.myCart.gladiolusPrice;
			ice++;
			if(ice > 1){
				this.myCart.gladiolusPriceForItem = this.myCart.gladiolusPriceForItem + this.myCart.gladiolusPrice;
			}
		}
	}
	else if(currentItem == "images/Hops.jpg"){
		for(j = 0; j < this.myCart.amountInCart[9]; j++){
			this.myCart.hopsPriceForItem = this.myCart.hopsPriceForItem - this.myCart.hopsPrice;
			jar++;
			if(jar > 1){
				this.myCart.hopsPriceForItem = this.myCart.hopsPriceForItem + this.myCart.hopsPrice;
			}
		}
	}
	else if(currentItem == "images/Lambs Ear.jpg"){
		for(k = 0; k < this.myCart.amountInCart[10]; k++){
			this.myCart.lambsEarPriceForItem = this.myCart.lambsEarPriceForItem - this.myCart.lambsEarPrice;
			kid++;
			if(kid > 1){
				this.myCart.lambsEarPriceForItem = this.myCart.lambsEarPriceForItem + this.myCart.lambsEarPrice;
			}
		}
	}
	else if(currentItem == "images/Larkspur.jpg"){
		for(l = 0; l < this.myCart.amountInCart[11]; l++){
			this.myCart.larkspurPriceForItem = this.myCart.larkspurPriceForItem - this.myCart.larkspurPrice;
			lid++;
			if(lid > 1){
				this.myCart.larkspurPriceForItem = this.myCart.larkspurPriceForItem + this.myCart.larkspurPrice;
			}
		}
	}
	else if(currentItem == "images/Liatris.jpg"){
		for(m = 0; m < this.myCart.amountInCart[12]; m++){
			this.myCart.liatrisPriceForItem = this.myCart.liatrisPriceForItem - this.myCart.liatrisPrice;
			moo++;
			if(moo > 1){
				this.myCart.liatrisPriceForItem = this.myCart.liatrisPriceForItem + this.myCart.liatrisPrice;
			}
		}
	}
	else if(currentItem == "images/Lily of the Incas.jpg"){
		for(n = 0; n < this.myCart.amountInCart[13]; n++){
			this.myCart.lilyOfTheIncasPriceForItem = this.myCart.lilyOfTheIncasPriceForItem - this.myCart.lilyOfTheIncasPrice;
			nod++;
			if(not > 1){
				this.myCart.lilyOfTheIncasPriceForItem = this.myCart.lilyOfTheIncasPriceForItem + this.myCart.lilyOfTheIncasPrice;
			}
		}
	}
	else if(currentItem == "images/Lily.jpg"){
		for(o = 0; o < this.myCart.amountInCart[14]; o++){
			this.myCart.lilyPriceForItem = this.myCart.lilyPriceForItem - this.myCart.lilyPrice;
			oop++;
			if(oop > 1){
				this.myCart.lilyPriceForItem = this.myCart.lilyPriceForItem + this.myCart.lilyPrice;
			}
		}
	}
	else if(currentItem == "images/Orchid.jpg"){
		for(p = 0; p < this.myCart.amountInCart[15]; p++){
			this.myCart.orchidPriceForItem = this.myCart.orchidPriceForItem - this.myCart.orchidPrice;
			pop++;
			if(pop > 1){
				this.myCart.orchidPriceForItem = this.myCart.orchidPriceForItem + this.myCart.orchidPrice;
			}
		}
	}
	else if(currentItem == "images/Peony.jpg"){
		for(q = 0; q < this.myCart.amountInCart[16]; q++){
			this.myCart.peonyPriceForItem = this.myCart.peonyPriceForItem - this.myCart.peonyPrice;
			que++;
			if(que > 1){
				this.myCart.peonyPriceForItem = this.myCart.peonyPriceForItem + this.myCart.peonyPrice;
			}
		}
	}
	else if(currentItem == "images/Queen Anne's Lace.jpg"){
		for(r = 0; r < this.myCart.amountInCart[17]; r++){
			this.myCart.queenAnnesLacePriceForItem = this.myCart.queenAnnesLacePriceForItem - this.myCart.queenAnnesLacePrice;
			ran++;
			if(ran > 1){
				this.myCart.queenAnnesLacePriceForItem = this.myCart.queenAnnesLacePriceForItem + this.myCart.queenAnnesLacePrice;
			}
		}
	}
	else if(currentItem == "images/Rose.jpg"){
		for(s = 0; s < this.myCart.amountInCart[18]; s++){
			this.myCart.rosePriceForItem = this.myCart.rosePriceForItem - this.myCart.rosePrice;
			sat++;
			if(sat > 1){
				this.myCart.rosePriceForItem = this.myCart.rosePriceForItem + this.myCart.rosePrice;
			}
		}
	}
	else if(currentItem == "images/Ruscus.jpg"){
		for(t = 0; t < this.myCart.amountInCart[19]; t++){
			this.myCart.ruscusPriceForItem = this.myCart.ruscusPriceForItem - this.myCart.ruscusPrice;
			toe++;
			if(toe > 1){
				this.myCart.ruscusPriceForItem = this.myCart.ruscusPriceForItem + this.myCart.ruscusPrice;
			}
		}
	}
	else if(currentItem == "images/Sea Lavender.jpg"){
		for(u = 0; u < this.myCart.amountInCart[20]; u++){
			this.myCart.seaLavenderPriceForItem = this.myCart.seaLavenderPriceForItem - this.myCart.seaLavenderPrice;
			uwu++;
			if(uwu > 1){
				this.myCart.seaLavenderPriceForItem = this.myCart.seaLavenderPriceForItem + this.myCart.seaLavenderPrice;
			}
		}
	}
	else if(currentItem == "images/Seeded Eucalyptus.jpg"){
		for(v = 0; v < this.myCart.amountInCart[21]; v++){
			this.myCart.seededEucalyptusPriceForItem = this.myCart.seededEucalyptusPriceForItem - this.myCart.seededEucalyptusPrice;
			via++;
			if(via > 1){
				this.myCart.seededEucalyptusPriceForItem = this.myCart.seededEucalyptusPriceForItem + this.myCart.seededEucalyptusPrice;
			}
		}
	}
	else if(currentItem == "images/Snapdragon.jpg"){
		for(w = 0; w < this.myCart.amountInCart[22]; w++){
			this.myCart.snapdragonPriceForItem = this.myCart.snapdragonPriceForItem - this.myCart.snapdragonPrice;
			why++;
			if(why > 1){
				this.myCart.snapdragonPriceForItem = this.myCart.snapdragonPriceForItem + this.myCart.snapdragonPrice;
			}
		}
	}
	else if(currentItem == "images/Sunflower.jpg"){
		for(x = 0; x < this.myCart.amountInCart[23]; x++){
			this.myCart.sunflowerPriceForItem = this.myCart.sunflowerPriceForItem - this.myCart.sunflowerPrice;
			xis++;
			if(xis > 1){
				this.myCart.sunflowerPriceForItem = this.myCart.sunflowerPriceForItem + this.myCart.sunflowerPrice;
			}
		}
	}
	this.myCart.total = this.myCart.anemonePriceForItem + 
						this.myCart.babysBreathPriceForItem +
						this.myCart.bellsOfIrelandPriceForItem +
						this.myCart.carnationPriceForItem + 
						this.myCart.dahliaPriceForItem +
						this.myCart.dustyMillerPriceForItem +
						this.myCart.foxglovePriceForItem +
						this.myCart.gerberaDaisyPriceForItem +
						this.myCart.gladiolusPriceForItem +
						this.myCart.hopsPriceForItem + 
						this.myCart.lambsEarPriceForItem +
						this.myCart.larkspurPriceForItem + 
						this.myCart.liatrisPriceForItem + 
						this.myCart.lilyOfTheIncasPriceForItem + 
						this.myCart.lilyPriceForItem + 
						this.myCart.orchidPriceForItem + 
						this.myCart.peonyPriceForItem + 
						this.myCart.queenAnnesLacePriceForItem + 
						this.myCart.rosePriceForItem + 
						this.myCart.ruscusPriceForItem + 
						this.myCart.seaLavenderPriceForItem + 
						this.myCart.seededEucalyptusPriceForItem + 
						this.myCart.snapdragonPriceForItem + 
						this.myCart.sunflowerPriceForItem;
}

function addToCart(){
	if(currentItem == "images/Focal Flowers Text Graphic.png" || currentItem == "images/Filler Flowers Image.png" || 
			currentItem == "images/Greenery.png" || currentItem == "images/Line Flowers.png"){
		alert("There is no item selected. Please select one to add to the cart.");
	}
	else if(currentItem == "images/Anemone.jpg" || currentItem == "images/Baby's Breath.jpg" || currentItem == "images/Bells of Ireland.jpg" || 
			currentItem == "images/Carnation.jpg" || currentItem == "images/Dahlia.jpg" || currentItem == "images/Dusty Miller.jpg" ||
			currentItem == "images/Foxglove.jpg" || currentItem == "images/Gerbera Daisy.jpg" || currentItem == "images/Gladiolus.jpg" || 
			currentItem == "images/Hops.jpg" || currentItem == "images/Lambs Ear.jpg" || currentItem == "images/Larkspur.jpg" || 
			currentItem == "images/Liatris.jpg" || currentItem == "images/Lily of the Incas.jpg" || currentItem == "images/Lily.jpg" || 
			currentItem == "images/Orchid.jpg" || currentItem == "images/Peony.jpg" || currentItem == "images/Queen Anne's Lace.jpg" || 
			currentItem == "images/Rose.jpg" || currentItem == "images/Ruscus.jpg" || currentItem == "images/Sea Lavender.jpg" || 
			currentItem == "images/Seeded Eucalyptus.jpg" || currentItem == "images/Snapdragon.jpg" || currentItem == "images/Sunflower.jpg"){
				document.getElementById("cartText").innerHTML = carte + 1;
				carte = carte + 1;
	}
	else{
		alert("There is no item selected. Please select one to add to the cart.");
	}
	if(currentItem == "images/Anemone.jpg"){
		this.myCart.amountInCart[0]++;
		totalCart();
		document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
	}
	else if(currentItem == "images/Baby's Breath.jpg"){
		this.myCart.amountInCart[1]++;
		totalCart();
		document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
	}
	else if(currentItem == "images/Bells of Ireland.jpg"){
		this.myCart.amountInCart[2]++;
		totalCart();
		document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
	}
	else if(currentItem == "images/Carnation.jpg"){
		this.myCart.amountInCart[3]++;
		totalCart();
		document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
	}
	else if(currentItem == "images/Dahlia.jpg"){
		this.myCart.amountInCart[4]++;
		totalCart();
		document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
	}
	else if(currentItem == "images/Dusty Miller.jpg"){
		this.myCart.amountInCart[5]++;
		totalCart();
		document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
	}
	else if(currentItem == "images/Foxglove.jpg"){
		this.myCart.amountInCart[6]++;
		totalCart();
		document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
	}
	else if(currentItem == "images/Gerbera Daisy.jpg"){
		this.myCart.amountInCart[7]++;
		totalCart();
		document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
	}
	else if(currentItem == "images/Gladiolus.jpg"){
		this.myCart.amountInCart[8]++;
		totalCart();
		document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
	}
	else if(currentItem == "images/Hops.jpg"){
		this.myCart.amountInCart[9]++;
		totalCart();
		document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
	}
	else if(currentItem == "images/Lambs Ear.jpg"){
		this.myCart.amountInCart[10]++;
		totalCart();
		document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
	}
	else if(currentItem == "images/Larkspur.jpg"){
		this.myCart.amountInCart[11]++;
		totalCart();
		document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
	}
	else if(currentItem == "images/Liatris.jpg"){
		this.myCart.amountInCart[12]++;
		totalCart();
		document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
	}
	else if(currentItem == "images/Lily of the Incas.jpg"){
		this.myCart.amountInCart[13]++;
		totalCart();
		document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
	}
	else if(currentItem == "images/Lily.jpg"){
		this.myCart.amountInCart[14]++;
		totalCart();
		document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
	}
	else if(currentItem == "images/Orchid.jpg"){
		this.myCart.amountInCart[15]++;
		totalCart();
		document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
	}
	else if(currentItem == "images/Peony.jpg"){
		this.myCart.amountInCart[16]++;
		totalCart();
		document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
	}
	else if(currentItem == "images/Queen Anne's Lace.jpg"){
		this.myCart.amountInCart[17]++;
		totalCart();
		document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
	}
	else if(currentItem == "images/Rose.jpg"){
		this.myCart.amountInCart[18]++;
		totalCart();
		document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
	}
	else if(currentItem == "images/Ruscus.jpg"){
		this.myCart.amountInCart[19]++;
		totalCart();
		document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
	}
	else if(currentItem == "images/Sea Lavender.jpg"){
		this.myCart.amountInCart[20]++;
		totalCart();
		document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
	}
	else if(currentItem == "images/Seeded Eucalyptus.jpg"){
		this.myCart.amountInCart[21]++;
		totalCart();
		document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
	}
	else if(currentItem == "images/Snapdragon.jpg"){
		this.myCart.amountInCart[22]++;
		totalCart();
		document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
	}
	else if(currentItem == "images/Sunflower.jpg"){
		this.myCart.amountInCart[23]++;
		totalCart();
		document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
	}
}

var currentItems = "";

function totalCartFromCart(){
	var ant = 0;
	var bat = 0;
	var cat = 0;
	var dog = 0;
	var ear = 0;
	var fox = 0;
	var goo = 0;
	var hat = 0;
	var ice = 0;
	var jar = 0;
	var kid = 0;
	var lid = 0;
	var moo = 0;
	var nod = 0;
	var oop = 0;
	var pop = 0;
	var que = 0;
	var ran = 0;
	var sat = 0;
	var toe = 0;
	var uwu = 0;
	var via = 0;
	var why = 0;
	var xis = 0;
	if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Anemone.jpg"){
		for(a = 0; a < this.myCart.amountInCart[0]; a++){
			this.myCart.anemonePriceForItem = this.myCart.anemonePriceForItem + this.myCart.anemonePrice;
			ant++;
			if(ant > 1){
				this.myCart.anemonePriceForItem = this.myCart.anemonePriceForItem - this.myCart.anemonePrice;
			}
		}
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Baby's%20Breath.jpg"){
		for(b = 0; b < this.myCart.amountInCart[1]; b++){
			this.myCart.babysBreathPriceForItem = this.myCart.babysBreathPriceForItem + this.myCart.babysBreathPrice;
			bat++;
			if(bat > 1){
				this.myCart.babysBreathPriceForItem = this.myCart.babysBreathPriceForItem - this.myCart.babysBreathPrice;
			}
		}
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Bells%20of%20Ireland.jpg"){
		for(c = 0; c < this.myCart.amountInCart[2]; c++){
			this.myCart.bellsOfIrelandPriceForItem = this.myCart.bellsOfIrelandPriceForItem + this.myCart.bellsOfIrelandPrice;
			cat++;
			if(cat > 1){
				this.myCart.bellsOfIrelandPriceForItem = this.myCart.bellsOfIrelandPriceForItem - this.myCart.bellsOfIrelandPrice;
			}
		}
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Carnation.jpg"){
		for(d = 0; d < this.myCart.amountInCart[3]; d++){
			this.myCart.carnationPriceForItem = this.myCart.carnationPriceForItem + this.myCart.carnationPrice;
			dog++;
			if(dog > 1){
				this.myCart.carnationPriceForItem = this.myCart.carnationPriceForItem - this.myCart.carnationPrice;
			}
		}
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Dahlia.jpg"){
		for(e = 0; e < this.myCart.amountInCart[4]; e++){
			this.myCart.dahliaPriceForItem = this.myCart.dahliaPriceForItem + this.myCart.dahliaPrice;
			ear++;
			if(ear > 1){
				this.myCart.dahliaPriceForItem = this.myCart.dahliaPriceForItem - this.myCart.dahliaPrice;
			}
		}
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Dusty%20Miller.jpg"){
		for(f = 0; f < this.myCart.amountInCart[5]; f++){
			this.myCart.dustymillerPriceForItem = this.myCart.dustyMillerPriceForItem + this.myCart.dustyMillerPrice;
			fox++;
			if(fox > 1){
				this.myCart.dustyMillerPriceForItem = this.myCart.dustyMillerPriceForItem - this.myCart.dustyMillerPrice;
			}
		}
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Foxglove.jpg"){
		for(g = 0; g < this.myCart.amountInCart[6]; g++){
			this.myCart.foxglovePriceForItem = this.myCart.foxglovePriceForItem + this.myCart.foxglovePrice;
			goo++;
			if(goo > 1){
				this.myCart.foxglovePriceForItem = this.myCart.foxglovePriceForItem - this.myCart.foxglovePrice;
			}
		}
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Gerbera%20Daisy.jpg"){
		for(h = 0; h < this.myCart.amountInCart[7]; h++){
			this.myCart.gerberaDaisyPriceForItem = this.myCart.gerberaDaisyPriceForItem + this.myCart.gerberaDaisyPrice;
			hat++;
			if(hat > 1){
				this.myCart.gerberaDaisyPriceForItem = this.myCart.gerberaDaisyPriceForItem - this.myCart.gerberaDaisyPrice;
			}
		}
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Gladiolus.jpg"){
		for(i = 0; i < this.myCart.amountInCart[8]; i++){
			this.myCart.gladiolusPriceForItem = this.myCart.gladiolusPriceForItem + this.myCart.gladiolusPrice;
			ice++;
			if(ice > 1){
				this.myCart.gladiolusPriceForItem = this.myCart.gladiolusPriceForItem - this.myCart.gladiolusPrice;
			}
		}
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Hops.jpg"){
		for(j = 0; j < this.myCart.amountInCart[9]; j++){
			this.myCart.hopsPriceForItem = this.myCart.hopsPriceForItem + this.myCart.hopsPrice;
			jar++;
			if(jar > 1){
				this.myCart.hopsPriceForItem = this.myCart.hopsPriceForItem - this.myCart.hopsPrice;
			}
		}
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Lambs%20Ear.jpg"){
		for(k = 0; k < this.myCart.amountInCart[10]; k++){
			this.myCart.lambsEarPriceForItem = this.myCart.lambsEarPriceForItem + this.myCart.lambsEarPrice;
			kid++;
			if(kid > 1){
				this.myCart.lambsEarPriceForItem = this.myCart.lambsEarPriceForItem - this.myCart.lambsEarPrice;
			}
		}
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Larkspur.jpg"){
		for(l = 0; l < this.myCart.amountInCart[11]; l++){
			this.myCart.larkspurPriceForItem = this.myCart.larkspurPriceForItem + this.myCart.larkspurPrice;
			lid++;
			if(lid > 1){
				this.myCart.larkspurPriceForItem = this.myCart.larkspurPriceForItem - this.myCart.larkspurPrice;
			}
		}
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Liatris.jpg"){
		for(m = 0; m < this.myCart.amountInCart[12]; m++){
			this.myCart.liatrisPriceForItem = this.myCart.liatrisPriceForItem + this.myCart.liatrisPrice;
			moo++;
			if(moo > 1){
				this.myCart.liatrisPriceForItem = this.myCart.liatrisPriceForItem - this.myCart.liatrisPrice;
			}
		}
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Lily%20of%20the%20Incas.jpg"){
		for(n = 0; n < this.myCart.amountInCart[13]; n++){
			this.myCart.lilyOfTheIncasPriceForItem = this.myCart.lilyOfTheIncasPriceForItem + this.myCart.lilyOfTheIncasPrice;
			nod++;
			if(not > 1){
				this.myCart.lilyOfTheIncasPriceForItem = this.myCart.lilyOfTheIncasPriceForItem - this.myCart.lilyOfTheIncasPrice;
			}
		}
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Lily.jpg"){
		for(o = 0; o < this.myCart.amountInCart[14]; o++){
			this.myCart.lilyPriceForItem = this.myCart.lilyPriceForItem + this.myCart.lilyPrice;
			oop++;
			if(oop > 1){
				this.myCart.lilyPriceForItem = this.myCart.lilyPriceForItem - this.myCart.lilyPrice;
			}
		}
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Orchid.jpg"){
		for(p = 0; p < this.myCart.amountInCart[15]; p++){
			this.myCart.orchidPriceForItem = this.myCart.orchidPriceForItem + this.myCart.orchidPrice;
			pop++;
			if(pop > 1){
				this.myCart.orchidPriceForItem = this.myCart.orchidPriceForItem - this.myCart.orchidPrice;
			}
		}
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Peony.jpg"){
		for(q = 0; q < this.myCart.amountInCart[16]; q++){
			this.myCart.peonyPriceForItem = this.myCart.peonyPriceForItem + this.myCart.peonyPrice;
			que++;
			if(que > 1){
				this.myCart.peonyPriceForItem = this.myCart.peonyPriceForItem - this.myCart.peonyPrice;
			}
		}
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Queen%20Annes%20Lace.jpg"){
		for(r = 0; r < this.myCart.amountInCart[17]; r++){
			this.myCart.queenAnnesLacePriceForItem = this.myCart.queenAnnesLacePriceForItem + this.myCart.queenAnnesLacePrice;
			ran++;
			if(ran > 1){
				this.myCart.queenAnnesLacePriceForItem = this.myCart.queenAnnesLacePriceForItem - this.myCart.queenAnnesLacePrice;
			}
		}
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Rose.jpg"){
		for(s = 0; s < this.myCart.amountInCart[18]; s++){
			this.myCart.rosePriceForItem = this.myCart.rosePriceForItem + this.myCart.rosePrice;
			sat++;
			if(sat > 1){
				this.myCart.rosePriceForItem = this.myCart.rosePriceForItem - this.myCart.rosePrice;
			}
		}
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Ruscus.jpg"){
		for(t = 0; t < this.myCart.amountInCart[19]; t++){
			this.myCart.ruscusPriceForItem = this.myCart.ruscusPriceForItem + this.myCart.ruscusPrice;
			toe++;
			if(toe > 1){
				this.myCart.ruscusPriceForItem = this.myCart.ruscusPriceForItem - this.myCart.ruscusPrice;
			}
		}
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Sea%20Lavender.jpg"){
		for(u = 0; u < this.myCart.amountInCart[20]; u++){
			this.myCart.seaLavenderPriceForItem = this.myCart.seaLavenderPriceForItem + this.myCart.seaLavenderPrice;
			uwu++;
			if(uwu > 1){
				this.myCart.seaLavenderPriceForItem = this.myCart.seaLavenderPriceForItem - this.myCart.seaLavenderPrice;
			}
		}
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Seeded%20Eucalyptus.jpg"){
		for(v = 0; v < this.myCart.amountInCart[21]; v++){
			this.myCart.seededEucalyptusPriceForItem = this.myCart.seededEucalyptusPriceForItem + this.myCart.seededEucalyptusPrice;
			via++;
			if(via > 1){
				this.myCart.seededEucalyptusPriceForItem = this.myCart.seededEucalyptusPriceForItem - this.myCart.seededEucalyptusPrice;
			}
		}
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Snapdragon.jpg"){
		for(w = 0; w < this.myCart.amountInCart[22]; w++){
			this.myCart.snapdragonPriceForItem = this.myCart.snapdragonPriceForItem + this.myCart.snapdragonPrice;
			why++;
			if(why > 1){
				this.myCart.snapdragonPriceForItem = this.myCart.snapdragonPriceForItem - this.myCart.snapdragonPrice;
			}
		}
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Sunflower.jpg"){
		for(x = 0; x < this.myCart.amountInCart[23]; x++){
			this.myCart.sunflowerPriceForItem = this.myCart.sunflowerPriceForItem + this.myCart.sunflowerPrice;
			xis++;
			if(xis > 1){
				this.myCart.sunflowerPriceForItem = this.myCart.sunflowerPriceForItem - this.myCart.sunflowerPrice;
			}
		}
	}
	this.myCart.total = this.myCart.anemonePriceForItem + 
						this.myCart.babysBreathPriceForItem +
						this.myCart.bellsOfIrelandPriceForItem +
						this.myCart.carnationPriceForItem + 
						this.myCart.dahliaPriceForItem +
						this.myCart.dustyMillerPriceForItem +
						this.myCart.foxglovePriceForItem +
						this.myCart.gerberaDaisyPriceForItem +
						this.myCart.gladiolusPriceForItem +
						this.myCart.hopsPriceForItem + 
						this.myCart.lambsEarPriceForItem +
						this.myCart.larkspurPriceForItem + 
						this.myCart.liatrisPriceForItem + 
						this.myCart.lilyOfTheIncasPriceForItem + 
						this.myCart.lilyPriceForItem + 
						this.myCart.orchidPriceForItem + 
						this.myCart.peonyPriceForItem + 
						this.myCart.queenAnnesLacePriceForItem + 
						this.myCart.rosePriceForItem + 
						this.myCart.ruscusPriceForItem + 
						this.myCart.seaLavenderPriceForItem + 
						this.myCart.seededEucalyptusPriceForItem + 
						this.myCart.snapdragonPriceForItem + 
						this.myCart.sunflowerPriceForItem;
}

function removeFromTheCart(){
	if(carte == 0){
		document.getElementById("cartText").innerHTML = 0;
		carte = 0;
		alert("There is no items in the cart.")
	}
	else{
		document.getElementById("cartText").innerHTML = carte - 1;
		carte = carte- 1;
		if(carte == 0){
			alert("There is no items in the cart.");
		}
	}
	if(currentItem == "images/Anemone.jpg"){
		if(this.myCart.amountInCart[0] > 0){
			this.myCart.amountInCart[0]--;
			totalRemoveCart();
			document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
		}
		else{
			alert("There is no Anemone bunches in the cart.");
		}
	}
	else if(currentItem == "images/Baby's Breath.jpg"){
		if(this.myCart.amountInCart[1] == 0){
			this.myCart.amountInCart[1]--;
			totalRemoveCart();
			document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
		}
		else{
			alert("There is no Baby's Breath bunches in the cart.");
		}
	}
	else if(currentItem == "images/Bells of Ireland.jpg"){
		if(this.myCart.amountInCart[2] > 0){
			this.myCart.amountInCart[2]--;
			totalRemoveCart();
			document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
		}
		else{
			alert("There is no Bells of Ireland bunches in the cart.");
		}
	}
	else if(currentItem == "images/Carnation.jpg"){
		if(this.myCart.amountInCart[3] > 0){
			this.myCart.amountInCart[3]--;
			totalRemoveCart();
			document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
		}
		else{
			alert("There is no Carnation bunches in the cart.");
		}
	}
	else if(currentItem == "images/Dahlia.jpg"){
		if(this.myCart.amountInCart[4] > 0){
			this.myCart.amountInCart[4]--;
			totalRemoveCart();
			document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
		}
		else{
			alert("There is no Dahlia bunches in the cart.");
		}
	}
	else if(currentItem == "images/Dusty Miller.jpg"){
		if(this.myCart.amountInCart[5] > 0){
			this.myCart.amountInCart[5]--;
			totalRemoveCart();
			document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
		}
		else{
			alert("There is no Dusty Miller bunches in the cart.");
		}
	}
	else if(currentItem == "images/Foxglove.jpg"){
		if(this.myCart.amountInCart[6] > 0){
			this.myCart.amountInCart[6]--;
			totalRemoveCart();
			document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
		}
		else{
			alert("There is no Foxglove bunches in the cart.");
		}
	}
	else if(currentItem == "images/Gerbera Daisy.jpg"){
		if(this.myCart.amountInCart[7] > 0){
			this.myCart.amountInCart[7]--;
			totalRemoveCart();
			document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
		}
		else{
			alert("There is no Gerbera Daisy bunches in the cart.");
		}
	}
	else if(currentItem == "images/Gladiolus.jpg"){	
		if(this.myCart.amountInCart[8] > 0){
			this.myCart.amountInCart[8]--;
			totalRemoveCart();
			document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
		}
		else{
			alert("There is no Gladiolus bunches in the cart.");
		}
	}
	else if(currentItem == "images/Hops.jpg"){
		if(this.myCart.amountInCart[9] > 0){
			this.myCart.amountInCart[9]--;
			totalRemoveCart();
			document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
		}
		else{
			alert("There is no Hops bunches in the cart.");
		}
	}
	else if(currentItem == "images/Lambs Ear.jpg"){
		if(this.myCart.amountInCart[10] > 0){
			this.myCart.amountInCart[10]--;
			totalRemoveCart();
			document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
		}
		else{
			alert("There is no Lambs Ear bunches in the cart.");
		}
	}
	else if(currentItem == "images/Larkspur.jpg"){
		if(this.myCart.amountInCart[11] > 0){
			this.myCart.amountInCart[11]--;
			totalRemoveCart();
			document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
		}
		else{
			alert("There is no Larkspur bunches in the cart.");
		}
	}
	else if(currentItem == "images/Liatris.jpg"){
		if(this.myCart.amountInCart[12] > 0){
			this.myCart.amountInCart[12]--;
			totalRemoveCart();
			document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
		}
		else{
			alert("There is no Liatris bunches in the cart.");
		}
	}
	else if(currentItem == "images/Lily of the Incas.jpg"){
		if(this.myCart.amountInCart[13] > 0){
			this.myCart.amountInCart[13]--;
			totalRemoveCart();
			document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
		}
		else{
			alert("There is no Lily of the Incas bunches in the cart.");
		}
	}
	else if(currentItem == "images/Lily.jpg"){
		if(this.myCart.amountInCart[14] > 0){
			this.myCart.amountInCart[14]--;
			totalRemoveCart();
			document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
		}
		else{
			alert("There is no Lily bunches in the cart.");
		}
	}
	else if(currentItem == "images/Orchid.jpg"){
		if(this.myCart.amountInCart[15] > 0){
			this.myCart.amountInCart[15]--;
			totalRemoveCart();
			document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
		}
		else{
			alert("There is no Orchid bunches in the cart.");
		}
	}
	else if(currentItem == "images/Peony.jpg"){
		if(this.myCart.amountInCart[16] > 0){
			this.myCart.amountInCart[16]--;
			totalRemoveCart();
			document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
		}
		else{
			alert("There is no Peony bunches in the cart.");
		}
	}
	else if(currentItem == "images/Queen Anne's Lace.jpg"){
		if(this.myCart.amountInCart[17] > 0){
			this.myCart.amountInCart[17]--;
			totalRemoveCart();
			document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
		}
		else{
			alert("There is no Queen Anne's Lace bunches in the cart.");
		}
	}
	else if(currentItem == "images/Rose.jpg"){
		if(this.myCart.amountInCart[18] > 0){
			this.myCart.amountInCart[18]--;
			totalRemoveCart();
			document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
		}
		else{
			alert("There is no Rose bunches in the cart.");
		}
	}
	else if(currentItem == "images/Ruscus.jpg"){
		if(this.myCart.amountInCart[19] > 0){
			this.myCart.amountInCart[19]--;
			totalRemoveCart();
			document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
		}
		else{
			alert("There is no Ruscus bunches in the cart.");
		}
	}
	else if(currentItem == "images/Sea Lavender.jpg"){
		if(this.myCart.amountInCart[20] > 0){
			this.myCart.amountInCart[20]--;
			totalRemoveCart();
			document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
		}
		else{
			alert("There is no Sea Lavender bunches in the cart.");
		}
	}
	else if(currentItem == "images/Seeded Eucalyptus.jpg"){
		if(this.myCart.amountInCart[21] > 0){
			this.myCart.amountInCart[21]--;
			totalRemoveCart();
			document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
		}
		else{
			alert("There is no Seeded Eucalyptus bunches in the cart.");
		}
	}
	else if(currentItem == "images/Snapdragon.jpg"){
		if(this.myCart.amountInCart[22] > 0){
			this.myCart.amountInCart[22]--;
			totalRemoveCart();
			document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
		}
		else{
			alert("There is no Snapdragon bunches in the cart.");
		}
	}
	else if(currentItem == "images/Sunflower.jpg"){
		if(this.myCart.amountInCart[23] > 0){
			this.myCart.amountInCart[23]--;
			totalRemoveCart();
			document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
		}
		else{
			alert("There is no Sunflower bunches in the cart.");
		}
	}
	else{
		alert("There is no item selected. Please select one to add to the cart.");
	}
}

function addFromCartToCart(label){
	currentItems = document.getElementById(label).src;
	document.getElementById("cartText").innerHTML = carte + 1;
	carte = carte + 1;
	if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Anemone.jpg"){
		this.myCart.amountInCart[0]++;
		totalCartFromCart();
		document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Baby's%20Breath.jpg"){
		this.myCart.amountInCart[1]++;
		totalCartFromCart();
		document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Bells%20of%20Ireland.jpg"){
		this.myCart.amountInCart[2]++;
		totalCartFromCart();
		document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Carnation.jpg"){
		this.myCart.amountInCart[3]++;
		totalCartFromCart();
		document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Dahlia.jpg"){
		this.myCart.amountInCart[4]++;
		totalCartFromCart();
		document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Dusty%20Miller.jpg"){
		this.myCart.amountInCart[5]++;
		totalCartFromCart();
		document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Foxglove.jpg"){
		this.myCart.amountInCart[6]++;
		totalCartFromCart();
		document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Gerbera%20Daisy.jpg"){
		this.myCart.amountInCart[7]++;
		totalCartFromCart();
		document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Gladiolus.jpg"){
		this.myCart.amountInCart[8]++;
		totalCartFromCart();
		document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Hops.jpg"){
		this.myCart.amountInCart[9]++;
		totalCartFromCart();
		document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Lambs%20Ear.jpg"){
		this.myCart.amountInCart[10]++;
		totalCartFromCart();
		document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Larkspur.jpg"){
		this.myCart.amountInCart[11]++;
		totalCartFromCart();
		document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Liatris.jpg"){
		this.myCart.amountInCart[12]++;
		totalCartFromCart();
		document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Lily%20of%20the%20Incas.jpg"){
		this.myCart.amountInCart[13]++;
		totalCartFromCart();
		document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Lily.jpg"){
		this.myCart.amountInCart[14]++;
		totalCartFromCart();
		document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Orchid.jpg"){
		this.myCart.amountInCart[15]++;
		totalCartFromCart();
		document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Peony.jpg"){
		this.myCart.amountInCart[16]++;
		totalCartFromCart();
		document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Queen%20Anne's%20Lace.jpg"){
		this.myCart.amountInCart[17]++;
		totalCartFromCart();
		document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Rose.jpg"){
		this.myCart.amountInCart[18]++;
		totalCartFromCart();
		document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Ruscus.jpg"){
		this.myCart.amountInCart[19]++;
		totalCartFromCart();
		document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Sea%20Lavender.jpg"){
		this.myCart.amountInCart[20]++;
		totalCartFromCart();
		document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Seeded%20Eucalyptus.jpg"){
		this.myCart.amountInCart[21]++;
		totalCartFromCart();
		document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Snapdragon.jpg"){
		this.myCart.amountInCart[22]++;
		totalCartFromCart();
		document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Sunflower.jpg"){
		this.myCart.amountInCart[23]++;
		totalCartFromCart();
		document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
	}
}

function removeFromCartFromCart(label){
	currentItems = document.getElementById(label).src;
	currentItems = currentItems + "";
	if(carte == 0){
		document.getElementById("cartText").innerHTML = 0;
		carte = 0;
		alert("There is no items in the cart.")
	}
	else{
		document.getElementById("cartText").innerHTML = carte--;
		carte = carte--;
		if(carte == 0){
			alert("There is no items in the cart.");
		}
	}
	if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Anemone.jpg"){
		if(this.myCart.amountInCart[0] > 0){
			this.myCart.amountInCart[0]--;
			totalRemoveCart();
			document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
		}
		else{
			alert("There is no Anemone bunches in the cart.");
		}
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Baby's%20Breath.jpg"){
		if(this.myCart.amountInCart[1] > 0){
			this.myCart.amountInCart[1]--;
			totalRemoveCart();
			document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
		}
		else{
			alert("There is no Baby's Breath bunches in the cart.");
		}
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Bells%20of%20Ireland.jpg"){
		if(this.myCart.amountInCart[2] > 0){
			this.myCart.amountInCart[2]--;
			totalRemoveCart();
			document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
		}
		else{
			alert("There is no Bells of Ireland bunches in the cart.");
		}
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Carnation.jpg"){
		if(this.myCart.amountInCart[3] > 0){
			this.myCart.amountInCart[3]--;
			totalRemoveCart();
			document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
		}
		else{
			alert("There is no Carnation bunches in the cart.");
		}
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Dahlia.jpg"){
		if(this.myCart.amountInCart[4] > 0){
			this.myCart.amountInCart[4]--;
			totalRemoveCart();
			document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
		}
		else{
			alert("There is no Dahlia bunches in the cart.");
		}
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Dusty%20Miller.jpg"){
		if(this.myCart.amountInCart[5] > 0){
			this.myCart.amountInCart[5]--;
			totalRemoveCart();
			document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
		}
		else{
			alert("There is no Dusty Miller bunches in the cart.");
		}
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Foxglove.jpg"){
		if(this.myCart.amountInCart[6] > 0){
			this.myCart.amountInCart[6]--;
			totalRemoveCart();
			document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
		}
		else{
			alert("There is no Foxglove bunches in the cart.");
		}
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Gerbera%20Daisy.jpg"){
		if(this.myCart.amountInCart[7] > 0){
			this.myCart.amountInCart[7]--;
			totalRemoveCart();
			document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
		}
		else{
			alert("There is no Gerbera Daisy bunches in the cart.");
		}
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Gladiolus.jpg"){	
		if(this.myCart.amountInCart[8] > 0){
			this.myCart.amountInCart[8]--;
			totalRemoveCart();
			document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
		}
		else{
			alert("There is no Gladiolus bunches in the cart.");
		}
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Hops.jpg"){
		if(this.myCart.amountInCart[9] > 0){
			this.myCart.amountInCart[9]--;
			totalRemoveCart();
			document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
		}
		else{
			alert("There is no Hops bunches in the cart.");
		}
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Lambs%20Ear.jpg"){
		if(this.myCart.amountInCart[10] > 0){
			this.myCart.amountInCart[10]--;
			totalRemoveCart();
			document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
		}
		else{
			alert("There is no Lambs Ear bunches in the cart.");
		}
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Larkspur.jpg"){
		if(this.myCart.amountInCart[11] > 0){
			this.myCart.amountInCart[11]--;
			totalRemoveCart();
			document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
		}
		else{
			alert("There is no Larkspur bunches in the cart.");
		}
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Liatris.jpg"){
		if(this.myCart.amountInCart[12] > 0){
			this.myCart.amountInCart[12]--;
			totalRemoveCart();
			document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
		}
		else{
			alert("There is no Liatris bunches in the cart.");
		}
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Lily%020of%20the%20Incas.jpg"){
		if(this.myCart.amountInCart[13] > 0){
			this.myCart.amountInCart[13]--;
			totalRemoveCart();
			document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
		}
		else{
			alert("There is no Lily of the Incas bunches in the cart.");
		}
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Lily.jpg"){
		if(this.myCart.amountInCart[14] > 0){
			this.myCart.amountInCart[14]--;
			totalRemoveCart();
			document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
		}
		else{
			alert("There is no Lily bunches in the cart.");
		}
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Orchid.jpg"){
		if(this.myCart.amountInCart[15] > 0){
			this.myCart.amountInCart[15]--;
			totalRemoveCart();
			document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
		}
		else{
			alert("There is no Orchid bunches in the cart.");
		}
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Peony.jpg"){
		if(this.myCart.amountInCart[16] > 0){
			this.myCart.amountInCart[16]--;
			totalRemoveCart();
			document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
		}
		else{
			alert("There is no Peony bunches in the cart.");
		}
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Queen%20Annes%20Lace.jpg"){
		if(this.myCart.amountInCart[17] > 0){
			this.myCart.amountInCart[17]--;
			totalRemoveCart();
			document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
		}
		else{
			alert("There is no Queen Anne's Lace bunches in the cart.");
		}
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Rose.jpg"){
		if(this.myCart.amountInCart[18] > 0){
			this.myCart.amountInCart[18]--;
			totalRemoveCart();
			document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
		}
		else{
			alert("There is no Rose bunches in the cart.");
		}
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Ruscus.jpg"){
		if(this.myCart.amountInCart[19] > 0){
			this.myCart.amountInCart[19]--;
			totalRemoveCart();
			document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
		}
		else{
			alert("There is no Ruscus bunches in the cart.");
		}
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Sea%20Lavender.jpg"){
		if(this.myCart.amountInCart[20] > 0){
			this.myCart.amountInCart[20]--;
			totalRemoveCart();
			document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
		}
		else{
			alert("There is no Sea Lavender bunches in the cart.");
		}
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Seeded%20Eucalyptus.jpg"){
		if(this.myCart.amountInCart[21] > 0){
			this.myCart.amountInCart[21]--;
			totalRemoveCart();
			document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
		}
		else{
			alert("There is no Seeded Eucalyptus bunches in the cart.");
		}
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Snapdragon.jpg"){
		if(this.myCart.amountInCart[22] > 0){
			this.myCart.amountInCart[22]--;
			totalRemoveCart();
			document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
		}
		else{
			alert("There is no Snapdragon bunches in the cart.");
		}
	}
	else if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Sunflower.jpg"){
		if(this.myCart.amountInCart[23] > 0){
			this.myCart.amountInCart[23]--;
			totalRemoveCart();
			document.getElementById("cartTotalPrice").innerHTML = "$" + this.myCart.total + ".00";
		}
		else{
			alert("There is no Sunflower bunches in the cart.");
		}
	}
}

function getInformation(){
	currentItems = document.getElementById("anemoneImage").src;
	if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Anemone.jpg"){
		document.getElementById("anemonePrice").innerHTML = "$" + this.myCart.anemonePrice + ".00";
		document.getElementById("anemoneQuantity").innerHTML = this.myCart.amountInCart[0] + " Anemone bunch(es)";
		document.getElementById("anemoneTotal").innerHTML = "$" + this.myCart.anemonePriceForItem + ".00";
		removeIfZero('anemoneRow');
	}
	currentItems = document.getElementById("babysBreathImage").src;
	if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Baby's%20Breath.jpg"){
		document.getElementById("babysBreathPrice").innerHTML = "$" + this.myCart.babysBreathPrice + ".00";
		document.getElementById("babysBreathQuantity").innerHTML = this.myCart.amountInCart[1] + " Baby's Breath bunch(es)";
		document.getElementById("babysBreathTotal").innerHTML = "$" + this.myCart.babysBreathPriceForItem + ".00";
		removeIfZero('babysBreathRow');
	}
	currentItems = document.getElementById("bellsOfIrelandImage").src;
	if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Bells%20of%20Ireland.jpg"){
		document.getElementById("bellsOfIrelandPrice").innerHTML = "$" + this.myCart.bellsOfIrelandPrice + ".00";
		document.getElementById("bellsOfIrelandQuantity").innerHTML = this.myCart.amountInCart[2] + " Bells of Ireland bunch(es)";
		document.getElementById("bellsOfIrelandTotal").innerHTML = "$" + this.myCart.babysBreathPriceForItem + ".00";
		removeIfZero('bellsOfIrelandRow');
	}
	currentItems = document.getElementById("carnationImage").src;
	if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Carnation.jpg"){
		document.getElementById("carnationPrice").innerHTML = "$" + this.myCart.carnationPrice + ".00";
		document.getElementById("carnationQuantity").innerHTML = this.myCart.amountInCart[3] + " Carnation bunch(es)";
		document.getElementById("carnationTotal").innerHTML = "$" + this.myCart.carnationPriceForItem + ".00";
		removeIfZero('carnationRow');
	}
	currentItems = document.getElementById("dahliaImage").src;
	if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Dahlia.jpg"){
		document.getElementById("dahliaPrice").innerHTML = "$" + this.myCart.dahliaPrice + ".00";
		document.getElementById("dahliaQuantity").innerHTML = this.myCart.amountInCart[4] + " Dahlia bunch(es)";
		document.getElementById("dahliaTotal").innerHTML = "$" + this.myCart.dahliaPriceForItem + ".00";
		removeIfZero('dahliaRow');
	}
	currentItems = document.getElementById("dustyMillerImage").src;
	if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Dusty%20Miller.jpg"){
		document.getElementById("dustyMillerPrice").innerHTML = "$" + this.myCart.dustyMillerPrice + ".00";
		document.getElementById("dustyMillerQuantity").innerHTML = this.myCart.amountInCart[5] + " Dusty Miller bunch(es)";
		document.getElementById("dustyMillerTotal").innerHTML = "$" + this.myCart.dustyMillerPriceForItem + ".00";
		removeIfZero('dustyMillerRow');
	}
	currentItems = document.getElementById("foxgloveImage").src;
	if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Foxglove.jpg"){
		document.getElementById("foxglovePrice").innerHTML = "$" + this.myCart.foxglovePrice + ".00";
		document.getElementById("foxgloveQuantity").innerHTML = this.myCart.amountInCart[6] + " Foxglove bunch(es)";
		document.getElementById("foxgloveTotal").innerHTML = "$" + this.myCart.foxglovePriceForItem + ".00";
		removeIfZero('foxgloveRow');
	}
	currentItems = document.getElementById("gerberaDaisyImage").src;
	if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Gerbera%20Daisy.jpg"){
		document.getElementById("gerberaDaisyPrice").innerHTML = "$" + this.myCart.gerberaDaisyPrice + ".00";
		document.getElementById("gerberaDaisyQuantity").innerHTML = this.myCart.amountInCart[7] + " Gerbera Daisy bunch(es)";
		document.getElementById("gerberaDaisyTotal").innerHTML = "$" + this.myCart.gerberaDaisyPriceForItem + ".00";
		removeIfZero('gerberaDaisyRow');
	}
	currentItems = document.getElementById("gladiolusImage").src;
	if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Gladiolus.jpg"){
		document.getElementById("gladiolusPrice").innerHTML = "$" + this.myCart.gladiolusPrice + ".00";
		document.getElementById("gladiolusQuantity").innerHTML = this.myCart.amountInCart[8] + " Gladiolus bunch(es)";
		document.getElementById("gladiolusTotal").innerHTML = "$" + this.myCart.gladiolusPriceForItem + ".00";
		removeIfZero('gladiolusRow');
	}
	currentItems = document.getElementById("hopsImage").src;
	if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Hops.jpg"){
		document.getElementById("hopsPrice").innerHTML = "$" + this.myCart.hopsPrice + ".00";
		document.getElementById("hopsQuantity").innerHTML = this.myCart.amountInCart[9] + " Hops bunch(es)";
		document.getElementById("hopsTotal").innerHTML = "$" + this.myCart.hopsPriceForItem + ".00";
		removeIfZero('hopsRow');
	}
	currentItems = document.getElementById("lambsEarImage").src;
	if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Lambs%20Ear.jpg"){
		document.getElementById("lambsEarPrice").innerHTML = "$" + this.myCart.lambsEarPrice + ".00";
		document.getElementById("lambsEarQuantity").innerHTML = this.myCart.amountInCart[10] + " Lambs Ear bunch(es)";
		document.getElementById("lambsEarTotal").innerHTML = "$" + this.myCart.lambsEarPriceForItem + ".00";
		removeIfZero('lambsEarRow');
	}
	currentItems = document.getElementById("larkspurImage").src;
	if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Larkspur.jpg"){
		document.getElementById("larkspurPrice").innerHTML = "$" + this.myCart.larkspurPrice + ".00";
		document.getElementById("larkspurQuantity").innerHTML = this.myCart.amountInCart[11] + " Larkspur bunch(es)";
		document.getElementById("larkspurTotal").innerHTML = "$" + this.myCart.larkspurPriceForItem + ".00";
		removeIfZero('larkspurRow');
	}
	currentItems = document.getElementById("liatrisImage").src;
	if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Liatris.jpg"){
		document.getElementById("liatrisPrice").innerHTML = "$" + this.myCart.liatrisPrice + ".00";
		document.getElementById("liatrisQuantity").innerHTML = this.myCart.amountInCart[12] + " Liatris bunch(es)";
		document.getElementById("liatrisTotal").innerHTML = "$" + this.myCart.liatrisPriceForItem + ".00";
		removeIfZero('liatrisRow');
	}
	currentItems = document.getElementById("lilyOfTheIncasImage").src;
	if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Lily%20of%20the%20Incas.jpg"){
		document.getElementById("lilyOfTheIncasPrice").innerHTML = "$" + this.myCart.lilyOfTheIncasPrice + ".00";
		document.getElementById("lilyOfTheIncasQuantity").innerHTML = this.myCart.amountInCart[13] + " Lily of the Incas bunch(es)";
		document.getElementById("lilyOfTheIncasTotal").innerHTML = "$" + this.myCart.lilyOfTheIncasPriceForItem + ".00";
		removeIfZero('lilyOfTheIncasRow');
	}
	currentItems = document.getElementById("lilyImage").src;
	if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Lily.jpg"){
		document.getElementById("lilyPrice").innerHTML = "$" + this.myCart.lilyPrice + ".00";
		document.getElementById("lilyQuantity").innerHTML = this.myCart.amountInCart[14] + " Lily bunch(es)";
		document.getElementById("lilyTotal").innerHTML = "$" + this.myCart.lilyPriceForItem + ".00";
		removeIfZero('lilyRow');
	}
	currentItems = document.getElementById("orchidImage").src;
	if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Orchid.jpg"){
		document.getElementById("orchidPrice").innerHTML = "$" + this.myCart.orchidPrice + ".00";
		document.getElementById("orchidQuantity").innerHTML = this.myCart.amountInCart[15] + " Orchid bunch(es)";
		document.getElementById("orchidTotal").innerHTML = "$" + this.myCart.orchidPriceForItem + ".00";
		removeIfZero('orchidRow');
	}
	currentItems = document.getElementById("peonyImage").src;
	if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Peony.jpg"){
		document.getElementById("peonyPrice").innerHTML = "$" + this.myCart.peonyPrice + ".00";
		document.getElementById("peonyQuantity").innerHTML = this.myCart.amountInCart[16] + " Peony bunch(es)";
		document.getElementById("peonyTotal").innerHTML = "$" + this.myCart.peonyPriceForItem + ".00";
		removeIfZero('peonyRow');
	}
	currentItems = document.getElementById("queenAnnesLaceImage").src;
	if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Queen%20Anne's%20Lace.jpg"){
		document.getElementById("queenAnnesLacePrice").innerHTML = "$" + this.myCart.queenAnnesLacePrice + ".00";
		document.getElementById("queenAnnesLaceQuantity").innerHTML = this.myCart.amountInCart[17] + " Queen Annes Lace bunch(es)";
		document.getElementById("queenAnnesLaceTotal").innerHTML = "$" + this.myCart.queenAnnesLacePriceForItem + ".00";
		removeIfZero('queenAnnesLaceRow');
	}
	currentItems = document.getElementById("roseImage").src;
	if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Rose.jpg"){
		document.getElementById("rosePrice").innerHTML = "$" + this.myCart.rosePrice + ".00";
		document.getElementById("roseQuantity").innerHTML = this.myCart.amountInCart[18] + " Rose bunch(es)";
		document.getElementById("roseTotal").innerHTML = "$" + this.myCart.rosePriceForItem + ".00";
		removeIfZero('roseRow');
	}
	currentItems = document.getElementById("ruscusImage").src;
	if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Ruscus.jpg"){
		document.getElementById("ruscusPrice").innerHTML = "$" + this.myCart.ruscusPrice + ".00";
		document.getElementById("ruscusQuantity").innerHTML = this.myCart.amountInCart[19] + " Ruscus bunch(es)";
		document.getElementById("ruscusTotal").innerHTML = "$" + this.myCart.ruscusPriceForItem + ".00";
		removeIfZero('ruscusRow');
	}
	currentItems = document.getElementById("seaLavenderImage").src;
	if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Sea%20Lavender.jpg"){
		document.getElementById("seaLavenderPrice").innerHTML = "$" + this.myCart.seaLavenderPrice + ".00";
		document.getElementById("seaLavenderQuantity").innerHTML = this.myCart.amountInCart[20] + " Sea Lavender bunch(es)";
		document.getElementById("seaLavenderTotal").innerHTML = "$" + this.myCart.seaLavenderPriceForItem + ".00";
		removeIfZero('seaLavenderRow');
	}
	currentItems = document.getElementById("seededEucalyptusImage").src;
	if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Seeded%20Eucalyptus.jpg"){
		document.getElementById("seededEucalyptusPrice").innerHTML = "$" + this.myCart.seededEucalyptusPrice + ".00";
		document.getElementById("seededEucalyptusQuantity").innerHTML = this.myCart.amountInCart[21] + " Seeded Eucalyptus bunch(es)";
		document.getElementById("seededEucalyptusTotal").innerHTML = "$" + this.myCart.seededEucalyptusPriceForItem + ".00";
		removeIfZero('seededEucalyptusRow');
	}
	currentItems = document.getElementById("snapdragonImage").src;
	if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Snapdragon.jpg"){
		document.getElementById("snapdragonPrice").innerHTML = "$" + this.myCart.snapdragonPrice + ".00";
		document.getElementById("snapdragonQuantity").innerHTML = this.myCart.amountInCart[22] + " Snapdragon bunch(es)";
		document.getElementById("snapdragonTotal").innerHTML = "$" + this.myCart.snapdragonPriceForItem + ".00";
		removeIfZero('snapdragonRow');
	}
	currentItems = document.getElementById("sunflowerImage").src;
	if(currentItems == "file:///C:/Users/cbeckerbauer336/Desktop/JavaScriptStoreCeciliaBeckerbauer/WebContent/images/Sunflower.jpg"){
		document.getElementById("sunflowerPrice").innerHTML = "$" + this.myCart.sunflowerPrice + ".00";
		document.getElementById("sunflowerQuantity").innerHTML = this.myCart.amountInCart[23] + " Sunflower bunch(es)";
		document.getElementById("sunflowerTotal").innerHTML = "$" + this.myCart.sunflowerPriceForItem + ".00";
		removeIfZero('sunflowerRow');
	}
	getTotal();
}

function removeIfZero(row){
	if(row == 'anemoneRow'){
		if(this.myCart.amountInCart[0] == 0){
			var darDivs = document.getElementById("anemoneRow");
			darDivs.style.display = "none";
		}
		else{
			var darDivs = document.getElementById("anemoneRow");
			darDivs.style.display = "block";
		}
	}
	else if(row == 'babysBreathRow'){
		if(this.myCart.amountInCart[1] == 0){
			var darDivs = document.getElementById("babysBreathRow");
			darDivs.style.display = "none";
		}
		else{
			var darDivs = document.getElementById("babysBreathRow");
			darDivs.style.display = "block";
		}
	}
	else if(row == 'bellsOfIrelandRow'){
		if(this.myCart.amountInCart[2] == 0){
			var darDivs = document.getElementById("bellsOfIrelandRow");
			darDivs.style.display = "none";
		}
		else{
			var darDivs = document.getElementById("bellsOfIrelandRow");
			darDivs.style.display = "block";
		}
	}
	else if(row == 'carnationRow'){
		if(this.myCart.amountInCart[3] == 0){
			var darDivs = document.getElementById("carnationRow");
			darDivs.style.display = "none";
		}
		else{
			var darDivs = document.getElementById("carnationRow");
			darDivs.style.display = "block";
		}
	}
	else if(row == 'dahliaRow'){
		if(this.myCart.amountInCart[4] == 0){
			var darDivs = document.getElementById("dahliaRow");
			darDivs.style.display = "none";
		}
		else{
			var darDivs = document.getElementById("dahliaRow");
			darDivs.style.display = "block";
		}
	}
	else if(row == 'dustyMillerRow'){
		if(this.myCart.amountInCart[5] == 0){
			var darDivs = document.getElementById("dustyMillerRow");
			darDivs.style.display = "none";
		}
		else{
			var darDivs = document.getElementById("dustyMillerRow");
			darDivs.style.display = "block";
		}
	}
	else if(row == 'foxgloveRow'){
		if(this.myCart.amountInCart[6] == 0){
			var darDivs = document.getElementById("foxgloveRow");
			darDivs.style.display = "none";
		}
		else{
			var darDivs = document.getElementById("foxgloveRow");
			darDivs.style.display = "block";
		}
	}
	else if(row == 'gerberaDaisyRow'){
		if(this.myCart.amountInCart[7] == 0){
			var darDivs = document.getElementById("gerberaDaisyRow");
			darDivs.style.display = "none";
		}
		else{
			var darDivs = document.getElementById("gerberaDaisyRow");
			darDivs.style.display = "block";
		}
	}
	else if(row == 'gladiolusRow'){
		if(this.myCart.amountInCart[8] == 0){
			var darDivs = document.getElementById("gladiolusRow");
			darDivs.style.display = "none";
		}
		else{
			var darDivs = document.getElementById("gladiolusRow");
			darDivs.style.display = "block";
		}
	}
	else if(row == 'hopsRow'){
		if(this.myCart.amountInCart[9] == 0){
			var darDivs = document.getElementById("hopsRow");
			darDivs.style.display = "none";
		}
		else{
			var darDivs = document.getElementById("hopsRow");
			darDivs.style.display = "block";
		}
	}
	else if(row == 'lambsEarRow'){
		if(this.myCart.amountInCart[10] == 0){
			var darDivs = document.getElementById("lambsEarRow");
			darDivs.style.display = "none";
		}
		else{
			var darDivs = document.getElementById("lambsEarRow");
			darDivs.style.display = "block";
		}
	}
	else if(row == 'larkspurRow'){
		if(this.myCart.amountInCart[11] == 0){
			var darDivs = document.getElementById("larkspurRow");
			darDivs.style.display = "none";
		}
		else{
			var darDivs = document.getElementById("larkspurRow");
			darDivs.style.display = "block";
		}
	}
	else if(row == 'liatrisRow'){
		if(this.myCart.amountInCart[12] == 0){
			var darDivs = document.getElementById("liatrisRow");
			darDivs.style.display = "none";
		}
		else{
			var darDivs = document.getElementById("liatrisRow");
			darDivs.style.display = "block";
		}
	}
	else if(row == 'lilyOfTheIncasRow'){
		if(this.myCart.amountInCart[13] == 0){
			var darDivs = document.getElementById("lilyOfTheIncasRow");
			darDivs.style.display = "none";
		}
		else{
			var darDivs = document.getElementById("lilyOfTheIncasRow");
			darDivs.style.display = "block";
		}
	}
	else if(row == 'lilyRow'){
		if(this.myCart.amountInCart[14] == 0){
			var darDivs = document.getElementById("lilyRow");
			darDivs.style.display = "none";
		}
		else{
			var darDivs = document.getElementById("lilyRow");
			darDivs.style.display = "block";
		}
	}
	else if(row == 'orchidRow'){
		if(this.myCart.amountInCart[15] == 0){
			var darDivs = document.getElementById("orchidRow");
			darDivs.style.display = "none";
		}
		else{
			var darDivs = document.getElementById("orchidRow");
			darDivs.style.display = "block";
		}
	}
	else if(row == 'peonyRow'){
		if(this.myCart.amountInCart[16] == 0){
			var darDivs = document.getElementById("peonyRow");
			darDivs.style.display = "none";
		}
		else{
			var darDivs = document.getElementById("peonyRow");
			darDivs.style.display = "block";
		}
	}
	else if(row == 'queenAnnesLaceRow'){
		if(this.myCart.amountInCart[17] == 0){
			var darDivs = document.getElementById("queenAnnesLaceRow");
			darDivs.style.display = "none";
		}
		else{
			var darDivs = document.getElementById("queenAnnesLaceRow");
			darDivs.style.display = "block";
		}
	}
	else if(row == 'roseRow'){
		if(this.myCart.amountInCart[18] == 0){
			var darDivs = document.getElementById("roseRow");
			darDivs.style.display = "none";
		}
		else{
			var darDivs = document.getElementById("roseRow");
			darDivs.style.display = "block";
		}
	}
	else if(row == 'ruscusRow'){
		if(this.myCart.amountInCart[19] == 0){
			var darDivs = document.getElementById("ruscusRow");
			darDivs.style.display = "none";
		}
		else{
			var darDivs = document.getElementById("ruscusRow");
			darDivs.style.display = "block";
		}
	}
	else if(row == 'seaLavenderRow'){
		if(this.myCart.amountInCart[20] == 0){
			var darDivs = document.getElementById("seaLavenderRow");
			darDivs.style.display = "none";
		}
		else{
			var darDivs = document.getElementById("seaLavenderRow");
			darDivs.style.display = "block";
		}
	}
	else if(row == 'seededEucalyptusRow'){
		if(this.myCart.amountInCart[21] == 0){
			var darDivs = document.getElementById("seededEucalyptusRow");
			darDivs.style.display = "none";
		}
		else{
			var darDivs = document.getElementById("seededEucalyptusRow");
			darDivs.style.display = "block";
		}
	}
	else if(row == 'snapdragonRow'){
		if(this.myCart.amountInCart[22] == 0){
			var darDivs = document.getElementById("snapdragonRow");
			darDivs.style.display = "none";
		}
		else{
			var darDivs = document.getElementById("snapdragonRow");
			darDivs.style.display = "block";
		}
	}
	else if(row == 'sunflowerRow'){
		if(this.myCart.amountInCart[23] == 0){
			var darDivs = document.getElementById("sunflowerRow");
			darDivs.style.display = "none";
		}
		else{
			var darDivs = document.getElementById("sunflowerRow");
			darDivs.style.display = "block";
		}
	}
}

function getTotal(){
	document.getElementById("totalForCart").innerHTML = "Total: $" + this.myCart.total + ".00";
}

function clearCart(){
	myCart.amountInCart[0] = 0;
	myCart.amountInCart[1] = 0;
	myCart.amountInCart[2] = 0;
	myCart.amountInCart[3] = 0;
	myCart.amountInCart[4] = 0;
	myCart.amountInCart[5] = 0;
	myCart.amountInCart[6] = 0;
	myCart.amountInCart[7] = 0;
	myCart.amountInCart[8] = 0;
	myCart.amountInCart[9] = 0;
	myCart.amountInCart[10] = 0;
	myCart.amountInCart[11] = 0;
	myCart.amountInCart[12] = 0;
	myCart.amountInCart[13] = 0;
	myCart.amountInCart[14] = 0;
	myCart.amountInCart[15] = 0;
	myCart.amountInCart[16] = 0;
	myCart.amountInCart[17] = 0;
	myCart.amountInCart[18] = 0;
	myCart.amountInCart[19] = 0;
	myCart.amountInCart[20] = 0;
	myCart.amountInCart[21] = 0;
	myCart.amountInCart[22] = 0;
	myCart.amountInCart[23] = 0;
	myCart.anemonePriceForItem = 0;
	myCart.babysBreathPriceForItem = 0;
	myCart.bellsOfIrelandPriceForItem = 0;
	myCart.carnationPriceForItem = 0;
	myCart.dahliaPriceForItem = 0;
	myCart.dustyMillerPriceForItem = 0;
	myCart.foxglovePriceForItem = 0;
	myCart.gerberaDaisyPriceForItem = 0;
	myCart.gladiolusPriceForItem = 0;
	myCart.hopsPriceForItem = 0;
	myCart.lambsEarPriceForItem = 0;
	myCart.larkspurPriceForItem = 0;
	myCart.liatrisPriceForItem = 0;
	myCart.lilyOfTheIncasPriceForItem = 0;
	myCart.lilyPriceForItem = 0;
	myCart.orchidPriceForItem = 0;
	myCart.peonyPriceForItem = 0;
	myCart.queenAnnesLacePriceForItem = 0;
	myCart.rosePriceForItem = 0;
	myCart.ruscusPriceForItem = 0;
	myCart.seaLavenderPriceForItem = 0;
	myCart.seededEucalyptusPriceForItem = 0;
	myCart.snapdragonPriceForItem = 0;
	myCart.sunflowerPriceForItem = 0;
	carte = 0;
	document.getElementById("cartText").innerHTML = "0";
	document.getElementById("cartTotalPrice").innerHTML = "$0.00";
	getInformation();
	clearStuff('aboutUsPage');
	alert("Thank you for purchasing some lovely flowers from Creel's Flowers! You are welcome back anytime!");
	totalCart();
	getTotal();
}


function currentTime() {
	  var date = new Date(); 
	  var hour = date.getHours();
	  var min = date.getMinutes();
	  var sec = date.getSeconds();
	  var midday = "AM";
	  midday = (hour >= 12) ? "PM" : "AM"; 
	  hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour); 
	  hour = updateTime(hour);
	  min = updateTime(min);
	  sec = updateTime(sec);
	  document.getElementById("clock").innerText = hour + ":" + min + " " + midday; 
	  var t = setTimeout(currentTime, 1000);
	  var d = date.getDay();
	  if(d == 0 || d == 6){
		  document.getElementById("storePicture").style.border = "5px solid #ff6666";
		  document.getElementById("storeOpenOrClosed").innerHTML = "We are closed.";
	  }
	  else if(h == 8 && midday == "AM"){
		  document.getElementById("storePicture").style.border = "5px solid #99ff66";
		  document.getElementById("storeOpenOrClosed").innerHTML = "We just opened!";
	  }
	  else if(h == 8 && midday == "PM" && d != 0 && d != 0){
		  document.getElementById("storePicture").style.border = "3px solid #ff6666";
		  document.getElementById("storeOpenOrClosed").innerHTML = "We are closed now.";
	  }
	  else if(h == 7 && midday == "AM" && d != 0 && d != 0){
		  document.getElementById("storePicture").style.border = "5px solid #ffff66";
		  document.getElementById("storeOpenOrClosed").innerHTML = "We are opening soon!";
	  }
	  else if(h == 7 && midday == "PM" && d != 0 && d != 0){
		  document.getElementById("storePicture").style.border = "5px solid #ffff66";
		  document.getElementById("storeOpenOrClosed").innerHTML = "We are closing soon.";
	  }
	  else if(h > 8 && midday == "AM" && d != 0 && d != 0){
		  document.getElementById("storePicture").style.border = "5px solid #99ff66";
		  document.getElementById("storeOpenOrClosed").innerHTML = "We are open!"
	  }
	  else if(h < 7 && midday == "PM" && d != 0 && d != 0){
		  document.getElementById("storePicture").style.border = "5px solid #99ff66";
		  document.getElementById("storeOpenOrClosed").innerHTML = "We are open!";
	  }
	  else if(h > 8 && midday == "PM" && d != 0 && d != 0){
		  document.getElementById("storePicture").style.border = "5px solid #ff6666";
		  document.getElementById("storeOpenOrClosed").innerHTML = "We are closed.";
	  }
	  else if(h < 7 && midday == "PM" && d != 0 && d != 0){
		  document.getElementById("storePicture").style.border = "5px solid #ff6666";
		  document.getElementById("stoerOpenOrClosed").innerHTML = "We are closed.";
	  }
	  if(d == 0){
		  document.getElementById("storeDay").innerHTML = "Sunday";
		  document.getElementById("saturdayThruSunday").style.background = "#ccccff";
	  }
	  else if(d == 1){
		  document.getElementById("storeDay").innerHTML = "Monday";
		  document.getElementById("mondayThruFriday").style.background = "#ccccff";
	  }
	  else if(d == 2){
		  document.getElementById("storeDay").innerHTML = "Tuesday";
		  document.getElementById("mondayThruFriday").style.background = "#ccccff";
	  }
	  else if(d == 3){
		  document.getElementById("storeDay").innerHTML = "Wednesday";
		  document.getElementById("mondayThruFriday").style.background = "#ccccff";
	  }
	  else if(d == 4){
		  document.getElementById("storeDay").innerHTML = "Thursday";
		  document.getElementById("mondayThruFriday").style.background = "#ccccff";
	  }
	  else if(d == 5){
		  document.getElementById("storeDay").innerHTML = "Friday";
		  document.getElementById("mondayThruFriday").style.background = "#ccccff";
	  }
	  else if(d == 6){
		  document.getElementById("storeDay").innerHTML = "Saturday";
		  document.getElementById("saturdayThruSunday").style.background = "#ccccff";
	  }
}

function updateTime(k) { 
	 if (k < 10) {
		 return "0" + k;
	 }
	 else {
		 return k;
	 }
}