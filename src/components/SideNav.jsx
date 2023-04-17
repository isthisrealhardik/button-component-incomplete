import "../styles/nav.css";

const SideNav = () => {
    let lists = ['Colors', 'Typorgraphy', 'Spaces', 'Buttons', 'Inputs', 'Grid'];
    return (
        <div id="Nav">
            <div id="Logo">
                <h1>
                    <span id="one">dev</span>
                    <span id="two">Challenges.io</span>
                </h1>
            </div>
            <div id="Lists">
                    {lists.map(obj => (
                        <h3 style={obj == 'Inputs' ? {color: '#090F31', fontWeight: 700} : {color: "#9e9e9e"}} href="#">{obj}</h3>
                    ))}
            </div>
        </div>
    )
}

export default SideNav;