import Button from '@mui/material/Button';

function ButtonReference() {
  return (
    <div>
      <div>
        <h3>contained</h3>
        <Button variant="contained" color="primary">
          primary
        </Button>
        <Button variant="contained" color="secondary">
          secondary
        </Button>
        <Button variant="contained" color="error">
          error
        </Button>
        <Button variant="contained" color="warning">
          warning
        </Button>
        <Button variant="contained" color="info">
          info
        </Button>
        <Button variant="contained" color="success">
          success
        </Button>
      </div>
      <div>
        <h3>outlined</h3>
        <Button variant="outlined" color="primary">
          primary
        </Button>
        <Button variant="outlined" color="secondary">
          secondary
        </Button>
        <Button variant="outlined" color="error">
          error
        </Button>
        <Button variant="outlined" color="warning">
          warning
        </Button>
        <Button variant="outlined" color="info">
          info
        </Button>
        <Button variant="outlined" color="success">
          success
        </Button>
      </div>
      <div>
        <h3>text</h3>
        <Button variant="text" color="primary">
          primary
        </Button>
        <Button variant="text" color="secondary">
          secondary
        </Button>
        <Button variant="text" color="error">
          error
        </Button>
        <Button variant="text" color="warning">
          warning
        </Button>
        <Button variant="text" color="info">
          info
        </Button>
        <Button variant="text" color="success">
          success
        </Button>
      </div>
    </div>
  );
}
export default ButtonReference;
