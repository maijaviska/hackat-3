import { useState } from "react"

function Tag() {

    const [activeTag, setActiveTag] = useState('')

    const tags = ["meow", "all", "night", "yowling", "nonstop", "the", "whole", "woow", "snuggles", "up", "to", "shoulders", "or", "and", "purrs", "you", "sleep", "haha", "me", "you"]

    const tagList = tags.map((tagName, index) => {
        let tagClasses = "badge mx-1"

        const activeTags = activeTag.split(' ')

        if (activeTags.includes(tagName)) {
            tagClasses += ' bg-success'
        } else {
            tagClasses += ' bg-primary'
        }

        return (
            <span className={tagClasses} key={index}>
                {tagName}
            </span>
        )
    })

    return (
        <div className="row my-5">
            <h2>Looking for tags: <span>{activeTag}</span></h2>
            <div className="col-6 mb-3">
                <input type="text" value={activeTag} onChange={(event) => setActiveTag(event.target.value)}></input>
            </div>
            <div className="mb-3">
                {tagList}
            </div>
        </div>
    )
}

export default Tag;