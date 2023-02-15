import React, {useState} from "react";
import "./Note.css"

function Note(props) {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isInactive, setIsInactive] = useState(false);


    const handleExpanderClick = (e) => {
        if (e.target.isCollapsed) {
        setIsCollapsed(false);
        setIsExpanded(true);
        setIsInactive(true);
        } else {
        setIsCollapsed(true);
        setIsExpanded(false);
        setIsInactive(false);
        }
    };

    const handleCollapserClick = () => {
        setIsCollapsed(true);
        setIsExpanded(false);
        setIsInactive(false);
    };


    return(
        <div className={`card ${isCollapsed ? 'is-collapsed' : ''} ${isExpanded ? 'is-expanded' : ''} ${isInactive ? 'is-inactive' : ''}`}>
            <div className="card__inner js-expander" onClick={handleExpanderClick}>
                <span>Card</span>
            </div>
            <div className="card__expander" onClick={handleCollapserClick}>
                Expander
            </div>
        </div>
    )
}

export default Note