import { FormEvent, MutableRefObject, useRef } from "react"

interface Props {
    onAddCustomer:
} 

const FormComponent = (props: Props) => {
    
    const titleRef = useRef() as MutableRefObject<HTMLInputElement>
    const descRef = useRef() as MutableRefObject<HTMLTextAreaElement>
    const dueDate = useRef() as MutableRefObject<HTMLInputElement>
    
    const submitFormHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    
        const newCustomer = {
            title: titleRef.current.value,
            description: descRef.current.value,
            dueDate: dueDate.current.value
        }
    
        props.onAddCustomer(newCustomer)
    }

    return (
        <>
        <form onSubmit={submitFormHandler} method="post">
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Titre :</label>
                <input type="text" className="form-control" name="title"required ref={titleRef}/>
            </div>
            <div className="mb-3">
                <label htmlFor="content" className="form-label">Description :</label>
                <textarea className="form-control" name="content" cols={30} rows= {10} required ref={descRef}></textarea>
            </div>
            <div>
                <label htmlFor="deadline">Deadline</label>
                <input className="form-control" type="date" ref={dueDate}/>
            </div>
            <button className="w-10 btn btn-secondary m-2"><i className="bi bi-send"></i> Envoyer</button>
        </form>
        </>
    )
}

export default FormComponent