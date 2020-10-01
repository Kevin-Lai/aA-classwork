class Store{
    constructor(rootReducer){
        
        // define instance variables to store the
        // rootReducer and the global state (an empty object for now)
        this.rootReducer = rootReducer;
        
        // NO current keys in the state
        this.state = {};

    }

    getState(){
        return Object.assign({},this.state);
    }


    // passed in object
    // {
    //     users: reducerForUsers,
    //     roles: reducerForRoles,
    //     bananas: reducerForBananas,
    //     entities: reducerForEntities
    //   }

    // define an object that describes which reducer is
    // responsible for which part of state.
    // Each key in this object should point to it's respective reducer
    combineReducers(obj, prevState, action){

        // accepts the above object as an argument
        let reducerList = Object.values(obj);

        let selectedReducer;

        // how to tell which reducer should be returned?
        for(let i = 0; i<reducerList.length;i++){
            if(reducerList[i](prevState,action) !== prevState){
                selectedReducer = reducerList[i];
            }
        }

//Write a function, combineReducers,
// that accepts this object as an argument
// and returns a single reducer

        // returns a single reducer
        return selectedReducer;
    }
}