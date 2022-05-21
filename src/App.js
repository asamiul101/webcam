import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useRef, useEffect, useState} from "react"
import learn from './learn';


function App() { 
	const videoRef = useRef(null);
	
	const [hasPhoto, setHasPhoto] = useState(false);

	const getVideo = () => {
		navigator.mediaDevices
			.getUserMedia({ video: {width: 1920, height: 1080}})
			.then (stream => {
				let video = videoRef.current;
				video.srcObject = stream;
				video.play();
			})
			.catch(err => {
				console.error(err);
			})

	}

	useEffect(() => {
		getVideo();
	}, [videoRef])

	return (
		<div className='App'>
			<div className='home'><button onClick={()=> learn}>To Learn</button> </div>

			<div className='homes'>
				<video ref={videoRef}></video>
				<button>Translate</button>
			</div>

		</div>
	);
}

export default App;
