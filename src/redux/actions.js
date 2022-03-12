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