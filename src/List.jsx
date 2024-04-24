const List = (props) => {
  console.log(props)
  const { items, removeItem, editItem } = props
  return (
    <>
      {items.map(function (item) {
        const { id, title, status } = item
        return (
          <article className='todo-item' key={id}>
            <p className={status == 'complete' ? 'complete' : 'active'}>
              {title}
            </p>

            <div className='btn-container'>
              <button className='edit-btn' onClick={() => editItem(id)}>
                Edit
              </button>
              <button
                className='delete-btn'
                onClick={() => {
                  removeItem(id)
                }}
              >
                Delete
              </button>
            </div>
          </article>
        )
      })}
    </>
  )
}

export default List
