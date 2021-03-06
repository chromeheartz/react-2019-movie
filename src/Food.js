import React from "react";
import PropTypes from "prop-types";

// (props)라고 쓰나
// { fav } props안에 있는 것을 구할땐 이렇게도 한다.
function Food({ name, picture,rating }){
  return (
    <div>
      <h2>i like {name}</h2>
      <h4>{rating} / 5</h4>
      <img src={picture} alt={name} />
    </div>
    )
  }

  Food.propTypes = {
    name : PropTypes.string.isRequired,
    picture : PropTypes.string.isRequired,
    rating : PropTypes.number.isRequired
  }

const foodILike = [
  {
    id : 1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating : 5
  },
  {
    id : 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating : 4.9
  },
  {
    id : 3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
      rating : 3
  },
  {
    id : 4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating : 4.5
  },
  {
    id : 5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    rating : 4.8
  }
];


function App(){
  return (
    <div>
      {foodILike.map(dish => 
        <Food 
          key={dish.id}
          name={dish.name}
          rating={dish.rating}
          picture={dish.image}
        />
      )}
    </div>
  )
}

export default App;
