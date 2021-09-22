import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Our delicious sushi mix with salmon, tuna and shrimps',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'Our famous veal cutlet with a potato salad and cranberry jam',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Bacon cheeseburger',
        description: "Brioche bun, double meat patty, bacon, lettuce, special chef's sauce ",
        price: 12.99,
    },
    {
        id: 'm4',
        name: "Chef's salad",
        description: 'Our light salad with fresh vegetables harvested by the chef in our own garden',
        price: 18.99,
    }
];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => (
        <MealItem
            id={meal.id} 
            key={meal.id} 
            name={meal.name} 
            description={meal.description} 
            price={meal.price}
        />
    ));

    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;