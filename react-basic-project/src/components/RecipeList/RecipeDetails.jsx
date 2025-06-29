import { useParams } from "react-router-dom";

function RecipeDetails(){
    const params = useParams();
    console.log("params", params);
    return(
        <div>
            <h1>RecipeDetails Page</h1>
        </div>
    )
}

export default RecipeDetails;