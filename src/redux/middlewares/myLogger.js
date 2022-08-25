import { rootReducer } from "../rootReducer";


// create first middleware
const myLogger = (store) => (next) => (action)=>{
    console.log(`Action: ${JSON.stringify(action)}`)
    console.log(`Before: ${JSON.stringify(store.getState())}`);

    const upcomingState = [action].reduce(rootReducer, store.getState());

    console.log(`Upcoming State: ${JSON.stringify(upcomingState)}`);

    // action pass
    return next(action)
}

export default myLogger;