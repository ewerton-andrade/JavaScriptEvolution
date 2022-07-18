import "./Form.css";
import TextField from "../TextField";
import DropList from "../DropList";
import Btn from "../Button";
import { useState } from "react";

const Form = () => {

const teams = [
    'Coding', 
    'Front-End', 
    'Data Science', 
    'Devops', 
    'UX e Design', 
    'Mobile', 
    'Management and Inovation'
]

    const [name, setName] = useState('')
    const [charge, setCharge] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeams] = useState('')

    const onSaving = (event) => {
        event.preventDefault()
        console.log('The Form was submmited! => ', name, charge, image, team)
    }

    return (
        <section className="Form">
            <form onSubmit={onSaving}>
                <h2>Fill the data to create a worker card</h2>
                <TextField 
                    mandatory={true}  
                    label="Name" 
                    placeholder="Insert your name"
                    val = {name}
                    onAltered= {val => setName(val)}
                />

                <TextField 
                    mandatory={true} 
                    label="Charge" 
                    placeholder="Insert your charge"
                    val = {charge}
                    onAltered = {val => setCharge(val)}
                />
                
                <TextField 
                    label="Image" 
                    placeholder="Insert your image url"
                    val = {image}
                    onAltered = {val => setImage(val)}
                />

                <DropList 
                    mandatory={true} 
                    label='Team' 
                    itens={teams}
                    val={team}
                    onAltered={val => setTeams(val)} 
                />

                <Btn>
                    Create Card
                </Btn>
            </form>
        </section>
    )
}

export default Form