import { Activity } from "../types";

export type ActivityActions =
  | {
      type: "save-activity";
      payload: { newActivity: Activity };
    }
  | {
      type: "set-activeId";
      payload: { id: Activity["id"] };
    };

export type ActivityState = {
  activities: Activity[];
  activeId: Activity["id"];
};
export const initialState: ActivityState = {
  activities: [],
  activeId: "",
};

export const activityReducer = (
  state: ActivityState = initialState,
  action: ActivityActions
) => {
  if (action.type === "save-activity") {
    //Este codigo es para agregar una nueva actividad en el arreglo de actividades en el estado global de la aplicacion
    return {
      ...state,
      activities: [...state.activities, action.payload.newActivity],
    };
  }
  if (action.type === "set-activeId") {
    //Este codigo es para actualizar el id de la actividad seleccionada en el estado global de la aplicacion
    return {
      ...state,
      activeId: action.payload.id,
    };
  }
  return state;
};
