import { DateBar } from './components/DateBar'
import { BalanceItem } from './components/BalanceItem'
import { RecordDaly } from './components/RecordDaly'
import { CustomButton } from './components/CustomButton'
import { PortalComponent } from './portals'
import { Modal } from './components/Modal'
import { FormAddRecord } from './components/FormAddRecord'
//context
import { useContext } from 'react'
import { Transaccions } from '../src/Context/'
//Helpers
import { toggleModal } from './Helpers'
//Hooks
import { useGetDataForMonth } from './Hooks/useGetDataForMonth'
import { useBalance } from './Hooks/useBalance'


function App() {

  const [state, dispatch] = useContext(Transaccions);
  const { loading, error} = useGetDataForMonth(dispatch, state);
  const {balance, income, expense} = useBalance(state.dataMonth);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        backgroundColor: "#DFDFDF",
        justifyContent:'space-arount',
        height: "100vh",
      }}
    >
      <DateBar state={state} dispatch={dispatch} />
      
      <BalanceItem
        balance={balance}
        income={income}
        expense={expense}
        state={state}
      />

      <RecordDaly records={state.dataMonth} loading={loading} error={error} />

      <CustomButton text={"Agregar Movimiento"} typeButton='static' action={() => toggleModal(dispatch, true)}/>

      {state.modal && (
        <PortalComponent>
          <Modal> 
             <FormAddRecord state={state} dispatch={dispatch}/>
          </Modal>
        </PortalComponent>
      )}
      
    </div>
  );
}

export default App
