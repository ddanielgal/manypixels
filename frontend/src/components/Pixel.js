import React from 'react'

import { Button, Box } from 'grommet'

const Pixel = (props) => {
  const pixelSize = `${70/props.size}vh`
  return (
    <Button plain
      label={
        <Box
          background={props.color}
          border={{ size: 'xsmall' }}
          width={pixelSize}
          height={pixelSize} />
      }
      onClick={() => props.handleClick(props.x, props.y)} />
  )
}

export default Pixel
