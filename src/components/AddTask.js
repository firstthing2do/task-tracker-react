import { useState } from "react"
const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text){
            alert('Please fill in the Task')
            return
        }

        onAdd({text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)
    }
  return (
    <form className="add-form"  onSubmit={onSubmit}>
        <div className="form-control">
            <label htmlFor="">Task</label>
            <input type="text" name="" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
        <div className="form-control">
            <label htmlFor="">Day & Time</label>
            <input type="text" name="" placeholder="Add Day & Time" value={day} onChange={(e) => setDay(e.target.value)}/>
        </div>
        <div className="form-control-check">
            <label htmlFor="">Set Reminder</label>
            <input type="checkbox"   name="" value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
        </div>

        <input className="btn btn-block" type="submit" value="Save Task" />
      
    </form>
  )
}

export default AddTask
