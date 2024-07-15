import { create } from 'zustand';
// persist를 통해 새로고침 시 상태 유지
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

type State = {
  open: boolean;
};

type Actions = {
  toggle: () => void;
};

const useDrawer = create<State & Actions>()(
  immer(
    persist(
      (set) => ({
        open: true,
        toggle() {
          set((state) => {
            state.open = !state.open;
          });
        },
      }),
      { name: 'drawerStore' },
    ),
  ),
);

export default useDrawer;
