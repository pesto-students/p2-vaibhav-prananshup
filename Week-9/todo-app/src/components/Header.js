
const Header = ({submitHandler, changeHandler, todo}) => {
    return (
        <header>
            <form onSubmit={(e) => submitHandler(e)}> 
                <input type="text" placeholder="Type here..." onChange={(e) => changeHandler(e)} value={todo}/>
                <button type="submit">Add Todo</button>
            </form>
        </header>
    )
}

export default Header;