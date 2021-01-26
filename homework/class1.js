var course = "1) FDSI 103 <br>";
document.write(course);

var student = "2) Trae <br>";
document.write(student);

var grade = "3) 100% <br>";
document.write(grade);

var completed = "4)"+ true + "<br>";
document.write(completed);

let assignment = "5) Assignment 1 <br>";
document.write(assignment);

var goodGrade = "6) 6.6 pts <br>";
document.write(goodGrade);

var average = "7) 5.0 pts <br>";
document.write(average);

var poor = "8) 3.0 pts <br>";
document.write(poor);

var fail = "9) 0 pts <br>";
document.write(fail);

var greeting = "10) Hello!!!<br>";
document.write(greeting);

const powerPoint = "11) syllabus FSDI 103 <br>";
document.write(powerPoint);

var bonusPts = "12) Make up assignment <br>";
document.write(bonusPts);

var band = "13) Rise Against <br>";
document.write(band);

var band = "14) Metallica <br>";
document.write(band);

var number = "15)"+ 22 + "<br>";
document.write(number);

var shoes = "16) Nike <br>";
document.write(shoes);

var price = "17) $" + 100 + "<br>";
document.write(price);

var tax = "18) " + 8.25 + "% <br>";
document.write(tax);

var total = "19) "+ 108.25 + "<br>";
document.write(total);

var last = "20) last one <br>";
document.write(last);

for(var x=2; x<=100;x+=2){
    document.write(x + " " );
}


var sunny = "<br>Sunny weather today.";
var rain = "<br>Rainy weather today.";
var cloudy = "<br>Cloudy weather today";
var unknown = "<br>Today's weather is unknown. Check back later."
var weather = 1;

if(weather == 0){
    document.write(sunny);
}else if(weather == 1){
    document.write(rain);
} else if(weather == 2){
    document.write(cloudy);
}else{
    document.write(unknown);
}