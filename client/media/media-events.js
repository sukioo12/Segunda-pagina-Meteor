Template.media.events({
    "click .js-principal": (event)=>{
     $(event.target).css("color","orange")
     $(event.target).html("me descubriste =)")
    alert("Me presionaron?")
    }
    });