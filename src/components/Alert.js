import React from 'react'

export default function Alert(props) {
    let capitalize = (item) =>{
        let myitem = item[0];
        return myitem.toUpperCase +item.slice(1)
    }
    return (
        
           props.alert && <div className="alert alert-warning alert-dismissible fade show container" role="alert">
                    <strong>{capitalize(props.alert.type)}</strong> {props.alert.message}
                    
            </div>
        
    )
}
