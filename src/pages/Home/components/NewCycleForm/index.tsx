import {FormContainer, TaskInput, MinutesAmount} from './styles' 

import { CyclesContext } from '../../../../context/CyclesContext'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'



export function NewCycleForm(){
    const {activeCycle } = useContext(CyclesContext)
    const {register} = useFormContext()

    return(
        <FormContainer>
            <label htmlFor="task">Vou trabalhar em</label>
            <TaskInput 
                list="task-suggestions" 
                id="task" 
                disabled={!!activeCycle}
                placeholder="Dê um nome para o seu projeto" 
                {...register('task')}
            />
            <datalist>
                <option value="Projeto1"/>
                <option value="Projeto2"/>
                <option value="Projeto3"/>
                <option value="tua tia"/>
            </datalist>

            <label htmlFor="minutesAmount">durante</label>
            <MinutesAmount
                id="minutesAmount" 
                type="number" 
                placeholder="00" 
                step={5} 
                min={5} 
                max={60}
                disabled={!!activeCycle}
                {...register('minutesAmount', {valueAsNumber: true})}
            />
            <span>minutos</span>
        </FormContainer>)
}
    