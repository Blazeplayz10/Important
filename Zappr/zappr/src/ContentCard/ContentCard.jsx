import propTypes from "prop-types"

function ContentCard(props){
    return (
        <div className="content-card">
            <div className="content-card-header">
                <img src={props.accountSprite} alt="" />
                <h4>{props.accountName}</h4>
                <span>{props.cardType}</span>
            </div>
            <div className="content">
                <div>
                    <img src={propTypes.thumbnail} alt="" /> 
                </div>
                <h4>{propTypes.title}</h4>
                <span>{propTypes.uploaded}</span>
            </div>
        </div>
    )
}

ContentCard.propTypes = {
    accountSprite: propTypes.string,
    accountName: propTypes.string,
    cardType: propTypes.string,
    thumbnail: propTypes.string,
    title: propTypes.string,
    uploaded:propTypes.string
}

export default ContentCard