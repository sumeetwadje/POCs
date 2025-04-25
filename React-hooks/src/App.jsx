import React from 'react'
import Counter from '../hooks/useState/Counter'
import FetchData from '../hooks/useEffect/fetchData'
import ChangeBg from '../hooks/useLayoutEffect/ChangeBg'
import Goverment from '../hooks/useContext/propsdrilling/Goverment'
import Reducer from '../hooks/useReducer/Reducer'
import Cart from '../hooks/useMemo/Cart'
// import Index from '../hooks/useCallback/Index'
import Transition from '../hooks/useTransition/Transition'
import Ref from '../hooks/useRef/Ref'
import UseId from '../hooks/useId/UseId'
import Index from '../hooks/customHook/Index'


const App = () => {

  return (
    <div>
      {/* <Counter /> */}
      {/* useEffect */}
      {/* <FetchData /> */}
      {/* uselayouteffect code */}
      {/* <ChangeBg /> */}
      {/* Props Drilling  */}
      {/* <Goverment></Goverment> */}
      {/* use reducer  */}
      {/* <Reducer></Reducer> */}
      {/* use Memo  */}
      {/* <Cart></Cart> */}
      {/* use Callback  */}
      {/* <Index /> */}
      {/* use transition hook  */}
      {/* <Transition /> */}
      {/* use ref hook  */}
      {/* <Ref></Ref> */}
      {/* use ID hook  */}
      {/* <UseId></UseId> */}
      <Index></Index>
    </div>
  )
}

export default App
