export default function MealsPostPage({ params }) {
  return (
    <>
      <h1>Meal Post</h1>
      <p>{params.mealSlug}</p>
    </>
  );
}
