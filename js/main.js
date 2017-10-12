//Создать массив объектов. В каждом объекте должа содержаться информация о человеке: имя, пол, год рождения. Объектов должно быть 5-10.
//
var object = [{
	name: 'Anastasia',
	sex: 'female',
	dateOfBirth: 1990
},{
	name: 'Kirill',
	sex: 'male',
	dateOfBirth: 1988
},{
	name: 'Dmitry',
	sex: 'male',
	dateOfBirth: 1999
},{
	name: 'Oleg',
	sex: 'male',
	dateOfBirth: 2000
},{
	name: 'Helen',
	sex: 'female',
	dateOfBirth: 1984 
},{
	name: 'Boris',
	sex: 'male',
	dateOfBirth: 2005
}];

//1) посчитать средний возраст
//
//2) отпределить представителей какого пола больше
//
function everAge(arr){
	let date = new Date();
	let currYear = date.getFullYear();
	let everAge = 0;
	let maleCount = 0;
	let femaleCount = 0;
	let summOfAges = 0;
	let countOfPersons = 0;
	let age = 0;
	
	for(var i = 0; i < arr.length; i++){
		countOfPersons++;
		age = currYear - arr[i].dateOfBirth;
		summOfAges += age;
	}
	everAge = summOfAges / countOfPersons;
	console.log('Middle age is: ' + everAge);
};

function countOfMaleAndFemale(arr){
	let maleCount = 0;
	let femaleCount = 0;
	let moreMale = 'Мужчин больше!';
	let moreFemale = 'Женщин больше)))'
		
	for(var i = 0; i < arr.length; i++){
		if(arr[i].sex === 'male'){
			maleCount++;
		}else {
			femaleCount++;
		}
	}
	if(maleCount > femaleCount){
		console.log(moreMale);
	}else {
		console.log(moreFemale);
	}
	
};

function dz(){
	everAge(object);
	countOfMaleAndFemale(object);

};

dz();



