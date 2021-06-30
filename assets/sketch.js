var slot__base_one = 'sounds/_init/yoshimura.mp3';
var slot__base_two = 'sounds/_init/yoshimura2.mp3';
var slot__base_three = 'sounds/_init/japanese1.mp3';

var slot__one = 'sounds/main/1.wav';
var slot__two = 'sounds/main/2.wav';
var slot__three = 'sounds/main/3.wav';
var slot__four = 'sounds/main/4.wav';
var slot__five = 'sounds/main/5.wav';

var button__one__value = 2;
var button__two__value = 1;
var quadRotation = 0;

var button_change_one_value = 1;
var button_change_two_value = 1;
var button_change_three_value = 1;
var button_change_base_value = 1;
var add_details_value = 1;

var amplitude__one
var amplitude__two
var amplitude__three
var amplitude__four

var isLoaded = false
var songsArray = []

var sphererotations = {
  one: 5,
  two: 10,
  three: 16
};

function preload() {
  soundFormats('mp3', 'ogg');
  sound__base_one = loadSound(slot__base_one);
  sound__base_two = loadSound(slot__base_two);
  sound__base_three = loadSound(slot__base_three);

  sound__one = loadSound(slot__one);
  sound__two = loadSound(slot__two);
  sound__three = loadSound(slot__three);
  sound__four = loadSound(slot__four);
  sound__five = loadSound(slot__five);
}

window.addEventListener('load', (event) => {

  userBehaviour.config(
	{
		userInfo: true,
		clicks: true,
		mouseMovement: true,
		mouseMovementInterval: 1,
		mouseScroll: true,
		timeCount: true,
		clearAfterProcess: true,
		processTime: false,//does not automatically save and send data
		processData: function(results){
				console.log("process", results);
				savedata(results);
		},
	});
	
	userBehaviour.start();	
});

function setup() {	

  createCanvas(1024, 768);
  angleMode(DEGREES);
  //menu
  // navigation_bottom_menu = createGraphics(940, 240);

  menu_background = createDiv(" ");
  menu_background.position(40, 528);
  menu_background.class('menu_background');

  button_close = createDiv(" ");
  button_close.position(954, 50);
  button_close.class('button__close');

  button_one_wrapper = createDiv(" ");
  button_one_wrapper.position(330, 570);
  button_one_wrapper.class('button_one_wrapper');

  button_change_one = createDiv(" ");
  button_change_one.position(330, 570);
  button_change_one.class('button_change_one');

  button_two_wrapper = createDiv(" ");
  button_two_wrapper.position(468, 570);
  button_two_wrapper.class('button_two_wrapper');

  button_change_two = createDiv(" ");
  button_change_two.position(468, 570);
  button_change_two.class('button_change_two');

  button_three_wrapper = createDiv(" ");
  button_three_wrapper.position(606, 570);
  button_three_wrapper.class('button_three_wrapper');

  button_change_three = createDiv(" ");
  button_change_three.position(606, 570);
  button_change_three.class('button_change_three');

  button_change_base = createDiv("");
  button_change_base.position(70, 582);
  button_change_base.class('button_change_base');

  light_one = createDiv("");
  light_one.position(266, 578);
  light_one.class('light light_one');

  light_two = createDiv("");
  light_two.position(266, 648);
  light_two.class('light light_two');

  light_three = createDiv("");
  light_three.position(266, 718);
  light_three.class('light light_three');

  button_add_details = createDiv("");
  button_add_details.position(870, 590);
  button_add_details.class('button_add_details');

  button_remove_details = createDiv("");
  button_remove_details.position(830, 650);
  button_remove_details.class('button_remove_details');

  plus_line_one = createDiv("");
  plus_line_one.position(883, 617);
  plus_line_one.class('plus_one line');

  plus_line_two = createDiv("");
  plus_line_two.position(898, 603);
  plus_line_two.class('plus_two line');

  minus_line = createDiv("");
  minus_line.position(843, 677);
  minus_line.class('minus line');

  light_four = createDiv("");
  light_four.position(770, 578);
  light_four.class('light light_four');

  light_five = createDiv("");
  light_five.position(770, 602);
  light_five.class('light light_five');

  light_six = createDiv("");
  light_six.position(770, 628);
  light_six.class('light light_six');

  light_seven = createDiv("");
  light_seven.position(770, 718);
  light_seven.class('light light_seven');




  //suoni
  amplitude__one = new p5.Amplitude();
  amplitude__one.setInput(sound__one)

  amplitude__two = new p5.Amplitude();
  amplitude__two.setInput(sound__two)

  amplitude__three = new p5.Amplitude();
  amplitude__three.setInput(sound__three)

  amplitude__four = new p5.Amplitude();
  amplitude__four.setInput(sound__four)

  amplitude__five = new p5.Amplitude();
  amplitude__five.setInput(sound__five)
  //finesuoni

  //var di movimento
  sphere1rotation = 160;
  sphere2rotation = 200;
  sphere3rotation = 250;
  sphere4rotation = 230;
  sphere5rotation = 280;
  sphere6rotation = 310;
  sphereMovement1 = 0;
  sphereSize1 = 0;
  sphereSize1increment = 1;
  sphereMovement1speed = 1;
  quad2y = 275;
  quad1y = 300;
  quad3y = 275;
  quad4y = 180;
  quad5y = 180;
  dimquad = 0;

  rectLenght2 = 0;
  rectLenght3 = 0;


  //SLIDER
  slider__one = createSlider(1, 5, 1);
  slider__one.position(337, 720);
  slider__one.class('visual__slider slider__one');

    //modale di chiusura

    modal__wrapper = createDiv(" ");
    modal__wrapper.position(0, 0);
    modal__wrapper.class('finish-modal__wrapper');
  
  
    modal = createDiv(" ");
    modal.position(150, 150);
    modal.class('finish-modal');
    document.querySelector(".finish-modal").innerHTML = "<div class='finish-modal__text'>Grazie per aver giocato con Ekō!</div>"

    modal__button = createDiv(" ");
    modal__button.position(402, 180);
    modal__button.class('finish-modal__label');
    document.querySelector(".finish-modal__label").innerHTML = "<p>Sei arrivato alla fine</p>"
  
    modal__button = createDiv(" ");
    modal__button.position(420, 530);
    modal__button.class('finish-modal__button');
    document.querySelector(".finish-modal__button").innerHTML = "<p>Gioca ancora</p>"


  //COLORI
  //Colori tra cui scegliere
  color__white = color(255, 255, 255);
  color__black = color(0, 0, 0);
  color__light_pink = color(250, 202, 194);
  color__pink = color(239, 106, 124);
  color__hot_pink = color(212, 49, 93);
  color__light_green = color(196, 226, 200);
  color__green = color(112, 188, 152);
  color__dark_green = color(21, 76, 85);
  color__indigo = color(164, 186, 223);
  color__purple = color(135, 117, 179);
  color__blue = color(11, 62, 96);
  color__light_yellow = color(254, 229, 199);
  color__yellow = color(250, 209, 87);
  color__orange = color(242, 137, 84);
  color__light_orange = color(250, 180, 104);
  color__hot_orange = color(255, 107, 49);
  color__light_blue = color(217, 239, 248);

  //Impostazioni base dei colori
  color1 = color__light_green;
  color2 = color__indigo;
  color3 = color__yellow;
  color4 = color__hot_orange;
  color5 = color__dark_green;
  color6 = color__blue;
  color7 = color__hot_pink;
  color8 = color__white;
  //fetchData()
	

  document.querySelector(".button_one_wrapper").addEventListener("click", function() {
    button_one_clicked();
  })
  document.querySelector(".button_change_one").addEventListener("click", function() {
    button_one_clicked();
  })

  document.querySelector(".button_two_wrapper").addEventListener("click", function() {
    button_two_clicked();
  })
  document.querySelector(".button_change_two").addEventListener("click", function() {
    button_two_clicked();
  })

  document.querySelector(".button_three_wrapper").addEventListener("click", function() {
    button_three_clicked();
  })
  document.querySelector(".button_change_three").addEventListener("click", function() {
    button_three_clicked();
  })

  document.querySelector(".button_change_base").addEventListener("click", function() {
    button_change_base_clicked();
  })

  document.querySelector(".button_add_details").addEventListener("click", function() {
    add_details_value = 1;
    document.querySelector(".minus").classList.add("colored_line");
    document.querySelector(".plus_one").classList.remove("colored_line");
    document.querySelector(".plus_two").classList.remove("colored_line");

  })

  document.querySelector(".plus_one").addEventListener("click", function() {
    add_details_value = 1;
    document.querySelector(".minus").classList.add("colored_line");
    document.querySelector(".plus_one").classList.remove("colored_line");
    document.querySelector(".plus_two").classList.remove("colored_line");
  })

  document.querySelector(".plus_two").addEventListener("click", function() {
    add_details_value = 1;
    document.querySelector(".minus").classList.add("colored_line");
    document.querySelector(".plus_one").classList.remove("colored_line");
    document.querySelector(".plus_two").classList.remove("colored_line");
  })

  document.querySelector(".button_remove_details").addEventListener("click", function() {
    add_details_value = 2;
    document.querySelector(".minus").classList.remove("colored_line");
    document.querySelector(".plus_one").classList.add("colored_line");
    document.querySelector(".plus_two").classList.add("colored_line");
  })

  document.querySelector(".minus").addEventListener("click", function() {
    add_details_value = 2;
    document.querySelector(".plus_one").classList.add("colored_line");
    document.querySelector(".plus_two").classList.add("colored_line");
    document.querySelector(".minus").classList.remove("colored_line");
  })


  document.querySelector(".light_one").classList.add("light_active");


  document.querySelector(".minus").classList.add("colored_line");
	
	document.querySelector(".button__close").addEventListener("click", function() {
    close();
  })

  document.querySelector(".finish-modal__button").addEventListener("click", function() {
    hideModal();
  })


	songsArray = [
		 amplitude__one,
		 amplitude__two,
		 amplitude__three,
		 amplitude__four,
		 amplitude__five,
	 ]
	 sound__base_one.loop();
	 sound__one.loop();
	 sound_two(sound__two);
	 sound_three(sound__three);
	 sound_four(sound__four);
	 sound_five(sound__five)

	isLoaded = true;
  
  console.log("ECCO");

document.querySelector(".logo").classList.add("hide");
setTimeout(() => {
  document.querySelector(".button__start").classList.add("visible");

}, 500);

document.querySelector(".button__start").addEventListener("click", function() {
  console.log("ciao")
  document.querySelector(".loader").classList.add("hide");
  document.querySelector(".button__start").classList.remove("visible");

})
}

