import React from "react";

function Article({title, date="January 1, 1970", preview, minutes}) {

    //minutes trial application
    //iterinary 
    const readingTimer = minutes < 30
        ? "☕".repeat(Math.ceil(minutes / 5))
        : "🍱".repeat(Math.ceil(minutes / 10));

    return(
        <article>
            <h3>{title}</h3>
            <small>{date} * {readingTimer} {minutes} min read</small>
            <p>{preview}</p>
        </article>
    );
}

export default Article;