import { useState } from 'react'

const AddCourse = ({ onAdd }) => {
  const [id, setId] = useState('')
  const [text, setText] = useState('')
  const [count, setCount] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert('Please add a course')
      return
    }

    onAdd({ text, count })

    setText('')
    setCount('')
    setId('')
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Course</label>
        <input
          type='text'
          placeholder='Add Course'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Count & Time</label>
        <input
          type='text'
          placeholder='Add Count'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
      </div>

      <div className='form-control'>
        <label>Count & Time</label>
        <input
          type='text'
          placeholder='Add id'
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </div>
    

      <input type='submit' value='Save Course' className='btn btn-block' />
    </form>
  )
}

export default AddCourse
