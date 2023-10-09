import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';

const CartWidget = () => {
  return (
    <div><Badge badgeContent={2} showzero color="primary">
    <ShoppingCartIcon/>
  </Badge></div>
  )
}

export default CartWidget