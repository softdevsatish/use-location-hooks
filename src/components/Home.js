import { useLocation } from 'react-router-dom';
function Home() {

    const location = useLocation();
    console.log(location);
    return (
        <div>
            <p>Home Page</p>



        </div>
    )
}

export default Home;