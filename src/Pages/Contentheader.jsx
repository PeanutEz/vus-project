

export default function Contentheader(props) {
    const headerContainer = {
        width: '45%',
        textAlign: 'center',
        lineHeight: '1.6'
    }
    const head = {
        color: "#E0242B",
        fontSize: '2.25rem'
    };
    const body = {
        fontSize: '1.15rem',
        marginTop: '20px'
    }
    return (
        <div style={headerContainer} className={props.classname}>
            <h1 style={head}>{props.head}</h1>
            <p style={body}>{props.body}</p>
        </div>
    );
}