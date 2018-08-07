'use strict';

const PrettyDateTime = dateBeautifier(DateTime);

const Video = props => {
    return (
        <div className="video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <PrettyDateTime date={props.date} />
        </div>
    )
};