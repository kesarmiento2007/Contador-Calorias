import { createContext, ReactNode, Dispatch, useReducer } from "react"
import { activityReducer, initialState, ActivityActions, ActivityState } from "../reducers/activity-reducer";

type ActivityProviderProps = {
    children: ReactNode
}

type ActivityContextProps = {
    state: ActivityState,
    dispatch: Dispatch<ActivityActions>
}

export const ActivityContext = createContext<ActivityContextProps>(null!);

const ActivityProvider = ({children} : ActivityProviderProps) => {

    const [state, dispatch] = useReducer(activityReducer, initialState);

    return (
        <ActivityContext.Provider
            value={{
                state,
                dispatch
            }}
        >
            {children}
        </ActivityContext.Provider>
    )
}

export default ActivityProvider