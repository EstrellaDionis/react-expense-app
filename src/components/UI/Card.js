import './Card.css'

const Card = (props) => {
    // The purpose of this component is to remove duplicated code for styling. The duplicated code is in Card.css but, so that other components can use this, we use the Card component
    // and the classes here is saying 'card ' as the default class, AND ADD, whatever other className when we pass this as a prop (props.className). This way, it's keeping the other styling as well as this
    const classes = 'card ' + props.className

    // props.children displays everything between the open and closing tags.Ex; <Card> {props.children} everything that was SUPPOSED to show up here </Card>
    return <div className={classes}>{props.children}</div>
}

export default Card;