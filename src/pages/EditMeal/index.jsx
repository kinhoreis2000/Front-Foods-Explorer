import {Container,Form} from './styles'
import {HeaderAdmin} from '../../components/HeaderAdmin'
import {Footer} from '../../components/Footer'
import {TxtArea} from '../../components/TxtArea'
import {RedButton} from '../../components/RedButton'
import {Input} from '../../components/Input'
import {InputCategory} from '../../components/InputCategory'
import {MealIngredient} from '../../components/MealIngredient'

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiUpload} from 'react-icons/fi'


export function EditMeal() {
  const options = ["Prato Principal", "Sobremesas", "Bebidas"];
const [selectedValue, setSelectedValue] = useState(options[0]);

  const handleSelectionChange = (event) => {
 setSelectedValue(event.target.value);
  };

  function hangleChangeAvatar() {
    
  }
  return(

    <Container>
     <HeaderAdmin/>
       <div className = 'Form'>   
        <Link to ='/'>
        <FiArrowLeft/> Voltar 
        </Link>
        <h1>Editar prato</h1>
        <div>
            <Form >
              <div className = 'infoSide'>
              <div className = 'topInfoSide'>
                <div>
                <p >Imagem do prato</p>
              

                <label   htmlFor='avatar'>
                  <FiUpload/>Selecione a imagem
                  <div>
                    <input id='avatar' type = 'file'></input>
                  </div>
                </label>
                </div>
                <div>

                <p>Nome</p>
                <Input 
                difColor
                placeholder = 'Salada Cezar'
                />
                </div>
                <div>

                <p>Categoria</p>

                <InputCategory 
                placeholder = 'Refeição'
                selectedValue={selectedValue}
                difColor

                onSelectionChange={handleSelectionChange}
                options={options}
                />
                </div>
                
             </div>
             <div className = 'bottomInfoSide'>
              <div>
                  <p>Ingredientes</p>
                  <div className='ingredients bckgrndColor'>
                {/* 
              {
                ingredients.map((ingredient, index) => (
                <MealIngredient
                  key = {String(index)}
                  value={tag}
                  onClick = {() => handleRemoveTag(tag)}
                  ></MealIngredient>)
                  )
                
                
              }
              */}
              
              <MealIngredient 
              value='Pão Naan'
              >
              </MealIngredient>
            
          
      
              <MealIngredient 
                value='Alface'

              >
              </MealIngredient>
      
      
              <MealIngredient 
                value='Alface'

              >
              </MealIngredient>
      
      
              <MealIngredient 
              placeholder='Adicionar'
              isNew
              >
              </MealIngredient>
            
              </div>
              </div>
              <div className ='price'>

                  <p>Preço</p>
                  <Input 
                  placeholder = 'R$ 40,00'
              difColor
                  
                  />
              </div>

                </div>
                </div>
               <div>

                  <p>Descrição</p>
                  <TxtArea 
                  value = 'A Salada César é uma opção refrescante para o verão.'
                  />
                </div>

              <div className = 'saveBtn'>

                 
              <RedButton  className ='excludeBtn' title = 'Excluir prato'></RedButton> 
              <RedButton  title = 'Salvar alterações'></RedButton> 
              </div>

            </Form>
        </div>
 


       </div>


      <Footer/>
    </Container>



  )
 }