function draw() {
  if (isLoaded) {
    background(color1);
    strokeWeight(1.5);

    //variabili slider
    var slider__one__value = slider__one.value();

    //fine varibili slider

    //variabili di suono
    var level__one = songsArray[0].getLevel();
    var size__one = map(level__one, 0, 1, 0, 200);

    var level__two = songsArray[1].getLevel();
    var size__two = map(level__two, 0, 1, 0, 200);

    var level__three = songsArray[2].getLevel();
    var size__three = map(level__three, 0, 1, 0, 200);

    var level__four = songsArray[3].getLevel();
    var size__four = map(level__four, 0, 1, 0, 200);

    var level__five = songsArray[4].getLevel();
    var size__five = map(level__five, 0, 1, 0, 200);

    //fine variabili di suono

    //funzioni di call visual
    //Visual 1
    if (slider__one__value == 1) {
      visual__one__one()
    } else if (slider__one__value == 2) {
      visual__one__two()

    } else if (slider__one__value == 3) {
      visual__one__three()
    } else if (slider__one__value == 4) {
      visual__one__four()
    } else {
      visual__one__five()
    }


    //Visual 3
    if (button_change_two_value == 1) {
      visual__three__one(color1, color2, color3, color4, color5, color6, color7, color8, size__one, size__two, size__three, size__four, size__five)
    } else if (button_change_two_value == 2) {
      visual__three__two(color1, color2, color3, color4, color5, color6, color7, color8, size__one, size__two, size__three, size__four, size__five)
    } else if (button_change_two_value == 3) {
      visual__three__three(color1, color2, color3, color4, color5, color6, color7, color8, size__one, size__two, size__three, size__four, size__five)
    }


    //Visual 4
    if (button_change_three_value == 1) {
      visual__four__one(color1, color2, color3, color4, color5, color6, color7, color8, size__one, size__three, size__two, size__four, size__five)
    } else if (button_change_three_value == 2) {
      visual__four__two(color1, color2, color3, color4, color5, color6, color7, color8, size__one, size__two, size__three, size__four, size__five)
    } else if (button_change_three_value == 3) {
      visual__four__three(color1, color2, color3, color4, color5, color6, color7, color8, size__one, size__two, size__three, size__four, size__five)
    }

    //Visual 2
    if (button_change_one_value == 1) {
      visual__two__one(color1, color2, color3, color4, color5, color6, color7, color8, size__one, size__two, size__three, size__four, size__five)
    } else if (button_change_one_value == 2) {
      visual__two__two(color1, color2, color3, color4, color5, color6, color7, color8, size__one, size__two, size__three, size__four, size__five)
    } else if (button_change_one_value == 3) {
      visual__two__three(color1, color2, color3, color4, color5, color6, color7, color8, size__one, size__two, size__three, size__four, size__five)
    }

    movimentoSphere(size__one);
    movimentoRombi(size__one);

    if (add_details_value == 1) {
      document.querySelector(".light_four").classList.add("light_active");
      document.querySelector(".light_five").classList.add("light_active");
      document.querySelector(".light_six").classList.add("light_active");

      document.querySelector(".light_seven").classList.remove("light_active");

    } else {
      document.querySelector(".light_four").classList.remove("light_active");
      document.querySelector(".light_five").classList.remove("light_active");
      document.querySelector(".light_six").classList.remove("light_active");
      document.querySelector(".light_seven").classList.add("light_active");

    }
  }

}




function close(){
	userBehaviour.stop();
	userBehaviour.showResult();
	userBehaviour.processResults();
}

function showModal(){
 document.querySelector(".finish-modal__wrapper").classList.add("show");
 setTimeout(() => {
  document.querySelector(".finish-modal").classList.add("show");
 }, 400);
 setTimeout(() => {
  document.querySelector(".finish-modal__button").classList.add("show");
  document.querySelector(".finish-modal__label").classList.add("show");

 }, 700);
}

function hideModal(){
  document.querySelector(".finish-modal__wrapper").classList.remove("show");
  document.querySelector(".finish-modal").classList.remove("show");
  document.querySelector(".finish-modal__button").classList.remove("show");
  document.querySelector(".finish-modal__label").classList.remove("show");
  setTimeout(() => {
    location.reload();
    return false;   }, 400);
}

