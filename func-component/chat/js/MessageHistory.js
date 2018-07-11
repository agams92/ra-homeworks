'use strict';

const MessageHistory = props => {
    if(!Array.isArray(props.list) || props.list.length == 0) {
        return null;
    }
    const listToRender = props.list.map(message => {
        const CurrentMessage = message.type === 'response' ? Response : message.type === 'message' ? Message : Typing;
        return <li key={message.id}><CurrentMessage from={message.from} message={message}/></li>
    })
    return(
        <ul>
            {listToRender}
        </ul>
    )
}