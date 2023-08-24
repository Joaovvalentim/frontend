

const Block = (props) => {
    const { label, data, processor } = props
    const items = processor(data)

    console.log(data)
    return (
        <div className="block">
            <h2>{label}</h2>
            <ul className="list">
                {items.map(item => {
                    const { key, label, value } = item
                    return (
                        < li key={key} >
                            <span>{label}</span> 
                            <span>{value}</span> 
                        </li>
                    )
                })}

            </ul>
        </div >




    )




}

export default Block