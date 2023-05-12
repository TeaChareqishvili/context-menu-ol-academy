import { List } from "./List";
import "./MenuStyle.scss";






function ContextMenu(){
    return (
        <div className="menuWrapper">
            <h1>Context Menu</h1> 
           <List/>
        </div>
    )
}

export {ContextMenu}