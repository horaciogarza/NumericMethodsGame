var elements = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32];
var elements_bid = ["1i","2i","3i","4i","5i","6i","7i","8i","9i","10i","11i","12i","13i","14i","15i","16i","17i","18i","19i","20i","21i","22i","23i","24i","25i","26i","27i","28i","29i","30i","31i","32i"];
var winner_one = 0;
var delay = 200;
var aux = 0;
var random_winner = Math.floor((Math.random() * 30) + 31);
var time_to_stop = 0;
var stop_this_please = false;
var running = true;
var activated = false;
var bid_id = [];
var bid_sum = 0;
var status = 500;
var flag = false;
var i = 0;
var j = 0;
var start;
var winner_flag = false;
var flag_continue = true;
var flag_extra = false;
var elements_extra = [1,2,3,4];
var i_extra = 0;



function startGame(){ location.href='playGame.html'};
function about(){
	location.href='about.html'
}
function letsStartThis(){

	
	if (status != 0) {
		console.log("Init");
		
		
		checkBid();
		if (flag_continue) {
			document.getElementById("init").disabled = true;
			start = setInterval(initAnimation, delay);
			console.log(random_winner);
			
		};
		
	}else{
		alert("Te haz quedado sin créditos, te recomendamos actualizar la página para volver a jugar");
	}
	
	
}

function initAnimation(){
			
	console.log(i);
	document.getElementById(elements[i]).style.color = "red";

	if(i != 0 ){document.getElementById(elements[i-1]).style.color = "#03A9F4";}else{};
	if(i == 0 ){document.getElementById(elements[31]).style.color = "#03A9F4";}else{};
	
	if(i == 31){
		i = 0;
		flag = true;
	}else{
		i++;
		j++;
	}

	if(flag){
	if (j >= random_winner) {
		if (i != 14 || i != 27) {

			check_if_user_won(); //Check if the user has made a bid
			clearInterval(start);	
		}else{
			flag_extra = true;
			
			if (i == 14) {
				for (var g = 0; g < elements_extra.length; g++) {
					status = 2*(parseInt(document.getElementById("1e").value)+parseInt(document.getElementById("2e").value)+parseInt(document.getElementById("3e").value)+parseInt(document.getElementById("4e").value));
					updateMoney();
					alert("Felicidades haz ganado la suma de: $ " + 2*(parseInt(document.getElementById("1e").value)+parseInt(document.getElementById("2e").value)+parseInt(document.getElementById("3e").value)+parseInt(document.getElementById("4e").value)));
				};
			}else{

				for (var g = 0; g < elements_extra.length; g++) {
					status = 5*(parseInt(document.getElementById("1e").value)+parseInt(document.getElementById("2e").value)+parseInt(document.getElementById("3e").value)+parseInt(document.getElementById("4e").value));
					updateMoney();
					alert("Felicidades haz ganado la suma de: $ " + 2*(parseInt(document.getElementById("1e").value)+parseInt(document.getElementById("2e").value)+parseInt(document.getElementById("3e").value)+parseInt(document.getElementById("4e").value)));
				}
			}
			clearInterval(start);
			estadoInicial();
		}

				
				
		};
	}
}



function check_if_user_won(){

	for (var z = bid_id.length - 1; z >= 0; z--) {
		if(i == bid_id[z]){
			console.log("We got a Winner! " + bid_id[z]);
			status = parseInt(status) + 2*parseInt(document.getElementById(elements_bid[z]).value);
			updateMoney();
			alert("Felicidades haz ganado la suma de: $ " + 2*parseInt(document.getElementById(elements_bid[z]).value));
			console.log(status + "bid: " + bid_sum);

			winner_flag = true;
			
			break;
		}

	};
	if (!winner_flag) {
		
		alert("Lo sentimos, no haz ganado ");
		

	};
	estadoInicial();

}
//Updates the Money in the DOM
function updateMoney(){document.getElementById("money-left").innerHTML = "$ " + status;}

function checkBid(){

	console.log("Checking Bids...");
	bid_sum = 0;
	for (var y = 0 ; y < elements_bid.length; y++) {
		console.log(y);
		if (y != 14 && y != 27) {
			if (parseInt(document.getElementById(elements_bid[y]).value) != 0 && document.getElementById(elements_bid[y]).value != "") {

				bid_id.push(y);
				console.log(y);
				bid_sum += parseInt(document.getElementById(elements_bid[y]).value);
				
				
			};
		}



		
	};
	console.log("\nBid Sum: \n" + bid_sum);

	if (parseInt(bid_sum) > status) { 
		console.log("Bid Checker has finished with excesive bids");
		window.alert("No cuentas con suficientes créditos!");
		flag_continue = false;
	}else{
		status -= parseInt(bid_sum);
		console.log(status);
		console.log(bid_sum);
		console.log("Bid Checker has finished with normal bids");
		
		if (bid_sum == 0) {
			alert("Debes apostar algo!");
			flag_continue = false;
		}else{
			flag_continue = true;
		}
		updateMoney();
		
	}
}

function estadoInicial(){
	console.log("entre al estado inicial");
	document.getElementById("init").disabled = false;
	i = 0;
	j = 0;
	elements = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32];
	elements_bid = ["1i","2i","3i","4i","5i","6i","7i","8i","9i","10i","11i","12i","13i","14i","15i","16i","17i","18i","19i","20i","21i","22i","23i","24i","25i","26i","27i","28i","29i","30i","31i","32i"];
	winner_one = 0;
	delay = 100;
	random_winner = Math.floor((Math.random() * 30) + 31);
	bid_id = [];
	bid_sum = 0;
	flag = false;
	winner_flag = false;
	flag_continue = true;
	flag_extra = false;
	i_extra = 0;
}

