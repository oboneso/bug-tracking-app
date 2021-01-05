console.log('accessing /data/tickets.js file'.file)

const tickets = [
  {
    _id: '1',
    title: 'blank screen on homepage',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A provident nulla corrupti beatae, corporis quia odio maxime quos? Saepe inventore culpa mollitia eos perspiciatis quam sequi tempore omnis est? Officia!',
    open: true,
    closed: false,
    priority: {
      low: false,
      medium: true,
      high: false
    },
    notes: []
  },
  {
    _id: '2',
    title: 'cannot login',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam asperiores tempora perferendis! Omnis sed nesciunt unde vitae, obcaecati incidunt ullam!',
    open: true,
    closed: false,
    priority: {
      low: false,
      medium: false,
      high: true
    },
    notes: []
  }
]

export default tickets