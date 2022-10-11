import { useState } from "react";

// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
export default function Form(props) {
  //State to hold the data of our form
  const [formData, setFormData] = useState({
    pageNumber: "",
  });

  //handleChange - updates formData when we type into form
  const handleChange = (event) => {
    //use the event object to detect key and value to update
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    //prevent page from refreshing on form submission
    event.preventDefault();
    //pass the search term to cryptosearch prop, which is apps getcrypto function
    props.gamesearch(formData.pageNumber);
  };

  //The component must return some JSX
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="pageNumber"
          onChange={handleChange}
          value={formData.pageNumber}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
