export function Menu(props) {

    const menu = ["Dashboard", "Postings", "About", "Help"];

    return (
        <ul>
            {menu.map((item, index) => {
                return <li className={props.active === item ? "activated" : ""} key={index}>{item}</li>
            })}
        </ul>
    );
}