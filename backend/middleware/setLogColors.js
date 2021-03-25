import colors from 'colors'

// set log color theme
const setLogColors = () => {
  colors.setTheme({
    file:     ['blue', 'bold'],
    start:    'cyan',
    success:  'green',
    fail:     'red',
    warn:     'yellow',
    info:     'grey',
    input:    'grey',
    prompt:   'grey',
    verbose:  'cyan',
    rainbow:  'rainbow'
  })
  console.log('running function: setLogColors'.file)
}

export default setLogColors

