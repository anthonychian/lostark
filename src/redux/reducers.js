import { HOVER_SKILL } from "./actions"
import { LEAVE_SKILL } from "./actions"

export const skills = (state = {}, action) => {
    const { type, payload } = action

    switch (type) {
        case HOVER_SKILL: {
            const skill = payload
            console.log(skill)
            return skill
        }
        case LEAVE_SKILL: {
            const skill = payload
            console.log(skill)
            return skill
        }
        default: 
            return state
    }
}