import { HOVER_SKILL, LEAVE_SKILL, CLICK_SKILL, CLICK_SKILL_SELECTED, TRIPOD_HOVER_SKILL, TRIPOD_LEAVE_SKILL, CLICK_TRIPOD} from "./actions"

export const skills = (state = {}, action) => {
    const { type, payload } = action

    switch (type) {
        case HOVER_SKILL: {
            const skill = payload
            return skill
        }
        case LEAVE_SKILL: {
            const skill = payload
            return skill
        }
        default: 
            return state
    }
}
export const tripods = (state = [], action) => {
    const { type, payload } = action
    switch (type) {
        case CLICK_SKILL: {
            const tripod = payload
            return tripod
        }
        default: 
            return state
    }
}

export const skillSelected = (state = [], action) => {
    const { type, payload } = action
    switch (type) {
        case CLICK_SKILL_SELECTED: {
            const selected = payload
            return selected
        }
        default: 
            return state
    }
}

export const tripodTooltip = (state = {}, action) => {
    const { type, payload } = action

    switch (type) {
        case TRIPOD_HOVER_SKILL: {
            const tripod = payload
            return tripod
        }
        case TRIPOD_LEAVE_SKILL: {
            const tripod = payload
            return tripod
        }
        default: 
            return state
    }
}


export const selectedTripods = (state = [], action) => {
    const { type, payload } = action

    switch (type) {
        case CLICK_TRIPOD: {
            const skillName = payload.skillName
            const url = payload.tripod.url
            const name = payload.tripod.name
            const tier = payload.tripod.tier
            const desc = payload.tripod.desc
            const newTripod = {
                skillName,
                name,
                tier,
                url, 
                desc
            }
            return state.filter(tripod => 
                tripod.skillName === skillName && tripod.tier !== tier)
                .concat(state.filter(tripod => 
                    tripod.skillName !== skillName))
                .concat(newTripod)
                .sort((a,  b) => a.tier - b.tier)
        }
        default: 
            return state
    }
}