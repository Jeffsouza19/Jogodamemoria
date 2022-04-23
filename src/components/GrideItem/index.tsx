import * as C from './styles';
import { GridItemType } from '../../types/GridItemType';
import OnePiece from '../../svgs/One_piece.png';
import { items } from '../../data/items';

type Props = {
    item: GridItemType,
    onClick: () => void
}

export const GridItem = ({item, onClick}: Props) =>{
    return(
        <C.Container showBackground={item.permanentShow || item.show} onClick={onClick}>
           
           {item.permanentShow === false && item.show === false &&
                <C.Icon src={OnePiece} alt="" opacity={.5} />
           }

           {(item.permanentShow || item.show) && item.item !== null &&
                <C.Icon src={items[item.item].icon} alt="" />
           }

        </C.Container>
    )
}