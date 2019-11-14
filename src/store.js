


const temp = [{username:'vishnu',password:'Vishnu123',email:'vishnu2991997@gmail.com'}];

const account = ((state={account:temp,valid:false},action)=>{
    switch(action.type){
        case "add":
            {
                let len = state.account.length;
                console.log(len);
                state.account.push(action.text[0]);
                console.log(state);
                return state;
            }
        case "search":
            {
                let len =state.length;
                for(let i=0;i<len;i++)
                {
                    if(state.account[i].username==action.text[0].username){
                        state.valid=false;
                        return state;
                    }
                }
                state.valid=true;
                return state;
            }
    }
}
);  
export default account;
