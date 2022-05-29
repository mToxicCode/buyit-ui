import {GetterTree, ActionTree, MutationTree} from 'vuex'
import {IItem, IItemInCart} from "~/types/ItemTypes";
import Item from "~/pages/item.vue";

export const state = () => ({
    items: [] as IItemInCart[],
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
    items: state => state.items
}

export const mutations: MutationTree<RootState> = {
    ADD_ITEM: (state, item: IItemInCart) => (state.items.push(item)),
    INCREMENT_ITEM: (state, item: { id: number; }) => (state.items[state.items.findIndex(x => x.itemId == item.id!)].amount++),
    SET_AMOUNT: (state, item: IItemInCart) => (state.items[state.items.findIndex(x => x.itemId == item.itemId!)].amount = item.amount),
    DECREMENT_ITEM: (state, item: { id: number; }) => (state.items[state.items.findIndex(x => x.itemId == item.id!)].amount--),
    DELETE_ITEM: (state, item: { id: number; }) => (state.items = state.items.filter(x => x.itemId != item.id!)),
    SAVE_CART: (state) => (localStorage.cart = JSON.stringify(state.items)),
    LOAD_CART: (state) => (state.items = JSON.parse(localStorage.cart)),
    CLEAR_STORE: (state) => (state.items = [])
}

export const actions: ActionTree<RootState, RootState> = {
    loadCart({commit}) {
        commit('LOAD_CART')
    },
    clearCart({commit}) {
        commit('CLEAR_STORE');
        commit("SAVE_CART");
    },
    changeItemInCart({commit, state}, item: IItemInCart) {
        let itemId = state.items.findIndex(x => x.itemId - item.itemId == 0);
        if (itemId == -1 && item.amount > 0)
        {
            let itemToAdd: IItemInCart = {
                itemId: item.itemId!,
                amount: item.amount
            };
            commit("ADD_ITEM", itemToAdd);
            commit("SAVE_CART");
            return
        }
        if (itemId != -1 && item.amount <= 0){
            commit("DELETE_ITEM", {id: item.itemId});
            commit("SAVE_CART");
            return;
        }
        let itemToChange: IItemInCart = {
            itemId: item.itemId,
            amount: item.amount
        }
        commit("SET_AMOUNT", itemToChange)
        commit("SAVE_CART");
    },
    addItemToCart({commit, state}, id: number) {
        let itemId = state.items.findIndex(x => x.itemId - id == 0);
        if (itemId != -1) {
            commit("INCREMENT_ITEM", {id: id})
            commit("SAVE_CART");
            return;
        }

        let itemToAdd: IItemInCart = {
            itemId: id!,
            amount: 1
        };
        commit("ADD_ITEM", itemToAdd);
        commit("SAVE_CART");
    },
    deleteItemFromCart({commit, state}, id: number) {
        let itemId = state.items.findIndex(x => x.itemId == id);
        if (state.items.find(x => x.itemId == id)?.amount == 1) {
            commit("DELETE_ITEM", {id: id});
            commit("SAVE_CART");
            return;
        }
        if (itemId == -1)
            return;
        commit("DECREMENT_ITEM", {id: id})
        commit("SAVE_CART");
    }
}
