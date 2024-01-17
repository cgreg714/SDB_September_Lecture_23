function AboutMe(){
    const city = 'South Hadley';
    const state = 'Massachusetts';

    let styles = {
        ul: {
            textAlign: "left",
            color: "red",
        },
        p: {
            fontSize: '20pt'
        }
    }

    return(
        <div>
        <p style={styles.p}>{city},{state}</p>
        
        <ul style={styles.ul}>
            <li>Work</li>
            <li>Bank</li>
            <li>Convenience Store</li>
        </ul>
        </div>
    )
}
 export default AboutMe;

