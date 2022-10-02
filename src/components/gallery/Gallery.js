import React from "react";
import "./gallery.css";

function Gallery() {
	return (
		<div class="gallery gallery__content--flow">
			<figure>
				<img
					src="https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559__340.jpg"
					alt="A light brown, long-haired chihuahua sitting next to three rubber duckies. "
					title="Photo by Giacomo Lucarini for Unsplash"
				/>
				<figcaption className="header__caption" role="presentation">
					<h1 className="title title--primary">Dog: Miss Sunshine</h1>
					<h2 className="title title--secondary">6 years old</h2>
				</figcaption>
			</figure>
			<figure>
				<img
					src="https://cdn.pixabay.com/photo/2018/03/27/17/25/cat-3266673__340.jpg"
					alt="A tabby kitten with green eyes. "
					title="Photo by Sergey Semin for Unsplash"
				/>
				<figcaption className="header__caption" role="presentation">
					<h1 className="title title--primary">Kitten: Reese</h1>
					<h2 className="title title--secondary">8 weeks old</h2>
				</figcaption>
			</figure>

			<figure>
				<img
					src="https://cdn.pixabay.com/photo/2019/07/31/19/21/hare-4375952__340.jpg"
					alt="A light brown puppy standing on a white and tan woven pet bed. "
					title="Photo by Sergey Semin for Unsplash"
				/>
				<figcaption className="header__caption" role="presentation">
					<h1 className="title title--primary">Bunny: Sofia</h1>
					<h2 className="title title--secondary">3 years old</h2>
				</figcaption>
			</figure>
			<figure>
				<img
					src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554__340.jpg"
					alt="A light brown puppy standing on a white and tan woven pet bed. "
					title="Photo by Sergey Semin for Unsplash"
				/>
				<figcaption className="header__caption" role="presentation">
					<h1 className="title title--primary">Kitten: Katie</h1>
					<h2 className="title title--secondary">1 years old</h2>
				</figcaption>
			</figure>

			<figure>
				<img
					src="https://cdn.pixabay.com/photo/2017/09/25/13/12/cocker-spaniel-2785074__480.jpg"
					alt="A light brown puppy standing on a white and tan woven pet bed. "
					title="Photo by Sergey Semin for Unsplash"
				/>
				<figcaption class="header__caption" role="presentation">
					<h1 className="title title--primary">Puppy: Bruce</h1>
					<h2 className="title title--secondary">10 weeks old</h2>
				</figcaption>
			</figure>
			<figure>
				<img
					src="https://cdn.pixabay.com/photo/2016/11/21/16/59/animal-1846462__340.jpg"
					alt="A light brown puppy standing on a white and tan woven pet bed. "
					title="Photo by Sergey Semin for Unsplash"
				/>
				<figcaption className="header__caption" role="presentation">
					<h1 className="title title--primary">Bunny: Jeff</h1>
					<h2 className="title title--secondary">2 years old</h2>
				</figcaption>
			</figure>
		</div>
	);
}
export default Gallery;
