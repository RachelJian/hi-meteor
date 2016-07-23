console.log("this is both sides");

if (Meteor.isClient){
	console.log("this is client");
	Template.message.helpers({
		test:"testtest"
	})

	Template.body.helpers({
		testArray: _.range(0,10),
		msg: ["hi text1 (m1)",
			 "hi text2 (m2)",
			 "hi text3 (m3)",
			 "hi text4 (m4)"]

	})
}

if (Meteor.isServer){
	console.log("this is server");
}