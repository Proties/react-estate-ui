import SearchBar from '../../components/search/SearchBar';
import './homePage.scss'


function HomePage(){
    return (
        <div className='homePage'>
            <div className="textContiner">
                <div className="wrapper">
                    <h1 className='title'>
                        Find Real Estate & Get Your Dream Place
                    </h1>
                    <p>
                    Lörem ipsum pregen vitiv. Oska rejös regt
                    plus krotiska hemiligt att dit i attefallshus
                    on nel. Lörem ipsum pregen vitiv. Oska rejös
                    regt plus krotiska hemiligt att dit i
                    attefallshus on nel. 
                    </p>
                    <SearchBar />
                    <div className="boxes">
                        <div className="box">
                            <h1>16+</h1>
                            <h2>Years of Experince</h2>
                        </div>
                        <div className="box">
                            <h1>200</h1>
                            <h2>Award Gained</h2>
                        </div>
                        <div className="box">
                            <h1>1200+</h1>
                            <h2>Property Ready</h2>
                        </div>
                    </div>
                </div>                
            </div>

            <div className="imgContainer">
                <img src="bg.png" alt="" />
            </div>
        </div>
    )
}

export default HomePage