'use client';
import React, { useState } from 'react'

interface Cocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strInstructions: string;
  strIngredient1: string | null;
  strIngredient2: string | null;
  strIngredient3: string | null;
  strIngredient4: string | null;
  strIngredient5: string | null;
  strIngredient6: string | null;
  strIngredient7: string | null;
  strIngredient8: string | null;
  strIngredient9: string | null;
  strIngredient10: string | null;
  strIngredient11: string | null;
  strIngredient12: string | null;
  strIngredient13: string | null;
  strIngredient14: string | null;
  strIngredient15: string | null;
  strMeasure1: string | null;
  strMeasure2: string | null;
  strMeasure3: string | null;
  strMeasure4: string | null;
  strMeasure5: string | null;
  strMeasure6: string | null;
  strMeasure7: string | null;
  strMeasure8: string | null;
  strMeasure9: string | null;
  strMeasure10: string | null;
  strMeasure11: string | null;
  strMeasure12: string | null;
  strMeasure13: string | null;
  strMeasure14: string | null;
  strMeasure15: string | null;
}

export default function SearchPage() {

  const [cocktails, setCocktails] = useState<Array<Cocktail>>([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const search = e.target.search.value;

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
      .then(res => res.json())
      .then(data => {
        setCocktails(data.drinks);
      })
  }
  
  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  name="search"
                  className="form-control"
                  placeholder="Search for cocktails"
                />
                <button className="btn btn-danger">Search</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {cocktails.map(cocktail => (
            <div key={cocktail.idDrink} className="col-md-4">
              <div className="card mb-4">
                <img
                  src={cocktail.strDrinkThumb}
                  className="card-img-top"
                  alt={cocktail.strDrink}
                />
                <div className="card-body">
                  <h5 className="card-title">{cocktail.strDrink}</h5>
                  <ul className="list-group list-group-flush">
                    {cocktail.strIngredient1 && <li className="list-group-item">
                      {cocktail.strIngredient1} {cocktail.strMeasure1}
                    </li>}
                    {cocktail.strIngredient2 && <li className="list-group-item">
                      {cocktail.strIngredient2} {cocktail.strMeasure2}
                    </li>}
                    {cocktail.strIngredient3 && <li className="list-group-item">
                      {cocktail.strIngredient3} {cocktail.strMeasure3}
                    </li>}
                    {cocktail.strIngredient4 && <li className="list-group-item">
                      {cocktail.strIngredient4} {cocktail.strMeasure4}
                    </li>}
                    {cocktail.strIngredient5 && <li className="list-group-item">
                      {cocktail.strIngredient5} {cocktail.strMeasure5}
                    </li>}
                    {cocktail.strIngredient6 && <li className="list-group-item">
                      {cocktail.strIngredient6} {cocktail.strMeasure6}
                    </li>}
                    {cocktail.strIngredient7 && <li className="list-group-item">
                      {cocktail.strIngredient7} {cocktail.strMeasure7}
                    </li>}
                    {cocktail.strIngredient8 && <li className="list-group-item">
                      {cocktail.strIngredient8} {cocktail.strMeasure8}
                    </li>}
                    {cocktail.strIngredient9 && <li className="list-group-item">
                      {cocktail.strIngredient9} {cocktail.strMeasure9}
                    </li>}
                    {cocktail.strIngredient10 && <li className="list-group-item">
                      {cocktail.strIngredient10} {cocktail.strMeasure10}
                    </li>}
                    {cocktail.strIngredient11 && <li className="list-group-item">
                      {cocktail.strIngredient11} {cocktail.strMeasure11}
                    </li>}
                    {cocktail.strIngredient12 && <li className="list-group-item">
                      {cocktail.strIngredient12} {cocktail.strMeasure12}
                    </li>}
                    {cocktail.strIngredient13 && <li className="list-group-item">
                      {cocktail.strIngredient13} {cocktail.strMeasure13}
                    </li>}
                    {cocktail.strIngredient14 && <li className="list-group-item">
                      {cocktail.strIngredient14} {cocktail.strMeasure14}
                    </li>}
                    {cocktail.strIngredient15 && <li className="list-group-item">
                      {cocktail.strIngredient15} {cocktail.strMeasure15}
                    </li>}
                  </ul>
                  <p className="card-text">
                    {cocktail.strInstructions}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