function savedata(results){
	var dataToSave = new FormData();
  dataToSave.append("payload", JSON.stringify(results));
	
	$.ajax({
			url: "./api/index.php",
			method: "POST",
			contentType: false,
			processData: false,
			data: dataToSave,
			success: function (data) {
				save_success(data);
        showModal()
			},
			error: function (request, error) {
				save_error(request, error);
        showModal()
			},
			timeout: 360000
    });
}

function save_success(result){
	if (result.status == "success") {
		console.log("saved", result);
	}else{
		save_error("error:", result)
	}
}

function save_error(request,error){
	console.error(request,error);
}

//FUNZIONI DI DRAW GENERALI

var arcRotation = 1;
var arcRotation2 = 0;
var arcRotation2_increment = 1;

var ellipseSize = 0;
var ellipseSize_increment = 0.3;
var baseSize = 0;
var baseSize_increment = 0.5;
var pyraLenght = 0;
var pyraLenght_increment = 0.3;

var quadRotation2 = 0;
var quadRotation_increment = 0.6;

var ellipseSize2 = 0;
var ellipseSize2_increment = 0.3;

var rectLenght3_increment = 0.5;

var rectLenght = 0;
var rectLenght_increment = 0.5;

var rectLenght4 = 0;
var rectLenght4_increment = 0.3;

var rectLenght5 = 0;
var rectLenght5_increment = 0.3;

var rectLenght6 = 0;
var rectLenght6_increment = 0.5;

var rectLenght7 = 0;
var rectLenght7_increment = 1;

var rectLengh8 = 0;
var rectLengh8_increment = 1;

var rectLengh9 = 0;
var rectLengh9_increment = 1;

var rectLenght10 = 0;
var rectLenght10_increment = 0.3;

var rectLenght11 = 0;
var rectLenght11_increment = 0.4;

var rectLenght12 = 0;
var rectLenght12_increment = 0.4;

var rectLenght13 = 0;
var rectLenght13_increment = 0.4;

var rectLenght14 = 0;
var rectLenght14_increment = 1;

var rectLenght15 = 0;
var rectLenght15_increment = 1;

var rectLenght16 = 0;
var rectLenght16_increment = 1;

var rectLenght17 = 0;
var rectLenght17_increment = 1;

//visual 2
function visual__two__one(color1, color2, color3, color4, color5, color6, color7, color8, size, size2, size3, size4, size5) {
  noStroke()
  fill(color4);
  ellipse(512, 258, 250 + size2, 250 + size2);

  if (add_details_value == 1) {
    fill(color1);
    ellipse(512, 258, 75 - size2 + ellipseSize, 75 - size2 + ellipseSize);
  }
  noFill()
  stroke(color7)
  push()
  translate(512, 258);
  rotate(size2 * 7 + arcRotation);
  arc(0, 0, 280 + size2 * 3, 280 + size2 * 3, 0, 90);
  pop()

  push()
  translate(512, 258);
  rotate(size2 * 7 + arcRotation);
  arc(0, 0, 280 + size2 * 3, 280 + size2 * 3, 180, 270);
  pop()


  //cerchi
  stroke(color7)
  noFill();
  ellipse(650, 65, 100, 100);
  ellipse(205, 278, 80, 80);
  noStroke()
  fill(color5);
  push()
  translate(650, 65);
  rotate(frameCount + size3);
  ellipse(35, 35, 20, 20);
  pop()

  fill(color6);
  push()
  translate(205, 278);
  rotate(-200 + -frameCount / 1.2 + size3);
  ellipse(28, 28, 20, 20);
  pop()

  //base
  noFill();
  stroke(color7);
  if (add_details_value == 1) {
    curve(387 - size2 * 40, 380 - size2 * 10, 387 - size2 * 5, 380 + size2 * 3, 387, 500, 387, 500);
    curve(424 - size2 * 40, 410 - size2 * 10, 424 - size2 * 3, 410 + size2 * 1.7, 424, 500, 424, 500);
    curve(461 - size2 * 40, 420 - size2 * 10, 461 - size2 * 2, 420 + size2 * 1.2, 461, 500, 461, 500);
    curve(498 - size2 * 20, 428 - size2 * 5, 498 - size2 * 0.7, 428 + size2 * 0.4, 498, 500, 498, 500);
    curve(535 + size2 * 20, 428 - size2 * 5, 535 + size2 * 0.7, 428 + size2 * 0.4, 535, 500, 535, 500);
    curve(572 + size2 * 40, 420 - size2 * 10, 572 + size2 * 2, 420 + size2 * 1.2, 572, 500, 572, 500);
    curve(609 + size2 * 40, 410 - size2 * 10, 609 + size2 * 3, 410 + size2 * 1.7, 609, 500, 609, 500);
    curve(646 + size2 * 40, 380 - size2 * 10, 646 + size2 * 5, 380 + size2 * 3, 646, 500, 646, 500);
  }


  noStroke();
  fill(color2)
  ellipse(387 - size2 * 5, 380 + size2 * 3, 20 - size2 / 4, 20 - size2 / 4)
  ellipse(424 - size2 * 3, 405 + size2 * 1.7, 20 + size2 / 4, 20 + size2 / 4)
  ellipse(461 - size2 * 2, 420 + size2 * 1.2, 20 - size2 / 4, 20 - size2 / 4)
  ellipse(498 - size2 * 0.7, 428 + size2 * 0.4, 20 + size2 / 4, 20 + size2 / 4)
  ellipse(535 + size2 * 0.7, 428 + size2 * 0.4, 20 - size2 / 4, 20 - size2 / 4)

  ellipse(572 + size2 * 2, 420 + size2 * 1.2, 20 + size2 / 4, 20 + size2 / 4)
  ellipse(609 + size2 * 3, 405 + size2 * 1.7, 20 - size2 / 4, 20 - size2 / 4)
  ellipse(646 + size2 * 5, 380 + size2 * 3, 20 + size2 / 4, 20 + size2 / 4)


  fill(color6);
  rect(350 - baseSize / 2, 480, 330 + baseSize, 28, 14);

  ellipseSize = ellipseSize + ellipseSize_increment;
  arcRotation = arcRotation + 1;


  if (size5 < 4) {
    baseSize = baseSize + baseSize_increment;
  } else {
    baseSize = baseSize + baseSize_increment * 5;
  }

  if (baseSize >= 45 || baseSize < 0) {
    baseSize_increment = baseSize_increment * -1;

  }
  if (ellipseSize >= 25 || ellipseSize < 0) {
    ellipseSize_increment = ellipseSize_increment * -1;
  }

}

