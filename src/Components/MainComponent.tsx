import { PureComponent } from "react";
import FormComponent from "./FormComponent";
import ListItems from "./ListItems";

interface Props {
    
}



class TodoItem extends PureComponent<Props> {
    private static _count = 0;
    private _id: number;
    private _isDone: boolean;

    constructor(private title: string, private description: string, private dueDate: Date, props: Props) {
        super(props)
        this.state = {
            title : "",
            description : "",
            dueDate : "",
        }
        this._id = ++TodoItem._count;
        this._isDone = false;
    }

    render () {
        return (
            <div className="container my-3">
                <div className="row g-3 text-light">
                  <div className="col-6 bg-dark ">
                    <h2>Entrez une tâche</h2>
                    <hr/>
                    <div>
                        <FormComponent/>
                    </div>
                  </div>
                  <div className="col-6 bg-dark">
                    <h2>Todos</h2>
                    <hr/>
                    <div>
                        <ListItems/>
                    </div>
                  </div>
                </div>
            </div>
        )
      }
}

export default TodoItem