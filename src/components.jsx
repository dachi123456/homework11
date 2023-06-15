import './components.css'

function Box({image,name,description,chars,action}){
    
    return(
        <div className='container'>
            <img src={image} alt="" />
            <h1>{name}</h1>
            <p>{description}</p>
            <h3>{chars}</h3>
            <button onClick={() => action(name,chars)}>button</button>
        </div>
    )
}

export default Box