function visual__two__two(color1, color2, color3, color4, color5, color6, color7, color8, size, size2, size3, size4, size5) {
  noStroke()
  fill(color3);
  rect(317 + rectLenght5 / 2, 185, 390 - rectLenght5, 130);

  fill(color7)
  quad(520 - pyraLenght, 185, 545, 95, 580, 95, 605 + pyraLenght, 185)
  if (add_details_value == 1) {
    fill(color2);
    arc(562.5, 95, 35 + size, 35 + size, 180 - size2 * 6, 360 + size2 * 6);
    fill(color5);
    rect(317, 340, 174 + size4 * 1.5, 21);
  }
  fill(color2)
  quad(405 + pyraLenght, 361, 425, 451, 470, 451, 490 - pyraLenght, 361)
  fill(color4)
  arc(448, 451, 45 + size, 45 + size, 0 - size2 * 6, 180 + size2 * 6);

  stroke(color5)
  noFill();
  line(560, 250, 560, 400)
  arc(445, 400, 230, 230, 0, 180);

  noStroke()
  fill(color3)

  ellipse(560, 330, 20 + pyraLenght / 3, 20 + pyraLenght / 3)
  if (add_details_value == 1) {
    ellipse(560, 375, 20 - pyraLenght / 3, 20 - pyraLenght / 3)
    push()
    translate(445, 400);
    rotate(sphere2rotation * 0.3 + 360);
    ellipse(81, 81, 20, 20)
    pop()
  }
  push()
  translate(445, 400);
  rotate(sphere3rotation * 0.2 + 290);
  ellipse(81, 81, 20 - pyraLenght / 6, 20 - pyraLenght / 6)
  pop()

  push()
  translate(445, 400);
  rotate(sphere1rotation * 0.5 + 300);
  ellipse(81, 81, 20 + pyraLenght / 5, 20 + pyraLenght / 5)
  pop()

  fill(color5)
  rect(360, 20, 100, 165, 0, 0, 100, 100)
  fill(color1)
  ellipse(410, 135 - size2 * 1.5, 75 - size5, 75 - size5)


  //rombi
  fill(color7)
  quad(540, quad1y - 40, 480, quad1y - 0, 580, quad1y - 0, 650, quad1y - 40);
  fill(color6)
  quad(540, quad3y - 50, 480, quad3y - 10, 580, quad3y - 10, 650, quad3y - 50);

  //cerchio
  stroke(color5)
  noFill();
  ellipse(562.5, 90, 100, 100);
  noStroke()
  fill(color3);
  push()
  translate(562, 90);
  rotate(frameCount + size3);
  ellipse(35, 35, 20, 20);
  pop()


  if (size < 4) {
    rectLenght5 = rectLenght5 + rectLenght5_increment;

  } else {
    rectLenght5 = rectLenght5 + rectLenght5_increment * 5;
  }
  if (rectLenght5 > 55 || rectLenght5 < 0) {
    rectLenght5_increment = rectLenght5_increment * -1;
  }

  if (size3 < 10) {
    pyraLenght = pyraLenght + pyraLenght_increment;

  } else {
    pyraLenght = pyraLenght + pyraLenght_increment * 5;
  }
  if (pyraLenght > 15 || pyraLenght < 0) {
    pyraLenght_increment = pyraLenght_increment * -1;
  }

}

function visual__two__three(color1, color2, color3, color4, color5, color6, color7, color8, size, size2, size3, size4, size5) {
  //rombi
  noStroke()
  fill(color3)
  quad(390, quad3y + 220, 330, quad3y + 180, 430, quad3y + 180, 500, quad3y + 220);
  fill(color7)
  quad(390, quad1y + 170, 330, quad1y + 130, 430, quad1y + 130, 500, quad1y + 170);

  noFill()
  stroke(color3)
  line(410, 330 - rectLenght16 , 410, 150 + quad1y)

  noStroke()
  fill(color4);
  ellipse(410, 350, 20 + size3 * 0.5, 20 + size3 * 0.5)
  ellipse(410, 390, 20 - size3 * 0.5, 20 - size3 * 0.5)

  fill(color3);
  rect(410 - rectLenght15 / 2, 40, 120 + rectLenght15 / 2, 100, 100, 0, 0, 100);
    if(add_details_value==1){
  fill(color1);
  ellipse(460 - rectLenght15 / 2 + size4 * 1.5, 90, 80, 80)
  fill(color6);
  rect(530, 115, 40 + rectLenght16 / 2, 25, 0, 100, 0, 0);}
  fill(color2);
  rect(530, 140, 60 - rectLenght16 / 3, 25);
  fill(color5);
  arc(515, 165, 150 + rectLenght17 / 2, 150 + rectLenght17 / 2, 360, 90);
  rect(470, 165, 50, 75 + rectLenght17 / 4)
  fill(color3);
  rect(350, 165, 120, 165  - rectLenght16/2, 100, 0, 0, 0);
  if(add_details_value==1){
  fill(color6);
  arc(410, 330 - rectLenght16/2, 123, 123, 180, 360)}
  fill(color5);
  rect(470, 330 - rectLenght16/2, 128, 80 + rectLenght16/2, 0, 0, 0, 100);

  //cerchio
  stroke(color6)
  noFill();
  ellipse(397, 60, 75, 75);
  ellipse(600, 310, 110, 110);

  noStroke()

  fill(color8);
  push()
  translate(397, 60);
  rotate(frameCount + size4);
  ellipse(27, 27, 20, 20);
  pop()

  fill(color2);
  push()
  translate(600, 310);
  rotate(-frameCount * 1.2 + size4);
  ellipse(38, 38, 20, 20);
  pop()

  if (size3 < 4) {
    rectLenght15 = rectLenght15 + rectLenght15_increment;
  } else {
    rectLenght15 = rectLenght15 + rectLenght15_increment * 5;
  }
  if (rectLenght15 > 55 || rectLenght15 < 0) {
    rectLenght15_increment = rectLenght15_increment * -1;
  }

  if (size2 < 4) {
    rectLenght16 = rectLenght16 + rectLenght16_increment;
  } else {
    rectLenght16 = rectLenght16 + rectLenght16_increment * 5;
  }
  if (rectLenght16 > 55 || rectLenght16 < 0) {
    rectLenght16_increment = rectLenght16_increment * -1;
  }

  if (size < 4) {
    rectLenght17 = rectLenght17 + rectLenght17_increment;
  } else {
    rectLenght17 = rectLenght17 + rectLenght17_increment * 5;
  }
  if (rectLenght17 > 55 || rectLenght17 < 0) {
    rectLenght17_increment = rectLenght17_increment * -1;
  }
}

//visual 3
function visual__three__one(color1, color2, color3, color4, color5, color6, color7, color8, size, size2, size3, size4, size5) {
  stroke(color7)
  noFill();
  ellipse(820, 440, 90, 90);

  fill(color7);
  push()
  translate(820, 440);
  rotate(-100 + frameCount / 0.8 + size3);
  ellipse(31, 31, 20, 20);
  pop()

  stroke(color7)
  line(40, 175, 240, 175);

  noStroke();

  if (add_details_value == 1) {
    fill(color2)
    ellipse(150 + rectLenght2 * 1.2, 175, 20, 20)
    ellipse(190 + rectLenght2 * 0.8, 175, 20, 20)
  }

  fill(color8)
  rect(20, 341, 700 + rectLenght2 - rectLengh8, 120, 0, 100, 100, 0)

  fill(color2)
  rect(20, 20, 420 - rectLengh9, 80, 0, 100, 100, 0)

  fill(color1)
  ellipse(20, 402, 85 - size2, 85 - size2)

  ellipse(397 - size2 * 10 - rectLengh9, 60, 63 - size4 * 2, 63 - size4 * 2)

  fill(color6)
  rect(20, 130 - rectLengh9 / 10, 90 + rectLengh9 / 5, 90 + rectLengh9 / 5, 0, 100, 100, 0)

  fill(color8)
  quad(240, quad4y + 70, 240, quad4y - 30, 280, quad4y - 90, 280, quad4y + 10);
  fill(color7)
  quad(280, quad5y + 70, 280, quad5y - 30, 320, quad5y - 90, 320, quad5y + 10);

  //coso a dx
  fill(color2)
  rect(900, 140, 80, 350 - rectLengh9, 40);
  if (add_details_value == 1) {
    fill(color1)
    ellipse(940, 450 - size2 * 4 - rectLengh9, 60 - rectLenght2 / 2, 60 - rectLenght2 / 2)
  }

  rectLengh8 = rectLengh8 + rectLengh8_increment

  if (rectLengh8 > 300 || rectLengh8 < 0) {
    rectLengh8_increment = rectLengh8_increment * -1;
  }

  if (size4 > 5 && rectLenght2 < 50) {
    rectLenght2 = rectLenght2 + 2
  } else if (size4 < 5 && rectLenght2 > 0) {
    rectLenght2 = rectLenght2 - 1
  }

  if (size5 < 5) {
    rectLengh9 = rectLengh9 + rectLengh9_increment;
  } else {
    rectLengh9 = rectLengh9 + rectLengh9_increment * 4;
  }
  if (rectLengh9 > 150 || rectLengh9 < 0) {
    rectLengh9_increment = rectLengh9_increment * -1;
  }
}

