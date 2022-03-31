import React from 'react'
import { makeStyles } from '@mui/styles';

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
        gridTemplateColumns:' 1fr 1fr 1fr 1fr',
        gridTemplateRows: '125px 125px',
        backgroundColor: 'black',
        width: '40vw',
    },
    gridItem: {
        color: 'white',
        height: '125px',
        width: '125px',
        border: '2px solid #4db8ff',
    },
    text: {
        color: 'white'
    }
})



export default function SkillBar() {

    const classes = useStyles()
      
    function allowDrop(event) {
        event.preventDefault();
    }
      
    function drop(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text")
        if (event.target.children.length > 0) {
            console.log('child is here')

            const myNode = event.target
            while (myNode.firstChild) {
                myNode.removeChild(myNode.firstChild)
            }
            const newNode = document.getElementById(data)
            event.target.appendChild(newNode.cloneNode(true))
        }
        else {
            console.log('child is NOT here')
            console.log(event.target.firstChild)
            event.target.appendChild(document.getElementById(data).cloneNode(true))
        }
    }

    return (
        <section className={classes.gridContainer}>
            <div className={classes.grid}>
                <div className={classes.gridItem} onDrop={(event) => drop(event)} onDragOver={(event) => allowDrop(event)}></div>
                <div className={classes.gridItem} onDrop={(event) => drop(event)} onDragOver={(event) => allowDrop(event)}></div>
                <div className={classes.gridItem} onDrop={(event) => drop(event)} onDragOver={(event) => allowDrop(event)}></div>
                <div className={classes.gridItem} onDrop={(event) => drop(event)} onDragOver={(event) => allowDrop(event)}></div>
                <div className={classes.gridItem} onDrop={(event) => drop(event)} onDragOver={(event) => allowDrop(event)}></div>
                <div className={classes.gridItem} onDrop={(event) => drop(event)} onDragOver={(event) => allowDrop(event)}></div>
                <div className={classes.gridItem} onDrop={(event) => drop(event)} onDragOver={(event) => allowDrop(event)}></div>
                <div className={classes.gridItem} onDrop={(event) => drop(event)} onDragOver={(event) => allowDrop(event)}></div>
            </div>
        </section>
    )
}
