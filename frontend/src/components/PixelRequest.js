import React from 'react'
import { Box, Form, FormField, TextInput, Button, Layer } from 'grommet'


const PixelRequestModal = (props) => {
  const [open, setOpen] = React.useState(false)
  const handleSubmit = ({ value }) => {
    props.newTicket(value.name, value.tickets)
    setOpen(false)
  }
  const onClose = () => setOpen(false)
  return (
    <Box>
      {props.displayButton && <Button fill='horizontal'
        label='Kérek még pixeleket!'
        onClick={() => setOpen(true)}
        color='status-ok' />}
      {open && <Layer
        onEsc={onClose}
        onClickOutside={onClose}>
        <Form onSubmit={handleSubmit}>
          <Box justify='center' pad='small'>
            <FormField required
              name='name'
              component={TextInput}
              placeholder='Becses neved' />
            <FormField required
              name='tickets'
              label='Jegyek'
              component={TextInput}
              value={1} />
            <Button type='submit' primary color='neutral-1'
              label='Kérem a pixeleim!' />
          </Box>
        </Form>
      </Layer>}
    </Box>)
}

export default PixelRequestModal