function visual__three__two(color1, color2, color3, color4, color5, color6, color7, color8, size, size2, size3, size4, size5) {
  noFill()
  stroke(color5)
  line(620, 350, 884, 350);
  line(950, 410, 950, 450);
  arc(885, 415, 130, 130, 270, 360);

  noStroke()
  fill(color6)
  rect(597, 315, 110 + rectLenght3 * 0.9, 36, 0, 0, 40, 0)
  fill(color4)
  rect(597, 351, 110 - rectLenght3 * 0.7, 100, 0, 20, 0, 0)

  if (add_details_value == 1) {
    fill(color7);
    ellipse(730 + sphereMovement1, 350, 25, 25);
  }

  fill(color4);
  ellipse(880 - sphereMovement1, 350, 25, 25);

  fill(color2);
  ellipse(950, 460, 100 - sphereSize1 / 2, 100 - sphereSize1 / 2);

  //cerchio
  stroke(color5)
  noFill();

  ellipse(680, 450, 75, 75);
  noStroke()
  fill(color3);
  push()
  translate(680, 450);
  rotate(-frameCount * 1.6 - 20 - size3);
  ellipse(26, 26, 20, 20);
  pop()

  //alto dx
  fill(color4)
  rect(217, 100 - rectLenght6, 100, 170 + rectLenght6, 0, 0, 0, 100)

  if (size < 4) {
    rectLenght6 = rectLenght6 + rectLenght6_increment
  } else {
    rectLenght6 = rectLenght6 + rectLenght6_increment * 3
  }

  if (rectLenght6 > 30 || rectLenght6 < 0) {
    rectLenght6_increment = rectLenght6_increment * -1;
  }

  noFill()
  stroke(color5)
  push()
  translate(161, 100);
  rotate(0 + arcRotation2);
  arc(0, 0, 170, 170, 270, 90);
  pop()

  arc(160, 185, 170, 170, 90, 270);
  line(160, 270, 360, 270);

  noStroke()
  fill(color7)
  ellipse(170 + sphereMovement1 * 0.8, 270, 20, 20)

  if (add_details_value == 1) {
    push()
    translate(160, 185);
    rotate(sphere3rotation - 100);
    ellipse(60, 60, 20, 20)
    pop()

    push()
    translate(160, 185);
    rotate(sphere2rotation - 100);
    ellipse(60, 60, 20, 20)
    pop()
  }

  fill(color6)
  push()
  translate(161, 100);
  rotate(0 - arcRotation2 * 0.3);

  arc(0, 0, 150, 150, 270 + size3 * 2, 90 - size3 * 2);
  pop()


  if (size < 4) {
    rectLenght3 = rectLenght3 + rectLenght3_increment;

  } else {
    rectLenght3 = rectLenght3 + rectLenght3_increment * 4;
  }
  if (rectLenght3 > 55 || rectLenght3 < 0) {
    rectLenght3_increment = rectLenght3_increment * -1;
  }

  if (size4 < 4) {
    arcRotation2 = arcRotation2 + arcRotation2_increment
  } else {
    arcRotation2 = arcRotation2 + arcRotation2_increment * 5
  }

  sphereSize1 = sphereSize1 + sphereSize1increment;
  sphereMovement1 = sphereMovement1 + sphereMovement1speed;

  if (sphereSize1 >= 50 || sphereSize1 <= 0) {
    sphereSize1increment = sphereSize1increment * -1;
  }

  if (sphereMovement1 >= 150 || sphereMovement1 <= 0) {
    sphereMovement1speed = sphereMovement1speed * -1;
  }

  if (size4 > 5) {
    sphereMovement1 = sphereMovement1 + sphereMovement1speed * 3;
    sphereSize1 = sphereSize1 + sphereSize1increment * 2;
  }


}

var structureRotation = 0;
var structureRotation_increment = 0.5;

function visual__three__three(color1, color2, color3, color4, color5, color6, color7, color8, size, size2, size3, size4, size5) {
  noFill()
  stroke(color3)
  line(70, 45, 70, 75 + rectLenght12 / 3)
  line(180, 45, 180, 55 + rectLenght12 / 3)
  if (add_details_value == 1) {

    line(130, 45, 130, 65 + rectLenght12 / 3)
    line(230, 45, 230, 45 + rectLenght12 / 3)
  }
  arc(145, 75 + rectLenght12 / 3, 150, 150, 110, 180)
  arc(255, 55 + rectLenght12 / 3, 150, 150, 130, 180)

  if (add_details_value == 1) {
    arc(205, 65 + rectLenght12 / 3, 150, 150, 120, 180)
    arc(305, 45 + rectLenght12 / 3, 150, 150, 140, 180)
  }

  noStroke()
  fill(color2);
  rect(20 + rectLenght12, 20, 250 + rectLenght12 / 3, 25);
  fill(color4);
  ellipse(120, 145 + rectLenght12 / 3, 20 + structureRotation / 10, 20 + structureRotation / 10)
  ellipse(210, 115 + rectLenght12 / 3, 20 + structureRotation / 10, 20 + structureRotation / 10)

  if (add_details_value == 1) {

    ellipse(170, 130 + rectLenght12 / 3, 20 + structureRotation / 10, 20 + structureRotation / 10)
    ellipse(255, 100 + rectLenght12 / 3, 20 + structureRotation / 10, 20 + structureRotation / 10)
  }

  //cerchio sxs
  stroke(color3)
  noFill();
  ellipse(230, 220, 110, 110);

  ellipse(700, 430, 90, 90);

  noStroke()
  fill(color5);
  push()
  translate(230, 220);
  rotate(frameCount * 1.5 + 60 + size3);
  ellipse(40, 40, 20, 20);
  pop()

  fill(color6);
  push()
  translate(700, 430);
  rotate(-frameCount + 60 + size3);
  ellipse(32, 32, 20, 20);
  pop()

  fill(color6);
  rect(830 - rectLenght12, 400, 160 + rectLenght12, 100, 100, 0, 0, 0)


  if (add_details_value == 1) {
    fill(color3);
    push()
    rectMode(CENTER);
    translate(940, 450)
    rotate(size3 * 4)
    rect(0, 0, 100, 100)
    pop()

    fill(color1)
    ellipse(940, 450, 80 - size, 80 - size)
  }

  stroke(color3)
  noFill();
  arc(870, 400, 140, 140, 270, 360)
  line(820, 350 - structureRotation / 3, 870, 330)
  noStroke()

  push()
  fill(color4)
  translate(780 + structureRotation / 4, 330 + 60 - structureRotation);
  rotate(-60 + structureRotation)
  arc(0, 0, 120 + size5 * 2, 120 + size5 * 1.5, 270, 90)
  fill(color2)
  // rotate(-30)
  rect(-100 + size4 * 3, 0, 100 - size4 * 3, 30)
  fill(color6)
  rect(-70 - size4 * 3, -30, 70 + size4 * 3, 30)
  pop()

  if (size2 < 5) {
    rectLenght12 = rectLenght12 + rectLenght12_increment;
  } else {
    rectLenght12 = rectLenght12 + rectLenght12_increment * 4;
  }
  if (rectLenght12 > 30 || rectLenght12 < 0) {
    rectLenght12_increment = rectLenght12_increment * -1;
  }

  if (size4 < 5) {
    structureRotation = structureRotation + structureRotation_increment
  } else {
    structureRotation = structureRotation + structureRotation_increment * 2;
  }
  if (structureRotation >= 60 || structureRotation <= 0) {
    structureRotation_increment = structureRotation_increment * -1;
  }

}

