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
  favoritesList: { index: number; attributes: any }[];
  setFavoritesList: (favorites: { index: number; attributes: any }[]) => void;
}

const useDataStore = create<StoreState>()((set) => ({
  autoData: [],
  setAutoData: (data: AutoData) => set({ autoData: data }),
  autoDataLoading: false,
  setAutoDataLoading: (loading: boolean) => set({ autoDataLoading: loading }),
  favoritesList: [],
  setFavoritesList: (favorites: { index: number; attributes: any }[]) =>
    set({ favoritesList: favorites }),
}));

export default useDataStore;
