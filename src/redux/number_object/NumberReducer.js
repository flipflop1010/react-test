import NumberConst from "./NumberConst";


const initial_state={
    number:[]
}


const NumberReducer=(state=initial_state,{type,payload})=>{
    switch (type) {
        case NumberConst.LIST:
            return state
        case NumberConst.ADD:
            return {...state,number:[...state.number,{id:(state.number.length+1),data:payload}]}
        case NumberConst.UPDATE:
            state.number=state.number.map(n=>{
                if(n.id==payload.id){
                    return {id:n.id,data:payload.data}
                }
                return n
            })
            return state

        case NumberConst.DELETE:
            state.number=state.number.filter(n=>{
                if(n.id!=payload){
                    return true
                }
                
            })
           
            return state

    
        default:
            return state
    }
}

export default NumberReducer