//visual 4
function visual__four__one(color1, color2, color3, color4, color5, color6, color7, color8, size, size2, size3, size4, size5) {
  noStroke()

  fill(color8)
  rect(650, 20, 100, 150 + size / 3 + rectLenght7, 30 + size / 2, 0, 0, 0)

  fill(color5)
  push()
  translate(800, 70)
  rotate(quadRotation2 + quadRotation)
  if (size3 > 7) {
    ruotaQuad()
  }
  rectMode(CENTER)
  rect(0, 0, 100, 100)
  pop()

  rectLenght7 = rectLenght7 + rectLenght7_increment;

  if (rectLenght7 > 30 || rectLenght7 < 0) {
    rectLenght7_increment = rectLenght7_increment * -1;
  }

  quadRotation2 = quadRotation2 + quadRotation_increment;

  fill(color1)
  ellipse(800, 70, 80 - size2 / 2, 80 - size2 / 2)

  //rombi
  noStroke()
  fill(color5)
  quad(740 - dimquad, quad3y + 80, 680 - dimquad, quad3y + 40, 780 + dimquad, quad3y + 40, 850 + dimquad, quad3y + 80);
  fill(color8)
  quad(740 + dimquad, quad1y + 30, 680 + dimquad, quad1y - 10, 780 - dimquad, quad1y - 10, 850 - dimquad, quad1y + 30);
  fill(color6)
  quad(740, quad2y, 680, quad2y - 40, 780, quad2y - 40, 850, quad2y);

  //collina a dx
  noFill()
  stroke(color7)
  arc(850, 130, 180, 180, 180, 360);
  line(760, 130, 760, quad2y - 20);
  line(940, 130, 940, 140);

  noStroke()
  if (add_details_value == 1) {
    fill(color2)
    //abaco dx
    noStroke()
    push()
    translate(850, 130);
    rotate(sphere1rotation);
    ellipse(63, 63, 20 + ellipseSize2 * 0.3, 20 + ellipseSize2 * 0.3)
    pop()

    push()
    translate(850, 130);
    rotate(sphere2rotation);
    ellipse(63, 63, 20 - ellipseSize2 * 0.4, 20 - ellipseSize2 * 0.4)
    pop()

    push()
    translate(850, 130);
    rotate(sphere3rotation);
    ellipse(63, 63, 20 + ellipseSize2 * 0.5, 20 + ellipseSize2 * 0.5)
    pop()
  }

  ellipseSize2 = ellipseSize2 + ellipseSize2_increment;
  if (ellipseSize2 > 10 || ellipseSize2 < 0) {
    ellipseSize2_increment = ellipseSize2_increment * -1;
  }

  fill(color5)
  rect(20, 265 + rectLenght, 100, 76 - rectLenght, 100, 0, 0, 0)

  if (add_details_value == 1) {
    fill(color4)
    rect(20, 460, 60 + rectLenght, 30, 0, 0, 40, 0)
  }

  //rombi
  noStroke()
  fill(color7)
  quad(100, quad1y + 150, 40, quad1y + 110, 140, quad1y + 110, 210, quad1y + 150);
  fill(color3)
  quad(100, quad3y + 120, 40, quad3y + 80, 140, quad3y + 80, 210, quad3y + 120);

  if (size3 < 3) {
    rectLenght = rectLenght + rectLenght_increment
  } else {
    rectLenght = rectLenght + rectLenght_increment * 3;
  }
  if (rectLenght > 50 || rectLenght < 0) {
    rectLenght_increment = rectLenght_increment * -1;
  }

}

function visual__four__two(color1, color2, color3, color4, color5, color6, color7, color8, size, size2, size3, size4, size5) {
  if (add_details_value == 1) {
    fill(color6)
    quad(750 + quad5y, quad5y + 55, 750 + quad5y, quad5y - 45, 790 + quad5y, quad5y - 105, 790 + quad5y, quad5y - 15);
  }

  fill(color4)
  quad(900, quad4y + 55, 900, quad4y - 45, 940, quad4y - 105, 940, quad4y - 15);

  noFill()
  stroke(color5)
  line(835, 25, 835, quad4y - 70)
  arc(880, quad4y - 70, 90, 90, 90, 180);
  line(880, quad4y - 25, 920, quad4y - 25)

  noStroke()
  fill(color6)
  ellipse(835, 60, 20 - size2 * 0.7, 20 - size2 * 0.7)
  ellipse(835, 90, 20 + size2 * 0.7, 20 + size2 * 0.7)

  fill(color5)
  rect(780, 20, 130 - rectLenght10 / 2, 20)
  fill(color2)
  rect(910 - rectLenght10 / 2, 20, 90 + rectLenght10 / 2, 20)

  fill(color7)
  rect(705 - rectLenght10 / 2, 255, 100, 60, 0, 50, 50, 0)
  fill(color1)
  ellipse(775 - rectLenght10 / 2, 285, 43 - rectLenght10 / 5 - size5, 43 - rectLenght10 / 5 - size5)

  stroke(color5)
  noFill();
  ellipse(925, 270, 100, 100);

  noStroke()
  fill(color3);
  push()
  translate(925, 270);
  rotate(frameCount * 1.5 + 60 + size3);
  ellipse(35, 35, 20, 20);
  pop()

  fill(color2)
  rect(160 - rectLenght10 / 2, 290, 100 + rectLenght10 / 2, 50, 100, 0, 0, 100)
  fill(color1)
  ellipse(185 - rectLenght10 / 2 + size3, 315, 35 - size2, 35 - size2)
  fill(color5)
  rect(227, 270, 90, 80 + rectLenght11, 100, 0, 0, 0)
  fill(color7)
  rect(227, 350 - rectLenght11, 90, 80 + rectLenght11)
  fill(color3)
  rect(227 - rectLenght11 / 2, 420, 90 + rectLenght11, 30)

  //rombi sx
  fill(color6)
  quad(140, quad5y + 55 + 260, 140, quad5y - 45 + 260, 100, quad5y - 105 + 260, 100, quad5y - 15 + 260);
  fill(color4)
  quad(110, quad4y + 55 + 260, 110, quad4y - 45 + 260, 70, quad4y - 105 + 260, 70, quad4y - 15 + 260);
  fill(color5)
  quad(80, quad5y + 55 + 260, 80, quad5y - 45 + 260, 40, quad5y - 110 + 260, 40, quad5y - 15 + 260);

  //cerchio sxs
  if (add_details_value == 1) {
    stroke(color5)
    noFill();
    ellipse(130, 340, 80, 80);

    noStroke()
    fill(color3);
    push()
    translate(130, 340);
    rotate(frameCount * 1.5 + 80 + size3);
    ellipse(27, 27, 20, 20);
    pop()
  }

  //triangolini

  fill(color8)
  push()
  translate(740, 60);
  rotate(30 - frameCount + size);
  triangle(10, 3, 0, 20, 20, 20);
  pop()

  fill(color3)
  push()
  translate(720, 100);
  rotate(20 + frameCount + size3);
  triangle(20, 3, 10, 20, 30, 20);
  pop()

  if (add_details_value == 1) {
    fill(color2)
    push()
    translate(700, 100);
    rotate(frameCount - size2);
    triangle(20, 3, 10, 20, 30, 20);
    pop()

    fill(color4)
    push()
    translate(700, 50);
    rotate(30 + frameCount + size);
    triangle(10, 3, 0, 20, 20, 20);
    pop()

    fill(color4)
    push()
    translate(710, 130);
    rotate(55 - frameCount + size3);
    triangle(20, 3, 10, 20, 30, 20);
    pop()

    fill(color8)
    push()
    translate(740, 130);
    rotate(60 - frameCount + size);
    triangle(10, 3, 0, 20, 20, 20);
    pop()

    fill(color6)
    push()
    translate(710, 120);
    rotate(90 - frameCount + size4);
    triangle(15, 3, 5, 20, 25, 20);
    pop()
  }

  fill(color5)
  push()
  translate(700, 80);
  rotate(55 - frameCount + size3);
  triangle(15, 3, 5, 20, 25, 20);
  pop()

  fill(color7)
  push()
  translate(750, 120);
  rotate(90 + frameCount + size);
  triangle(15, 3, 5, 20, 25, 20);
  pop()

  fill(color3)
  push()
  translate(740, 160);
  rotate(60 + frameCount + size);
  triangle(10, 3, 0, 20, 20, 20);
  pop()

  if (size3 < 4) {
    rectLenght11 = rectLenght11 + rectLenght11_increment;

  } else {
    rectLenght11 = rectLenght11 + rectLenght11_increment * 2;
  }
  if (rectLenght11 >= 25 || rectLenght11 <= 0) {
    rectLenght11_increment = rectLenght11_increment * -1;
  }

  if (size < 4) {
    rectLenght10 = rectLenght10 + rectLenght10_increment;

  } else {
    rectLenght10 = rectLenght10 + rectLenght10_increment * 5;
  }
  if (rectLenght10 >= 55 || rectLenght10 <= 0) {
    rectLenght10_increment = rectLenght10_increment * -1;
  }

}

