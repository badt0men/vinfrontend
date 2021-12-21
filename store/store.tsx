import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

const vinStore = create<any>(devtools(persist((set) => ({
  vin: '',
  setVin: (vinRef: string) => set(
    {vin: vinRef}
    ),
}),
{
  name: 'vin',
  getStorage: () => sessionStorage,
}
)))

export default vinStore