function Card({params, isShowCards, isfinishCards, onCardClick}) {
    const {id, url, alt} = params;
    const content = <img src={url} width="204" height="144" alt={alt} />

    const className = `card ${
        isShowCards ? 'card-show' : ''
    } ${
        isfinishCards ? 'card-finished' : ''
    }`;

    const handleClick = () => {
        if (isfinishCards) {
            return;
        }
        onCardClick(id);
    }

    return (
        <li onClick={handleClick} className={className}>
            {content}
        </li>
    );
}

export default Card;