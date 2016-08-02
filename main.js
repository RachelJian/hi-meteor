// console.log("this is both sides");
Message = new Mongo.Collection("message");

// sampleMessages = [
// 	{text:"hi text1 (m1)",from:"db"},
// 	{text:"hi text2 (m2)",from:"db"},
// 	{text:"hi text3 (m3)",from:"db"},
// 	{text:"hi text4 (m4)",from:"db"}
// 	 ]


if (Meteor.isClient){
	// console.log("this is client");

	Template.body.helpers({
		msg: function(){
			return(Message.find({},{sort:{createdAt: -1}}))

		}
		
		// msg: [
		// 	 {n:1,text:"hi text1 (m1)"},
		// 	 {n:2,text:"hi text2 (m2)"},
		// 	 {n:3,text:"hi text3 (m3)"},
		// 	 {n:4,text:"hi text4 (m4)"}
		// 	 ]

	})
		Template.body.events({
			"change #inputMsg": function(e,t){

				// console.log("change #inputMsg");
				// console.log($(e.target).val());
				
				msg = $(e.target).val();
				$(e.target).val("");
				msgData = {
					text:msg,
					createdAt: new Date,
				};
				// console.log(msgData);
				Message.insert(msgData);

			}
		})

}

// if (Meteor.isServer){
//  	console.log("this is server");
//  	if (Message.find().count() === 0){
// 		for (i in sampleMessages){
// 		  Message.insert(sampleMessages[i]);
// 		} 
// 	}

// }




