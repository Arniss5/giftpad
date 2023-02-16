import React, {useState} from "react";
import "./GiftNotes.css"
import Note from "../components/Note";


function GiftNotes() {

   
    const [notes, setNotes] = useState([
        {
            name: "Kasia",
            hobbies: ["coding", "films", "boardgames"],
            birthday: [16, 3, 1991],
            ideas: [{idea: "Hogwarts game", url: "www.google.com"}],
            active: false
        }
    ])

    // const notesElements = notes.map(note => {
    //     return (
 
    //     )
    // })

    // const [isCollapsed, setIsCollapsed] = useState(true);
    // const [isExpanded, setIsExpanded] = useState(false);
    // const [isInactive, setIsInactive] = useState(false);


    // const handleExpanderClick = (e) => {
    //     if (e.target.isCollapsed) {
    //     setIsCollapsed(false);
    //     setIsExpanded(true);
    //     setIsInactive(true);
    //     } else {
    //     setIsCollapsed(true);
    //     setIsExpanded(false);
    //     setIsInactive(false);
    //     }
    // };

    // const handleCollapserClick = () => {
    //     setIsCollapsed(true);
    //     setIsExpanded(false);
    //     setIsInactive(false);
    // };
    

    return(
        <div className="gift-notes-container">
            <div className="notes">
                <Note display="hidden"/>
                <Note expanded="expanded"/>
                <Note display="hidden"/>
                <Note display="hidden"/>
                <Note display="hidden"/>
                <Note display="hidden"/>
                {/* <Note 
                    isCollapsed={isCollapsed}
                    isExpanded={isExpanded}
                    isInactive={isInactive}
                    handleExpanderClick={handleExpanderClick}
                    handleCollapserClick={handleCollapserClick}
                />
                <Note 
                    isCollapsed={isCollapsed}
                    isExpanded={isExpanded}
                    isInactive={isInactive}
                    handleExpanderClick={handleExpanderClick}
                    handleCollapserClick={handleCollapserClick}
                />
                <Note 
                    isCollapsed={isCollapsed}
                    isExpanded={isExpanded}
                    isInactive={isInactive}
                    handleExpanderClick={handleExpanderClick}
                    handleCollapserClick={handleCollapserClick}
                />
                <Note 
                    isCollapsed={isCollapsed}
                    isExpanded={isExpanded}
                    isInactive={isInactive}
                    handleExpanderClick={handleExpanderClick}
                    handleCollapserClick={handleCollapserClick}
                /> */}
            </div>
        </div>
    )
}

export default GiftNotes