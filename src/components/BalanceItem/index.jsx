import {BoxAcordeon} from '../BoxAcordeon'
import { ItemAnalitics } from '../ItemAnalitics';

function BalanceItem({balance, income, expense , state}) {
  return (
    <>
      <section class='m-auto  col col-9 col-sm-8 col-md-5 col-xl-3 col-xxl-3 d-flex flex-column rounded-4 align-items-center p-2 border-1 shadow-sm bg-light'>

        <section class='d-flex flex-column align-items-center p-1'>
            <span class='fw-semibold fs-7'>Balance del mes</span>
            <span class='fw-bold fs-4 text-primary'>${balance}</span>
        </section>

        <section class='d-flex flex col-11 justify-content-around align-items-center'>

        <div class='d-flex flex-column align-items-center text-positive'>
          <span class='fw-semibold  fs-7'>income</span>
          <span class='fw-bold fs-5'>+ {income.toFixed(2)}</span>
        </div>

        <hr class='vertical-line'/>

        <div class='d-flex flex-column align-items-center text-negative'>
          <span class='fw-semibold  fs-7'>Gastos</span>
          <span class='fw-bold fs-5'>- {expense.toFixed(2)}</span>
        </div>

        </section>

        <section className='col-12 d-flex bg-light'>
            <BoxAcordeon text={'Ver analíticas'} idCollapse={'collapseAnalitycs'}>
                <ItemAnalitics balance={balance} income={income} expense={expense} state={state}/>
            </BoxAcordeon>
        </section>

      </section>
    </>
  );
}

export { BalanceItem };
