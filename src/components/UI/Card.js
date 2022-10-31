import './Card.css'

const Card = (props) => {
    // The purpose of this component is to remove duplicated code for styling. The duplicated code is in Card.css but, so that other components can use this, we use the Card component
    // and the classes here is saying 'card ' as the name AND and whatever other className when we pass this as a prop. This way, it's keeping the other styling as well as this
    const classes = 'card ' + props.className

    return <div className={classes}>{props.children}</div>
}

export default Card;