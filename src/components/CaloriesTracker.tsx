import { useMemo } from "react";
import type { Activity } from "../types/index";
import CaloriesDisplay from "./CaloriesDisplay";

type CaloriesTrackerProps = {
  activities: Activity[];
};

export default function CaloriesTracker({ activities }: CaloriesTrackerProps) {
  const caloriesConsume = useMemo(
    () =>
      activities.reduce(
        (total, activity) =>
          activity.category === 1 ? total + activity.calories : total,
        0
      ),
    [activities]
  );
  const caloriesBurned = useMemo(
    () =>
      activities.reduce(
        (total, activity) =>
          activity.category === 2 ? total + activity.calories : total,
        0
      ),
    [activities]
  );
  const netCalories = useMemo(
    () => caloriesConsume - caloriesBurned,
    [activities]
  );
  return (
    <>
      <h2 className=" text-4xl font-black text-white text-center">
        Resumen de Calorias
      </h2>
      <div className=" flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
        <CaloriesDisplay
          calories={caloriesConsume}
          text="Calorias Consumidas"
        />
        <CaloriesDisplay calories={caloriesBurned} text="Calorias Quemadas" />
        <CaloriesDisplay calories={netCalories} text="Calorias Netas" />
      </div>
    </>
  );
}
