import {Play , Hand} from "phosphor-react"
import {FormProvider, useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import * as zod from 'zod'

import {
    HomeContainer,
    StartCountdown,      
    StopCountdown
} from "./styles"

import { NewCycleForm } from "./components/NewCycleForm"
import { Countdown } from "./components/Countdown"
import { useContext } from "react"
import { CyclesContext } from "../../context/CyclesContext"


const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(5 , 'Informe a tarefa'),
    minutesAmount: zod.number().min(1).max(60)
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home(){
    const {activeCycle , createNewCycle , interruptCurrentCycle} = useContext(CyclesContext)

    const newCycleForm = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues:{
            task:'',
            minutesAmount:0,
        }
    
    })
    
    const { handleSubmit , watch , reset} = newCycleForm

    function handleCreateNewCycle(data: NewCycleFormData ){
        createNewCycle(data)
        reset()

    }
    
    const task = watch('task')
    const buttonDisabled = !task

    return(
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
                <FormProvider {...newCycleForm}>
                    <NewCycleForm/>
                </FormProvider>
                <Countdown/>
                
                {
                    activeCycle ? 
                    (
                        <StopCountdown onClick={interruptCurrentCycle} type="button">
                            <Hand/>Interromper
                        </StopCountdown>
                    )
                    :
                    (
                        <StartCountdown disabled={buttonDisabled} type="submit">
                            <Play/>Começar
                        </StartCountdown>
                    )

                }
            </form>

        </HomeContainer>
    )
}