export const HOVER_SKILL = 'HOVER_SKILL'
export const onHoverSkill = (skill) => ({
    type: HOVER_SKILL,
    payload: { skill },
})
export const LEAVE_SKILL = 'LEAVE_SKILL'
export const onLeaveSkill = () => ({
    type: LEAVE_SKILL,
    payload: {},
})
export const CLICK_SKILL = 'CLICK_SKILL'
export const onClickSkill = (tripod) => ({
    type: CLICK_SKILL,
    payload: { tripod }
})
export const CLICK_SKILL_SELECTED = 'CLICK_SKILL_SELECTED'
export const onClickSelected = (name) => ({
    type: CLICK_SKILL_SELECTED,
    payload: name
})
export const TRIPOD_HOVER_SKILL = 'TRIPOD_HOVER_SKILL'
export const onHoverTripod = (tripod) => ({
    type: TRIPOD_HOVER_SKILL,
    payload: { tripod },
})
export const TRIPOD_LEAVE_SKILL = 'TRIPOD_LEAVE_SKILL'
export const onLeaveTripod = () => ({
    type: TRIPOD_LEAVE_SKILL,
    payload: {},
})

export const CLICK_TRIPOD = 'CLICK_TRIPOD'
export const onClickTripod = (skillName, tripod) => ({
    type: CLICK_TRIPOD,
    payload: { skillName, tripod },
})

export const LOAD_TRIPODS = 'LOAD_TRIPODS'
export const onLoadTripods = (tripod) => ({
    type: LOAD_TRIPODS,
    payload: { tripod },
})

export const RESET_TRIPODS = 'RESET_TRIPODS'
export const onResetTripods = () => ({
    type: RESET_TRIPODS,
    payload: {},
})

export const SAVE_TRIPODS = 'SAVE_TRIPODS'
export const onSaveTripods = (name, tripod) => ({
    type: SAVE_TRIPODS,
    payload: { name, tripod },
})

export const ADD_SKILL = 'ADD_SKILL'
export const onAddSkill = (position, skill) => ({
    type: ADD_SKILL,
    payload: { position, skill },
})


export const SAVE_SKILLS = 'SAVE_SKILLS'
export const onSaveSkills = (name, skill) => ({
    type: SAVE_SKILLS,
    payload: { name, skill },
})

export const LOAD_SKILLS = 'LOAD_SKILLS'
export const onLoadSkills = (skills) => ({
    type: LOAD_SKILLS,
    payload: { skills },
})

export const RESET_SKILLS = 'RESET_SKILLS'
export const onResetSkills = () => ({
    type: RESET_SKILLS,
    payload: {},
})
