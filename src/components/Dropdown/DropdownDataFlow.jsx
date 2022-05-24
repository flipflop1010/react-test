import React from 'react'

const DropdownDataFlow = () => {

    const [data, setData] = React.useState()
    const [style, setStyle] = React.useState({ visibility: "hidden" })


    const display = () => {
        console.log('display function', data);
        if (data == 2) {
            console.log('display check ==2', data);
            setStyle({ visibility: "visible" })
        }
    }

    const onBtnClick = (event, data) => {
        console.log('btn click', data);
        setData(data)
        
    }

    React.useEffect(()=>{
        display()
    },[data])




    return (
        <React.Fragment>

            <div className="container">
                <div className="row mt-3">
                    <div className="col-lg-4 border">
                        <div className="mt-2">
                            <button onClick={(event) => onBtnClick(event, 1)}>btn 1</button>
                        </div>
                        <div className="mt-2">
                            <button onClick={(event) => onBtnClick(event, 2)}>btn 2</button>
                        </div>
                        <div className="mt-2">
                            <button onClick={(event) => onBtnClick(event, 3)}>btn 3</button>
                        </div>
                    </div>
                    <div className="col-lg-8 shadow">
                        <div className="border">
                            <h5 style={style}>Clicked</h5>

                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default DropdownDataFlow