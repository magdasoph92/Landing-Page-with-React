import React from "react";
import NavBar from "./NavBar";
import Jumbotron from './Jumbotron';
import Card from './Card';
import Footer from './Footer';

//include images into your bundle
import image1 from "../../img/elephant_1.jpg";
import image2 from "../../img/elephant_2.jpg";
import image3 from "../../img/elephant_3.jpg";
import image4 from "../../img/elephant_4.jpg";

//create your first component
const Home = () => {
	return (
		<>
			<NavBar />
			<Jumbotron 
					title="Hello Elephant Lover!" 
					description="Elephants are the largest animal in the world that can’t jump. We know what you’re thinking: it’s probably because of their size, right? However, that may not be true. The truth is, scientists don’t know why elephants can’t jump because there hasn’t been enough research done to determine the correct answer. In addition to not jumping, baby elephants can’t get all four of their feet off the ground at the same time. When they are running, they constantly have at least one foot anchored to the ground. This is thought to promote stability in the animals." 
					btnText="Learn more about our gentle giants"/>
			<div className="container">
				<div className="row mb-4">
					<Card 
						src={image1}
						title="Cutest Family"
						description="The family group is called a herd. A herd is made of all the mother elephants and their babies. There might be six to 12 members in a family. Female elephants stay in the herd forever. Male elephants leave between the ages of 7 and 12."
						btnText="More facts"/>
					<Card 
						src={image2}
						title="Baby Giants"
						description="A baby elephant is called a calf and can weigh around 200 lbs (91 kg) and stand about 3 feet (1 m) tall. They can't see very well when they are born, but much like human babies, they can recognise their mothers by touch, scent, and sound."
						btnText="More facts"
					/>
					<Card 
						src={image3}
						title="Never Alone"
						description="Did you know that baby elephants suck their trunks for comfort? These tiny giants don’t just do this to soothe themselves, though. It also helps them strengthen their trunk muscles and gain better control over the appendage."
						btnText="More facts"
					/>
					<Card 
						src={image4}
						title="All you can Eat"
						description="Elephants eat grasses, leaves, shrubs, fruits and roots depending on the season and their habitat. They need to eat up to 150kg of food per day, so much that they can spend up to three-quarters of their day just eating. "
						btnText="More facts"
					/>
				</div>				
			</div>
			<div className="bg-dark">
			<Footer />
			</div>
		</>
	);
};

export default Home;