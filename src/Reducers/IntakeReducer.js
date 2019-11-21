const types = [
      { id:101, name: '--------------------'},
      { id:102, name: 'Starter'},
      { id:103, name: 'Grower'},
 ]
 const batches = [
      { id:90, name: '--------------------'},
      { id:91, name: 'Batch 1'},
      { id:92, name: 'Batch 2'},
 ]


const IntakeReducer = (default_state = { types : types, batches: batches  } , Action) => {

  return { types : types , batches: batches}
}

export default IntakeReducer ;
