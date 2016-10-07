//Write your constructor function below.
//You should have 2 instance variables and 1 instance function included.
function Octocats(n,a){
  this.name = n;
  this.arms = a;

  this.slap = function(){
    for(var a=0;a<9;a++){
      console.log("SLAP");
    }
  };
}


//Write your 3 new octocat objects below here.
var Keemstar = new Octocat("DjKeemstar", 1738);
var Alex = new Octocat ("NiceGuyAlex", 24);
var meme = new Octocat ("Pepe the frog", 99999)
