const searchToggle = (searchValue) => {
  return {
    type: 'SEARCH_ACTION',
    payload: { searchValue } 
  }
}

export default searchToggle;