console.log("this is both sides");

if (Meteor.isClient){
	console.log("this is client");
	Template.message.helpers({
		test:"testtest"
	})

	Template.body.helpers({
		testArray: _.range(0,10),
		msg: [
			 {n:1,text:"hi text1 (m1)"},
			 {n:2,text:"hi text2 (m2)"},
			 {n:3,text:"hi text3 (m3)"},
			 {n:4,text:"hi text4 (m4)"}
			 ]

	})
}

if (Meteor.isServer){
	console.log("this is server");
}