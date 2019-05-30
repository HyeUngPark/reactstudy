console.log(Redux);

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';  

const increment = (diff) => ({
  type  : INCREMENT
  ,diff : diff
});
const decrement = (diff) => ({
  type : DECREMENT
  ,diff : diff
});


const initialState = {
  number : 0
};

function counter(state = initialState, action){
  switch(action.type){
    case INCREMENT:
      return {number:state.number + action.diff};
    case DECREMENT:
      return {number:state.number - action.diff};        
    default :
      return state;
  }
}

// console.log(counter(undefined, increment(10)));

const {createStore} = Redux;

const store = createStore(counter);

const unsubscribe = store.subscribe(()=>{
  // console.log(store.getState());
});

store.dispatch(increment(1));
store.dispatch(increment(5));
store.dispatch(increment(10));















