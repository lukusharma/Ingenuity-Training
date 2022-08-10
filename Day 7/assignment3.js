
        const person = 
        {
            firstName: "", 
            Age:"", 
            Address:"", 
            Hobbies:"",
            pr: function() {
                return "Name :"+ this.firstName +  "<br>"  + "Age :" + this.Age+  "<br>"  + "Address :" +this.Address+  "<br>"  + "Hobbies :"+this.Hobbies;
            }

            };
        person.firstName=prompt("Enter Name :");
        person.Age=prompt("Enter Age");
        person.Address=prompt("Enter Address :");
        person.Hobbies=prompt("Enter Hobbies:");
        document.write('<h1 style="text-align:center; color:orange;">'+person.pr()+'</h1>')
        document.body.style.fontSize="30px";
        document.body.style.textAlign="center";
        document.body.style.paddingTop="100px";
        document.body.style.color="black";
        document.body.style.fontStyle="cursive";
        document.body.style.backgroundImage="linear-gradient(white, black)";
        document.body.style.backgroundSize=("100px 1000px");

