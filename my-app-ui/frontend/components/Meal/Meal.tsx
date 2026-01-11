import React from "react";
import "./Meal.css";

type MealProps = {
	meal: {
		MealId: number;
		Title: string;
		Description: string;
		Location: string;
		When: string;
		Price: number;
	};
};

export const Meal: React.FC<MealProps> = ({ meal }) => {
	return (
		<div className="meal-card">
			<h3>{meal.Title}</h3>
			<p>{meal.Description}</p>
			<p>
				<strong>Location:</strong> {meal.Location}
			</p>
			<p>
				<strong>When:</strong> {new Date(meal.When).toLocaleString()}
			</p>
			<p className="description">{meal.Description}</p>
			<p className="price">${meal.Price.toFixed(2)}</p>
		</div>
	);
};


