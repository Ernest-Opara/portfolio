import "./about.css";
import Award from "../../img/award.png"

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src="https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                    alt="" 
                    className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    It is a long established fact that a reader will be definitely reading readable content.
                </p>

                <p className="a-desc">
                    It is a long established fact that a reader will be distracted 
                    by the readable content of a page when looking at its layout. 
                    The point of using Lorem Ipsum is that it has a more-or-less n
                    ormal distribution of letters, as opposed to using 'Content here, c
                    ontent here', making it look like readable English.
                </p>

                <div className="a-award">
                    <img src={Award} alt="" className="a-award-img" />
                    <div className="a-award-texts">
                    <h4 className="a-award-title">International Design Awards 2021</h4>
                        <p className="a-award-desc">
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
                        and fugit.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About
