import "./Form.css";
import TextField from "../TextField";
import DropList from "../DropList";
import Btn from "../Button";

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

    return (
        <section className="Form">
            <form>
                <h2>Fill the data to create a worker card</h2>
                <TextField label="Name" placeholder="Insert your name" />
                <TextField label="Charge" placeholder="Insert your charge" />
                <TextField label="Image" placeholder="Insert your image url" />
                <DropList label='Team' itens={teams}/>
                <Btn>
                    Create Card
                </Btn>
            </form>
        </section>
    )
}

export default Form