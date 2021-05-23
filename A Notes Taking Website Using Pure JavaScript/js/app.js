console.log('welcome to notes app. this is app.js');

// if user add a notes add it local storage

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click" , function(e){


    let addtxt = document.getElementById("addtxt");

    let notes = localStorage.getItem("notes");

    if(notes = null){
        notesobj = [];
    }

    else{
        notesobj = JSON.parse(notes);

    }
    notesobj.push(addtxt.Value);
    localStorage.setItem("notes",JSON.stringify(notesobj));
    addtxt.Value ="";
    console.log(notesobj);
    showNotes();
    function showNotes()) {
        let notes=localStorage.getItem("notes");

        if(notes = null){
            notesobj = [];
        }
    
        else{
            notesobj = JSON.parse(notes);
    
        }
    

        
    }



    
})