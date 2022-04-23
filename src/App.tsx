import { useEffect, useState } from 'react';
import * as C from './app.styles';

import logoImage from './assets/devmemory_logo.png';
import restartIcon from './svgs/restart.svg'

import { Button } from './components/Button';
import { InfoItem } from './components/InfoItem';
import { GridItem } from './components/GrideItem';

import { GridItemType } from './types/GridItemType';
import { items } from './data/items';
import { formatTimeElapsed } from './helpers/formatTimeElapsed';

const App = () => {

  const[playing, setPlaying] = useState<boolean>(false);
  const[timeElapsed, setTimeElapsed] = useState<number>(0);
  const[moveCount, setMoveCount] = useState<number>(0);
  const[showCount, setShowCount] = useState<number>(0);
  const[grideItems, setGrideItems] = useState<GridItemType[]>([]);
  const[finalMsg, setFinalMsg] = useState<string>('');

  // Iniciando o Game
  useEffect(()=> reseteAndCreate(),[]);


  // Verificando Time
  useEffect(() =>{
    const timer = setInterval(()=> {
      if(playing){
        setTimeElapsed(timeElapsed + 1);
      }
    }, 1000);
    return () =>clearInterval(timer);
  }, [playing, timeElapsed]);

  // Verificando os Movimentos
  useEffect(()=>{
    if(showCount === 2){
      let opened = grideItems.filter(item => item.show === true);
      if( opened.length === 2){

        if(opened[0].item === opened[1].item){
          let tmpGrid = [...grideItems];
          for (let i in tmpGrid){
            if(tmpGrid[i].show){
              tmpGrid[i].permanentShow = true;
              tmpGrid[i].show = false;

            }
          }
          setGrideItems(tmpGrid);
          setShowCount(0);
        }else{
          setTimeout(()=> {
            let tmpGrid = [...grideItems];
            for (let i in tmpGrid){
              if(tmpGrid[i].show){
                tmpGrid[i].show = false;
              }
            }
            setGrideItems(tmpGrid);
            setShowCount(0);
          }, 1000)
        }

        setMoveCount(moveCount => moveCount + 1);
      }
    }
  },[showCount, grideItems])

  // Verifica Fim do Jogo
  useEffect(()=>{
    if(moveCount > 0 && grideItems.every(item =>item.permanentShow === true)){
      setPlaying(false);
      setFinalMsg('Parabéns!! Voce completou o jogo da memoria');
    }
  },[moveCount, grideItems])

  // Função que roda o Game
  const reseteAndCreate = () => {
    setTimeElapsed(0);
    setMoveCount(0);
    setShowCount(0);
    setFinalMsg('');
    
    let tmpgrid: GridItemType[]= [];
    for(let i = 0; i < (items.length * 2); i++) tmpgrid.push({
        item: null, show:false, permanentShow:false 
    });
   

    for(let w = 0; w < 2; w++){
      for(let i = 0; i < items.length; i++){
        let pos = -1;
        
        while(pos < 0 || tmpgrid[pos].item !== null){
          pos = Math.floor(Math.random() * (items.length * 2));
        }
        tmpgrid[pos].item = i;
      }
    }
    
    setGrideItems(tmpgrid);

    setPlaying(true);
  }

  // Função para os Cliques
  const handleClickitem = (index: number) => {
    if(playing && index !== null && showCount < 2){
      let tmpGrid = [...grideItems];

      if(tmpGrid[index].permanentShow === false && tmpGrid[index].show === false){
        tmpGrid[index].show = true;
        setShowCount(showCount +1);
      }

      setGrideItems(tmpGrid);
    }
  }

  return(
    <>
      <C.Container>
        <C.Info>
          <C.LogoLink>
            <img src={logoImage} width="200" alt="" />
          </C.LogoLink>
           
          <C.InfoArea>
            <InfoItem label='tempo' value={formatTimeElapsed(timeElapsed)} />
            <InfoItem label='Movimentos' value={moveCount.toString()} />
            <Button label='Reiniciar' icon={restartIcon} onClick={reseteAndCreate} />
          </C.InfoArea>


        </C.Info>
       
        <C.GridArea>
          <C.Grid>
            {grideItems.map((item, index)=>(
              <GridItem key={index} item={item} onClick={()=>handleClickitem(index)} />
            ))}
          </C.Grid>
        </C.GridArea>
      </C.Container>
      
        {finalMsg && 
         <C.Msgfinal>
           {finalMsg}
         </C.Msgfinal>
        }
     
      
     </> 
  );
}

export default App;