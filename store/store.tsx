import create from 'zustand'


const vinStore = create<any>(set => ({
  vin: "",
  setVin: (vinRef: string) => set({vin: vinRef}),
}))

export default vinStore