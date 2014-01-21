var vicNumber = prompt('How many victims are there: ');

console.log(vicNumber);

var victimInfo =[];

function victims(address,fullname,phone){
	this.address = address;
	this.fullname = name;
	this.phone = phone;
}


for (i=0;i<vicNumber;i++){
	var victim = new victims();
		victim.address = prompt('Please enter their address: ');
		victim.fullname = prompt('Please enter their name: ');
		victim.phone = prompt('Please enter their phone: ');
	victimInfo.push(victim);
};

console.log(victimInfo);


var volNumber = prompt('How many volunteers do you have: ');
console.log(volNumber);

var volunteerInfo =[];

function volunteers(address,fullname,phone){
	this.address = address;
	this.fullname = name;
	this.phone = phone;
}


for (i=0;i<volNumber;i++){
	var volunteer = new volunteers();
		volunteer.address = prompt('Please enter their address: ');
		volunteer.fullname = prompt('Please enter their name: ');
		volunteer.phone = prompt('Please enter their phone: ');
	volunteerInfo.push(volunteer);
};

console.log(volunteerInfo);

//variables to hold lists of victims and volunteers
var volNames = [];
var vicNames = [];

for (i=0;i<victimInfo.length;i++){
	vicNames.push(victimInfo[i].fullname);
}
for (i=0;i<volunteerInfo.length;i++){
	volNames.push(volunteerInfo[i].fullname);
}


alert('The total number of victims are: ' + victimInfo.length +
	'\nThe total number of volunteers are: ' + volunteerInfo.length +
	'\nThe victims are: ' + vicNames +
	'\nThe volunteers are: ' + volNames);











