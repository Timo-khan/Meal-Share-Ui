"use client";

import React, { useEffect, useState } from "react";
import "./MealsList.css";
import { MEAL_SHARE_API } from "@/data/MealShareApi";
import { Meal } from "../Meal/Meal";


type Meal = {
	MealId: number;
    Title: string;
    Description: string;
    Location: string;
    When: string;
	Price: number
};

export const MealsList = () => {
	const [meals, setMeals] = useState<Meal[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(`${MEAL_SHARE_API.BASE_URL}/meals`)
			.then((res) => res.json())
			.then((data) => {
				console.log("API response:", data);
				setMeals(data.data);
				setLoading(false);
			})
			.catch((error) => {
				console.error("Error fetching meals:", error);
				setLoading(false);
			});
	}, []);

	return (
		<div className="meals-container">
			<h2>Meals List</h2>
			{loading ? (
				<p>Loading meals...</p>
			) : Array.isArray(meals) && meals.length > 0 ? (
				<div className="meals-grid">
					{meals.map((meal) => (
						<Meal key={meal.MealId} meal={meal} />
					))}
				</div>
			) : (
				<p>No meals available.</p>
			)}

			<pre>{JSON.stringify(meals, null, 2)}</pre>
		</div>
	);
};
