import React from 'react'
import { Box, Text, Button } from 'grommet'


const UserInfo = (props) => {
  return (
    <Box direction='column'>
      {
        props.pixelsRemaining > 0 ?
          (<Box direction='column' align='center' gap='xsmall'>
            <Text wordBreak='break-word'>{props.name} rajzol!</Text>
            <Box direction='row' gap='xsmall' align='center'>
              <Text>Még</Text>
              <Box
                background={props.color}
                round='full'
                pad='xsmall'>
                {props.pixelsRemaining}
              </Box>
            </Box>
            <Text textAlign='center'>pixelt lehet elhelyezni</Text>
            <Button
              label='Végeztem'
              primary color='neutral-1'
              onClick={props.finishedPainting}
            />
          </Box>
          ) :
          <Text>Elfogytak a pixeleid :(</Text>
      }
    </Box>
  )
}

export default UserInfo
