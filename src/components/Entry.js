import React from 'react'

export default function Entry({entry}, {key}) {
    return (
        <div key={key}>
        <span>🗓{entry.fields.date} </span>
        <span>🕐{entry.fields.minutes} min – </span>
        <span><i>#{entry.fields.tag}</i></span>
        <br/>
        <span><i>{entry.fields.description}</i></span>
        <br/>
        <br/>
      </div>
    )
}

