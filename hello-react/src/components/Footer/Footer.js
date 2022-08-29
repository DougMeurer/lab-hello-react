import img1 from "../../images/icon1.png"
import img2 from "../../images/icon2.png"
import img3 from "../../images/icon3.png"
import img4 from "../../images/icon4.png"


function FooterMain () {

    return (
        <>
        <div className="foot">
        
            <div>
            <img src={img1}/>
            <p><strong>Declarative</strong><br></br>React makes it<br></br>painless to create<br></br>interactive UIs.</p>
            </div>

            <div>
            <img src={img2}/>
            <p><strong>Components</strong><br></br>Build encapsulated<br></br>components that<br></br>manage their state.</p>
            </div>

            <div>
            <img src={img3}/>
            <p><strong>Single-Way</strong><br></br>A set of immutable<br></br>values are passed to<br></br>the component's.</p>
            </div>

            <div>
            <img src={img4}/>
            <p><strong>JSX</strong><br></br>Statically-typed.<br></br>designed to run on<br></br>modern browsers.</p>
            </div>
        </div>

        </>
    )
}

export default FooterMain 