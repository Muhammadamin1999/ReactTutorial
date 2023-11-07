import React  from "react";
// const Pet = (props) => {
//     return React.createElement("div", {}, [
//       React.createElement("h1", {}, props.name),
//       React.createElement("h2", {}, props.animal),
//       React.createElement("h2", {}, props.breed),
//     ]);
//   };

const Pet = ({name, animal, breed, inages, location, id}) =>{

    return(
    <a href={`/details/${id}`}  className="pet">
        <div className="image-container">
            <img src={hero} alt = {name}/>
        </div>
        <div className="info">
       <h1>{name}</h1>
       <h2>{animal} - {breed} - {location}</h2>
        </div>
    </a>
    )
}

export default Pet;