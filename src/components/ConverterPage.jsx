import React from 'react'
import { useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import '../css/ConverterPage.scss'
import ConvertL2U from '../convert.js'
function ConverterPage() {

  // const loc = useLocation()

  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

  const classes = useStyles();
  const [value, setValue] = React.useState("");
  const [result, setResult] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value)
  };

  const handleClick = () => {
    setResult(ConvertL2U(value))
  }

  return (
    <div className="converterPage">
      <h4>Converter page</h4>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue={value}
          onChange={handleChange}
          variant="outlined"
        />
      </form>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Латиница в арабицу
        </Button>
      <p>Result is: {result}</p>

    </div>
  )
}

export default ConverterPage
