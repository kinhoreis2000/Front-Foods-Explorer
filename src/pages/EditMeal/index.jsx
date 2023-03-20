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
        <Link>
        <FiArrowLeft/> Voltar 
        </Link>
        <h1>Editar prato</h1>
        <div>
            <Form >
              <p >Selecione imagem para alterá-la</p>
             

              <label htmlFor='avatar'>
                <FiUpload/>Selecione a imagem
                <div>
                  <input id='avatar' type = 'file'></input>
                </div>
              </label>
            
              <p>Nome</p>
              <Input 
              
              placeholder = 'Salada Cezar'
              
              />
              <p>Categoria</p>

              <InputCategory 
              placeholder = 'Refeição'
             selectedValue={selectedValue}
              onSelectionChange={handleSelectionChange}
              options={options}
              />

              <p>Ingredientes</p>
              <div className='ingredients'>
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
              <p>Preço</p>
              <Input 
              placeholder = 'R$ 40,00'
              
              />
              <p>Descrição</p>
              <TxtArea 
              placeholder = 'A Salada César é uma opção refrescante para o verão.'
              
              />
          <div className = 'saveBtn'>

              <RedButton  className ='excludeBtn'title = 'Excluir prato'></RedButton> 
              <RedButton  title = 'Salvar alterações'></RedButton> 
          </div>

            </Form>
        </div>
 


       </div>


      <Footer/>
    </Container>



  )
 }

