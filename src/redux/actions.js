export const HOVER_SKILL = 'HOVER_SKILL'
export const LEAVE_SKILL = 'LEAVE_SKILL'
export const onHoverSkill = (skill) => ({
    type: HOVER_SKILL,
    payload: { skill },
})
export const onLeaveSkill = () => ({
    type: LEAVE_SKILL,
    payload: {},
})