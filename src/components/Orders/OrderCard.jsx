import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Items } from '../../store/Data';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const OrderCard = ({imgRes, nameRes, idPedido, itens}) => {
  var item = null
  var total = 0
  return (
    <div>
      <Accordion sx={{ marginBottom:'1px' }} square>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <img src={imgRes} alt={nameRes} key={idPedido} width='40px' />
        <Typography sx={{ width: '33%', flexShrink: 0 }}>{nameRes}</Typography>
        <Typography sx={{ width: '33%', flexShrink: 0, color: 'text.secondary' }}>Pedido nº {idPedido}</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Stack spacing={0} sx={{ border:'0px' }}>
                {Object.entries(itens).map(([key, value]) => (
                    item = Items.filter((element) => element.id === Number(key))[0],
                    total += item.price*value,
                    <Item key={key} sx={{ borderRadius:'0px', boxShadow:'0 2px 2px -2px gray' }}>
                        <div className='cartItem'>
                            <div className="imgBox">
                                <img src={item.imgSrc} width='30px' alt="" />
                            </div>
                            <div className="itemSection">
                                <h2 className="itemName">{item.name}</h2>
                                <div className="itemQuantity">
                                    <span>x{value}</span>
                                </div>
                            </div>
                            <p className="itemPrice">
                                <span className='dolorSign'>R$</span>
                                <span className="value">{item.price}</span>
                            </p>
                        </div>
                    </Item>
                ))}
            </Stack>
            <Typography sx={{ width: '33%', flexShrink: 0, color: 'text.secondary', marginLeft:'auto', paddingTop:'10px' }}>Total R$ {total}</Typography>
        </AccordionDetails>
      </Accordion>
      </div>
  )
}

export default OrderCard