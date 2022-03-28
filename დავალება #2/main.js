/* მოგესალმებით მეგობრებო ეს არის დავალება ნომერი 2. დავალების ყველა ეტაპი აღწერილია კომენტარის სახით
 * 1) შედარება
 * 3) If პირობები
 * 4) ლოგიკური ოპერატორები
 * 5) Switch
 */

// <------- შედარება ---------#### //

const num1 = 0;
const boolean1 = false;
const num2 = 5;
const emptyString = "";
const boolean2 = false;
const text = "I'm Text";
const text2 = "0";

// ჩამოწერეთ ცვლადები რომელი არის true რომელი false
// ჩამოწერეთ ზეპირად!
// მაგ. [1, 2, 3, 4]

// >>> კოდი დაწერეთ აქ

const isFalse = [6, 9, 10, 23];
const isTrue = [2, 4, 6, 8];

//

// შეცვალეთ ერთი ასო რომ მიიღოთ ჭეშმარიტი დებულება
// მოკლედ ახსენით მუშაობის პრინციპი თუ რატომ იმოქმედა

console.log("abc" < "abd"); // c-ის char code ნაკლებია d-ის char code-ზე
console.log(2 != "004"); // NaN-თან შედარება ყოველთვის false-ს დააბრუნებს.

// <------- ლოგიკური ოპერატორები ---------#### //

// შეამოწმეთ სრულ წლოვნებაზე და თუ მეტი ან ტოლია
// 18 წელზე შესთავაზეთ სასმელი

// >>> კოდი დაწერეთ აქ
let age = 20;
if (age >= 18) {
	console.log("Here's your drink lad.");
} else {
	console.log("You're not old enough to drink!");
}
//

// მოიფიქრეთ 2 if else-ის მაგალითი თქვენით

// >>> კოდი დაწერეთ აქ
let isHungry = true;
if (isHungry) {
	console.log("This pizza is Yummy!");
} else {
	console.log("Your not hungry.");
}
//

// გადაიყვანეთ If ternary operator-ში მაგ. (true ? 1 : 2)

// >>> კოდი დაწერეთ აქ
console.log(isHungry ? "This pizza is Yummy!" : "Your not hungry.");
//

/*
  ჩვენ გვაქვს ოთხი ფერი რომელთაც აქვთ
  კონკრეტული ციფრები მინიჭებული (თეთრი=4, 
  წითელი=3, მწვანე=2, ლურჯი=1, შავი=0, 
  სხვა ყველა ფერი=undefined)
*/

let colorId = 3;

// დაწერეთ if ისე, რომ როდესაც ჩვენ
// შევცვლით მაღლა განსაზღვრულ ცვლადს გავიგოთ
// ამ აიდის ფერი (ფერი გამოიტანეთ კონსოლში ტექსტის
// სახით)

// >>> კოდი დაწერეთ აქ

if (colorId == 0) {
	console.log("black");
} else if (colorId == 1) {
	console.log("blue");
} else if (colorId == 2) {
	console.log("green");
} else if (colorId == 3) {
	console.log("red");
} else {
	console.log(undefined);
}
//

// გადაიყვანეთ If ternary operator-ში მაგ. (true ? 1 : 2)

// >>> კოდი დაწერეთ აქ
console.log(
	colorId == 0
		? "black"
		: colorId == 1
		? "blue"
		: colorId == 2
		? "green"
		: colorId == 3
		? "red"
		: undefined
);

//

// <------- დავალება Switch ---------#### //

// ცადეთ იგივე გააკეთოთ რაც წინა დავალებაში
// ოღონდ ამჯერად Switch-ის დახმარებით

// >>> კოდი დაწერეთ აქ
  switch(colorId){
    case 0:
      console.log("black");
      break;
    case 1:
      console.log("blue");
      break;
    case 2:
      console.log("green");
    case 3:
      console.log("red");
      break;
    default:
      console.log(undefined);
      break;
  }
//

//  ||
//  ||
//  ||
// \  /
//  \/

/*
    ეს დავალება რომ ნახოთ გამოიყენეთ HTML,
    ჩვენი მიზანია ავაწყოთ ჩეთ ბოტი რომელთანაც ვისაუბრებთ
    როგორც ხედავთ დაბლა გამზადებული მაქვს კოდის გარკვეული
    ნაწილი ეს არის ფუნქცია რომელსაც მომავალში გავივლით
    კონკრეტულად ეს ფუნქცია არის რეკურსიული, რეკურსია
    არის პროცესი როდესაც ფუნქცია თავის თავს იძახებს ჩვენ კი
    იმიტომ ვიყენებთ ამას, რომ ყოველ ჯერზე როდესად რაღაცის თქმა
    დაგვჭირდება მზად იყოს სასაუბროდ ჩვენი ბოტი

    // კოდში მოათავსეთ Switch რომლითაც დააპროგნოზებთ სასაუბრო
    // სიტყვებს ააწყობთ მინი ჩათ ბოტს.
    მაგ. 
    """"
      case "გამარჯობა":
        alert("გამარჯობა");
        break;
    """"
*/
const bot = document.getElementById("bot");
bot.addEventListener("click", myFun());

function myFun() {
	let x = prompt("მე მზად არ ვარ პასუხისათვის");

	// >>> კოდი დაწერეთ აქ გამოიყენეთ Switch
  switch(x){
    case "გამარჯობა":
      alert("გამარჯობა");
      break;
    case "ნახვამდის":
      alert("ნახვამდის");
      break;
    case "რა გქვია?":
      let name = prompt("საუკეთესო ჩეტ ბოტი! შენ რა გქვია?");
      alert("გამარჯობა " + name);

      break;
    default:
      break;
  }
	//

	// რეკურსიული ფუნქცია
	myFun();
}
