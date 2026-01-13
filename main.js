
class Git
{
    function Commit(id, message) {
        this.id = id
        this.parent = parent;
        this.message =  message;
    }

    function Git(name){
        this.name = name; //Repo name
        this.lastCommitId = -1;
        this.branches = []; 

        var master = new Branch("master", null);
        this.branch.push(master); 

        this.HEAD = master;
    }

    function Branch(name, commit) {
        this.name = name;
        this.commit = commit;
    }

    //Git init
    Git.prototype.commit = function(message) {
        var commit = new Commit(++this.lastCommitId, this.HEAD.commit , message)
        
        //Update HEAD 
        this.HEAD.commit = commit;

        return commit;
    }

    //log
    Git.prototype.log= function () {
       var commit = this.HEAD.commit, history = [];
       
        while (commit) {
           history.push(commit);

            commit = commit.parent;
        }
    
        return history;
    }

    //checkout
    Git.prototype.checkout = function (branchName) {
       for (var i = this.branches.length ; i-- ;){
            if(this.branches[i].name == branchName){
                console.log("Swiched to existing branch"+branchName);
                this.HEAD = this.branches[i];
                return this;
            }
           else{
               var newBranch = new Branch(branchName, this.HEAD.commit);
               this.branches.push(newBranch);
               this.HEAD = newBranch;

               console.log("Swiched to new branch: "+ branchName);
               return this;
           }
       } 
    }


    window.Git = Git;


}