function visual__four__three(color1, color2, color3, color4, color5, color6, color7, color8, size, size2, size3, size4, size5) {
  stroke(color3)
  noFill()
  arc(860, 40, 180, 180, 90, 180)
  arc(120, 380, 160, 160, 255, 90)
  noStroke()

  fill(color4)

  if (add_details_value == 1) {
    push()
    translate(860, 40);
    rotate(sphere3rotation * 0.5 + 300);
    ellipse(63, 63, 20 + rectLenght4 / 4, 20 + rectLenght4 / 4)
    pop()
  }

  push()
  translate(860, 40);
  rotate(130);
  ellipse(63, 63, 20 + rectLenght4 / 4, 20 + rectLenght4 / 4)
  pop()

  fill(color3)
  quad(860, quad5y + 45 - 28, 860, quad5y - 45 - 38, 910, quad5y - 105 - 38, 910, quad5y - 15 - 28);
  fill(color5);
  ellipse(940, 130, 90 + rectLenght4, 90 + rectLenght4)

  if (add_details_value == 1) {
    noFill()
    stroke(color8)
    push()
    translate(940, 130)
    rotate(frameCount + size3)
    arc(0, 0, 110 + rectLenght4, 110 + rectLenght4, 0, 90)
    pop()

    push()
    translate(940, 130)
    rotate(frameCount + size3)
    arc(0, 0, 110 + rectLenght4 * 1.2, 110 + rectLenght4 * 1.2, 180, 270)
    pop()
  }

  noStroke()
  fill(color6)
  rect(20, 360, 100, 150 + size3, 0, 0, 100, 100)
  fill(color1)
  ellipse(70, 460 + size3, 80 - rectLenght4 - size5, 80 - rectLenght4 - size5)
  fill(color4)
  rect(20, 290 - rectLenght13 / 2, 28, 70)
  if (add_details_value == 1) {
    fill(color2)
    rect(48, 200 + rectLenght13 * 1.2, 28, 120)
  }
  fill(color3)
  rect(76, 268 + rectLenght13 * 0.7, 28, 70)

  fill(color4)
  push()
  translate(120, 380);
  rotate(sphere1rotation * 0.5 + 140);
  ellipse(55, 55, 20, 20)
  pop()

  if (add_details_value == 1) {
    push()
    translate(120, 380);
    rotate(sphere3rotation * 0.5 + 220);
    ellipse(55, 55, 20, 20)
    pop()

    push()
    translate(120, 380);
    rotate(sphere2rotation * 0.5 + 170);
    ellipse(55, 55, 20, 20)
    pop()
  }

  fill(color6)
  rect(700, 40 - rectLenght4 * -1, 60, 145 + rectLenght4 * -1, 0, 50, 0, 0)
  fill(color2)
  rect(680, 80 - rectLenght4, 30, 100 + rectLenght4, 0, 0, 0, 50)

  if (add_details_value == 1) {
    fill(color7)
    arc(700, 185, 120, 120, 360, 1 + rectLenght14)
  }
  fill(color8)
  arc(700, 185, 120, 120, 180, 360)



  if (size3 < 5) {
    rectLenght4 = rectLenght4 + rectLenght4_increment;
  } else {
    rectLenght4 = rectLenght4 + rectLenght4_increment * 5;
  }
  if (rectLenght4 > 25 || rectLenght4 < 0) {
    rectLenght4_increment = rectLenght4_increment * -1;
  }

  if (size4 < 5) {
    rectLenght13 = rectLenght13 + rectLenght13_increment;
  } else {
    rectLenght13 = rectLenght13 + rectLenght13_increment * 2;
  }
  if (rectLenght13 > 35 || rectLenght13 < 0) {
    rectLenght13_increment = rectLenght13_increment * -1;
  }

  if (size3 < 5) {
    rectLenght14 = rectLenght14 + rectLenght14_increment;
  } else {
    rectLenght14 = rectLenght14 + rectLenght14_increment * 2;
  }
  if (rectLenght14 > 180 || rectLenght14 < 1) {
    rectLenght14_increment = rectLenght14_increment * -1;
  }
}

function movingBalls(transx, transy, x, y, radius, rotation, init, final, size) {
  push()
  translate(transx, transy);
  rotate(rotation);
  ellipse(x, y, radius, radius)
  pop()

  if (size > 20) {
    if (rotation < final) {
      rotation = rotation + 3;
    }
  } else if (size < 20) {
    if (rotation > init) {
      rotation = rotation - 3;
    }
  }
}

function movimentoRombi(size) {
  if (size > 3) {
    if (quad2y > 250) {
      quad2y = quad2y - 2;
    }
    if (quad1y > 250) {
      quad1y = quad1y - 4;
    }
    if (quad3y > 250) {
      quad3y = quad3y - 3;
    }
    if (quad4y > 150) {
      quad4y = quad4y - 4;
    }
    if (quad5y < 210) {
      quad5y = quad5y + 3;
    }
  } else if (size < 3) {
    if (quad1y < 300) {
      quad1y = quad1y + 4;
    }
    if (quad2y < 275) {
      quad2y = quad2y + 2;
    }
    if (quad3y < 275) {
      quad3y = quad3y + 3;
    }
    if (quad4y < 180) {
      quad4y = quad4y + 4;
    }
    if (quad5y > 180) {
      quad5y = quad5y - 3;
    }
  }
}

