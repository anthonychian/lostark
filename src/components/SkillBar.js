import React, { useState } from 'react'
import { makeStyles } from '@mui/styles';
import deathbladeSkills from '../data/deathblade'

import { connect } from 'react-redux'
import { onHoverSkill, onLeaveSkill, onAddSkill } from '../redux/actions'

const useStyles = makeStyles({
    gridContainer: {
        marginTop: '-7em',
        paddingBottom: '4em',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: '65px 65px 65px 65px',
        gridTemplateRows: '65px 65px',
        backgroundColor: 'black',
        fontSize: '0px'
    },
    gridAwaken: {
        display: 'grid',
        gridTemplateColumns: '65px',
        gridTemplateRows: '65px',
        backgroundColor: 'black',
        fontSize: '0px'
    },
    gridItem: {
        color: 'white',
        height: '60px',
        width: '60px',
        border: '2px solid #4db8ff',
    },
})


function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
    // document.getElementById("demo").innerHTML = "Started to drag the p element";
}
  
function dragEnd(event) {
    // document.getElementById("demo").innerHTML = "Finished dragging the p element.";
}



function SkillBar({ equippedSkills, onHover, onLeave, addSkill }) {

    const classes = useStyles()
    
    const [showSkill1, setShowSkill1] = useState(false)

    function allowDrop(event) {
        event.preventDefault();
    }
      
    function drop(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text")
        const newNode = document.getElementById(data)
        const position = event.target.innerHTML - 1

        const skill = deathbladeSkills.filter(skill => skill.name === data)
        if (newNode) {
            if ((skill[0].skill_type === 'Awakening Skill' && position === 8) ||
                (skill[0].skill_type !== 'Awakening Skill' && position !== 8)) {
                addSkill(position, skill[0])
            }
            
            setShowSkill1(!showSkill1)
        }
    }

    return (
        <section className={classes.gridContainer}>
            <div className={classes.gridAwaken}>
                <div 
                    onMouseEnter={() => onHover(equippedSkills[8])}
                    onMouseLeave={()=> onLeave()}   
                    className={classes.gridItem} 
                    onDrop={(event) => drop(event)} 
                    onDragOver={(event) => allowDrop(event)}
                >9
                    {equippedSkills[8] && <img 
                        src={equippedSkills[8].url} 
                        width='60' height='60' 
                        alt={equippedSkills[8].name} 
                        
                        draggable={true} 
                        id={equippedSkills[8].name}
                    />}

                </div>
            </div>
            <div className={classes.grid}>
                <div 
                    onMouseEnter={() => onHover(equippedSkills[0])}
                    onMouseLeave={()=> onLeave()}   
                    className={classes.gridItem} 
                    onDrop={(event) => drop(event)} 
                    onDragOver={(event) => allowDrop(event)}
                >1
                    {equippedSkills[0] && <img 
                        src={equippedSkills[0].url} 
                        width='60' height='60' 
                        alt={equippedSkills[0].name} 
                        onDragStart={(event) => dragStart(event)} 
                        onDragEnd={(event) => dragEnd(event)} 
                        draggable={true} 
                        id={equippedSkills[0].name}
                    />}

                </div>
                <div 
                    onMouseEnter={()=> onHover(equippedSkills[1])} 
                    onMouseLeave={()=> onLeave()}   
                    className={classes.gridItem} 
                    onDrop={(event) => drop(event)} 
                    onDragOver={(event) => allowDrop(event)}
                >2
                    {equippedSkills[1] && <img 
                        src={equippedSkills[1].url} 
                        width='60' height='60' 
                        alt={equippedSkills[1].name} 
                        onDragStart={(event) => dragStart(event)} 
                        onDragEnd={(event) => dragEnd(event)} 
                        draggable={true} 
                        id={equippedSkills[1].name}
                    />}
                </div>
                <div 
                    onMouseEnter={()=> onHover(equippedSkills[2])} 
                    onMouseLeave={()=> onLeave()}   
                    className={classes.gridItem} 
                    onDrop={(event) => drop(event)} 
                    onDragOver={(event) => allowDrop(event)}
                >3
                    {equippedSkills[2] && <img 
                        src={equippedSkills[2].url} 
                        width='60' height='60' 
                        alt={equippedSkills[2].name} 
                        onDragStart={(event) => dragStart(event)} 
                        onDragEnd={(event) => dragEnd(event)} 
                        draggable={true} 
                        id={equippedSkills[2].name}
                    />}
                </div>
                <div 
                    onMouseEnter={()=> onHover(equippedSkills[3])} 
                    onMouseLeave={()=> onLeave()}   
                    className={classes.gridItem} 
                    onDrop={(event) => drop(event)} 
                    onDragOver={(event) => allowDrop(event)}
                >4
                    {equippedSkills[3] && <img 
                        src={equippedSkills[3].url} 
                        width='60' height='60' 
                        alt={equippedSkills[3].name} 
                        onDragStart={(event) => dragStart(event)} 
                        onDragEnd={(event) => dragEnd(event)} 
                        draggable={true} 
                        id={equippedSkills[3].name}
                    />}
                </div>
                <div 
                    onMouseEnter={()=> onHover(equippedSkills[4])} 
                    onMouseLeave={()=> onLeave()}   
                    className={classes.gridItem} 
                    onDrop={(event) => drop(event)} 
                    onDragOver={(event) => allowDrop(event)}
                >5
                    {equippedSkills[4] && <img 
                        src={equippedSkills[4].url} 
                        width='60' height='60' 
                        alt={equippedSkills[4].name} 
                        onDragStart={(event) => dragStart(event)} 
                        onDragEnd={(event) => dragEnd(event)} 
                        draggable={true} 
                        id={equippedSkills[4].name}
                    />}
                </div>
                <div 
                    onMouseEnter={()=> onHover(equippedSkills[5])} 
                    onMouseLeave={()=> onLeave()}   
                    className={classes.gridItem} 
                    onDrop={(event) => drop(event)} 
                    onDragOver={(event) => allowDrop(event)}
                >6
                    {equippedSkills[5] && <img 
                        src={equippedSkills[5].url} 
                        width='60' height='60' 
                        alt={equippedSkills[5].name} 
                        onDragStart={(event) => dragStart(event)} 
                        onDragEnd={(event) => dragEnd(event)} 
                        draggable={true} 
                        id={equippedSkills[5].name}
                    />}
                </div>
                <div 
                    onMouseEnter={()=> onHover(equippedSkills[6])} 
                    onMouseLeave={()=> onLeave()}   
                    className={classes.gridItem} 
                    onDrop={(event) => drop(event)} 
                    onDragOver={(event) => allowDrop(event)}
                >7
                    {equippedSkills[6] && <img 
                        src={equippedSkills[6].url} 
                        width='60' height='60' 
                        alt={equippedSkills[6].name} 
                        onDragStart={(event) => dragStart(event)} 
                        onDragEnd={(event) => dragEnd(event)} 
                        draggable={true} 
                        id={equippedSkills[6].name}
                    />}
                </div>
                <div 
                    onMouseEnter={()=> onHover(equippedSkills[7])} 
                    onMouseLeave={()=> onLeave()}   
                    className={classes.gridItem} 
                    onDrop={(event) => drop(event)} 
                    onDragOver={(event) => allowDrop(event)}
                >8
                    {equippedSkills[7] && <img 
                        src={equippedSkills[7].url} 
                        width='60' height='60' 
                        alt={equippedSkills[7].name} 
                        onDragStart={(event) => dragStart(event)} 
                        onDragEnd={(event) => dragEnd(event)} 
                        draggable={true} 
                        id={equippedSkills[7].name}
                    />}
                </div>
                
            </div>
        </section>
    )
}

const mapStateToProps = state => ({
    equippedSkills: state.equippedSkills,
})


const mapDispatchToProps = dispatch => ({
    onHover: (skill) => dispatch(onHoverSkill(skill)),
    onLeave: () => dispatch(onLeaveSkill()),
    addSkill: (position, skill) => dispatch(onAddSkill(position, skill))
}) 

export default connect(mapStateToProps, mapDispatchToProps)(SkillBar)
