import NumberConst from "./NumberConst"


const NumberAction={
    list:()=>{
        return{
            type:NumberConst.LIST,
            
        }
    },
    add:(data)=>{
        return{
            type:NumberConst.ADD,
            payload:data
        }
    },
    update:(id,data)=>{
        return{
            type:NumberConst.UPDATE,
            payload:{id,data}
        }
    },
    delete:(id)=>{
        return{
            type:NumberConst.DELETE,
            payload:id
        }
    },
}

export default NumberAction