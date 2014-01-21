// var vicNumber = prompt('How many victims are there: ');

// console.log(vicNumber);

// var victimInfo =[];

// function victims(address,fullname,phone){
// 	this.address = address;
// 	this.fullname = name;
// 	this.phone = phone;
// }


// for (i=0;i<vicNumber;i++){
// 	var victim = new victims();
// 		victim.address = prompt('Please enter their address: ');
// 		victim.fullname = prompt('Please enter their name: ');
// 		victim.phone = prompt('Please enter their phone: ');
// 	victimInfo.push(victim);
// };

// console.log(victimInfo);


// var volNumber = prompt('How many volunteers do you have: ');
// console.log(volNumber);

// var volunteerInfo =[];

// function volunteers(address,fullname,phone){
// 	this.address = address;
// 	this.fullname = name;
// 	this.phone = phone;
// }


// for (i=0;i<volNumber;i++){
// 	var volunteer = new volunteers();
// 		volunteer.address = prompt('Please enter their address: ');
// 		volunteer.fullname = prompt('Please enter their name: ');
// 		volunteer.phone = prompt('Please enter their phone: ');
// 	volunteerInfo.push(volunteer);
// };

// console.log(volunteerInfo);

// //variables to hold lists of victims and volunteers
// var volNames = [];
// var vicNames = [];

// for (i=0;i<victimInfo.length;i++){
// 	vicNames.push(victimInfo[i].fullname);
// }
// for (i=0;i<volunteerInfo.length;i++){
// 	volNames.push(volunteerInfo[i].fullname);
// }


// alert('The total number of victims are: ' + victimInfo.length +
// 	'\nThe total number of volunteers are: ' + volunteerInfo.length +
// 	'\nThe victims are: ' + vicNames +
// 	'\nThe volunteers are: ' + volNames);


///////////////////////////////////////////// Start of Bonus I //////////////////////////////////////////////

var victimInfo =[];

function victims(address,fullname,phone){
	this.address = address;
	this.fullname = name;
	this.phone = phone;
}

var keepGoing = true;

while (keepGoing === true){
	var victim = new victims();
		victim.address = prompt('Please enter Victim\'s address: ');
		victim.fullname = prompt('Please enter Victim\'s name: ');
		victim.phone = prompt('Please enter Victim\'s phone: ');
		keepGoing = confirm('Do you have any more people? Hit ok: ');
		console.log(keepGoing);
		victimInfo.push(victim);
		
};

console.log(victimInfo);


var volunteerInfo =[];

function volunteers(address,fullname,phone){
	this.address = address;
	this.fullname = name;
	this.phone = phone;
}

var keepGoingvol = true;

while (keepGoingvol === true){
	var volunteer = new volunteers();
		volunteer.address = prompt('Please enter the Volunteer\'s address: ');
		volunteer.fullname = prompt('Please enter the Volunteer\'s name: ');
		volunteer.phone = prompt('Please enter the Volunteer\'s phone: ');
		keepGoingvol = confirm('Do you have any more people? Hit ok: ');
		console.log(keepGoingvol);
		volunteerInfo.push(volunteer);
		
};


var personInNeed = prompt('Please enter the name of someone in need: ');
var matchingAddress = "";

for (var i = 0; i < victimInfo.length; i++) {
	if(victimInfo[i].fullname===personInNeed){
		matchingAddress = victimInfo[i].address;
	}
};

var volAddressArray = [];

for (var i = 0; i < volunteerInfo.length; i++) {
	if(matchingAddress===volunteerInfo[i].address){
		volAddressArray.push(volunteerInfo[i].fullname);
	}
};

alert('The following people are available: '+volAddressArray);

console.log(volunteerInfo);






