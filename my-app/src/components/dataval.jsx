function Dataval(props) {
    console.log(props)
    return <>
        {
            props.arr.map((a)=> {
              return <div>  <h1>{a.username}</h1>
                <p>{a.password}</p>
                </div>
            })
        }
    </>
}

export default Dataval