function movimentoSphere(size) {
  if (size > 3.5) {
    if (sphere1rotation < 330) {
      sphere1rotation = sphere1rotation + 3;
    }
    if (sphere2rotation < 330) {
      sphere2rotation = sphere2rotation + 2;
    }

    if (sphere1rotation < 330) {
      sphere3rotation = sphere3rotation + 1;
    }
    if (sphere4rotation < 410) {
      sphere4rotation = sphere4rotation + 2;
    }
    if (sphere5rotation < 410) {
      sphere5rotation = sphere5rotation + 3;
    }
    if (sphere6rotation < 410) {
      sphere6rotation = sphere6rotation + 1;
    }
  } else if (size < 3.5) {
    if (sphere1rotation > 160) {
      sphere1rotation = sphere1rotation - 3;
    }
    if (sphere2rotation > 200) {
      sphere2rotation = sphere2rotation - 2;
    }
    if (sphere3rotation > 250) {
      sphere3rotation = sphere3rotation - 1;
    }
    if (sphere4rotation > 230) {
      sphere4rotation = sphere4rotation - 2;
    }
    if (sphere5rotation > 280) {
      sphere5rotation = sphere5rotation - 3;
    }
    if (sphere6rotation > 310) {
      sphere6rotation = sphere6rotation - 1;
    }
  }
}

function ruotaQuad() {
  if (quadRotation < 91) {
    quadRotation = quadRotation + 4;
  }
  if (quadRotation > 90) {
    quadRotation = 0;
  }
}

function sound_two(song) {
  setInterval(function() {
    song.setVolume(0.4);
    if (song.isPlaying()) {
      song.pause();
    } else {
      song.play();
    }
  }, 10000);
}

function sound_three(song) {
  setInterval(function() {
    if (song.isPlaying()) {
      song.pause();
    } else {
      song.play();
    }
  }, 3500);
}

function sound_four(song) {
  song.setVolume(1);
  setInterval(function() {
    if (song.isPlaying()) {
      song.pause();
    } else {
      song.play();
    }
  }, 6500);
}

function sound_five(song) {
  song.setVolume(1);
  setInterval(function() {
    if (song.isPlaying()) {
      song.pause();
    } else {
      song.play();
    }
  }, 8500);
}


function toggleDetails() {
  if (button__two__value < 2) {
    button__two__value += 1;
  } else {
    button__two__value = 1;
  }
  if (button__two__value == 1) {
    document.querySelector(".button__two").classList.remove("button__two_selected");
  } else if (button__two__value == 2) {
    document.querySelector(".button__two").classList.add("button__two_selected");
  }
}

function button_one_clicked() {
  let button_one = document.querySelector(".button_change_one")

  if (button_change_one_value < 3) {
    button_change_one_value += 1;
  } else {
    button_change_one_value = 1;
  }

  if (button_change_one_value == 1) {
    button_one.classList.remove("button_change_one_two");
    button_one.classList.remove("button_change_one_three");
  } else if (button_change_one_value == 2) {
    button_one.classList.add("button_change_one_two");
  } else if (button_change_one_value == 3) {
    button_one.classList.add("button_change_one_three");
  }

}

function button_two_clicked() {
  let button_two = document.querySelector(".button_change_two")

  if (button_change_two_value < 3) {
    button_change_two_value += 1;
  } else {
    button_change_two_value = 1;
  }

  if (button_change_two_value == 1) {
    button_two.classList.remove("button_change_two_two");
    button_two.classList.remove("button_change_two_three");
  } else if (button_change_two_value == 2) {
    button_two.classList.add("button_change_two_two");
  } else if (button_change_two_value == 3) {

    button_two.classList.add("button_change_two_three");
  }
}

function button_three_clicked() {
  let button_three = document.querySelector(".button_change_three")

  if (button_change_three_value < 3) {
    button_change_three_value += 1;
  } else {
    button_change_three_value = 1;
  }

  if (button_change_three_value == 1) {
    button_three.classList.remove("button_change_three_two");
    button_three.classList.remove("button_change_three_three");
  } else if (button_change_three_value == 2) {
    button_three.classList.add("button_change_three_two");
  } else if (button_change_three_value == 3) {
    button_three.classList.add("button_change_three_three");
  }

}


function button_change_base_clicked() {
  let button_change_base = document.querySelector(".button_change_base")

  if (button_change_base_value < 3) {
    button_change_base_value += 1;
  } else {
    button_change_base_value = 1;
  }

  if (button_change_base_value == 1) {
    sound__base_one.loop();
    sound__base_three.stop();
    button_change_base.classList.remove("button_change_base_two");
    button_change_base.classList.remove("button_change_base_three");
    document.querySelector(".light_one").classList.add("light_active");
    document.querySelector(".light_two").classList.remove("light_active");
    document.querySelector(".light_three").classList.remove("light_active");

  } else if (button_change_base_value == 2) {
    sound__base_two.loop();
    sound__base_one.stop();
    button_change_base.classList.add("button_change_base_two");
    document.querySelector(".light_two").classList.add("light_active");
    document.querySelector(".light_one").classList.remove("light_active");

  } else if (button_change_base_value == 3) {
    sound__base_three.loop();
    sound__base_two.stop();
    button_change_base.classList.add("button_change_base_three");
    document.querySelector(".light_two").classList.remove("light_active");
    document.querySelector(".light_three").classList.add("light_active");
  }

}

//visual 1 -> COLORE
function visual__one__one() {
  color1 = color__light_yellow;
  color2 = color__pink;
  color3 = color__light_pink;
  color4 = color__green;
  color5 = color__indigo;
  color6 = color__yellow;
  color7 = color__blue;
  color8 = color__white;
}

function visual__one__two() {
  color1 = color__light_green;
  color2 = color__light_orange;
  color3 = color__orange;
  color4 = color__light_blue;
  color5 = color__blue;
  color6 = color__green;
  color7 = color__white;
  color8 = color__light_yellow;
}

function visual__one__three() {
  color1 = color__light_blue;
  color2 = color__white;
  color3 = color__blue;
  color4 = color__hot_pink;
  color5 = color__light_pink;
  color6 = color__yellow;
  color7 = color__pink;
  color8 = color__indigo;
}

function visual__one__four() {
  color1 = color__light_orange;
  color2 = color__blue;
  color3 = color__orange;
  color4 = color__purple;
  color5 = color__hot_pink;
  color6 = color__light_blue;
  color7 = color__green;
  color8 = color__indigo;
}

function visual__one__five() {
  color1 = color__light_pink;
  color2 = color__light_green;
  color3 = color__hot_pink;
  color4 = color__green;
  color5 = color__dark_green;
  color6 = color__white;
  color7 = color__light_yellow;
  color8 = color__pink;
}

//function fetchData() {
// $.ajax({
//	 url: "https://dog.ceo/api/breeds/list/all",
//	 type: 'GET',
//	 success: function(res) {
//		 songsArray = [
//			 amplitude__one,
//			 amplitude__two,
//			 amplitude__three,
//			 amplitude__four,
//			 amplitude__five,
//		 ]
//		 sound__one.loop();
//		 sound_two(sound__two);
//		 sound_three(sound__three);
//		 sound_four(sound__four);
//		 sound_five(sound__five)
//
//		 isLoaded = true;
//		 return (res);
//
//	 }
// });
//};