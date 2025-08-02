import { create } from "zustand";

export type AutoData = {
  mpg: string;
  cylinders: string;
  displacement: string;
  horsepower: string;
  weight: string;
  acceleration: string;
  modelYear: string;
  origin: string;
  carName: string;
}[];

export interface StoreState {
  autoData: AutoData;
  setAutoData: (data: AutoData) => void;
  autoDataLoading: boolean;
  setAutoDataLoading: (loading: boolean) => void;
}

const useDataStore = create<StoreState>()((set) => ({
  autoData: [],
  setAutoData: (data: AutoData) => set({ autoData: data }),
  autoDataLoading: false,
  setAutoDataLoading: (loading: boolean) => set({ autoDataLoading: loading }),
}));

export default useDataStore;
